import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { TreeNode } from '../tree/tree.component';

interface DataNode {
  displayText: string;
  children: DataNode[];
  value?: any;
  isName?: boolean | undefined;
}

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

  ngOnInit(): void {
    if (this.cardContent.data != undefined) {
      //Object.keys(this.cardContent.data!).forEach(key => console.log(key, this.cardContent.data![key], typeof(this.cardContent.data![key])));
      this.cardData = this.parseObjectToNode(this.cardContent.name, this.cardContent.data, true);
    }
    console.log(this.cardData);
  }

  ngOnChanges(){
    this.cardData = this.parseObjectToNode(this.cardContent.name, this.cardContent.data, true);
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
          node.children?.push(this.parseObjectToNode(key, obj[key]));
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
