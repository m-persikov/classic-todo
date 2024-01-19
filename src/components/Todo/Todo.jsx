import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList';

import styles from './Todo.module.css';

export const Todo = () => {
    return (
        <div className={styles.todo}>
            <h1>TODO</h1>
            <TodoInput />
            <TodoList />
        </div>
    )
}