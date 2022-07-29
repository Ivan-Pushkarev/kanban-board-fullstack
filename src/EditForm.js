import React from 'react';
import {useParams} from "react-router-dom";
import {useGetCardByIdQuery} from "./redux/api";
import FormFields from "./FormFields";

function EditForm() {

    const {taskId} = useParams()
    const {data: task, isLoading} = useGetCardByIdQuery(taskId)

    if (isLoading) return <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>

    return (
        <div className="container text-center">
            <h2>Edit Task Form</h2>
            <div className="row">
                <div className="col-6 m-auto">
                    <FormFields task={task}/>
                </div>
            </div>
        </div>
    );
}

export default EditForm;