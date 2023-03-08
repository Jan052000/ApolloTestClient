import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataNode } from '../Classes/data-node';
import { IDataService } from '../Classes/idata-service';
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
      this.cardData = this.parseObjectToNode(this.cardContent.name, this.cardContent.data, ['data'], true);
    }else{
      this.cardData = {
        displayText: 'Spells',
        children: [],
        isName: true
      }
      this.cardContent.children?.forEach(child => this.cardData.children.push({
        displayText: 'Name',
        value: child.name,
        children: [],
        // remove to stop editing from spells overview
        dataPath: ['children', '0', 'data', 'name']
      }))
    }
    console.log(this.cardContent);
    console.log(this.cardData);
    this.readonly = true;
  }
  get cardContent(): TreeNode{
    return this._cardContent!;
  }
  @Input() DataService?: any;

  /**Data displayed by the card */
  public cardData!: DataNode;
  /**Check if the textareas are readonly */
  public readonly = true;
  public inputControls: {node: DataNode, control: FormControl}[] = [];

  constructor() {}

  ngOnInit(): void {}

  /**
   * Loops through an object recursively and generated a tree structure in the process
   * @param name Label for the form field
   * @param obj object to loop recursively
   * @param isName is obj a top level node
   * @returns cardData to be displayed
   */
  parseObjectToNode(name: string, obj: any, path: string[], isName: boolean | undefined = undefined): DataNode {
    let node: DataNode = {
      displayText: name,
      children: [],
      dataPath: path
    };
    if (obj != null && obj != undefined){
      node.children = [];
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] == 'object') {
          if(obj.constructor.name == 'Array'){
            node.children.push(this.parseObjectToNode('', obj[key],path.concat(key)))
          }else{
            node.children?.push(this.parseObjectToNode(key, obj[key], path.concat(key)));
          }
        } else {
          node.children?.push({
            displayText: key,
            value: obj[key],
            children: [],
            dataPath: path.concat(key)
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
    if(this.cardData.dataPath == undefined)
      return;
    this.readonly = !this.readonly;
    console.log(this.cardContent);
    if(this.readonly){
      //Add check to see if changes should be saved
      let input: any = {};
      input.spellName = this.cardContent.name;
      input.bookName = this.cardContent.parent?.name;
      input.data = {};
      this.inputControls.forEach((obj) => {
        if (!obj.control.dirty) return;
        if (obj.node.dataPath == undefined) return;
        let inputref = input.data;
        let reference: any = this.cardContent;
        for (let i = 0; i < obj.node.dataPath.length - 1; i++) {
          input[obj.node.dataPath[i]] =
            reference[obj.node.dataPath[i]].constructor();
          reference = reference[obj.node.dataPath[i]];
          inputref = input[obj.node.dataPath[i]];
        }
        let lastKey = obj.node.dataPath[obj.node.dataPath.length - 1];
        if (lastKey != 'source') {
          inputref[lastKey] = obj.control.value;//reference[lastKey];
          obj.node.value = obj.control.value;
        }
      });
      if(Object.keys(input.data).length == 0)
        return;
      this.DataService.EditSpell(input).subscribe({
        next(value: any){
          console.log(value);
        }
      })
    }
  }

  /**
   * Registers a FormControl for a node
   * @param node reference to data node
   * @returns formcontrol for node
   */
  public registerFormControl(node: DataNode, _: any = this._cardContent): FormControl{
    let found = this.inputControls.find(value => value.node === node);
    if(found == undefined){
      let control = new FormControl();
      control.setValue(node.value, {
        onlySelf: true,
        emitEvent: false
      })
      control.valueChanges.subscribe({
        next(value) {
          control.setValue(value, {
            onlySelf: true,
            emitEvent: false
          });
          // _['children']!['0']['data']['name'] = 'Test123';
          // node.value = value;
          console.log(value)
          // if(node.dataPath == undefined)
          //   return;
          // let reference = _;
          // for(let i = 0; i < node.dataPath!.length - 1; i++){
          //   reference = reference[node.dataPath[i]];
          // }
          // let lastKey = node.dataPath[node.dataPath.length - 1];
          // if(lastKey != 'source'){
          //   reference[node.dataPath[node.dataPath.length - 1]] = value;
          //   node.value = value;
          // }
        }
      });
      this.inputControls.push({node: node, control: control});
      return control;
    }
    return found.control;
  }
}
