import { useDispatch } from 'react-redux';
import { removeTask } from '../store/actions/todoActions';

import style from './TodoItem.module.css';

export const TodoItem = ({ task }) => {
    const dispatch = useDispatch();

    const hendlerDeleteTask = () => dispatch(removeTask(task.id));

    return (
        <div className={style.item}>
            <span>{task.name}</span>
            <button onClick={hendlerDeleteTask}>x</button>
        </div>
    )
}