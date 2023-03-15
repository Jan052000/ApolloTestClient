import { FormControl } from "@angular/forms";
import { Observable, Subject } from "rxjs"
import { DataNode } from "./data-node";
import { TreeNode } from "./tree-node"

export interface IDataService {
    //DataObject: Observable<TreeNode[]>
    /**
     * Observable for the data to be passed to tree
     */
    DataObservable: Observable<TreeNode[]>;
    /**
     * Keys to be locked when editing in the data card
     */
    readOnlyKeys: String[];
    /**
     * Update values from graphql server
     */
    UpdateValues(): void;
    /**
     * Mutate value
     * @param input mutation input 
     * @param subject subject to emit result to
     */
    MutateValue<T>(input: any, subject: Subject<T>): void;
    /**
     * Generates string to change url to
     * @param input Response from mutation call
     */
    MutationChangeLocation(input: any): string;
    /**
     * Generates string to change url to when selection changes
     * @param input Current selected node
     */
    SelectionChangeLocation(input: TreeNode): string;
    /**
     * Generates input data object Template for mutating data
     * @param input content object of data card
     */
    MutationData(input: any): any & {data: Object};
}
