import { useParams } from "react-router-dom";
import styles from "./Product.module.scss";
import Text from "components/Text";
import Button from "components/Button";
import useFetch from "configs/useFetch";
import baseUrl from "configs/baseUrl";
import ListOfProducts from "types/listOfProducts";
import useNavigatePages from "configs/useNavigatePages";
import Loader from "components/Loader";


const Product = () => {
    const { productId = "1", page = "1" } = useParams();
    const { backToProducts } = useNavigatePages(page)
    const res = useFetch<ListOfProducts>(`${baseUrl}/${productId}`)

    if (res.loading) {
        return <Loader size="l" className={styles.card__loader} />
    }

    return (
        <>
            {!res.loading && res.product !== null && (
                <div className={styles.card} key={res.product.id}>
                    <svg onClick={backToProducts} className={styles.card__arrow}>
                        <use xlinkHref="/sprite.svg#arrow" />
                    </svg>
                    <img className={styles.card__image} src={res.product.images[0]} alt="card" />
                    <div className={styles.card__titleContainer}>
                        <Text children={res.product.title} view='title' maxLines={2} weight='bold' color='primary' tag="h2" />
                        <Text children={res.product.description} view='p-20' maxLines={3} color="secondary" />
                        <Text children={`$${res.product.price}`} view='title' weight='bold' className='contentSlot' tag="h2" />
                        <div className={styles.card__footerButtons}>
                            <Button children="Buy now" />
                            <Button className={styles.card__button} children="Add to Cart" />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Product
