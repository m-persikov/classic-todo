import { getTasks } from "../actions/todoActions"

export const fetchTasks = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch(getTasks(data)))
}