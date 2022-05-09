import {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {useDispatch} from "react-redux";
import {deleteTask, updateTask} from "./redux/actionCreators";

const EditDeleteModal = (props) => {
    
    const {buttonLabel, task, color, router, closeEditMode} = props;
    const dispatch= useDispatch()
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(prev => !prev);

    const title = buttonLabel === 'Delete' ? 'Are you sure you want to delete this task?' :
        'Are you sure you want to update this task?'
    
    const yesButtonHandler = () => {
        if (buttonLabel === 'Delete') {
            dispatch( deleteTask(task._id))
        } else {
            dispatch(updateTask({id: task._id, task, router}))
        }
        toggle()
    }
    const cancelButtonHandler = () => {
        toggle()
        closeEditMode()
    }
    return (
        <div>
            <Button color={color} onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <h5>{task.name}</h5>
                    <p>{task.description}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={yesButtonHandler}>Yes</Button>{' '}
                    <Button color="secondary" onClick={cancelButtonHandler}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default EditDeleteModal;