import { BASE_URL } from '../../config';
import axios from "axios";
import type {Task} from "../types/Task"


const deleteTask = async (id: number): Promise<boolean> => {
    try{
        if(!id){
            throw new Error("Invalid id given")
        }
        const ans = await axios.delete<Task[]>(BASE_URL+`api/${id}/`)
        return ans ? true : false
    }
    catch(error){
        console.error(error)
        return false
    }
}

export default deleteTask