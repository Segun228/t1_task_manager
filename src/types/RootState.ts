import type { Task } from './Task';

export type RootState = {
    main: {
        tasks: Task[];
    };
};