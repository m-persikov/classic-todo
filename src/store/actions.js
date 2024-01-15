import { ADD_CASH, GET_CASH } from './constants'

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