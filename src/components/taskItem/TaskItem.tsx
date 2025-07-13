import { useState, type FC } from "react";
import type { Task } from "../../types/Task";
import styles from "./taskItem.module.css";
import { Card, Tag, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import CreateModal from "../createModal/CreateModal";
import { useDispatch } from "react-redux";
import type { TaskCreate } from "../../types/Task";
import { addTask } from "../../store/mainSlice";
import { useNavigate } from "react-router-dom";

const { Paragraph } = Typography;

type TaskItemProps = {
    data: Task;
};

const statusColors: Record<string, string> = {
    "To Do": "default",
    "In Progress": "processing",
    "Done": "success",
};

const priorityColors: Record<string, string> = {
    Low: "green",
    Medium: "orange",
    High: "red",
};

const categoryColors: Record<string, string> = {
    Bug: "magenta",
    Feature: "cyan",
    Documentation: "geekblue",
    Refactor: "volcano",
    Test: "purple",
};

const TaskItem: FC<TaskItemProps> = ({ data }) => {
    const navigate = useNavigate()
    const [modal, setOpen] = useState(false)
    const dispatch = useDispatch()

    const submit = (data:TaskCreate) => {
        dispatch(addTask(data))
    }

    return (
        <div className={styles.card} onClick={()=>{navigate(`/task/${data?.id}`)}}>
            <CreateModal initialOpen={modal} setInitial={setOpen} submitter={submit}/>
            <Card
                title={data.title}
                bordered={true}
                actions={[
                <EditOutlined key="edit" onClick={(e)=>{e.stopPropagation(), setOpen(true)}}/>,
                ]}
            >
                {data.description && (
                <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                    {data.description}
                </Paragraph>
                )}

                <div className={styles.tags}>
                <Tag color={categoryColors[data.category] || "blue"}>
                    {data.category}
                </Tag>
                <Tag color={statusColors[data.status] || "default"}>
                    {data.status}
                </Tag>
                <Tag color={priorityColors[data.priority] || "default"}>
                    {data.priority}
                </Tag>
                </div>
            </Card>
        </div>
    );
};

export default TaskItem;