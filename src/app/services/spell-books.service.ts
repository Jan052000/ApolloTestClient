import { Injectable } from '@angular/core';
import { IDataService } from '../Classes/idata-service';
import { TreeNode } from '../Classes/tree-node';
import * as GraphQLClasses from '../../../graphql';
import * as QueryStrings from '../Classes/QueryStrings';
import { CustomQueryService } from '../CustomQueryService/custom-query.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpellBooksService implements IDataService {
  /**The data to be emitted */
  public DataObservable: Subject<TreeNode[]> = new Subject<TreeNode[]>();
  /**Internal list of book names */
  private listOfBooks: Array<string> = [];
  /**Subject for getting list of books */
  private listOfBooksSubject: Subject<any> = new Subject<any>();
  /**Subject to get data in treeformat */
  private DataObjectSubject: Subject<any> = new Subject<any>();
  /**Data in tree format */
  private DataObject: TreeNode[] = [];

  constructor(public queryService: CustomQueryService) {
    this.listOfBooksSubject.subscribe((res) => {
      this.listOfBooks = res.data.GetTables;
      let query = QueryStrings.SpellBooks.GenerateQueryFromBooks(this.listOfBooks);
    queryService.SendPostRequest({ query: query, operationName: 'Query', variables: {} }, this.DataObjectSubject);
    });
    this.DataObjectSubject.subscribe((result) => {
      this.DataObject = [];
      this.listOfBooks.forEach((book) => {
        this.DataObject.push(this.generateNode(result.data[book], book));
      });
      this.DataObservable.next(this.DataObject);
    });
    this.UpdateValues();
  }

  /**
   * Updates values from graphql server
   */
  UpdateValues() {
    this.queryService.SendPostRequest(
      { query: QueryStrings.SpellBooks.GetTables, operationName: 'Test', variables: {} },
      this.listOfBooksSubject
    );
  }

  /**
   * generates a node of book containing nodes of spells
   * @param spellList Object of book to create node for
   * @param name name to be displayed in node
   * @returns filled node
   */
  private generateNode(
    spellList: GraphQLClasses.Spells,
    name: string
  ): TreeNode {
    let test: TreeNode = {
      name: name,
      children: [],
    };
    spellList.spell.forEach((spell) =>
      test.children!.push({
        name: spell.name,
        parent: test,
        data: spell,
      })
    );
    return test;
  }

  /**
   * Mutates a spell oresponding to the object described in input
   * @param input data to be passed as argument to the mutation query
   * @param subject subject to emit the data to
   */
  public MutateValue(input: GraphQLClasses.MutationInputData, subject: Subject<GraphQLClasses.Response>) {
    this.queryService.SendPostRequest({query: QueryStrings.SpellBooks.GenerateMutationString(input), operationName: 'Mutation', variables: {}}, subject);
  }
}
