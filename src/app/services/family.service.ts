import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IDataService } from '../Classes/idata-service';
import { TreeNode } from '../Classes/tree-node';
import { Person } from './../../../FamilyData1';
import { FamilyTree } from '../Classes/CustomQueryClasses';

interface PersonType {
  Name: string,
  Id: string,
  Age: number,
  Children: PersonType[];
}

interface PersonResponse {
  success: boolean,
  message?: string,
  data: Object
}

@Injectable({
  providedIn: 'root'
})
export class FamilyService implements IDataService {

  public DataObservable: Subject<TreeNode[]> = new Subject<TreeNode[]>();
  public readOnlyKeys: String[] = [];

  constructor() {}

  /**
   * Generates TreeNodes from input object of type Person
   * @param input Person object to turn to node
   * @param parent parent to be injected
   * @returns filled node
   */
  private generateNode(input: FamilyTree.Person, parent: TreeNode | undefined): TreeNode {
    let node: TreeNode = {
      name: input.Name,
      data: input,
      children: []
    }
    if (parent != undefined && parent != null)
      node.parent = parent;
    input.Children.forEach(child => {
      node.children?.push(this.generateNode(child, node))
    });
    return node;
  }

  UpdateValues(): void {
    this.DataObservable.next([this.generateNode(Person, undefined)])
  }

  MutateValue<PersonResponse>(input: any, subject: Subject<PersonResponse>): void {
    subject.next(<any>{
      success: this.editInPerson(input),
      data: input.node
    });
  }

  MutationChangeLocation(input: TreeNode): string {
    let path: string[] = [];
    let _ = input.data;
    while (_.parent != undefined) {
      path.push(_.name);
      _ = _.parent;
    }
    path.push(_.name);
    let string = '';
    path.reverse().forEach(name => {
      string += name + '/';
    });
    string = string.substring(0, string.length - 1);
    return string;
  }

  SelectionChangeLocation(input: TreeNode): string {
    let path: string[] = []
    let node = input;
    while (node.parent != undefined) {
      path.push(node.name);
      node = node.parent
    }
    path.push(node.name);
    let pathString = ''
    path.reverse().forEach(pathFragment => pathString += pathFragment + '/');
    return pathString;
  }

  MutationData(input: any) {
    return {
      data: {},
      node: input
    };
  }

  /**
   * Edits a person in Person field
   * @param input input from mutate value
   * @param _isKeyChildren private indicator if last key was 'Children'
   * @returns if mutation was successful
   */
  private editInPerson(input: any, _isKeyChildren: boolean = false): boolean {
    let success = true;
    let dataRef = input.data;
    if(_isKeyChildren){
      console.log();
    }
    let path: PersonType[] = [];
    let node = input.node
    if(node.parent == undefined){
      path.push(node);
    }else{
      while(node.parent != undefined){
        path.push(node.data);
        node = node.parent;
      }
    }
    path.reverse();
    let personf = Person.Children.find(child => this.dataIsEqual(child, path[0]));
    if(personf == undefined) personf = Person;
    for(let i = 1; i < path.length; i++){
      personf = personf?.Children.find(child => this.dataIsEqual(child, path[i]));
      if(personf == undefined) return false;
    }
    Object.keys(input.data).forEach(key => {
      dataRef = dataRef[key];
      if(key != 'Children')
        (<any>personf)[key] = dataRef;
      switch(key){
        case 'Name':
          input.node.name = input.data[key];
          break;
        case 'Children':
          Object.keys(dataRef).forEach(keyi => {
            success = success && this.editInPerson({
              node: input.node.children[<number><unknown>keyi],
              data: dataRef[keyi]
            }, true)
          });
          break;
        default:
          input.node[key] = input.data[key];
      }
      dataRef = input.data;
    });

    return success;
  }

  /**
   * Checks if two persons are the same person
   * @param person1 Person 1
   * @param person2 Person 2
   * @returns if persons are equal
   */
  private dataIsEqual(person1: PersonType, person2: PersonType): boolean {
    return person1.Name == person2.Name && person1.Age == person2.Age && person1.Id == person2.Id && person1.Children === person2.Children;
  }
}
