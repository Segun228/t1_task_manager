import { BASE_URL } from './../../config';
import axios from "axios";
import type {Task} from "./../types/Task"


const getTasks = async (): Promise<Task[]> => {
    try{
        const ans = await axios.get<Task[]>(BASE_URL+`api/`)
        return ans?.data
    }
    catch(error){
        console.error(error)
        return []
    }
}

export default getTasks