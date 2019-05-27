import React from 'react';
import { connect } from 'react-redux';

const TaskItem = (props) => {
    const element = props.todoData.filter(el => {
        return el.id === +props.match.params.taskId;
    })[0];
    const day = element.createdAtDate.getDate();
    const month = element.createdAtDate.getMonth() + 1;
    const year = element.createdAtDate.getFullYear(); 
    const hour = element.createdAtDate.getHours();
    const minutes = element.createdAtDate.getMinutes();
    const seconds = element.createdAtDate.getSeconds();
    let timeDone = null;
    let timeComplete = null;
    let strTimeComplete = '';
    if (element.done) {
        const dayDone = element.doneAtDate.getDate();
        const monthDone = element.doneAtDate.getMonth() + 1;
        const yearDone  = element.doneAtDate.getFullYear();
        const hourDone  = element.doneAtDate.getHours();
        const minutesDone  = element.doneAtDate.getMinutes();
        const secondsDone  = element.doneAtDate.getSeconds();
        timeDone = dayDone + '.' + monthDone + '.' + yearDone + ' ' + hourDone + ':' + minutesDone + ':' + secondsDone;
        timeComplete = Math.floor((element.doneAtDate.getTime() - element.createdAtDate.getTime()) / 1000);
        if (timeComplete > 59) {
            strTimeComplete = Math.floor(timeComplete / 60) + ' мин. ' + (timeComplete % 60) + ' сек.' 
        } else {
            strTimeComplete = (timeComplete % 60) + ' сек.'
        }
    }
    return <div>
        <p>Задача: { element.label }</p>
        <p>Создана: { day + '.' + month + '.' + year + ' ' + hour + ':' + minutes + ':' + seconds }</p>
        <p>{ element.done ? 'Выполнена: ' + timeDone + ' за ' + strTimeComplete : 'Выполняется' }</p>
    </div>
};

const mapToState = (state) => {
    return {todoData: state};
}

const WrappedTaskItem = connect(mapToState)(TaskItem)

export default WrappedTaskItem;
