import cn from "classnames";
// eslint-disable-next-line import/default
import React from "react";
import { useParams } from "react-router-dom";
import Button from "components/Button";
import useNavigatePages from "configs/useNavigatePages";
import styles from "./FooterButtonLinks.module.scss";

function FooterButtonLinks() {
    const { page = "1" } = useParams()
    const { goToChosenPage } = useNavigatePages(page)
    const totalButtons = 7
    const arrayOfButtons: (number | string)[] = []
    for (let i = 0; i < totalButtons; i++) {
        arrayOfButtons.push(i + 1)
    }

    return (
        <React.Fragment>
            {<div className={styles.footer}>
                {arrayOfButtons.map((button, i) => {
                    return <Button key={i}
                        onClick={() => goToChosenPage(button)}
                        className={cn(styles.footer__button,
                            { [styles.footer__button_active]: +page === button })} disabled={false}>
                        {button}
                    </Button>
                })}
            </div>}
        </React.Fragment>
    );

}

export default FooterButtonLinks 