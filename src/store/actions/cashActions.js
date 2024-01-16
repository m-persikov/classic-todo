export const ADD_CASH = 'ADD_CASH';
export const GET_CASH = 'GET_CASH';

export const addCash = number => {
    return {
        type: ADD_CASH,
        payload: number
    }
}

export const getCash = number => {
    return {
        type: GET_CASH,
        payload: number
    }
}