import type { FC } from "react";
import { useForm } from "antd/es/form/Form";
import { Form, Input, Select, Button } from "antd";
import type { Task } from "../../types/Task";

type EditTaskFieldProps = {
    initialValues: Task;
    sender: (task: Task) => void | Promise<void>;
};

const categories = ["Bug", "Feature", "Documentation", "Refactor", "Test"];
const statuses = ["To Do", "In Progress", "Done"];
const priorities = ["Low", "Medium", "High"];

const EditTaskField: FC<EditTaskFieldProps> = ({ sender, initialValues }) => {
    const [form] = useForm();

    const handleSubmit = async (values: Task) => {
        await sender({ ...initialValues, ...values });
    };

    return (
        <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ maxWidth: 600, width: "100%" }}
        initialValues={initialValues}
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

        <Form.Item name="category" label="Category">
            <Select>
            {categories.map((c) => (
                <Select.Option key={c} value={c}>
                {c}
                </Select.Option>
            ))}
            </Select>
        </Form.Item>

        <Form.Item name="status" label="Status">
            <Select>
            {statuses.map((s) => (
                <Select.Option key={s} value={s}>
                {s}
                </Select.Option>
            ))}
            </Select>
        </Form.Item>

        <Form.Item name="priority" label="Priority">
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
            Save Changes
            </Button>
        </Form.Item>
        </Form>
    );
};

export default EditTaskField;