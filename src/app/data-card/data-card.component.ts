import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { DataNode } from '../Classes/data-node';
import { IDataService } from '../Classes/idata-service';
import { TreeNode } from '../Classes/tree-node';
import { Location } from '@angular/common';

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
  }
  get cardContent(): TreeNode{
    return this._cardContent!;
  }
  @Input() DataService?: IDataService;

  /**Data displayed by the card */
  public cardData!: DataNode;
  /**Check if the textareas are readonly */
  public readonly = true;
  /**List of form controls */
  public inputControls: {node: DataNode, control: FormControl}[] = [];
  /**Subject for mutation responses */
  public mutationResponses: Subject<any> = new Subject<any>()

  constructor(private location: Location) {
    this.mutationResponses.subscribe((response) => {
      if(response.data != null)
        // location.replaceState('Spells' + response.data.editSpell.data?.source + '/' + response.data.editSpell.data?.name);
        location.replaceState(<string>this.DataService?.MutationChangeLocation(response))
    });
  }

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
      return true;
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
      let input = this.DataService!.MutationData(this.cardContent);
      if(input.data == undefined)
        input.data = {};
      this.inputControls.forEach((obj) => {
        if (!obj.control.dirty) return;
        if (obj.node.dataPath == undefined) return;
        let inputref: any = input;
        let reference: any = this.cardContent;
        for (let i = 0; i < obj.node.dataPath.length - 1; i++) {
          if(inputref[obj.node.dataPath[i]] == undefined)
            inputref[obj.node.dataPath[i]] = reference[obj.node.dataPath[i]].constructor();
          reference = reference[obj.node.dataPath[i]];
          inputref = inputref[obj.node.dataPath[i]];
        }
        let lastKey = obj.node.dataPath[obj.node.dataPath.length - 1];
        if (this.DataService?.readOnlyKeys.find(roKey => roKey == lastKey) == undefined) {
          let type = reference[lastKey];
          inputref[lastKey] = type.constructor(obj.control.value);
          obj.node.value = obj.control.value;
        }else{
          obj.control.setValue(obj.node.value, {
            emitEvent: false,
            onlySelf: true
          });
        }
      });
      if(Object.keys(input.data).length == 0)
        return;
      this.DataService?.MutateValue(input, this.mutationResponses);
      // this.DataService?.EditButtonPressed(this.cardContent, this.inputControls, this.mutationResponses);
    }
    this.DataService?.UpdateValues();
    // console.log(this.cardContent);
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
          console.log(value)
        }
      });
      this.inputControls.push({node: node, control: control});
      return control;
    }
    return found.control;
  }
}
