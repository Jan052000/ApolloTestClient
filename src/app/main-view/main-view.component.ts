import { Component, OnInit } from '@angular/core';
import { TreeNode } from '../Classes/tree-node';
import { CustomQueryService } from '../CustomQueryService/custom-query.service';
import { SpellBooksService } from '../services/spell-books.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  /**Service for spell book data */
  public SpellBookService?: SpellBooksService;
  public treeSelectedNode!: TreeNode;

  constructor(public customQueryService: CustomQueryService) {
    this.SpellBookService = new SpellBooksService(customQueryService);
   }

  ngOnInit(): void {
  }

  /**
   * Sets the selected node for the data card
   * @param node selected node
   */
  public setCardData(node: TreeNode){
    // console.log('test', node);
    this.treeSelectedNode = node;
  }

}
