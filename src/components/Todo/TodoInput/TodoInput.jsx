import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../../store/actions/todoActions";

import styles from './TodoInput.module.css';

export const TodoInput = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const validateInput = () => {
        if (value === '') {
            console.log('warning')
            return;
        }

        return {
            id: new Date().toISOString(),
            name: value.trim(),
            completed: false
        }
    }

    const handlerAddTask = () => {
        const validTask = validateInput();
        validTask && dispatch(addTask(validTask));
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
            <button onClick={handlerAddTask}> Add </button>
        </div>
    )
}