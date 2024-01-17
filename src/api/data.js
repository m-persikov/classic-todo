export const data = new Promise((resolve, reject) => {
    const tasks = [
        {
            id: 1,
            name: 'Bear',
            completed: false
        },
        {
            id: 2,
            name: 'Whisky',
            completed: false
        },
    ]
    setTimeout(() => {
        resolve(tasks)
    }, 1500);
})