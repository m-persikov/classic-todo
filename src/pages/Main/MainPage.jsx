import { Todo } from "../../components/Todo"

import styles from './MainPage.module.css';

export const MainPage = () => {
    return <div className={styles.MainPage}>
        <Todo />
    </div>
}