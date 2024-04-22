import cn from "classnames";
import { Link, useParams } from "react-router-dom";
import styles from "./FooterButtonLinks.module.scss";

function FooterButtonLinks() {
    const { page = "1" } = useParams()
    const totalButtons = 7
    const arrayOfButtons: (number | string)[] = []
    for (let i = 0; i < totalButtons; i++) {
        arrayOfButtons.push(i + 1)
    }

    return (
        <>
            {<div className={styles.footer}>
                {arrayOfButtons.map((button, i) => {
                    return <Link key={i}
                        to={`/${button}`}
                        className={cn(styles.footer__link,
                            { [styles.footer__link_active]: +page === button })}>
                        {button}
                    </Link>
                })}
            </div>}
        </>
    );

}

export default FooterButtonLinks 