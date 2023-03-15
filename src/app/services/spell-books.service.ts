import { Injectable } from '@angular/core';
import { IDataService } from '../Classes/idata-service';
import { TreeNode } from '../Classes/tree-node';
import { MutationInputData, Spells} from '../../../graphql';
import * as QueryStrings from '../Classes/QueryStrings';
import { CustomQueryService } from '../CustomQueryService/custom-query.service';
import { Subject } from 'rxjs';
import { SpellMutationResponse } from '../Classes/CustomQueryClasses';
import { FormControl } from '@angular/forms';
import { DataNode } from '../Classes/data-node';

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

  public EditButtonPressed(input: TreeNode, controls: { node: DataNode; control: FormControl; }[], callBack: Subject<any>): void {
    let mutationData: any = {};
      mutationData.spellName = input.name;
      mutationData.bookName = input.parent?.name;
      controls.forEach((obj) => {
        if (!obj.control.dirty) return;
        if (obj.node.dataPath == undefined) return;
        let inputref = mutationData;
        let reference: any = input;
        for (let i = 0; i < obj.node.dataPath.length - 1; i++) {
          if(inputref[obj.node.dataPath[i]] == undefined)
            inputref[obj.node.dataPath[i]] = reference[obj.node.dataPath[i]].constructor();
          reference = reference[obj.node.dataPath[i]];
          inputref = inputref[obj.node.dataPath[i]];
        }
        let lastKey = obj.node.dataPath[obj.node.dataPath.length - 1];
        if (this.readOnlyKeys.find(roKey => roKey == lastKey) == undefined) {
          let type = reference[lastKey];
          inputref[lastKey] = type.constructor(obj.control.value);
          obj.node.value = obj.control.value;
        }else{
          obj.control.setValue(obj.node.value, {
            emitEvent: false,
            onlySelf: true
          });
        }
      });
      if(Object.keys(mutationData.data).length == 0)
        return;
      this.MutateValue(mutationData, callBack);
  }
}
