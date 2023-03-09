import { NestedTreeControl } from '@angular/cdk/tree';
import { Location } from '@angular/common';
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
  private initialized = false;
  
  constructor(private location: Location) {}

  ngOnInit(): void {
    if(this.dataService == undefined || this.dataService == null){
      throw(new Error('Data service is undefined!'));
    }
    this.dataService.DataObservable.subscribe(data => {
      this.dataSource.data = data;
      if (this.initialized) {
        console.log(this.location.path().replace('/', ' ').trim().replace('%20', ' ').split('/'))
        let path = this.location.path().replace('/', ' ').trim().replace('%20', ' ').split('/');
        let bookNode = this.dataSource.data.find((book) => book.name == path[0]);
        if (bookNode == undefined) return;
        let spellNode = bookNode?.children?.find((node) => node.name == path[1]);
        if (spellNode == undefined || spellNode.parent == undefined) return;
        this.treeControl.expand((<TreeNode>spellNode.parent));
        this.selectedNode = spellNode;
        this.onSelectionChanged.next(this.selectedNode);
      }
    });
    this.initialized = true;
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
  select(node: TreeNode, internalURLChange: boolean){
    if(this.selectedNode == node){
      this.selectedNode = undefined;
      this.location.replaceState('');
    }else{
      this.selectedNode = node;
      if(internalURLChange){
        if(node.parent == undefined){
          this.location.replaceState(node.name);
        }else{
          this.location.replaceState('Spells' + node.data.source + '/' + node.data.name);
        }
      }
    }
    this.onSelectionChanged.next(node);
  }
}
