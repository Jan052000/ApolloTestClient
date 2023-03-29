import { Response } from "graphql"

export interface PostData{
    query: string,
    operationName: string,
    variables: Object
}

export interface SpellMutationResponse{
    data: {
        editSpell: Response
    }
}

export namespace FamilyTree{
    export interface Person{
        Name: string,
        Id: string,
        Age: number,
        Children: Person[]
    }
}