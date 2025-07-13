import type {FC} from "react";
import { Layout, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./header.module.css"


const { Header } = Layout;


const AppHeader: FC = () => {
    const navigate = useNavigate()
    return (
    <>
        <Header className={styles.header}>
            <div className={styles.logo} style={{cursor:"pointer"}} onClick={()=>{navigate("/")}}>Task Manager</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                <Menu.Item key="home">
                <Link to="/">Главная</Link>
                </Menu.Item>
            </Menu>
        </Header>
    </>
    );
}


export default AppHeader;