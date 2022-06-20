import React from 'react';
import {useHistory} from "react-router-dom";
import Fields from "./Fields";
import {useMutation} from "@apollo/client";
import {CREATE_TASK} from "../graphql/mutations";
import {GET_ALL_CARDS} from "../graphql/queries";

function CreateForm() {
    let history = useHistory()
    const [createTask] = useMutation(CREATE_TASK, {
        refetchQueries: [{query: GET_ALL_CARDS}]
    })

    const onFinish = (task) => {
        createTask({
            variables: {
                input: {...task}
            }
        })
            .then(()=> history.push('/'))
            .catch((err)=> console.log('Create task error', err))
    }
    return (
        <Fields
            type='create'
            onFinish={onFinish}
        />
    );
}

export default CreateForm;