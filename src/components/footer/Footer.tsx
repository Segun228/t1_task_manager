import type {FC} from "react";
import styles from "./footer.module.css"


const Footer: FC = () => {
    return (
    <>
        <footer className={styles.footer}>
            <p>© 2025 TaskManager. Все права защищены.</p>
        </footer>
    </>
    );
}


export default Footer;