import {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {useDeleteCardMutation, useUpdateCardMutation} from "./redux/api";

const EditDeleteModal = (props) => {
    
    const {buttonLabel, task, color, router, closeEditMode} = props;

    const [ updateCard ] = useUpdateCardMutation()
    const [ deleteCard ] = useDeleteCardMutation()
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(prev => !prev);

    const title = buttonLabel === 'Delete' ? 'Are you sure you want to delete this task?' :
        'Are you sure you want to update this task?'
    
    const yesButtonHandler = async() => {
        if (buttonLabel === 'Delete') {
            deleteCard(task._id)
        } else {
            await updateCard({id: task._id, body: task})
            router.push('/')
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