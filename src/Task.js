import dots from './img/pngwing.com.png'
import {useState} from "react";
import EditDeleteModal from "./Modal";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useUpdateCardMutation} from "./redux/api";


function Task(props) {
    const {task, status} = props
    const [edit, setEdit] = useState(false)
    const [ updateCard ] = useUpdateCardMutation()

    let history = useHistory()

    const dispatch = useDispatch()
    const statuses = useSelector(state=>state?.task.statuses)

    const closeEditMode = () => {
        setEdit(false)
    }
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
    const onControlClick = (id, action) => {
        let updatedTask
        switch (action) {
            case 'left':
                updatedTask = {...task, status: statuses[statuses.indexOf(task.status) - 1]}
                break
            case 'right':
                updatedTask = {...task, status: statuses[statuses.indexOf(task.status) + 1]}
                break
            case 'up':
                updatedTask = {...task, priority: String(+task.priority + 1)}
                break
            case 'down':
                updatedTask = {...task, priority: String(+task.priority - 1)}
                break
            default:
                console.log('wrong action')
        }
        updateCard({id, body: updatedTask})
        //dispatch(updateTask({id, task:updatedTask, router: null}))
    }
    
    return (
        <div className='animate__fadeIn animate__animated '>
            <div className={taskClassName}>
                <div className="title">
                    <h4> {task.name} </h4>
                    <button className="title-menu"
                            onClick={() => setEdit(prev=>!prev)}>
                        <img src={dots} alt="dots"/>
                    </button>
                    {
                        edit && <div className="title-pop-up-menu">
                            <button className="btn btn-primary"
                                    onClick={() => {history.push(`/edit/${task._id}`)}}>Edit
                            </button>
                            <EditDeleteModal color="danger"
                                             buttonLabel={'Delete'}
                                             task={task}
                                             closeEditMode={closeEditMode}
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
                            onClick={() => onControlClick(task._id, 'left')}> ◀
                    </button>
                    <button disabled={task.priority === '4'}
                            onClick={() => onControlClick(task._id, 'up')}>▲
                    </button>
                    
                    <button disabled={task.priority === '1'}
                            onClick={() => onControlClick(task._id, 'down')}>▼
                    </button>
                    <button disabled={status === 'Done'}
                            onClick={() => onControlClick(task._id, 'right')}>▶
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Task;