import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render((
    <Router>
        <Route path="/todo" component={ App } />
        <Route path="/home" component={ Home } />
    </Router>
), document.getElementById('root'));
