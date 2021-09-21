import {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {useHistory} from "react-router-dom";

const DeleteModal = (props) => {
    
    const {buttonLabel, onControlClick, task, color, tasks, setTasks, id} = props;
    const [modal, setModal] = useState(false)
    let history = useHistory()
    const toggle = () => setModal(!modal);
    const title = buttonLabel === 'Delete' ? 'Are you sure you want to delete this task?' :
        'Are you sure you want to update this task?'
    const yesButtonHandler = () => {
        if (buttonLabel === 'Delete') {
            onControlClick(task.id, 'delete')
        } else {
            const newTasks = tasks.map(el => el.id === id ? {...task} : el)
            setTasks(newTasks)
            history.push('/')
        }
        toggle()
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
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteModal;