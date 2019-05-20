import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import TodoList from '../TodoList/TodoList';
import AddItem from '../AddItem/AddItem';
import {maxId, todoData} from '../../constants/constants';
import './app.css';

export default class App extends React.Component{
    maxId = maxId

    state = {todoData}

    deleteItem = (id) => {
        const todoData = this.state.todoData.filter(el => el.id !== id);
        this.setState({todoData});
    }

    deleteAll = () => {
        this.setState({
            todoData: []
        });
    }

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++,
            done: false
        };

        this.setState({
            todoData: [...this.state.todoData, newItem]
        });
    }

    onToggleImportant = (id) => {
        const todoData = this.state.todoData.map((el) => {
            if (el.id === id ) {
                el.important = !el.important
            }
            return el;
        })
        
        this.setState({todoData});
    }

    onToggleDone = (id) => {
        const todoData = this.state.todoData.map((el) => {
            if (el.id === id ) {
                el.done = !el.done
            }
            return el;
        })
        
        this.setState({todoData});
    }

    render() {
        return (
            <div className="main">
                <AppHeader deleteAll={ this.deleteAll } />
                <TodoList 
                    todos={ this.state.todoData } 
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }/>
                <AddItem addItemClick={ this.addItem }/>
            </div>
        );
    }
}
