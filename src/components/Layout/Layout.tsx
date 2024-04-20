import Header from "components/Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

export default function Layout() {
    return (
        <div className={styles.layout}>
            <Header />
            <Outlet />
        </div>
    );
}