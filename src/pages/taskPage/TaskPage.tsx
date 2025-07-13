import { useState, type FC } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../types/RootState";
import { Card, Tag, Typography, Button, Empty, Modal } from "antd";
import { ArrowLeftOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./taskPage.module.css";
import { deleteTask, editTask } from "../../store/mainSlice";
import type { Task, TaskCreate } from "../../types/Task";
import EditTaskField from "../../components/editTaskField/EditTaskField";

const { Title, Paragraph } = Typography;

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
    Bug: "red",
    Feature: "blue",
    Documentation: "gold",
    Refactor: "purple",
    Test: "cyan",
};

const TaskPage: FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { id } = useParams();
    const numericId = Number(id);

    const task = useSelector((state: RootState) =>
        state.main.tasks.find((t) => t.id === numericId)
    );

    const [modalOpen, setModalOpen] = useState(false);

    const submit = async (updatedFields: TaskCreate) => {
        if (!task) return;
        const updatedTask: Task = { ...task, ...updatedFields };
        dispatch(editTask(updatedTask));
        setModalOpen(false);
    };

    const handleDelete = () => {
        dispatch(deleteTask(task?.id))
        navigate("/")
    }

    if (!task) {
        return (
            <div
                style={{
                    width: "100%",
                    maxWidth: 800,
                    backgroundColor: "#fff",
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.12)",
                    borderRadius: "12px",
                    border: "1px solid #d9d9d9",
                    marginTop: "2rem",
                }}
            >
                <Card>
                    <Empty description="Task not found" />
                    <Link to="/">
                        <Button icon={<ArrowLeftOutlined />} style={{ marginTop: 16 }}>
                            Back to tasks
                        </Button>
                    </Link>
                </Card>
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            <div style={{ maxWidth: 800, margin: "2rem auto" }}>
                <Card
                    bordered
                    actions={[
                        <EditOutlined key="edit" onClick={() => setModalOpen(true)} />,
                        <DeleteOutlined key="delete" onClick={() => handleDelete()} />
                    ]}
                    title={<Title level={3}>{task.title}</Title>}
                    extra={
                        <Link to="/">
                            <Button icon={<ArrowLeftOutlined />}>Back</Button>
                        </Link>
                    }
                >
                    <Paragraph>
                        <strong>Description:</strong>{" "}
                        {task.description || <i>No description provided.</i>}
                    </Paragraph>

                    <div style={{ marginTop: "1rem" }}>
                        <Tag color={categoryColors[task.category]}>{task.category}</Tag>
                        <Tag color={statusColors[task.status]}>{task.status}</Tag>
                        <Tag color={priorityColors[task.priority]}>{task.priority}</Tag>
                    </div>
                </Card>

                <Modal
                    open={modalOpen}
                    onCancel={() => setModalOpen(false)}
                    footer={null}
                    title="Edit Task"
                    destroyOnClose
                >
                    <EditTaskField initialValues={task} sender={submit} />
                </Modal>
            </div>
        </div>
    );
};

export default TaskPage;