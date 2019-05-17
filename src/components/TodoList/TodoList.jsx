import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './todo-list.css';

const TodoList = ( { todos, onDeleted,
                    onToggleImportant,
                    onToggleDone } ) => {
    
    const elements = todos.map((element) => {

        const { id, ...elementProps } = element;

        return (
            <li key={ id } className="list-group-item">
                <TodoListItem 
                { ...elementProps } 
                onDeleted={ () => onDeleted(id) }
                onToggleDone={ () => onToggleDone(id) }
                onToggleImportant={ () => onToggleImportant(id) }/>
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;
