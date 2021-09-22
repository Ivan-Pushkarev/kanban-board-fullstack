import dots from './img/pngwing.com.png'
import {useState} from "react";
import DeleteModal from "./Modal";
import {useHistory} from "react-router-dom";

function Task(props) {
    const {task, status, onControlClick} = props
    const [edit, setEdit] = useState(false)
    let history= useHistory()
    let taskClassName
    switch (status) {
        case 'Todo':
            taskClassName = "task grey"
            break
        case 'In Progress':
            taskClassName = "task blue"
            break
        case 'Review':
            taskClassName = "task yellow"
            break
        default:
            taskClassName = "task green"
        
    }
    return (
        <div className='animate__fadeIn animate__animated '>
        <div className={taskClassName}>
            <div className="title">
                <h4> {props.task.name} </h4>
                <button className="title-menu"
                        onClick={()=>setEdit(!edit)} >
                    <img src={dots} alt="dots"/>
                </button>
                {
                    edit && <div className="title-pop-up-menu">
                            <button className="btn btn-primary"
                            onClick={()=>{history.push(`/edit/${task.id}`)}}>Edit</button>
                            <DeleteModal  color="danger"
                                          buttonLabel={'Delete'}
                                          onControlClick={onControlClick}
                                          task={task}
                            />
                            </div>
                }
            
            </div>
            <div className="description">
                <span>{task.description}</span>
                <h5> {task.priority}</h5>
            </div>
            <div className="button-group">
                <button disabled={status === 'Todo'}
                        onClick={() => onControlClick(task.id, 'left')}> ◀
                </button>
                <button disabled={task.priority === '4'}
                        onClick={() => onControlClick(task.id, 'up')}>▲
                </button>
                
                <button disabled={task.priority === '1'}
                        onClick={() => onControlClick(task.id, 'down')}>▼
                </button>
                <button disabled={status === 'Done'}
                        onClick={() => props.onControlClick(task.id, 'right')}>▶
                </button>
            </div>
        
        </div>
        </div>
    );
}


export default Task;