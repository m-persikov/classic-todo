export const data = new Promise((resolve, reject) => {
    const tasks = [
        {
            id: 1,
            title: 'Bear',
            completed: true
        },
        {
            id: 2,
            title: 'Whisky',
            completed: true
        },
    ]
    setTimeout(() => {
        resolve(tasks)
    }, 1000);
})