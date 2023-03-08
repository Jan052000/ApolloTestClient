import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { IDataService } from '../Classes/idata-service';
import { TreeNode } from '../Classes/tree-node';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {

  /**Service to pull the data from */
  @Input() dataService?: IDataService;
  /**Event for selection changed */
  @Output() onSelectionChanged = new EventEmitter<TreeNode>();
  /**Selected node */
  public selectedNode?: TreeNode;
  /**DataSource for the tree */
  public dataSource = new MatTreeNestedDataSource<TreeNode>();
  /**TreeControl for the tree */
  public treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  
  constructor() {
  }

  ngOnInit(): void {
    if(this.dataService == undefined || this.dataService == null){
      throw(new Error('Data service is undefined!'));
    }
    this.dataService.DataObservable.subscribe(data => {
      this.dataSource.data = data
    });
  }

  /**
   * Checks if the node has children
   * @param _ auto filled index
   * @param node node to check
   * @returns if the node has children
   */
  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  /**
   * Selects a node
   * @param node node to be selected
   */
  select(node: TreeNode){
    if(this.selectedNode == node){
      this.selectedNode = undefined;
    }else{
      // console.log(node);
      this.selectedNode = node;
    }
    this.onSelectionChanged.next(node);
  }
}
