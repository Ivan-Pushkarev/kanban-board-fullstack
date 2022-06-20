import Column from "./Column";
import {withRouter} from "react-router-dom";
import {useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_CARDS} from "../graphql/queries";
import {DELETE_TASK_BY_ID, UPDATE_TASK} from "../graphql/mutations";
import {logDOM} from "@testing-library/react";

const statuses = ['Todo', 'In Progress', 'Review', 'Done']

function Home() {


    const {data, loading, refetch} = useQuery(GET_ALL_CARDS)
    const [deleteTask] = useMutation(DELETE_TASK_BY_ID)
    const [updateTask] = useMutation(UPDATE_TASK)



    const onControlClick = (id, action) => {
        console.log('onControlClick!!', action)
        const editTask = data.getAllCards.find(el => el._id === id)
        let method = "PATCH"
        let updatedTask
        switch (action) {
            case 'left':
                updatedTask = {...editTask, status: statuses[statuses.indexOf(editTask.status) - 1]}
                break
            case 'right':
                updatedTask = {...editTask, status: statuses[statuses.indexOf(editTask.status) + 1]}
                break
            case 'up':
                updatedTask = {...editTask, priority: String(+editTask.priority + 1)}
                break
            case 'down':
                updatedTask = {...editTask, priority: String(+editTask.priority - 1)}
                break
            case 'delete':
                method = "DELETE"
                break
            default:
                console.log('wrong action')
        }
        if(method === 'DELETE'){
            deleteTask({
                variables: { id }
            })
                .then(()=> refetch())
        } else {
            updateTask({
                variables: {
                    input: {
                        id,
                        name: updatedTask.name,
                        description: updatedTask.description,
                        status: updatedTask.status,
                        priority: updatedTask.priority
                    }
                }
            })
                .then(()=> refetch())
                .catch(err=> console.log(err))
        }
    };
    if(loading) return <h1>Loading....</h1>
    return (
        <div className="row">
            {
                statuses.map(el => <Column key={el}
                                           status={el}
                                           tasks={data.getAllCards}
                                           onControlClick={onControlClick}/>
                )
            }
        </div>
    );
}

export default withRouter(Home);