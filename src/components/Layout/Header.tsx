import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <Link to="/" className={styles.header__logo}>
                    <svg><use xlinkHref="/sprite.svg#logo" />
                    </svg>
                </Link>
                <nav className={styles.header__items}>
                        <Link to="/" className={styles.header__item}>
                            Products
                        </Link>
                        <Link to="#"  className={styles.header__item}>
                            Categories
                        </Link>
                        <Link to="#" className={styles.header__item}>
                            About us
                        </Link>
                </nav>
                <nav className={styles.header__icons}>
                    <Link to="#" className={styles.header__iconCart}>
                        <svg><use xlinkHref="/sprite.svg#cart" /></svg>
                    </Link>
                    <Link to="#" className={styles.header__iconUser}>
                        <svg><use xlinkHref="/sprite.svg#user" /></svg>
                    </Link>
                </nav>
            </header>
        </>
    )
}
