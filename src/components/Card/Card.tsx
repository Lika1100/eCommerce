import styles from "./Card.module.scss";
import cn from "classnames";
import Text from "components/Text";
import Button from "components/Button";

export type CardProps = {
    id: number;
    title?: string;
    description?: string;
    images: string[];
    price?: number;
    className?: string
};

const Card: React.FC<CardProps> = ({ id, title, description, images, price, className }) => {
    return (
        <div className={cn(className, styles.card)} key={id}>
            <img className={styles.card__image} src={images[0]} alt="card" />
            <div className={styles.card__titleContainer}>
                <Text children={title} view='p-20' maxLines={2} weight='bold' color='primary' />
                <Text children={description} view='p-16' maxLines={3} color="secondary" />
                <div className={styles.card__footer}>
                    <Text children={`$${price}`} view='p-18' weight='bold' />
                    <Button children="Add to Cart" />
                </div>
            </div>
        </div>
    )
}

export default Card
