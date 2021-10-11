import React, {useEffect} from 'react';
import {useHistory, withRouter} from "react-router-dom";
import DeleteModal from "./Modal";
import {connect} from "react-redux";
import {editFormController, taskGetById} from "./redux/actions";

function EditForm(props) {    
    const {editFormController, taskGetById, task} = props
    const id = props.match.params.taskId
    let history = useHistory()
   
    useEffect(() => {
        taskGetById(id)
    }, [id]);
    
    const onChangeHandler = (e) => {
        editFormController(e.target.name, e.target.value)
    }
    
    return (
        <div className="container text-center">
            <h2>Edit Task Form</h2>
            <div className="row">
                <div className="col-6 m-auto">
                    <form className="form-inline">
                        <div className="mb-3 ">
                            <label htmlFor="name" className="form-label">Task Name</label>
                            <input type="text" className="form-control" id="name" name="name"
                                   value={task.name}
                                   onChange={onChangeHandler}/>
                        </div>
                        <div className="mb-3 d-flex flex-column align-content-end">
                            <label htmlFor="description" className="form-label">Task Description</label>
                            <input type="text" className="form-control" id="description" name="description"
                                   value={task.description}
                                   onChange={onChangeHandler}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="priority" className="form-label">Task priority</label>
                            <select className="form-select " id="priority" name="priority"
                                    value={task.priority}
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
                                    value={task.status}
                                    onChange={onChangeHandler}>
                                <option value="Todo">Todo</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Review">Review</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                        <DeleteModal color="primary"
                                     buttonLabel={'Update'}
                                     task={task}
                                     router={history}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = state => ({
    task: state.selectedTask
})

export default withRouter(connect(mapStateToProps, {editFormController, taskGetById})(EditForm));