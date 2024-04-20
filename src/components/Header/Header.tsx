import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <svg className={styles.header__logo}><use xlinkHref="/sprite.svg#logo" />
                </svg>
            </Link>
            <ul className={styles.header__items}>
                <li className={styles.header__item}>
                    <Link to="/">
                        Products
                    </Link>
                </li>
                <li className={styles.header__item}>
                    <Link to="#">
                        Categories
                    </Link>
                </li>
                <li className={styles.header__item}>
                    <Link to="#">
                        About us
                    </Link>
                </li>
            </ul>
            <div className={styles.header__icons}>
                <Link to="#">
                    <svg className={styles.header__iconCart}><use xlinkHref="/sprite.svg#cart" /></svg>
                </Link>
                <Link to="#">
                    <svg className={styles.header__iconUser}><use xlinkHref="/sprite.svg#user" /></svg>
                </Link>
            </div>
        </header>
    )
}
