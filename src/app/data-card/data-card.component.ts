import { Component, Input, OnInit } from '@angular/core';
import { DataNode } from '../Classes/data-node';
import { TreeNode } from '../Classes/tree-node';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss'],
})
export class DataCardComponent implements OnInit{
  /**Content to fill the card with */
  private _cardContent?: TreeNode;
  /**Content to fill the card with */
  @Input() set cardContent(data: TreeNode){
    this._cardContent = data;
    if(this.cardContent.data != undefined && this.cardContent.data != null){
      this.cardData = this.parseObjectToNode(this.cardContent.name, this.cardContent.data, true);
    }else{
      this.cardData = {
        displayText: 'Spells',
        children: [],
        isName: true
      }
      this.cardContent.children?.forEach(child => this.cardData.children.push({
        displayText: 'Name',
        value: child.name,
        children: []
      }))
    }
    console.log(this.cardData);
    this.readonly = true;
  }
  get cardContent(): TreeNode{
    return this._cardContent!;
  }

  /**Data displayed by the card */
  public cardData!: DataNode;
  /**Check if the textareas are readonly */
  public readonly = true;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Loops through an object recursively and generated a tree structure in the process
   * @param name Label for the form field
   * @param obj object to loop recursively
   * @param isName is obj a top level node
   * @returns cardData to be displayed
   */
  parseObjectToNode(name: string, obj: any, isName: boolean | undefined = undefined): DataNode {
    let node: DataNode = {
      displayText: name,
      children: []
    };
    if (obj != null && obj != undefined){
      node.children = [];
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] == 'object') {
          if(obj.constructor.name == 'Array'){
            node.children.push(this.parseObjectToNode('', obj[key]))
          }else{
            node.children?.push(this.parseObjectToNode(key, obj[key]));
          }
        } else {
          node.children?.push({
            displayText: key,
            value: obj[key],
            children: []
          });
        }
      });
    }
    if(isName != undefined)
      node.isName = isName;
    return node;
  }

  /**
   * Checks if input is a number
   * @param input variable to check if is a number
   * @returns if input is a number
   */
  isNumber(input: any): boolean{
    return !Number.isNaN(Number.parseInt(input));
  }

  /**
   * Checks if an input is a name and by extension a top level node
   * @param input variable to check for top level node
   * @returns if an input is a name and by extension a top level node
   */
  isName(input: any): boolean{
    if(input != undefined)
      return input;
    return false;
  }

  /**Click function for edit button */
  public editButtonPressed(){
    this.readonly = !this.readonly;
  }
}
