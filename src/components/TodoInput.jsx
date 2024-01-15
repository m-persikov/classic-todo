import { useEffect, useState } from "react";

export const TodoInput = ({ setData }) => {
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState('');

    const addTask = () => {
        setTasks([
            ...tasks,
            {
                id: new Date().toISOString(),
                title: value,
                completed: false
            }
        ]);
        setValue('');
    }

    useEffect(() => {
        setData(tasks);
    }, [tasks]);

    return (
        <>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={addTask}> add </button>
            {/* {tasks?.map((task, i) => <h3 key={i}>{task.title}</h3>)} */}
        </>
    )
}