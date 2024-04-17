import styles from "./FooterMenu.module.css";

export type FooterMenuProps = {
    forwardPage: void,
    nextPage: void
}

export const FooterMenu: React.FC<FooterMenuProps> = ({ forwardPage, nextPage }) => {
    return (
        <div className={styles.footer_menu}>
            <button onClick={() => forwardPage}>back</button>
            <button onClick={() => nextPage}>next</button>
        </div>
    )
}
