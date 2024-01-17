import { useDispatch } from 'react-redux';
import { removeTask } from '../../../store/actions/todoActions';

import Trash from '../../../assets/trash-icon.svg';

import styles from './TodoItem.module.css';

export const TodoItem = ({ task }) => {
    const dispatch = useDispatch();

    const hendlerDeleteTask = () => dispatch(removeTask(task.id));

    return (
        <div className={styles.item}>
            <input type="checkbox" />
            <span>{task.name}</span>
            <img className={styles.close} onClick={hendlerDeleteTask} src={Trash} alt="trash" width={20} />
        </div>
    )
}