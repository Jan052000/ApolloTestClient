export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AnyScalarGraphType: any;
  Date: any;
  DateTime: any;
  DateTimeOffset: any;
  Decimal: any;
  Milliseconds: any;
  Seconds: any;
};

export enum AliasType {
  Data = 'DATA',
  Database = 'DATABASE',
  Drawing = 'DRAWING',
  Image = 'IMAGE',
  Managed = 'MANAGED',
  Report = 'REPORT',
  Symbol = 'SYMBOL',
  User = 'USER',
  Wmf = 'WMF'
}

export type ChoiceItemType = {
  __typename?: 'ChoiceItemType';
  id: Scalars['Int'];
  isDefault: Scalars['Boolean'];
  value: Scalars['String'];
};

export type ChoiceType = {
  __typename?: 'ChoiceType';
  defaultValue?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  fieldName?: Maybe<Scalars['String']>;
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  isLinked: Scalars['Boolean'];
  items?: Maybe<Array<Maybe<ChoiceItemType>>>;
  name: Scalars['String'];
  parentId: Scalars['Int'];
  theme?: Maybe<Theme>;
  themeId: Scalars['Int'];
};

export type ColumnType = {
  __typename?: 'ColumnType';
  dbDataType: Scalars['String'];
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isPrimaryKey: Scalars['Boolean'];
  name: Scalars['String'];
  netType?: Maybe<Scalars['String']>;
};

export type DataCellType = {
  __typename?: 'DataCellType';
  column?: Maybe<DataColumnType>;
  columnName?: Maybe<Scalars['String']>;
  row?: Maybe<DataRowType>;
  value?: Maybe<Scalars['AnyScalarGraphType']>;
};

export type DataColumnType = {
  __typename?: 'DataColumnType';
  allowDBNull: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  readOnly: Scalars['Boolean'];
};

export type DataRowType = {
  __typename?: 'DataRowType';
  value?: Maybe<Scalars['AnyScalarGraphType']>;
  values?: Maybe<Array<Maybe<DataCellType>>>;
};


export type DataRowTypeValueArgs = {
  column?: InputMaybe<Scalars['String']>;
};

export type DbSchemaType = {
  __typename?: 'DbSchemaType';
  owner?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  tables?: Maybe<Array<Maybe<TableType>>>;
  views?: Maybe<Array<Maybe<ViewType>>>;
};

export enum DbType {
  AnsiString = 'ANSI_STRING',
  AnsiStringFixedLength = 'ANSI_STRING_FIXED_LENGTH',
  Binary = 'BINARY',
  Boolean = 'BOOLEAN',
  Byte = 'BYTE',
  Currency = 'CURRENCY',
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  DateTime_2 = 'DATE_TIME_2',
  DateTimeOffset = 'DATE_TIME_OFFSET',
  Decimal = 'DECIMAL',
  Double = 'DOUBLE',
  Guid = 'GUID',
  Int_16 = 'INT_16',
  Int_32 = 'INT_32',
  Int_64 = 'INT_64',
  Object = 'OBJECT',
  Single = 'SINGLE',
  String = 'STRING',
  StringFixedLength = 'STRING_FIXED_LENGTH',
  SByte = 'S_BYTE',
  Time = 'TIME',
  UInt_16 = 'U_INT_16',
  UInt_32 = 'U_INT_32',
  UInt_64 = 'U_INT_64',
  VarNumeric = 'VAR_NUMERIC',
  Xml = 'XML'
}

export type ExecResult = {
  __typename?: 'ExecResult';
  affectedRows?: Maybe<Scalars['Int']>;
  parameter?: Maybe<Scalars['AnyScalarGraphType']>;
  parameters?: Maybe<Array<Maybe<ParameterOutputType>>>;
};


export type ExecResultParameterArgs = {
  key?: InputMaybe<Scalars['String']>;
};


export type ExecResultParametersArgs = {
  dirFilter?: InputMaybe<Array<InputMaybe<ParameterDirection>>>;
};

export type FieldFormFieldType = {
  __typename?: 'FieldFormFieldType';
  choice?: Maybe<ChoiceType>;
  choiceId: Scalars['Int'];
  display: Scalars['String'];
  field?: Maybe<ThemeFieldType>;
  fieldId: Scalars['Int'];
  height?: Maybe<Scalars['Int']>;
  isReadOnly: Scalars['Boolean'];
  parentId: Scalars['Int'];
  tabIndex: Scalars['Int'];
  webActive: Scalars['Boolean'];
  webReadOnly: Scalars['Boolean'];
  width?: Maybe<Scalars['Int']>;
};

