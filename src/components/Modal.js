import {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {useHistory} from "react-router-dom";
import {useMutation} from "@apollo/client";
import {UPDATE_TASK} from "../graphql/mutations";
import {GET_ALL_CARDS} from "../graphql/queries";

const EditDeleteModal = (props) => {
    
    const {buttonLabel, onControlClick, task, color, id} = props;
    const [modal, setModal] = useState(false)
    const [updateTask] = useMutation(UPDATE_TASK, {
        refetchQueries: [{query: GET_ALL_CARDS}]
    })

    let history = useHistory()

    const toggle = () => setModal(!modal);

    const title = buttonLabel === 'Delete' ? 'Are you sure you want to delete this task?' :
        'Are you sure you want to update this task?'

    const yesButtonHandler = () => {
        if (buttonLabel === 'Delete') {
            onControlClick(task._id, 'delete')
        } else {
            updateTask({
                variables: {
                    input: {
                        id,
                        name: task.name,
                        description: task.description,
                        status: task.status,
                        priority: task.priority,
                    }
                }
            })
                .then(()=>  history.push('/'))
                .catch(err=> console.log(err))
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

export default EditDeleteModal;