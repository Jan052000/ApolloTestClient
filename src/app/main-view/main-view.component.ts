import { Component, OnInit } from '@angular/core';
import { TreeNode } from '../Classes/tree-node';
import { CustomQueryService } from '../CustomQueryService/custom-query.service';
import { FamilyService } from '../services/family.service';
import { SpellBooksService } from '../services/spell-books.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  /**Service for spell book data */
  public SpellBookService?: SpellBooksService;
  /**Selected node from tree */
  public treeSelectedNode!: TreeNode;

  constructor(public customQueryService: CustomQueryService, public familyService: FamilyService) {
    this.SpellBookService = new SpellBooksService(customQueryService);
   }

  ngOnInit(): void {
  }

  /**
   * Sets the selected node for the data card
   * @param node selected node
   */
  public setCardData(node: TreeNode){
    this.treeSelectedNode = node;
  }

}
