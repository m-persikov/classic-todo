import { Todo } from "../../components/Todo"

import styles from './MainPage.module.css';

export const MainPage = () => {
    return (
        <div className={styles.MainPage}>
            <h1>Main</h1>
            <Todo />
        </div>
    )
}