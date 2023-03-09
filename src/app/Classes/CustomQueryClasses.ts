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