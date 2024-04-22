import { Outlet } from "react-router-dom";
import Container from "components/Container";
import Header from "./Header";
//import s from "./Layout.module.scss";

function Layout():JSX.Element {
    return (
            <Container>
                <Header />
                <Outlet />
            </Container>
    );
}

export default Layout