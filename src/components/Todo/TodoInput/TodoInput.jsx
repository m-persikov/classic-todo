import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../store/actions/todoActions";

import styles from './TodoInput.module.css';

export const TodoInput = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handlerAddTask = () => {
        dispatch(addTask({
            id: new Date().toISOString(),
            name: value,
            completed: false
        }));
        setValue('');
    }

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handlerAddTask}> add </button>
        </div>
    )
}