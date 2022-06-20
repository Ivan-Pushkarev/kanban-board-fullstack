import {gql} from "@apollo/client";

export const CREATE_TASK = gql`
    mutation Mutation($input: cardInput) {
        createCard(input: $input) {
            name
        }
    }
`
export const DELETE_TASK_BY_ID = gql`
    mutation Mutation($id: ID!) {
        deleteCard(id: $id) {
            name
        }
    }
`
export const UPDATE_TASK = gql`
    mutation Mutation($input: cardInput) {
        updateCard(input: $input) {
            name
        }
    }
`