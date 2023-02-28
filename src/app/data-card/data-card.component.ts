import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { DataNode } from '../Classes/data-node';
import { TreeNode } from '../Classes/tree-node';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss'],
})
export class DataCardComponent implements OnInit, OnChanges {
  @Input() cardContent!: TreeNode;
  public editMode: boolean = false;
  public cardData!: DataNode;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(){
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
  }

  parseObjectToNode(name: string, obj: any, isName: boolean | undefined = undefined): DataNode {
    let node: DataNode = {
      displayText: name,
      children: []//,
      //value: obj,
    };
    //Name evtl unnötig
    if (obj != null && obj != undefined){
      node.children = [];
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] == 'object') {
          if(obj.constructor.name == 'Array'){
            node.children.push(this.parseObjectToNode('', obj[key]))
          }else{
            node.children?.push(this.parseObjectToNode(key, obj[key]));
          }
          // node.children?.push(this.parseObjectToNode(key, obj[key]));
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

  isNumber(input: any): boolean{
    return !Number.isNaN(Number.parseInt(input));
  }

  isName(input: any): boolean{
    if(input != undefined)
      return input;
    return false;
  }
}
