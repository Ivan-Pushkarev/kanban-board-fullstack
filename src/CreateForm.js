import React, {useState} from 'react';
import {useHistory, withRouter} from "react-router-dom";

function CreateForm(props) {
    const {tasks, setTasks} = props
    let history= useHistory()
    console.log(tasks)
    const [newTask, setNewTask] = useState({
        id: Math.random(),
        name: '',
        description: '',
        priority: '',
        status: 'Todo'
    })
    const submitButtonHandler = () => {
        setTasks([...tasks, newTask])
        console.log(tasks)
        history.push('/')
    }
    return (
        <div className="container text-center">
            <h2>Create New Task Form</h2>
            <div className="row">
                <div className="col-6 m-auto">
                    <form className="form-inline">
                        <div className="mb-3 ">
                            <label htmlFor="name" className="form-label">Task Name</label>
                            <input type="text" className="form-control" id="name"
                                   value={newTask.name}
                                   onChange={(e) => setNewTask({...newTask, name:e.target.value})}/>
                        </div>
                        <div className="mb-3 d-flex flex-column align-content-end">
                            <label htmlFor="description" className="form-label">Task Description</label>
                            <input type="text" className="form-control" id="description"
                                   value={newTask.description}
                                   onChange={(e) => setNewTask({...newTask, description:e.target.value})}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="priority" className="form-label">Task priority</label>
                            <select className="form-select " id="priority"
                                    value={newTask.priority}
                                    onChange={(e) => setNewTask({...newTask, priority:e.target.value})}>
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

export default withRouter(CreateForm);