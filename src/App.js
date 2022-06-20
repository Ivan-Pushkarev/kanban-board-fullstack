import logo from './img/Logo.svg';
import './App.css';
import "animate.css"
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import EditForm from "./components/EditForm";
import CreateForm from "./components/CreateForm";
import Home from "./components/Home";

function App() {

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
                                <img src={logo} alt="logo"/>
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
