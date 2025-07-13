import { BASE_URL } from '../../config';
import axios from "axios";
import type {Task, TaskCreate} from "../types/Task"


const createTask = async (data:TaskCreate): Promise<Task | undefined> => {
    try{
        if(!data || !data || !data.category || !data.priority || !data.status || !data.title ){
            throw new Error("invalid fields given")
        }
        const ans = await axios.post<Task>(BASE_URL+"api/", data)
        return ans?.data
    }
    catch(error){
        console.error(error)
        return undefined
    }
}

export default createTask