// eslint-disable-next-line import/default
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";
import styles from "./Layout.module.scss";

function Layout():JSX.Element {
    return (
        <React.Fragment>
            <div className={styles.layout}>
                <Header />
                <Outlet />
            </div>
        </React.Fragment>
    );
}

export default Layout