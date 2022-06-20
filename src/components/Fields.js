import React, {useState} from 'react';
import EditModal from "./Modal";

const emptyTask = {
    name: '',
    description: '',
    priority: '1',
    status: 'Todo'
}

function Fields(props) {
    const {onFinish, initialTask, type} = props
    const initialValue = type === 'create' ? emptyTask : initialTask
    const [task, setTask] = useState(initialValue)

    const handleChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        onFinish(task)
    }

    return (
        <div className="container text-center">
            <h2>{type === 'create' ? 'Create' : 'Edit'} task form</h2>
            <div className="row">
                <div className="col-6 m-auto">
                    <form className="form-inline">
                        <div className="mb-3 ">
                            <label htmlFor="name" className="form-label">Task Name</label>
                            <input type="text"
                                   className="form-control"
                                   name="name"
                                   value={task.name}
                                   onChange={handleChange}/>
                        </div>
                        <div className="mb-3 d-flex flex-column align-content-end">
                            <label htmlFor="description" className="form-label">Task Description</label>
                            <input type="text"
                                   className="form-control"
                                   name="description"
                                   value={task.description}
                                   onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="priority" className="form-label">Task priority</label>
                            <select className="form-select "
                                    name="priority"
                                    value={task.priority}
                                    onChange={handleChange}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Task status</label>
                            <select className="form-select"
                                    name="status"
                                    value={task.status}
                                    onChange={handleChange}
                                    disabled={type === 'create'}>
                                <option value="Todo">Todo</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Review">Review</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                        {
                            type === 'create' ?
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={onSubmit}>
                                    Submit
                                </button>
                                :
                                <EditModal color="primary"
                                             buttonLabel={'Update'}
                                             task={task}
                                             id={task._id}
                                />
                        }
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Fields;