import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TodoItem } from './TodoItem';
import { fetchTasks } from '../store/asyncActions/fetchTasks';

export const TodoList = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const todoLists = useSelector(state => state.tasks.todoLists);

    useEffect(() => {
        dispatch(fetchTasks());
        setLoading(false);
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