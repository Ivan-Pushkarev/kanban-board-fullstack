import logo from './img/Logo.svg';
import './App.css';
import "animate.css"
import 'bootstrap/dist/css/bootstrap.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {useState} from "react";
import EditForm from "./EditForm";
import CreateForm from "./CreateForm";
import Home from "./Home";

function App() {
    
   const [logoClass, setLogoClass] = useState("animate__flipOutY animate__animated animate__slower")

    const logoHandler = () => {
        setLogoClass("animate__flipInY animate__animated animate__slower")
        setTimeout(() => {
            setLogoClass("animate__flipOutY animate__animated animate__slower")
        }, 20000)
    }
    
    return (
        <Router>
            <div className="container todo px-0">
                <div className="header">
                    <div>
                        <h1>Kanban Board</h1>
                        <h3>Для студентов курса Full Stack</h3>
                    </div>
                    <div className="logo-border">
                        <div className="logo">
                            <a href="https://pasv.us/">
                                <img src={logo} alt="logo" onAnimationEnd={logoHandler}
                                 className={logoClass}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="todo-content">
                    <div className="button-create">
                        <Link to="/create">
                            <button className="btn btn-outline-secondary">Create New Task</button>
                        </Link>
                        <Link to="/">
                            <button className="btn btn-outline-secondary">Home</button>
                        </Link>
                    </div>
                    <Switch>
                        <Route path="/create">
                            <CreateForm />
                        </Route>
                        <Route path="/edit/:taskId">
                            <EditForm />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    
    )
    
}

export default App;
