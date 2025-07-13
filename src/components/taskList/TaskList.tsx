import type { FC } from "react";
import styles from "./taskList.module.css";
import Loader from "../loader/Loader";
import TaskItem from "../taskItem/TaskItem";
import type { RootState } from "./../../types/RootState";
import { useSelector } from "react-redux";


const TaskList: FC = () => {
    const tasks = useSelector((state:RootState) => state?.main?.tasks)
    return (
        <div className={styles.taskContainer}>
        {tasks && tasks.length > 0 ? (
            tasks.map((task) => (
            <TaskItem data={task} key={task.id} />
            ))
        ) : (
            <Loader />
        )}
        </div>
    );
};

export default TaskList;