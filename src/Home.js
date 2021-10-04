import Column from "./Column";
import {withRouter} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from 'axios'

const statuses = ['Todo', 'In Progress', 'Review', 'Done']

function Home() {
    
    const [tasks, setTasks] = useState([])
    
    async function getAllCards() {
        try {
            const res = await axios({
                method: 'GET',
                url: 'https://fullstack-kanban-board.herokuapp.com/cards'
            })
            setTasks(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
       getAllCards()
    }, []);
    
    const onControlClick = (id, action) => {
        const editTask = tasks.find(el => el._id === id)
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
            default: console.log('wrong action')
        }
        axios({
            method,
            url: `https://fullstack-kanban-board.herokuapp.com/cards/${id}`,
            data: updatedTask
        })
            .then(res => {
                console.log(res)
                getAllCards()
            })
            .catch(err => console.log(err))
    };
    
    return (
        <div className="row">
            {
                statuses.map(el => <div className="col-3" key={el}>
                    <Column status={el}
                            tasks={tasks}
                            onControlClick={onControlClick}/>
                </div>)
            }
        </div>
    );
}

export default withRouter(Home);