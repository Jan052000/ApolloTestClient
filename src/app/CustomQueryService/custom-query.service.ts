import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CustomQueryService {

  private configURI = "http://localhost:4000";
  private query: any;//string | undefined;

  constructor(private httpClient: HttpClient) { }

  getListOfBooks(): Observable<any>{
    this.query = `
      query Test{
        GetTables
      }
    `;
    // return this.httpClient.post(this.configURI, JSON.stringify({query: "query Test{\r\n  GetTables\r\n}", operationName: 'Test', variables: {}}), httpOptions);

    return this.httpClient.post(this.configURI, JSON.stringify({query: this.query, operationName: 'Test', variables: {}}), httpOptions);

    // return this.httpClient.post(this.configURI, JSON.stringify({query: buildSchema(`
    //   query GetTables {
    //     GetTables
    //   }
    // `), operationName: 'QueryAll', variables: {}}), httpOptions);
  }

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
