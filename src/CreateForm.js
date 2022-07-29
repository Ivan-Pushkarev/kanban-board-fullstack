import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {useCreateCardMutation} from "./redux/api";

function CreateForm() {
    const [createTask] = useCreateCardMutation()

    const emptyTask = {
        name: '',
        description: '',
        priority: '1',
        status: 'Todo'
    }

    const [newTask, setNewTask] = useState(emptyTask)
    const history = useHistory()
   
    const submitButtonHandler = async (event) => {
        event.preventDefault()
        await createTask(newTask)
        history.push('/')
    }
    
    const onChangeHandler = (e) => {
        setNewTask({...newTask, [e.target.name]: e.target.value})
    }
    
    return (
        <div className="container text-center">
            <h2>Create New Task Form</h2>
            <div className="row">
                <div className="col-6 m-auto">
                    <form className="form-inline">
                        <div className="mb-3 ">
                            <label htmlFor="name" className="form-label">Task Name</label>
                            <input type="text" className="form-control" id="name" name="name"
                                   value={newTask.name}
                                   onChange={onChangeHandler}/>
                        </div>
                        <div className="mb-3 d-flex flex-column align-content-end">
                            <label htmlFor="description" className="form-label">Task Description</label>
                            <input type="text" className="form-control" id="description" name="description"
                                   value={newTask.description}
                                   onChange={onChangeHandler}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="priority" className="form-label">Task priority</label>
                            <select className="form-select " id="priority" name="priority"
                                    value={newTask.priority}
                                    onChange={onChangeHandler}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={submitButtonHandler}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateForm;