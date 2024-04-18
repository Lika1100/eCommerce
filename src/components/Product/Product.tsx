import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ListOfProducts, PageProps } from "../Products/Products";
import { baseUrl } from "../Products/Products";
import styles from "./Product.module.css";
import Text from "../Text/Text";
import Button from "../Button/Button";

export const Product: React.FC<PageProps> = ({ page }) => {
    const { productId } = useParams();
    const navigate = useNavigate();

    function goBack() {
        navigate(`/${page}`)
    }

    const [product, setProduct] = useState<ListOfProducts | null>(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get<ListOfProducts>(`${baseUrl}/${productId}`)
            .then(res => {
                setProduct(res.data)
                setLoading(false)
            })
    }, [productId])
    console.log(productId, page)
    return (
        <div className={styles.product}>
            <button className={styles.arrow_block} onClick={goBack}>
                <svg className={styles.arrow}><use xlinkHref="/sprite.svg#arrow" /></svg>
                назад
            </button>

            {!loading && product !== null && (
                <div className={styles.card} key={product.id}>
                    <div className={styles.img_container}>
                        <img className={styles.card__image} src={product.images[0]} alt="card" />
                    </div>
                    <div className={styles.cardTitle_container}>
                        <Text children={product.title} view='title' maxLines={2} weight='bold' color='primary' tag="h2" />
                        <Text children={product.description} view='p-20' maxLines={3} color="secondary" />
                        <div className={styles.footer_container}>
                            <Text children={`$${product.price}`} view='title' weight='bold' className='contentSlot' tag="h2" />
                            <div className={styles.footer_button}>
                                <Button children="Buy now" />
                                <Button className={styles.card_button} children="Add to Cart" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