export type FieldValueInput = {
  fieldId?: InputMaybe<Scalars['Int']>;
  fieldName?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['AnyScalarGraphType']>;
};

export type FieldValueType = {
  __typename?: 'FieldValueType';
  asString?: Maybe<Scalars['String']>;
  field?: Maybe<ThemeFieldType>;
  fieldId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['AnyScalarGraphType']>;
};

export type FormType = {
  __typename?: 'FormType';
  active: Scalars['Boolean'];
  description: Scalars['String'];
  fields?: Maybe<Array<Maybe<FieldFormFieldType>>>;
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  level: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  nodeId: Scalars['Int'];
  nodeLevel: Scalars['Int'];
  objectFields?: Maybe<Array<Maybe<ObjectFormFieldType>>>;
  sortDirAsc1?: Maybe<Scalars['Boolean']>;
  sortDirAsc2?: Maybe<Scalars['Boolean']>;
  sortField1?: Maybe<ThemeFieldType>;
  sortField2?: Maybe<ThemeFieldType>;
  theme?: Maybe<Theme>;
  themeId: Scalars['Int'];
  webActive: Scalars['Boolean'];
};

export type GAliasType = {
  __typename?: 'GAliasType';
  defaultType: Scalars['Boolean'];
  folder: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  type?: Maybe<AliasType>;
};

export enum GInfoMainFieldType {
  FtDate = 'FT_DATE',
  FtFloat = 'FT_FLOAT',
  FtInteger = 'FT_INTEGER',
  FtMemo = 'FT_MEMO',
  FtText = 'FT_TEXT',
  FtYesNo = 'FT_YES_NO'
}

export type GraphQl_Mutation = {
  __typename?: 'GraphQL_mutation';
  clearLangCache?: Maybe<Scalars['Boolean']>;
  clearMetaDataCache?: Maybe<Scalars['Boolean']>;
  clearUserCache?: Maybe<Scalars['Boolean']>;
  commitTransaction?: Maybe<Scalars['Boolean']>;
  createRecord?: Maybe<RecordType>;
  createRecords?: Maybe<Array<Maybe<RecordType>>>;
  deleteRecords?: Maybe<Scalars['Int']>;
  deleteRows?: Maybe<Scalars['Int']>;
  exec?: Maybe<ExecResult>;
  insertRows?: Maybe<Scalars['Int']>;
  insertRowsAndGetIds?: Maybe<Array<Maybe<Scalars['AnyScalarGraphType']>>>;
  login?: Maybe<UserInfoType>;
  logout?: Maybe<Scalars['Boolean']>;
  rollbackTransaction?: Maybe<Scalars['Boolean']>;
  startTransaction?: Maybe<Scalars['Int']>;
  updateRecords?: Maybe<Array<Maybe<RecordType>>>;
  updateRelation?: Maybe<Array<Maybe<Scalars['Int']>>>;
  updateRows?: Maybe<Array<Maybe<Scalars['AnyScalarGraphType']>>>;
};


export type GraphQl_MutationCommitTransactionArgs = {
  trId?: InputMaybe<Scalars['Int']>;
};


export type GraphQl_MutationCreateRecordArgs = {
  record?: InputMaybe<RecordInput>;
  themeId: Scalars['Int'];
  trId?: InputMaybe<Scalars['Int']>;
};


export type GraphQl_MutationCreateRecordsArgs = {
  records?: InputMaybe<Array<InputMaybe<RecordInput>>>;
  themeId: Scalars['Int'];
  trId?: InputMaybe<Scalars['Int']>;
};


export type GraphQl_MutationDeleteRecordsArgs = {
  recordIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  themeId: Scalars['Int'];
  trId?: InputMaybe<Scalars['Int']>;
};


export type GraphQl_MutationDeleteRowsArgs = {
  idCol?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['AnyScalarGraphType']>>>;
  table?: InputMaybe<Scalars['String']>;
  trId?: InputMaybe<Scalars['Int']>;
};


export type GraphQl_MutationExecArgs = {
  parameters?: InputMaybe<Array<InputMaybe<ParameterInputType>>>;
  procedure?: InputMaybe<Scalars['String']>;
  trId?: InputMaybe<Scalars['Int']>;
};


