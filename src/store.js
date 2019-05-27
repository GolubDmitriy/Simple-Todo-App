import { todoData, maxIdInc } from './constants/constants';
import { createStore } from 'redux';

const initialState = todoData;

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'DELETE':
            return state.filter(el => el.id !== action.id);

        case 'DELETE_ALL':
            return [];

        case 'TOOGLE_DONE':
            const todoDataDone = state.map((el) => {
                if (el.id === action.id ) {
                    el.done = !el.done;
                    el.doneAtDate = new Date();
                }
                return el;
            }) 
            return todoDataDone;

        case 'TOOGLE_IMPORTANT':
            const todoDataImportant = state.map((el) => {
                if (el.id === action.id ) {
                    el.important = !el.important
                }
                return el;
            }) 
            return todoDataImportant;

        case 'ADD':
            const newItem = {
                label: action.text,
                important: false,
                id: maxIdInc(),
                done: false,
                createdAtDate: new Date(),
                doneAtDate: null,
                visible: true
            };
            return [...state, newItem];

        case 'FILTER_ALL':
        return state.map(el => {
            el.visible = true
            return el;
        });
    
        case 'FILTER_DONE':
            return state.map(el => {
                if (!el.done) {
                    el.visible = false;
                } else {
                    el.visible = true;
                }
                return el;
            });

        case 'FILTER_ACTIVE':
            return state.map(el => {
                if (el.done) {
                    el.visible = false;
                } else {
                    el.visible = true;
                }
                return el;
        });
        
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
