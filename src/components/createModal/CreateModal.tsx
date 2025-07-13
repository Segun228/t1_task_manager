import type { FC } from "react";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./createModal.module.css";

import type { RootState } from "../../types/RootState";
import type { TaskCreate } from "../../types/Task";

import { MdOutlineCancel } from "react-icons/md";
import CreateTaskField from "../createTaskField/CreateTaskField";

type CreateModalProps = {
    initialOpen: boolean;
    setInitial: (open: boolean) => void;
    onClose?: () => void;
    submitter: (task: TaskCreate) => Promise<void> | void;
};

const CreateModal: FC<CreateModalProps> = ({ initialOpen, setInitial, onClose = () => {}, submitter }) => {
    const [open, setOpen] = useState<boolean>(initialOpen || false);
    const [error, setError] = useState<string | null>(null);

    const dispatch = useDispatch();

    useEffect(() => {
        setOpen(initialOpen);
    }, [initialOpen]);

    const handleClose = () => {
        setOpen(false);
        setInitial(false);
        onClose();
    };

    const handleSubmit = async (task: TaskCreate) => {
        try {
        await submitter(task);
        setOpen(false);
        setInitial(false);
        } catch (err) {
        console.error(err);
        setError("Error while creating or updating task");
        setOpen(true);
        setInitial(true);
        }
    };

    if (!open) return null;

    return createPortal(
        <>
        <div className={styles.background} onClick={handleClose}>
            <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
                <MdOutlineCancel className={styles.cancel} onClick={handleClose} />
                <div className={styles.title}>Create Task</div>
                <CreateTaskField sender={handleSubmit} />
                {error && <div className={styles.error}>⚠ {error}</div>}
            </div>
        </div>
        </>,
        document.body
    );
};

export default CreateModal;