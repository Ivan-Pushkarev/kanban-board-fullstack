import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_CARD_BY_ID} from "../graphql/queries";
import Fields from "./Fields";

function EditForm() {
    const { taskId } = useParams()
    const {data, loading} = useQuery(GET_CARD_BY_ID, {
        variables: {id: taskId}
    })
    console.log('Edit form', data)

    if(loading) return <h1>Loading...</h1>
    return (
       <Fields
           type='edit'
           initialTask={data.cardByID}
       />
    );
}

export default EditForm;