import {useEffect, useState, type FC} from "react";
import styles from "./homePage.module.css"
import TaskList from "../../components/taskList/TaskList";
import { useDispatch } from "react-redux";
import getTasks from "../../queries/getTasks";
import { addTask, setTasks } from "../../store/mainSlice";
import ActionButton from "../../components/actionButton/ActionButton";
import CreateModal from "../../components/createModal/CreateModal";
import type { TaskCreate } from "../../types/Task";

const HomePage: FC = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const submit = (data:TaskCreate) => {
        dispatch(addTask(data))
    }
    /*
    Это надо будет раскомментить когда будет готов бек, чекните кстати, я даже запросы написал в папке querries
    const dispatch = useDispatch()
    useEffect(()=>{
        const refresh = async () => {
            try{
                const ans = await getTasks()
                dispatch(setTasks(ans))
            }
            catch(error){

            }
        }
        refresh()
    }, [])
    */

    return (
    <>
        <CreateModal initialOpen={open} setInitial={setOpen} submitter={submit}/>


        <div className={styles.wrapper}>
            <div className={styles.subcont}>
                <h1>Create task</h1>
                <ActionButton onClick={()=>{setOpen(true)}}>Create</ActionButton>
            </div>
            <TaskList />
        </div>
    </>
    );
}


export default HomePage;