export type GraphQl_MutationInsertRowsArgs = {
  cols?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  data?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['AnyScalarGraphType']>>>>>;
  table?: InputMaybe<Scalars['String']>;
  trId?: InputMaybe<Scalars['Int']>;
};


export type GraphQl_MutationInsertRowsAndGetIdsArgs = {
  cols?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  data?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['AnyScalarGraphType']>>>>>;
  idCol?: InputMaybe<Scalars['String']>;
  idColType?: InputMaybe<Scalars['String']>;
  table?: InputMaybe<Scalars['String']>;
  trId?: InputMaybe<Scalars['Int']>;
};


export type GraphQl_MutationLoginArgs = {
  password: Scalars['String'];
  user: Scalars['String'];
};


export type GraphQl_MutationRollbackTransactionArgs = {
  trId?: InputMaybe<Scalars['Int']>;
};


export type GraphQl_MutationUpdateRecordsArgs = {
  records?: InputMaybe<Array<InputMaybe<RecordInput>>>;
  themeId: Scalars['Int'];
  trId?: InputMaybe<Scalars['Int']>;
};


export type GraphQl_MutationUpdateRelationArgs = {
  relInputs?: InputMaybe<Array<InputMaybe<RelInput>>>;
  themeId: Scalars['Int'];
  trId?: InputMaybe<Scalars['Int']>;
};


export type GraphQl_MutationUpdateRowsArgs = {
  cols?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  data?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['AnyScalarGraphType']>>>>>;
  idCol?: InputMaybe<Scalars['String']>;
  table?: InputMaybe<Scalars['String']>;
  trId?: InputMaybe<Scalars['Int']>;
};

export type GraphQl_Query = {
  __typename?: 'GraphQL_query';
  GetFilteredData?: Maybe<Array<Maybe<Scalars['AnyScalarGraphType']>>>;
  aliases?: Maybe<Array<Maybe<GAliasType>>>;
  cadLinks?: Maybe<Array<Maybe<SysCadRefType>>>;
  choices?: Maybe<Array<Maybe<ChoiceType>>>;
  currentUser?: Maybe<UserType>;
  form?: Maybe<FormType>;
  forms?: Maybe<Array<Maybe<FormType>>>;
  levels?: Maybe<Array<Maybe<LevelType>>>;
  links?: Maybe<Array<Maybe<LinkType>>>;
  records?: Maybe<Array<Maybe<RecordType>>>;
  recordsChain?: Maybe<Array<Maybe<RecordType>>>;
  rights?: Maybe<Array<Maybe<Scalars['String']>>>;
  rows?: Maybe<Array<Maybe<DataRowType>>>;
  schema?: Maybe<DbSchemaType>;
  search?: Maybe<Array<Maybe<SearchResultSetType>>>;
  theme?: Maybe<Theme>;
  themeGroups?: Maybe<Array<Maybe<ThemeGroup>>>;
  themes?: Maybe<Array<Maybe<Theme>>>;
  webVersion?: Maybe<Scalars['String']>;
};


export type GraphQl_QueryGetFilteredDataArgs = {
  data?: InputMaybe<Scalars['String']>;
};


