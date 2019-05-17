import React from 'react';
import './todo-list-item.css';

class TodoListItem extends React.Component {

    render() {
        
        const { label, onDeleted, 
                onToggleDone, onToggleImportant,
                important, done } = this.props

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done';
        }
        
        if (important) {
            classNames += ' important'
        }

        return (
            <span className="todo-list-item">
                <span className={classNames}
                    onClick={ onToggleDone }>
                    { label }
                </span>
                <button className="btn btn-sm btn-important"
                    onClick= { onToggleImportant }
                    type="submit">
                    !
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
