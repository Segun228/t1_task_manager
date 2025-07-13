export type Task = {
    id: number,
    title: string,
    description?: string,
    category: 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test',
    status: 'To Do' | 'In Progress' | 'Done',
    priority: 'Low' | 'Medium' | 'High',
};


export type TaskCreate = {
    title: string,
    description?: string,
    category: 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test',
    status: 'To Do' | 'In Progress' | 'Done',
    priority: 'Low' | 'Medium' | 'High',
};