import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import * as SpellClasses from './../../../graphql';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CustomQueryService {

  /**URL to Apollo server */
  private configURI = "http://localhost:4000";

  constructor(private httpClient: HttpClient) { }

  /**
   * Gets a lit of available books
   * @returns Observable list containing the names of all boos on the server
   */
  getListOfBooks(): Observable<any>{
    let query = `
      query Test{
        GetTables
      }
    `;
    return this.httpClient.post(this.configURI, JSON.stringify({query: query, operationName: 'Test', variables: {}}), httpOptions);
  }

  /**
   * Gets data for a list of books
   * @param books List of books to query the server for
   * @returns Object containing the content of the given list of books
   */
  getDataForBooks(books: Array<string> | undefined = undefined): Observable<any> | null{
    let query = `query Query {\n`;
    if(books === undefined){
      return null;
    }
    books.forEach(book => {
      query += "\t" + book.replace('"', '') +
      `{
        spell {
          name,
          entries,
          source,
          page,
          level,
          school,
          range {
            type,
            distance {
              amount,
              type
            }
          },
          duration {
            type
          },
          classes {
            fromClassList {
              name
            },
            fromClassListVariant {
              name
            }
          },
          time {
            Int,
            unit
          }
        }
      },
      `
    });
    query = query.substring(0, query.length - 1);
    query += `\n}`;
    return this.httpClient.post(this.configURI, JSON.stringify({query: query, operationName: 'Query', variables: {}}), httpOptions);
  }

  private stringifyObject(input: any, string: string = '', tabs: number = 0): string {
    Object.keys(input).forEach(key => {
        if (typeof (input[key]) == 'object') {
            if (input[key].constructor.name == 'Array') {
                for (let i = 0; i < tabs; i++) {
                    string += '\t';
                }
                string += key + ': [\n';
                input[key].forEach((element: any) => {
                    for (let i = 0; i < tabs; i++) {
                        string += '\t';
                    }
                    switch (element.constructor.name) {
                      case 'String':
                          string += '"' + element + '",\n';
                          break;
                      case 'Object':
                          for (let i = 0; i < tabs; i++) {
                              string += '\t';
                          }
                          string += '{\n';
                          for (let i = 0; i < tabs + 1; i++) {
                              string += '\t';
                          }
                          string += this.stringifyObject(element, '', tabs);
                          for (let i = 0; i < tabs; i++) {
                              string += '\t';
                          }
                          string += '}\n';
                          break;
                      default:
                          string += element + ',\n';
                  }
                });
                for (let i = 0; i < tabs; i++) {
                    string += '\t';
                }
                string += '],\n';
            } else {
                for (let i = 0; i < tabs; i++) {
                    string += '\t';
                }
                string += key + ': {\n';
                for (let i = 0; i < tabs; i++) {
                    string += '\t';
                }
                string += this.stringifyObject(input[key], '', tabs + 1);
                for (let i = 0; i < tabs; i++) {
                    string += '\t';
                }
                string += '}\n';
            }
        } else {
            for (let i = 0; i < tabs; i++) {
                string += '\t';
            }
            if (typeof (input[key]) == 'string') {
                string += key + ': "' + input[key] + '",\n';
            } else {
                string += key + ': ' + input[key] + ',\n';
            }
        }
    });
    return string;
}

  editBook(input: SpellClasses.MutationInputData): Observable<Response>{
    let query = `mutation Mutation{
      editSpell(data: {
        `+ this.stringifyObject(input) +`
      }) {
        success,
        message,
        data {
          name,
          entries,
          source,
          page,
          level,
          school,
          range {
            type,
            distance {
              amount,
              type
            }
          },
          duration {
            type
          },
          classes {
            fromClassList {
              name
            },
            fromClassListVariant {
              name
            }
          },
          time {
            Int,
            unit
          }
        }
      }
    }
    `
    return (<Observable<Response>>this.httpClient.post(this.configURI, JSON.stringify({operationName: 'Mutation', query: query, variables: {}}), httpOptions));
  }

  getSchema(): Observable<any>{
    let query = `
    query IntrospectionQuery {
      __schema {
        
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          description
          
          locations
          args(includeDeprecated: true) {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      description
      
      fields(includeDeprecated: true) {
        name
        description
        args(includeDeprecated: true) {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields(includeDeprecated: true) {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        description
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      description
      type { ...TypeRef }
      defaultValue
      isDeprecated
      deprecationReason
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  return this.httpClient.post(this.configURI, JSON.stringify({query: query, operationName: 'IntrospectionQuery', variables: {}}), httpOptions);
  }
}
