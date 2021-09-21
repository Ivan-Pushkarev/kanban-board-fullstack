import Column from "./Column";
import {withRouter} from "react-router-dom";
const statuses = ['Todo', 'In Progress', 'Review', 'Done']

function Home(props) {
    
    const {tasks, setTasks} = props
    const onControlClick = (id, action) => {
        let newTasks
        switch (action){
            case 'left':
                newTasks = tasks.map(el=> el.id===id? {...el, status: statuses[statuses.indexOf(el.status)-1]}: el)
                setTasks(newTasks)
                break
            case 'right':
                newTasks = tasks.map(el=> el.id===id? {...el, status: statuses[statuses.indexOf(el.status)+1]}: el)
                setTasks(newTasks)
                break
            case 'up':
                newTasks = tasks.map(el=> el.id===id? {...el, priority: String(+el.priority+1)}: el)
                setTasks(newTasks)
                break
            case 'down':
                newTasks = tasks.map(el=> el.id===id? {...el, priority: String(+el.priority-1)}: el)
                setTasks(newTasks)
                break
            case 'delete':
                newTasks = tasks.filter(el=>el.id!==id)
                setTasks(newTasks)
                break
            
        }
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