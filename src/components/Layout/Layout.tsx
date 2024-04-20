/**@jsx Header*/
import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import styles from "./Layout.module.scss";

function Layout():JSX.Element {
    return (
        <div className={styles.layout}>
            <Header />
            <Outlet />
        </div>
    );
}

export default Layout