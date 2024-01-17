export const ADD_TASK = 'ADD_TASK';
export const GET_TASKS = 'GET_TASKS';
export const REMOVE_TASK = 'REMOVE_TASK';

export const addTask = task => {
    console.log(task)
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const getTasks = tasks => {
    return {
        type: GET_TASKS,
        payload: tasks
    }
}

export const removeTask = id => {
    return {
        type: REMOVE_TASK,
        payload: id
    }
}