import { useState, type FC } from "react";
import type { Task } from "../../types/Task";
import styles from "./taskItem.module.css";
import { Card, Tag, Typography, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import EditTaskField from "../editTaskField/EditTaskField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTask, editTask } from "../../store/mainSlice";
import type { MouseEvent } from "react";


const { Paragraph } = Typography;

type TaskItemProps = {
    data: Task;
};

const statusColors: Record<string, string> = {
    "To Do": "default",
    "In Progress": "processing",
    Done: "success",
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
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const submit = async (updatedTask: Task) => {
        dispatch(editTask(updatedTask));
        setModalOpen(false);
    };


const handleDelete = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    dispatch(deleteTask(data?.id));
    navigate("/");
};

    return (
        <>
        <div
            className={styles.card}
            onClick={() => {
            navigate(`/task/${data.id}`);
            }}
        >
            <Card
            title={data.title}
            bordered={true}
            actions={[
                <EditOutlined
                key="edit"
                onClick={(e) => {
                    e.stopPropagation();
                    setModalOpen(true);
                }}
                />,
                <DeleteOutlined key="delete" onClick={(e) => handleDelete(e)} />
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

        <Modal
            open={modalOpen}
            onCancel={() => setModalOpen(false)}
            footer={null}
            title="Edit Task"
            destroyOnClose
        >
            <EditTaskField initialValues={data} sender={submit} />
        </Modal>
        </>
    );
};

export default TaskItem;