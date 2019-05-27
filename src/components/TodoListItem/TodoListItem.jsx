import React from 'react';
import './TodoListItem.css';
import { Link } from 'react-router-dom';

class TodoListItem extends React.Component {

    render() {
        
        const { label, onDeleted, 
                onToggleDone, onToggleImportant,
                important, done, id } = this.props;

        const classNamesFunc = () => {
            let classNames = 'todo-list-item';

            if (done) {
                classNames += ' done';
            }
            
            if (important) {
                classNames += ' important'
            }

            return classNames;
        };

        return (
            <span className="todo-list-item">
                <Link to={ 'task-item/' + id }>
                    <span className={classNamesFunc()}>
                        { label }
                    </span>
                </Link>
                <button className="btn btn-sm btn-important"
                    onClick= { onToggleImportant }
                    type="submit">
                    !
                </button>
                <button className="btn  btn-sm btn-done"
                    onClick={ onToggleDone }
                    type="submit">
                    Done
                </button>
                <button className="btn  btn-sm btn-closed"
                    onClick={ onDeleted }
                    type="submit">
                    X
                </button>
            </span>
        );
    }
}

export default TodoListItem;
