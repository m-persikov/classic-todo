import { ADD_TASK, GET_TASKS, REMOVE_TASK } from '../actions/todoActions';

const defaultState = {
    todoLists: []
}

export const todosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                todoLists: [...state.todoLists, action.payload]
            }

        case REMOVE_TASK:
            return {
                ...state,
                todoLists: state.todoLists.filter(task => task.id !== action.payload)
                // todoLists: [...state.todoLists, state.todoLists.filter(task => task.id !== action.payload)]
            }

        case GET_TASKS:
            console.log(action.payload);
            return {
                ...state,
                todoLists: [...state.todoLists, ...action.payload]
            }
        default:
            return state;
    }
}