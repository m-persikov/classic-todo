import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TodoItem } from './TodoItem';
import { fetchTasks } from '../store/asyncActions/fetchTasks';

export const TodoList = () => {
    const dispatch = useDispatch();
    const todoLists = useSelector(state => state.tasks.todoLists);

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    return (
        <>
            {todoLists?.map(task => (<TodoItem key={task.id} task={task} />))}
        </>
    )
}