export type GraphQl_QueryAliasesArgs = {
  aliasIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type GraphQl_QueryChoicesArgs = {
  choiceIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type GraphQl_QueryFormArgs = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type GraphQl_QueryLinksArgs = {
  chain?: InputMaybe<Array<InputMaybe<Scalars['AnyScalarGraphType']>>>;
  onlyChildren?: InputMaybe<Scalars['Boolean']>;
  onlyParents?: InputMaybe<Scalars['Boolean']>;
  themes?: InputMaybe<Array<InputMaybe<Scalars['AnyScalarGraphType']>>>;
};


export type GraphQl_QueryRecordsArgs = {
  filter?: InputMaybe<Scalars['String']>;
  form?: InputMaybe<Scalars['String']>;
  formId?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orderByForm?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  select?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  selectFormFields?: InputMaybe<Scalars['Boolean']>;
  theme?: InputMaybe<Scalars['String']>;
  themeId?: InputMaybe<Scalars['AnyScalarGraphType']>;
  trId?: InputMaybe<Scalars['Int']>;
  tryToQueryByXml?: InputMaybe<Scalars['Boolean']>;
};


export type GraphQl_QueryRecordsChainArgs = {
  chain?: InputMaybe<Array<InputMaybe<Scalars['AnyScalarGraphType']>>>;
  filter?: InputMaybe<Scalars['String']>;
  onlyLastLevel?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orderByForm?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  select?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  selectFormFields?: InputMaybe<Scalars['Boolean']>;
  trId?: InputMaybe<Scalars['Int']>;
  tryToQueryByXml?: InputMaybe<Scalars['Boolean']>;
};


export type GraphQl_QueryRowsArgs = {
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  fromTable?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  select?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  trId?: InputMaybe<Scalars['Int']>;
};


export type GraphQl_QuerySearchArgs = {
  count?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
};


export type GraphQl_QueryThemeArgs = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type GraphQl_QueryThemesArgs = {
  plusChildThemes?: InputMaybe<Scalars['Boolean']>;
  plusParentThemes?: InputMaybe<Scalars['Boolean']>;
  themes?: InputMaybe<Array<InputMaybe<Scalars['AnyScalarGraphType']>>>;
};

export type LevelType = {
  __typename?: 'LevelType';
  image?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  level: Scalars['Int'];
  sortField1: Scalars['String'];
  sortField2: Scalars['String'];
};

export type LinkInput = {
  linkId?: InputMaybe<Scalars['Int']>;
  otherId?: InputMaybe<Scalars['Int']>;
};

export type LinkSideType = {
  __typename?: 'LinkSideType';
  count: Scalars['Int'];
  fieldName: Scalars['String'];
  form?: Maybe<FormType>;
  formId: Scalars['Int'];
  isInternal: Scalars['Boolean'];
  sourceName: Scalars['String'];
  tableName: Scalars['String'];
  theme?: Maybe<Theme>;
  themeId?: Maybe<Scalars['Int']>;
  visible: Scalars['Boolean'];
};

export type LinkType = {
  __typename?: 'LinkType';
  destination?: Maybe<LinkSideType>;
  id: Scalars['Int'];
  isGlobal: Scalars['Boolean'];
  isSystem: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  source?: Maybe<LinkSideType>;
};

export type LinkWithParentType = {
  __typename?: 'LinkWithParentType';
  destination?: Maybe<LinkSideType>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  records?: Maybe<Array<Maybe<RecordType>>>;
  source?: Maybe<LinkSideType>;
};


export type LinkWithParentTypeRecordsArgs = {
  filter?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orderByForm?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  select?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  selectFormFields?: InputMaybe<Scalars['Boolean']>;
  tryToQueryByXml?: InputMaybe<Scalars['Boolean']>;
};

export type ObjectFormFieldType = {
  __typename?: 'ObjectFormFieldType';
  baseId: Scalars['Int'];
  baseType: Scalars['String'];
  field?: Maybe<ThemeFieldType>;
  giText: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  isReadOnly: Scalars['Boolean'];
  parentId: Scalars['Int'];
  tabIndex: Scalars['Int'];
  webActive: Scalars['Boolean'];
  webReadOnly: Scalars['Boolean'];
  width?: Maybe<Scalars['Int']>;
};

export enum ParameterDirection {
  Input = 'INPUT',
  InputOutput = 'INPUT_OUTPUT',
  Output = 'OUTPUT',
  ReturnValue = 'RETURN_VALUE'
}

export type ParameterInputType = {
  direction?: InputMaybe<ParameterDirection>;
  key?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<DbType>;
  value?: InputMaybe<Scalars['AnyScalarGraphType']>;
};

export type ParameterOutputType = {
  __typename?: 'ParameterOutputType';
  direction?: Maybe<ParameterDirection>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<DbType>;
  value?: Maybe<Scalars['AnyScalarGraphType']>;
};

export type RecordInput = {
  id?: InputMaybe<Scalars['Int']>;
  links?: InputMaybe<Array<InputMaybe<LinkInput>>>;
  values: Array<InputMaybe<FieldValueInput>>;
};

export type RecordType = {
  __typename?: 'RecordType';
  cadLinks?: Maybe<Array<Maybe<SysCadRefType>>>;
  display?: Maybe<Scalars['String']>;
  gid?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  links?: Maybe<Array<Maybe<LinkWithParentType>>>;
  parent?: Maybe<RecordType>;
  parentId?: Maybe<Scalars['Int']>;
  records?: Maybe<Array<Maybe<RecordType>>>;
  theme?: Maybe<Theme>;
  themeId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['AnyScalarGraphType']>;
  values?: Maybe<Array<Maybe<FieldValueType>>>;
};


export type RecordTypeDisplayArgs = {
  pattern?: InputMaybe<Scalars['String']>;
  showFailtures?: InputMaybe<Scalars['Boolean']>;
};


export type RecordTypeLinksArgs = {
  childrens?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  parents?: InputMaybe<Scalars['Boolean']>;
};


export type RecordTypeRecordsArgs = {
  children?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orderByForm?: InputMaybe<Scalars['Boolean']>;
  other?: InputMaybe<Scalars['AnyScalarGraphType']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  parents?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  selectFormFields?: InputMaybe<Scalars['Boolean']>;
  tryToQueryByXml?: InputMaybe<Scalars['Boolean']>;
};


export type RecordTypeValueArgs = {
  field?: InputMaybe<Scalars['String']>;
};

export type RelInput = {
  destId?: InputMaybe<Scalars['Int']>;
  linkId?: InputMaybe<Scalars['Int']>;
  sourceId?: InputMaybe<Scalars['Int']>;
};

export type SearchResultSetType = {
  __typename?: 'SearchResultSetType';
  results?: Maybe<Array<Maybe<SearchResultType>>>;
  themeKey: Scalars['String'];
  themeName: Scalars['String'];
};

export type SearchResultType = {
  __typename?: 'SearchResultType';
  gid: Scalars['String'];
  text: Scalars['String'];
};

export type SysCadRefType = {
  __typename?: 'SysCADRefType';
  drawing: Scalars['String'];
  gid: Scalars['String'];
  handle: Scalars['String'];
  recordId: Scalars['Int'];
  themeName: Scalars['String'];
};

export type TableType = {
  __typename?: 'TableType';
  columns?: Maybe<Array<Maybe<ColumnType>>>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  schemaOwner: Scalars['String'];
};

/** Definition of theme. It's like a database table. */
export type Theme = {
  __typename?: 'Theme';
  /** Returns all choice lists that are used in any form of this theme. */
  choices?: Maybe<Array<Maybe<ChoiceType>>>;
  crud?: Maybe<Scalars['Int']>;
  fields?: Maybe<Array<Maybe<ThemeFieldType>>>;
  forms?: Maybe<Array<Maybe<FormType>>>;
  group?: Maybe<ThemeGroup>;
  id: Scalars['Int'];
  level?: Maybe<LevelType>;
  links?: Maybe<Array<Maybe<LinkType>>>;
  mainForm?: Maybe<FormType>;
  name?: Maybe<Scalars['String']>;
  records?: Maybe<Array<Maybe<RecordType>>>;
  tableName: Scalars['String'];
};


/** Definition of theme. It's like a database table. */
export type ThemeFieldsArgs = {
  names?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  selectFormFields?: InputMaybe<Scalars['Boolean']>;
};


/** Definition of theme. It's like a database table. */
export type ThemeLinksArgs = {
  onlyChildren?: InputMaybe<Scalars['Boolean']>;
  onlyParents?: InputMaybe<Scalars['Boolean']>;
};


/** Definition of theme. It's like a database table. */
export type ThemeRecordsArgs = {
  filter?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  orderByForm?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  select?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  selectFormFields?: InputMaybe<Scalars['Boolean']>;
  trId?: InputMaybe<Scalars['Int']>;
  tryToQueryByXml?: InputMaybe<Scalars['Boolean']>;
};

export type ThemeFieldType = {
  __typename?: 'ThemeFieldType';
  crud?: Maybe<Scalars['Int']>;
  defaultValue?: Maybe<Scalars['String']>;
  fieldName: Scalars['String'];
  formula?: Maybe<Scalars['String']>;
  gInfoMainType?: Maybe<GInfoMainFieldType>;
  gInfoSubType?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  prefix: Scalars['String'];
  required: Scalars['Boolean'];
  suffix: Scalars['String'];
  typeGroup?: Maybe<Scalars['String']>;
};

export type ThemeGroup = {
  __typename?: 'ThemeGroup';
  crud?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  themes?: Maybe<Array<Maybe<Theme>>>;
};

export type UserGroupType = {
  __typename?: 'UserGroupType';
  desc?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserInfoType = {
  __typename?: 'UserInfoType';
  rights?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<UserType>;
};

export type UserType = {
  __typename?: 'UserType';
  desc?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  eMail?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<UserGroupType>>>;
  name?: Maybe<Scalars['String']>;
};

export type ViewType = {
  __typename?: 'ViewType';
  columns?: Maybe<Array<Maybe<ColumnType>>>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  sql: Scalars['String'];
};
