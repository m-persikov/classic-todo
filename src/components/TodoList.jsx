import { TodoItem } from './TodoItem';

export const TodoList = ({ data }) => {
    return (
        <>
            {data?.map((task, i) => (<TodoItem key={i} task={task} />))}
        </>
    )
}