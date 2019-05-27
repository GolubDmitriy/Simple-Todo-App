let maxId = 100;

const todoData = [
    {label: 'Выпить колы', important: false, id: 1, done: false, createdAtDate: new Date(), doneAtDate: null, visible: true},
    {label: 'Сделать ДЗ', important: true, id: 2, done: false, createdAtDate: new Date(), doneAtDate: null, visible: true},
    {label: 'Пообедать', important: false, id: 3, done: false, createdAtDate: new Date(), doneAtDate: null, visible: true}
];

const maxIdInc = () => maxId++

export {maxIdInc, todoData};
