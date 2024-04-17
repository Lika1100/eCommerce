import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <div>
                <svg className={styles.header_logo}><use xlinkHref="/sprite.svg#logo" /></svg>
            </div>
            <div>
                <ul className={styles.header_nav}>
                    <li>
                        Products
                    </li>
                    <li>
                        Categories
                    </li>
                    <li>
                        About us
                    </li>
                </ul>
            </div>
            <div className={styles.header_cart}>
                <svg className={styles.cart}><use xlinkHref="/sprite.svg#cart" /></svg>
                <svg className={styles.user}><use xlinkHref="/sprite.svg#user" /></svg>
            </div>
        </div>
    )
}
