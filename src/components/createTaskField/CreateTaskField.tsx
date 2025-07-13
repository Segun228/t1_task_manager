import type { FC } from "react";
import { useForm } from "antd/es/form/Form";
import { Form, Input, Select, Button } from "antd";
import type { TaskCreate } from "../../types/Task";

type CreateTaskFieldProps = {
    sender: (task: TaskCreate) => void | Promise<void>;
};

const categories = ["Bug", "Feature", "Documentation", "Refactor", "Test"];
const statuses = ["To Do", "In Progress", "Done"];
const priorities = ["Low", "Medium", "High"];

const CreateTaskField: FC<CreateTaskFieldProps> = ({ sender }) => {
    const [form] = useForm();

    const handleSubmit = async (values: TaskCreate) => {
        await sender(values);
        form.resetFields();
    };

    return (
        <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ maxWidth: 600, width: "100%" }}
        >
        <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Title is required" }]}
        >
            <Input placeholder="Enter task title" />
        </Form.Item>

        <Form.Item name="description" label="Description">
            <Input.TextArea placeholder="Optional description" rows={4} />
        </Form.Item>

        <Form.Item name="category" label="Category" initialValue="Bug">
            <Select>
            {categories.map((c) => (
                <Select.Option key={c} value={c}>
                {c}
                </Select.Option>
            ))}
            </Select>
        </Form.Item>

        <Form.Item name="status" label="Status" initialValue="To Do">
            <Select>
            {statuses.map((s) => (
                <Select.Option key={s} value={s}>
                {s}
                </Select.Option>
            ))}
            </Select>
        </Form.Item>

        <Form.Item name="priority" label="Priority" initialValue="Low">
            <Select>
            {priorities.map((p) => (
                <Select.Option key={p} value={p}>
                {p}
                </Select.Option>
            ))}
            </Select>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" block>
            Save Task
            </Button>
        </Form.Item>
        </Form>
    );
};

export default CreateTaskField;