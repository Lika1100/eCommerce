import { useParams } from "react-router-dom";
import FooterButtonLinks from "components/FooterButtonsLinks";
import useNavigatePages from "configs/useNavigatePages";
import styles from "./FooterNavigation.module.scss";

const FooterNavigation = (): JSX.Element => {
    const { page = "1" } = useParams()
    const { back, next } = useNavigatePages(page)
    return (
        <div className={styles.menu}>
            <svg onClick={back} className={styles.menu__arrow}>
                <use xlinkHref="/sprite.svg#arrow" />
            </svg>
            <FooterButtonLinks />
            <svg onClick={next} className={styles.menu__arrow}>
                <use xlinkHref="/sprite.svg#arrowRight" />
            </svg>
        </div>
    )
}

export default FooterNavigation
