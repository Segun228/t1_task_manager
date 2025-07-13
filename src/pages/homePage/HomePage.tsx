import type {FC} from "react";
import styles from "./homePage.module.css"
import TaskList from "../../components/taskList/TaskList";


const HomePage: FC = () => {
    return (
    <>
        <div className={styles.wrapper}>
            <TaskList />
        </div>
    </>
    );
}


export default HomePage;