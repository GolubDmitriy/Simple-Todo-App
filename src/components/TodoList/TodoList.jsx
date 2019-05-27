import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import { connect } from 'react-redux';
import './TodoList.css';

const TodoList = ( { todoData, dispatch } ) => {
    
    const elements = todoData.map((element) => {

        if (element.visible) {

            const { id } = element;

            return (
                <li key={ id } className="list-group-item">
                    <TodoListItem 
                    { ...element } 
                    onDeleted={ () => dispatch({type: 'DELETE', id}) }
                    onToggleDone={ () => dispatch({type: 'TOOGLE_DONE', id}) }
                    onToggleImportant={ () => dispatch({type: 'TOOGLE_IMPORTANT', id}) }/>
                </li>
            );
        }

        return null

    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

const mapToState = (state) => {
    return {todoData: state};
}

const WrappedTodoList = connect(mapToState)(TodoList)

export default WrappedTodoList;
