export interface DataNode {
    displayText: string;
    children: DataNode[];
    value?: any;
    isName?: boolean | undefined;
    dataPath?: string[];
  }
