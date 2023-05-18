import { v4 as uuidv4 } from 'uuid';


export const TASKS = [
    {
        id: uuidv4(),
        title: 'Task 1',
        description: 'Task 1 description',
        state: 'TODO',
    },
    {
        id: uuidv4(),
        title: 'Task 2',
        description: 'Task 2 description',
        state: 'TODO',
    },
    {
        id: uuidv4(),
        title: 'Task 3',
        description: 'Task 3 description',
        state: 'TODO',
    },
]