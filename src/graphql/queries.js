import {gql} from "@apollo/client";

export const GET_ALL_CARDS = gql`
    query Query {
        getAllCards {
            _id
            name
            description
            status
            priority
        }
    }
`
export const GET_CARD_BY_ID = gql`
    query CardByID($id: ID!) {
        cardByID(id: $id) {
            _id
            name
            description
            status
            priority
        }
    }
`
