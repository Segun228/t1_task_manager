import type { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage: FC = () => {
    return (
        <div className={styles.container}>
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>Страница не найдена</p>
        <Link to="/" className={styles.link}>
            Вернуться на главную
        </Link>
        </div>
    );
};

export default NotFoundPage;