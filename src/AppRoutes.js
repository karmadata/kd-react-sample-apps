import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App_Home from './App_Home/App_Home';
import App1 from './App1/App1';
import App2 from './App2/App2';

const AppRoutes = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/app1">App1</Link></li>
                <li><Link to="/app2">App2</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={App_Home}/>
            <Route path="/app1" component={App1}/>
            <Route path="/app2" component={App2}/>
        </div>
    </Router>
)
export default AppRoutes
