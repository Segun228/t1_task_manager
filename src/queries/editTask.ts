import { BASE_URL } from '../../config';
import axios from "axios";
import type { Task, TaskCreate } from "../types/Task";

const editTask = async (id: number, data: TaskCreate): Promise<Task | undefined> => {
    try {
        if (!id || !data?.title || !data.category || !data.priority || !data.status) {
            throw new Error("invalid fields given");
        }

        const response = await axios.put<Task>(`${BASE_URL}api/${id}`, data);
        return response?.data;
    } catch (error) {
        console.error(error);
        return undefined;
    }
};

export default editTask;