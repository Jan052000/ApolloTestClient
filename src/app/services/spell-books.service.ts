import { Injectable } from '@angular/core';
import { IDataService } from '../Classes/idata-service';
import { TreeNode } from '../Classes/tree-node';
import { MutationInputData, Spells} from '../../../graphql';
import * as QueryStrings from '../Classes/QueryStrings';
import { CustomQueryService } from '../CustomQueryService/custom-query.service';
import { Subject } from 'rxjs';
import { SpellMutationResponse } from '../Classes/CustomQueryClasses';

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
  readOnlyKeys: String[] = ['source'];

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
    spellList: Spells,
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
  public MutateValue<SpellMutationResponse>(input: MutationInputData, subject: Subject<SpellMutationResponse>) {
    this.queryService.SendPostRequest({query: QueryStrings.SpellBooks.GenerateMutationString(input), operationName: 'Mutation', variables: {}}, subject);
  }

  public MutationChangeLocation(input: any): string {
    let response = input as SpellMutationResponse
    return 'Spells' + response.data.editSpell.data?.source + '/' + response.data.editSpell.data?.name
  }

  public SelectionChangeLocation(input: TreeNode): string {
    return 'Spells' + input.data.source + '/' + input.data.name
  }

  public MutationData(input: any) {
    return {
      data: {},
      spellName: input.name,
      bookName: input.parent?.name
    }
  }
}
