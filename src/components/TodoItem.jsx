import style from './TodoItem.module.css';

export const TodoItem = ({ task }) => {
    return (
        <div className={style.item}>
            <span>{task.title}</span>
            <button>x</button>
        </div>
    )
}