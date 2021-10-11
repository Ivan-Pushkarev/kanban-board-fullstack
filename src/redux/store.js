import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

const initialState = {
    tasks: [],
    statuses: ['Todo', 'In Progress', 'Review', 'Done'],
    selectedTask: {
        name: '',
        description: '',
        priority: '1',
        status: 'Todo'
    }
}
const reducer= (state=initialState, action)=>{
    switch(action.type){
        case 'TASKS_GET_ALL':
            return {...state, tasks: action.payload}
        case 'TASK_GET_BY_ID':
            return {...state, selectedTask: action.payload}
        case 'EDIT_FORM_HANDLER':
            return {...state, selectedTask: {...state.selectedTask, [action.payload.name]: action.payload.value}}
        default: return state
    }
}
const store = createStore(reducer, compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store