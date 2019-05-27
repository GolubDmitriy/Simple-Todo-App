import React from 'react';
import WrappedAppHeader from '../AppHeader/AppHeader';
import WrappedTodoList from '../TodoList/TodoList';
import WrappedAddItem from '../AddItem/AddItem';
import FilterBar from '../FilterBar/FilterBar';
import { Link } from 'react-router-dom';
import './App.css';

export default class App extends React.Component{

    render() {
        return (
            <div className="main">
                <WrappedAppHeader />
                <WrappedTodoList />
                <WrappedAddItem />
                <FilterBar />
                <Link to="/">
                    Перейти на страницу Home
                </Link>
            </div>
        );
    }
}
