import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home/Home';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';

const AppRoutes = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Page1">Page1</Link></li>
                <li><Link to="/Page2">Page2</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/Page1" component={Page1}/>
            <Route path="/Page2" component={Page2}/>
        </div>
    </Router>
)
export default AppRoutes
