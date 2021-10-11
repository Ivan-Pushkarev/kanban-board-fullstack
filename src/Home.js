import Column from "./Column";
import {withRouter} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";
import {tasksGetAll} from "./redux/actions";

function Home(props) {
    const {tasks, statuses, tasksGetAll} = props
    
    useEffect(() => {
       tasksGetAll()
    }, [tasksGetAll]);
   
    return (
        <div className="row">
            {
                statuses.map(el => <Column key={el}
                                           status={el}
                                           tasks={tasks}/>)
            }
        </div>
    );
}

const mapStateToProps = state => ({
    tasks: state.tasks,
    statuses: state.statuses
})

export default withRouter(connect(mapStateToProps, {tasksGetAll})(Home));