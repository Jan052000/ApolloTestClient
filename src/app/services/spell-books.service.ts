import { Injectable } from '@angular/core';
import { IDataService } from '../Classes/idata-service';
import { TreeNode } from '../Classes/tree-node';
import * as GraphQLClasses from '../../../graphql';
import { CustomQueryService } from '../CustomQueryService/custom-query.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellBooksService implements IDataService {

  /**The data to be emitted */
  public DataObservable: Subject<TreeNode[]> = new Subject<TreeNode[]>();
  /**Internal list of book names */
  private listOfBooks: Array<string> = [];
  /**Data in tree format */
  private DataObject: TreeNode[] = [];

  constructor(public queryService: CustomQueryService) {
    this.queryService.getListOfBooks().subscribe(res => {
      //console.log(res);
      res.data.GetTables.forEach((book: string) => {
        this.listOfBooks.push(book);
      });
      this.queryService.getDataForBooks(res.data.GetTables)?.subscribe((result) => {
        //console.log(result.data);
        this.listOfBooks.forEach(book => {
          this.DataObject.push(this.generateNode(result.data[book], book));
        });
        //console.log(this.dataSource.data);
        this.DataObservable.next(this.DataObject);
      });
    });
   }
  
  /**
   * generates a node of book containing nodes of spells
   * @param spellList Object of book to create node for
   * @param name name to be displayed in node
   * @returns filled node
   */
  private generateNode(spellList: GraphQLClasses.Spells, name: string): TreeNode{
    let test: TreeNode = {
      name: name,
      children: []
    };
    spellList.spell.forEach(spell => test.children!.push({
      name: spell.name,
      parent: test,
      data: spell
    }));
    return test;
  }
}
