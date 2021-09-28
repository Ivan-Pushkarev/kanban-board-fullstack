import Task from './Task';

function Column(props) {
    
    const {tasks, status, onControlClick } = props
    let barClassName
    switch(status) {
        case 'Todo': barClassName ="color-bar bg-secondary"
            break
        case 'In Progress': barClassName ="color-bar bg-primary"
            break
        case 'Review': barClassName ="color-bar bg-warning"
            break
        default: barClassName = "color-bar bg-success"
    }
    
    return (
        <div>
            <h3>{props.status}</h3>
            <div className={barClassName}/>
            {
                tasks
                    .filter(el => el.status === status)
                    .sort((a, b) => +b.priority- +a.priority )
                    .map(el => <Task key={el.id}
                                     task={el}
                                     status={status}
                                     onControlClick={onControlClick}/>
                    )
            }
        </div>
    );
}


export default Column;