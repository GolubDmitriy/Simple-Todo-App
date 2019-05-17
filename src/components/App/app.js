import React from 'react';
import AppHeader from '../App-header/app-header';
import TodoList from '../Todo-list/todo-list';
import AddItem from '../Add-item/add-item'
import {maxId, todoData} from '../../constants/constants';
import './app.css';

export default class App extends React.Component{

    maxId = maxId

    state = {
        todoData: todoData
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);
            const newArr = [...before, ...after];
            return {
                todoData: newArr
            }
        })
    }

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++,
            done: false
        };

        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, important: !oldItem.important};
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);
            const newArr = [...before, newItem, ...after];
            return {
                todoData: newArr
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done};
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);
            const newArr = [...before, newItem, ...after];
            return {
                todoData: newArr
            }
        })
    }

    render() {
        return (
            <div className="main">
                <AppHeader />
                <TodoList 
                    todos={this.state.todoData} 
                    onDeleted={ this.deleteItem }
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <AddItem addItemClick={ this.addItem }/>
            </div>
        )
    }
}
