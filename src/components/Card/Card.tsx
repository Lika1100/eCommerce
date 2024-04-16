import Text from "../Text/Text";
import Button from "../Button/Button";
import styles from "./Card.module.css";
import cn from "classnames";

export type CardProps = {
    id: number;
    title?: string;
    description?: string;
    images: string[];
    price?: number;
    className?: string
};

export const Card: React.FC<CardProps> = ({ id, title, description, images, price, className }) => {
    return (
        <div className={cn(styles.card, className)} key={id}>
            <div className={styles.img_container}>
                <img className={styles.card__image} src={images[0]} alt="card" />
            </div>
            <div className={styles.cardTitle_container}>
                {/* {captionSlot !== undefined && <Text view='p-14' children={captionSlot} color='secondary' className='captionSlot' />} */}
                <Text children={title} view='p-20' maxLines={2} weight='bold' color='primary' />
                <Text children={description} view='p-16' maxLines={3} color="secondary" />
                <div className={styles.footer_container}>
                    <Text children={`$${price}`} view='p-18' weight='bold' className='contentSlot' />
                    <div className={styles.footer_button}>
                        <Button className={styles.card_button} children="Add to Cart" />
                    </div>
                </div>
            </div>
        </div>
    )
}
