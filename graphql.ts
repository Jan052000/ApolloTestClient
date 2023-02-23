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
};

export type Class = {
  __typename?: 'Class';
  formClassList?: Maybe<Array<Maybe<ClassListEntry>>>;
  formClassListVariant?: Maybe<Array<Maybe<ClassListEntry>>>;
};

export type ClassListEntry = {
  __typename?: 'ClassListEntry';
  definedInSource?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type Component = {
  __typename?: 'Component';
  m?: Maybe<Scalars['String']>;
  s?: Maybe<Scalars['Boolean']>;
  v?: Maybe<Scalars['Boolean']>;
};

export type Distance = {
  __typename?: 'Distance';
  amount?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type Duration = {
  __typename?: 'Duration';
  type?: Maybe<Scalars['String']>;
};

export type Entry = {
  __typename?: 'Entry';
  entries?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type OtherSource = {
  __typename?: 'OtherSource';
  page?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
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
  hello?: Maybe<Scalars['String']>;
};

export type Range = {
  __typename?: 'Range';
  distance?: Maybe<Distance>;
  type?: Maybe<Scalars['String']>;
};

export type ScalingLevelDice = {
  __typename?: 'ScalingLevelDice';
  label?: Maybe<Scalars['String']>;
};

export type Spell = {
  __typename?: 'Spell';
  affectsCreatureType?: Maybe<Array<Maybe<Scalars['String']>>>;
  areaTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  classes: Class;
  components?: Maybe<Component>;
  damageInflict?: Maybe<Array<Maybe<Scalars['String']>>>;
  duration?: Maybe<Array<Maybe<Duration>>>;
  entries?: Maybe<Array<Maybe<'String'>>>;
  entriesHigherLevel?: Maybe<Array<Maybe<Entry>>>;
  level: Scalars['Int'];
  miscTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  otherSources?: Maybe<Array<Maybe<OtherSource>>>;
  page?: Maybe<Scalars['Int']>;
  range?: Maybe<Range>;
  savingThrow?: Maybe<Array<Maybe<Scalars['String']>>>;
  scalingLevelDice?: Maybe<Array<Maybe<ScalingLevelDice>>>;
  school: Scalars['String'];
  source?: Maybe<Scalars['String']>;
  spellAttack?: Maybe<Scalars['String']>;
  time?: Maybe<Array<Maybe<Time>>>;
};

export type SpellList = {
  __typename?: 'SpellList';
  spells: Spells[];
};

export type Spells = {
  __typename?: 'Spells';
  spell: Spell[];
};

export type Time = {
  __typename?: 'Time';
  Int?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
};
