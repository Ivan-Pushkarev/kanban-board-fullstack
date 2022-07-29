import Column from "./Column";
import {useGetAllCardsQuery} from "./redux/api";

const  statuses = ['Todo', 'In Progress', 'Review', 'Done']

function Home() {
    const {data: tasks, isLoading} = useGetAllCardsQuery()

    if (isLoading) return <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
   
    return (
        <div className="row">
            {
                statuses.map(el => <Column key={el} status={el} tasks={tasks}/>)
            }
        </div>
    );
}

export default Home;