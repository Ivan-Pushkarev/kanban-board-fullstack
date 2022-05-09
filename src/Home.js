import Column from "./Column";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {taskGetAll} from "./redux/actionCreators";

function Home() {
    const dispatch= useDispatch()
    const tasks = useSelector(state=> state?.task.tasks)
    const statuses = useSelector(state=> state?.task.statuses)

    useEffect(() => {
        dispatch(taskGetAll())
    }, [dispatch]);
   
    return (
        <div className="row">
            {
                statuses.map(el => <Column key={el} status={el} tasks={tasks}/>)
            }
        </div>
    );
}

export default Home;