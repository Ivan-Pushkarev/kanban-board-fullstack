import axios from "axios";
const API = axios.create({baseURL: 'https://fullstack-kanban-board.herokuapp.com/cards'})

export function tasksGetAll() {
    return (dispatch) => {
        API.get('/')
            .then(res => {
                dispatch({
                    type: 'TASKS_GET_ALL',
                    payload: res.data
                })
            })
            .catch(() => {
                console.log('Tasks get all error')
            })
    }
}


export function taskGetById(id) {
    return (dispatch) => {
        API.get(`/${id}`)
            .then(res => {
                dispatch({
                    type: 'TASK_GET_BY_ID',
                    payload: res.data
                })
            })
            .catch(() => {
                console.log('Tasks get all error')
            })
    }
}
export function createTask(task) {
    return () => {
        API.post('/', task)
            .then(() => {
                tasksGetAll()
            })
            .catch(() => {
                console.log("Task wasn't created")
            })
    }
}

export function updateSelectedTask(id, task, router) {
    return () => {
        API.patch(`/${id}`, task)
            .then(() => {
                tasksGetAll()
                if(router) router.push('/')
            })
            .catch(() => {
                console.log("Task wasn't updated")
            })
    }
}

export function deleteSelectedTask(id) {
    return () => {
        API.delete(`/${id}`)
            .then(() => {
                tasksGetAll()
            })
            .catch(() => {
                console.log("Task wasn't deleted")
            })
    }
}