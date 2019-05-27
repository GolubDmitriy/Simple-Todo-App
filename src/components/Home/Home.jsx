import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Hello = ({todoData}) => {
    const allTask = todoData.length;
    const allTaskDone = todoData.filter(el => el.done)

    return (<div>
        <h1>Hello User!</h1>
        <p>Всего задач: { allTask } из них выполнено { allTaskDone.length }</p>
        <Link to="todo">
            Перейти к списку задач
        </Link>
    </div>)
}

const mapToState = (state) => {
    return {todoData: state};
}

const WrappedHello = connect(mapToState)(Hello)

export default WrappedHello;
