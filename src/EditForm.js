import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import DeleteModal from "./Modal";
import axios from "axios";

function EditForm(props) {    
    
    const id = props.match.params.taskId
    const [editTask, setEditTask] = useState([])
    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://fullstack-kanban-board.herokuapp.com/cards/${id}`
        })
            .then(res=> setEditTask(res.data))
            .catch(err=>console.log(err))
    }, [id]);
   
    return (
        <div className="container text-center">
            <h2>Edit Task Form</h2>
            <div className="row">
                <div className="col-6 m-auto">
                    <form className="form-inline">
                        <div className="mb-3 ">
                            <label htmlFor="name" className="form-label">Task Name</label>
                            <input type="text" className="form-control" id="name"
                                   value={editTask.name}
                                   onChange={(e) => setEditTask({...editTask, name:e.target.value})}/>
                        </div>
                        <div className="mb-3 d-flex flex-column align-content-end">
                            <label htmlFor="description" className="form-label">Task Description</label>
                            <input type="text" className="form-control" id="description"
                                   value={editTask.description}
                                   onChange={(e) => setEditTask({...editTask, description:e.target.value})}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="priority" className="form-label">Task priority</label>
                            <select className="form-select " id="priority"
                                    value={editTask.priority}
                                    onChange={(e) => setEditTask({...editTask, priority:e.target.value})}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Task status</label>
                            <select className="form-select " id="status"
                                    value={editTask.status}
                                    onChange={(e) => setEditTask({...editTask, status:e.target.value})}>
                                <option value="Todo">Todo</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Review">Review</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                        <DeleteModal color="primary"
                                     buttonLabel={'Update'}
                                     task={editTask}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default withRouter(EditForm);