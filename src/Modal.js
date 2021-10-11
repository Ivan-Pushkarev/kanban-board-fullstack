import {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {connect} from "react-redux";
import {deleteSelectedTask, updateSelectedTask} from "./redux/actions";

const EditDeleteModal = (props) => {
    
    const {buttonLabel, task, color, router, closeEditMode, deleteSelectedTask, updateSelectedTask} = props;
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(prev => !prev);
    const title = buttonLabel === 'Delete' ? 'Are you sure you want to delete this task?' :
        'Are you sure you want to update this task?'
    
    const yesButtonHandler = () => {
        if (buttonLabel === 'Delete') {
            deleteSelectedTask(task._id)
        } else {
            updateSelectedTask(task._id, task, router)
            console.log('task', task)
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

export default connect(null, {deleteSelectedTask, updateSelectedTask})(EditDeleteModal);