import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TodoItem } from './TodoItem';
import { fetchTasks } from '../store/asyncActions/fetchTasks';

export const TodoList = () => {
    const dispatch = useDispatch();
    const { todoLists, loading } = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    return (
        <>
            {loading
                ? <h2>Loading...</h2>
                : todoLists?.map(task => (<TodoItem key={task.id} task={task} />))
            }
        </>
    )
}