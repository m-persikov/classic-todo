import { useDispatch } from "react-redux"
import { data } from "../../api/data"
import { getTasks } from "../actions/todoActions"

// export const fetchTasks = () => dispatch => {
//     console.log(dispatch);
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => dispatch(getTasks(data)))
// }

export const fetchTasks = () => dispatch => {
    data.then(res => dispatch(getTasks(res)))
}