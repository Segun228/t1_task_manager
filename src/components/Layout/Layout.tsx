import type {FC} from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "../header/Header";
import AppFooter from "../footer/Footer";


const Layout:FC = () => {
    return ( 
        <>
            <AppHeader/>
            <Outlet />
            <AppFooter />
        </>
    );
}

export default Layout;