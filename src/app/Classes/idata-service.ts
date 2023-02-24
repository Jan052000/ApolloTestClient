import { Observable } from "rxjs"
import { TreeNode } from "./tree-node"

export interface IDataService {
    //DataObject: Observable<TreeNode[]>
    DataObservable: Observable<TreeNode[]>
}
