import { Observable, Subject } from "rxjs"
import { TreeNode } from "./tree-node"
import * as GraphqlClasses from '../../../graphql';

export interface IDataService {
    //DataObject: Observable<TreeNode[]>
    DataObservable: Observable<TreeNode[]>;
    UpdateValues(): void;
    MutateValue(input: GraphqlClasses.MutationInputData, subject: Subject<GraphqlClasses.Response>): void
}
