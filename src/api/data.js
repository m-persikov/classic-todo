export const data = new Promise((resolve, reject) => {
    const tasks = [
        {
            id: 1,
            name: 'Bear',
            completed: true
        },
        {
            id: 2,
            name: 'Whisky',
            completed: true
        },
    ]
    setTimeout(() => {
        resolve(tasks)
    }, 1500);
})