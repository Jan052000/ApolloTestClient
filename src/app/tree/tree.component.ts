import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { CustomQueryService } from '../CustomQueryService/custom-query.service';
import * as GraphQLClasses from './../../../graphql';

interface TreeNode {
  spells?: GraphQLClasses.Spell[];
  name: string;
  children?: TreeNode[];
  data?: any;
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {

  private listOfBooks: Array<string> = [];
  public selectedNode: any;
  public dataSource = new MatTreeNestedDataSource<TreeNode>();
  public treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  
  constructor(public queryService: CustomQueryService) {
  }

  ngOnInit(): void {
    this.queryService.getListOfBooks().subscribe(res => {
      console.log(res);
      res.data.GetTables.forEach((book: string) => {
        this.listOfBooks.push(book);
      });
      this.queryService.getDataForBooks(res.data.GetTables)?.subscribe((result) => {
        console.log(result.data);
        let data: TreeNode[] = []
        this.listOfBooks.forEach(book => {
          data.push(this.generateNode(result.data[book], book));
        });
        this.dataSource.data = data;
        console.log(this.dataSource.data);
      });
    });
  }

  /**
   * generates a node of book containing nodes of spells
   * @param spellList Object of book to create node for
   * @param name name to be displayed in node
   * @returns filled node
   */
  generateNode(spellList: GraphQLClasses.Spells, name: string): TreeNode{
    let test: TreeNode = {
      name: name,
      children: []
    };
    spellList.spell.forEach(spell => test.children!.push({
      name: spell.name
    }));
    return test;
  }
  
  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  // click() {
  //   this.queryService.getListOfBooks().subscribe(res => {
  //     console.log(res);
  //     res.data.GetTables.forEach((book: string) => {
  //       this.listOfBooks.push(book);
  //     });
  //     this.queryService.getDataForBooks(res.data.GetTables)?.subscribe((result: GraphQLClasses.SpellList[]) => {
  //       console.log(result);
  //     });
  //   });

  // }

  select(node: TreeNode){
    console.log(node);
    this.selectedNode = node;
  }
}
