import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Home from './components/Home/Home';
import WrappedTaskItem from './components/TaskItem/TaskItem'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render((
    <Router>
        <Provider store={store}>
            <Route path="/todo" component={ App } />
            <Route exact path="/" component={ Home } />
            <Route path="/task-item/:taskId" component={ WrappedTaskItem } />
        </Provider>
    </Router>
), document.getElementById('root'));
