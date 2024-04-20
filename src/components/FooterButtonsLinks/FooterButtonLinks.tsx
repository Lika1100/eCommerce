import styles from "./FooterButtonLinks.module.scss";
import Button from "components/Button";
import cn from "classnames";
import useNavigatePages from "configs/useNavigatePages";
import { useParams } from "react-router-dom";

function FooterButtonLinks() {
    const { page = "1" } = useParams()
    const { goToChosenPage } = useNavigatePages(page)
    const totalButtons = 7
    const arrayOfButtons: (number | string)[] = []
    for (let i = 0; i < totalButtons; i++) {
        arrayOfButtons.push(i + 1)
    }

    return (
        <div className={styles.footer}>
            {arrayOfButtons.map((button, i) => {
                return <Button key={i} children={button}
                    onClick={() => goToChosenPage(button)}
                    className={cn(styles.footer__button,
                        { [styles.footer__button_active]: +page === button })} />
            })}
        </div>
    );

}

export default FooterButtonLinks 