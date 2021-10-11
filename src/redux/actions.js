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
                console.log('Tasks get by ID error')
            })
    }
}

export function createTask(task, router) {
    return () => {
        API.post('/', task)
            .then(() => {
                router.push('/')
            })
            .catch(() => {
                console.log("Task wasn't created")
            })
    }
}

export function updateSelectedTask(id, task, router) {
    return (dispatch) => {
        API.patch(`/${id}`, task)
            .then(() => {
                dispatch(tasksGetAll())
                if(router.length) router.push('/')
            })
            .catch(() => {
                console.log("Task wasn't updated")
            })
    }
}

export function deleteSelectedTask(id) {
    return (dispatch) => {
        API.delete(`/${id}`)
            .then(() => {
                dispatch(tasksGetAll())
            })
            .catch(() => {
                console.log("Task wasn't deleted")
            })
    }
}

export function editFormController(name, value) {
    return (dispatch) => dispatch ({
        type: 'EDIT_FORM_HANDLER',
        payload: {name, value}
    })
}

