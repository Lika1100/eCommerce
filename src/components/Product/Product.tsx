/**@jsxFrag Loader */
/**@jsx Text*/
import { useParams } from "react-router-dom";
import Button from "components/Button";
import Loader from "components/Loader";
import Text from "components/Text";
import baseUrl from "configs/baseUrl";
import useFetch from "configs/useFetch";
import useNavigatePages from "configs/useNavigatePages";
import ListOfProducts from "types/listOfProducts";
import styles from "./Product.module.scss";


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
                        <Text view='title' maxLines={2} weight='bold' color='primary' tag="h2">{res.product.title}</Text>
                        <Text view='p-20' maxLines={3} color="secondary">{res.product.description}</Text>
                        <Text view='title' weight='bold' className='contentSlot' tag="h2">{`$${res.product.price}`} </Text>
                        <div className={styles.card__footerButtons}>
                            <Button disabled={false} className={""}>Buy now</Button>
                            <Button className={styles.card__button} disabled={false}>Add to Cart</Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Product
