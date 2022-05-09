import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter as Router, BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOM.render(
    <React.Fragment>
        <BrowserRouter>
            <Router>
                <Provider store={store}>
                    <App/>
                </Provider>
            </Router>
        </BrowserRouter>
    </React.Fragment>,
    document.getElementById('root')
);

