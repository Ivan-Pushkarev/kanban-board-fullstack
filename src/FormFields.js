import React, {useState} from 'react';
import DeleteModal from "./Modal";
import {useHistory} from "react-router-dom";

function FormFields({task}) {

    const [editCard, setEditCard] = useState(task)

    const onChangeHandler = (e) => {
        setEditCard({...editCard, [e.target.name]: e.target.value})
    }
    const history = useHistory()
    return (
        <form className="form-inline">
            <div className="mb-3 ">
                <label htmlFor="name" className="form-label">Task Name</label>
                <input type="text" className="form-control" id="name" name="name"
                       value={editCard.name}
                       onChange={onChangeHandler}/>
            </div>
            <div className="mb-3 d-flex flex-column align-content-end">
                <label htmlFor="description" className="form-label">Task Description</label>
                <input type="text" className="form-control" id="description" name="description"
                       value={editCard.description}
                       onChange={onChangeHandler}/>
            </div>
            <div className="mb-3">
                <label htmlFor="priority" className="form-label">Task priority</label>
                <select className="form-select " id="priority" name="priority"
                        value={editCard.priority}
                        onChange={onChangeHandler}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="status" className="form-label">Task status</label>
                <select className="form-select " id="status" name="status"
                        value={editCard.status}
                        onChange={onChangeHandler}>
                    <option value="Todo">Todo</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Review">Review</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <DeleteModal color="primary"
                         buttonLabel={'Update'}
                         task={editCard}
                         router={history}
            />
        </form>
    );
}

export default FormFields;