import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../../store/asyncActions/fetchTasks';

import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = () => {
    const dispatch = useDispatch();
    const { todoLists, loading } = useSelector(state => state.tasks);

    //TODO: fix duplicate requests!
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