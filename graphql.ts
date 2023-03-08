import { GraphQLResolveInfo } from "graphql/type/definition";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Class = {
  __typename?: 'Class';
  fromClassList?: Maybe<Array<Maybe<ClassListEntry>>>;
  fromClassListVariant?: Maybe<Array<Maybe<ClassListEntry>>>;
};

export type ClassInput = {
  fromClassList?: InputMaybe<Array<InputMaybe<ClassListEntryInput>>>;
  fromClassListVariant?: InputMaybe<Array<InputMaybe<ClassListEntryInput>>>;
};

export type ClassListEntry = {
  __typename?: 'ClassListEntry';
  definedInSource?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type ClassListEntryInput = {
  definedInSource?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
};

export type Component = {
  __typename?: 'Component';
  m?: Maybe<Scalars['String']>;
  s?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Boolean']>;
};

export type ComponentInput = {
  m?: InputMaybe<Scalars['String']>;
  s?: InputMaybe<Scalars['Boolean']>;
  v?: InputMaybe<Scalars['Boolean']>;
};

export type Distance = {
  __typename?: 'Distance';
  amount?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type DistanceInput = {
  amount?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Duration = {
  __typename?: 'Duration';
  type?: Maybe<Scalars['String']>;
};

export type DurationInput = {
  type?: InputMaybe<Scalars['String']>;
};

export type Entry = {
  __typename?: 'Entry';
  entries?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type EntryInput = {
  entries?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  editSpell?: Maybe<Response>;
};


export type MutationEditSpellArgs = {
  data: MutationInputData;
};

export type MutationInputData = {
  bookName: Scalars['String'];
  data: SpellInput;
  spellName: Scalars['String'];
};

export type OtherSource = {
  __typename?: 'OtherSource';
  page?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
};

export type OtherSourceInput = {
  page?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  GetTables?: Maybe<Array<Maybe<Scalars['String']>>>;
  QueryAll?: Maybe<Array<Maybe<Spells>>>;
  SpellsAAG?: Maybe<Spells>;
  SpellsAI?: Maybe<Spells>;
  SpellsAITFR?: Maybe<Spells>;
  SpellsEGW?: Maybe<Spells>;
  SpellsFTD?: Maybe<Spells>;
  SpellsGGR?: Maybe<Spells>;
  SpellsIDROTF?: Maybe<Spells>;
  SpellsLLK?: Maybe<Spells>;
  SpellsPHB?: Maybe<Spells>;
  SpellsSCC?: Maybe<Spells>;
  SpellsTCE?: Maybe<Spells>;
  SpellsXGE?: Maybe<Spells>;
};

export type Range = {
  __typename?: 'Range';
  distance?: Maybe<Distance>;
  type?: Maybe<Scalars['String']>;
};

export type RangeInput = {
  distance?: InputMaybe<DistanceInput>;
  type?: InputMaybe<Scalars['String']>;
};

export type Response = {
  __typename?: 'Response';
  data?: Maybe<Spell>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ScalingLevelDice = {
  __typename?: 'ScalingLevelDice';
  label?: Maybe<Scalars['String']>;
};

export type ScalingLevelDiceInput = {
  label?: InputMaybe<Scalars['String']>;
};

export type Spell = {
  __typename?: 'Spell';
  affectsCreatureType?: Maybe<Array<Maybe<Scalars['String']>>>;
  areaTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  classes?: Maybe<Class>;
  components?: Maybe<Component>;
  damageInflict?: Maybe<Array<Maybe<Scalars['String']>>>;
  duration?: Maybe<Array<Maybe<Duration>>>;
  entries?: Maybe<Array<Maybe<Scalars['String']>>>;
  entriesHigherLevel?: Maybe<Array<Maybe<Entry>>>;
  level?: Maybe<Scalars['Int']>;
  miscTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  otherSources?: Maybe<Array<Maybe<OtherSource>>>;
  page?: Maybe<Scalars['Int']>;
  range?: Maybe<Range>;
  savingThrow?: Maybe<Array<Maybe<Scalars['String']>>>;
  scalingLevelDice?: Maybe<Array<Maybe<ScalingLevelDice>>>;
  school?: Maybe<Scalars['String']>;
  source: Scalars['String'];
  spellAttack?: Maybe<Scalars['String']>;
  time?: Maybe<Array<Maybe<Time>>>;
};

export type SpellInput = {
  affectsCreatureType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  areaTags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  classes?: InputMaybe<ClassInput>;
  components?: InputMaybe<ComponentInput>;
  damageInflict?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  duration?: InputMaybe<Array<InputMaybe<DurationInput>>>;
  entries?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  entriesHigherLevel?: InputMaybe<Array<InputMaybe<EntryInput>>>;
  level?: InputMaybe<Scalars['Int']>;
  miscTags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  otherSources?: InputMaybe<Array<InputMaybe<OtherSourceInput>>>;
  page?: InputMaybe<Scalars['Int']>;
  range?: InputMaybe<RangeInput>;
  savingThrow?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  scalingLevelDice?: InputMaybe<Array<InputMaybe<ScalingLevelDiceInput>>>;
  school?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  spellAttack?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Array<InputMaybe<TimeInput>>>;
};

export type SpellList = {
  __typename?: 'SpellList';
  spells: Array<Spells>;
};

export type SpellListInput = {
  spells: InputMaybe<Array<InputMaybe<SpellsInput>>>;
};

export type Spells = {
  __typename?: 'Spells';
  spell: Array<Spell>;
};

export type SpellsInput = {
  spell: InputMaybe<Array<InputMaybe<SpellInput>>>;
};

export type Time = {
  __typename?: 'Time';
  Int?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
};

export type TimeInput = {
  Int?: InputMaybe<Scalars['Int']>;
  unit?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Class: ResolverTypeWrapper<Class>;
  ClassInput: ClassInput;
  ClassListEntry: ResolverTypeWrapper<ClassListEntry>;
  ClassListEntryInput: ClassListEntryInput;
  Component: ResolverTypeWrapper<Component>;
  ComponentInput: ComponentInput;
  Distance: ResolverTypeWrapper<Distance>;
  DistanceInput: DistanceInput;
  Duration: ResolverTypeWrapper<Duration>;
  DurationInput: DurationInput;
  Entry: ResolverTypeWrapper<Entry>;
  EntryInput: EntryInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationInputData: MutationInputData;
  OtherSource: ResolverTypeWrapper<OtherSource>;
  OtherSourceInput: OtherSourceInput;
  Query: ResolverTypeWrapper<{}>;
  Range: ResolverTypeWrapper<Range>;
  RangeInput: RangeInput;
  Response: ResolverTypeWrapper<Response>;
  ScalingLevelDice: ResolverTypeWrapper<ScalingLevelDice>;
  ScalingLevelDiceInput: ScalingLevelDiceInput;
  Spell: ResolverTypeWrapper<Spell>;
  SpellInput: SpellInput;
  SpellList: ResolverTypeWrapper<SpellList>;
  SpellListInput: SpellListInput;
  Spells: ResolverTypeWrapper<Spells>;
  SpellsInput: SpellsInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Time>;
  TimeInput: TimeInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Class: Class;
  ClassInput: ClassInput;
  ClassListEntry: ClassListEntry;
  ClassListEntryInput: ClassListEntryInput;
  Component: Component;
  ComponentInput: ComponentInput;
  Distance: Distance;
  DistanceInput: DistanceInput;
  Duration: Duration;
  DurationInput: DurationInput;
  Entry: Entry;
  EntryInput: EntryInput;
  Int: Scalars['Int'];
  Mutation: {};
  MutationInputData: MutationInputData;
  OtherSource: OtherSource;
  OtherSourceInput: OtherSourceInput;
  Query: {};
  Range: Range;
  RangeInput: RangeInput;
  Response: Response;
  ScalingLevelDice: ScalingLevelDice;
  ScalingLevelDiceInput: ScalingLevelDiceInput;
  Spell: Spell;
  SpellInput: SpellInput;
  SpellList: SpellList;
  SpellListInput: SpellListInput;
  Spells: Spells;
  SpellsInput: SpellsInput;
  String: Scalars['String'];
  Time: Time;
  TimeInput: TimeInput;
};

export type ClassResolvers<ContextType = any, ParentType extends ResolversParentTypes['Class'] = ResolversParentTypes['Class']> = {
  fromClassList?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClassListEntry']>>>, ParentType, ContextType>;
  fromClassListVariant?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClassListEntry']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassListEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClassListEntry'] = ResolversParentTypes['ClassListEntry']> = {
  definedInSource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Component'] = ResolversParentTypes['Component']> = {
  m?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  s?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  v?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DistanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Distance'] = ResolversParentTypes['Distance']> = {
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Duration'] = ResolversParentTypes['Duration']> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Entry'] = ResolversParentTypes['Entry']> = {
  entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  editSpell?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationEditSpellArgs, 'data'>>;
};

export type OtherSourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['OtherSource'] = ResolversParentTypes['OtherSource']> = {
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  GetTables?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  QueryAll?: Resolver<Maybe<Array<Maybe<ResolversTypes['Spells']>>>, ParentType, ContextType>;
  SpellsAAG?: Resolver<Maybe<ResolversTypes['Spells']>, ParentType, ContextType>;
  SpellsAI?: Resolver<Maybe<ResolversTypes['Spells']>, ParentType, ContextType>;
  SpellsAITFR?: Resolver<Maybe<ResolversTypes['Spells']>, ParentType, ContextType>;
  SpellsEGW?: Resolver<Maybe<ResolversTypes['Spells']>, ParentType, ContextType>;
  SpellsFTD?: Resolver<Maybe<ResolversTypes['Spells']>, ParentType, ContextType>;
  SpellsGGR?: Resolver<Maybe<ResolversTypes['Spells']>, ParentType, ContextType>;
  SpellsIDROTF?: Resolver<Maybe<ResolversTypes['Spells']>, ParentType, ContextType>;
  SpellsLLK?: Resolver<Maybe<ResolversTypes['Spells']>, ParentType, ContextType>;
  SpellsPHB?: Resolver<Maybe<ResolversTypes['Spells']>, ParentType, ContextType>;
  SpellsSCC?: Resolver<Maybe<ResolversTypes['Spells']>, ParentType, ContextType>;
  SpellsTCE?: Resolver<Maybe<ResolversTypes['Spells']>, ParentType, ContextType>;
  SpellsXGE?: Resolver<Maybe<ResolversTypes['Spells']>, ParentType, ContextType>;
};

export type RangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Range'] = ResolversParentTypes['Range']> = {
  distance?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']> = {
  data?: Resolver<Maybe<ResolversTypes['Spell']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScalingLevelDiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScalingLevelDice'] = ResolversParentTypes['ScalingLevelDice']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpellResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spell'] = ResolversParentTypes['Spell']> = {
  affectsCreatureType?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  areaTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  classes?: Resolver<Maybe<ResolversTypes['Class']>, ParentType, ContextType>;
  components?: Resolver<Maybe<ResolversTypes['Component']>, ParentType, ContextType>;
  damageInflict?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  duration?: Resolver<Maybe<Array<Maybe<ResolversTypes['Duration']>>>, ParentType, ContextType>;
  entries?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  entriesHigherLevel?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entry']>>>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  miscTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  otherSources?: Resolver<Maybe<Array<Maybe<ResolversTypes['OtherSource']>>>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  range?: Resolver<Maybe<ResolversTypes['Range']>, ParentType, ContextType>;
  savingThrow?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  scalingLevelDice?: Resolver<Maybe<Array<Maybe<ResolversTypes['ScalingLevelDice']>>>, ParentType, ContextType>;
  school?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  spellAttack?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  time?: Resolver<Maybe<Array<Maybe<ResolversTypes['Time']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpellListResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpellList'] = ResolversParentTypes['SpellList']> = {
  spells?: Resolver<Maybe<Array<Maybe<ResolversTypes['Spells']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpellsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Spells'] = ResolversParentTypes['Spells']> = {
  spell?: Resolver<Maybe<Array<Maybe<ResolversTypes['Spell']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Time'] = ResolversParentTypes['Time']> = {
  Int?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Class?: ClassResolvers<ContextType>;
  ClassListEntry?: ClassListEntryResolvers<ContextType>;
  Component?: ComponentResolvers<ContextType>;
  Distance?: DistanceResolvers<ContextType>;
  Duration?: DurationResolvers<ContextType>;
  Entry?: EntryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OtherSource?: OtherSourceResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Range?: RangeResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
  ScalingLevelDice?: ScalingLevelDiceResolvers<ContextType>;
  Spell?: SpellResolvers<ContextType>;
  SpellList?: SpellListResolvers<ContextType>;
  Spells?: SpellsResolvers<ContextType>;
  Time?: TimeResolvers<ContextType>;
};

