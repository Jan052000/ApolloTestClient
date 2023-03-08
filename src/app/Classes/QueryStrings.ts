import * as SpellClasses from '../../../graphql';

/**
 * Strings and functions that represent queries for the test apollo server spell book section
 */
export namespace SpellBooks {

  /**
   * Graphql query string for getting all spell books
   */
  export const GetTables = `
    query Test{
      GetTables
    }
  `;

  /**
   * generates a query string to get data from multiple books
   * @param listOfBooks list of books to query
   * @returns query string
   */
  export function GenerateQueryFromBooks(listOfBooks: string[]): string {
    let query = `query Query {\n`;
    listOfBooks.forEach((book) => {
      query += '\t' + book.replace('"', '') + ` {
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
      `;
    });
    query = query.substring(0, query.length - 1);
    query += `\n}`;
    return query;
  }

  /**
   * Generates a query string for mutating a spell
   * @param input data to be passed as an argument in mutation query
   * @returns query string
   */
  export function GenerateMutationString(input: SpellClasses.MutationInputData): string {
    return `mutation Mutation{
        editSpell(data: {
          `+ stringifyObject(input) + `
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
    `;
  }
}

/**
 * Stringifies an object
 * @param input object to be stringified
 * @returns stringified object
 */
export function stringifyObject(input: any, string: string = '', tabs: number = 0): string {
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
              string += stringifyObject(element, '', tabs);
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
        string += stringifyObject(input[key], '', tabs + 1);
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
