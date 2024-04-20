import styles from "./Products.module.scss";
import { useParams } from "react-router-dom";
import Card from "components/Card";
import Loader from "components/Loader";
import baseUrl from "configs/baseUrl";
import limit from "configs/limit";
import useFetch from "configs/useFetch";
import { useMemo } from "react";
import ListOfProducts from "types/listOfProducts";
import useNavigatePages from "configs/useNavigatePages";
import FooterNavigation from "components/FooterNavigation";

const Products = () => {
    const { page = "1" } = useParams()
    const { goToProduct } = useNavigatePages(page)

    const query = useMemo(() => ({ limit, offset: limit * +page - limit }), [limit, page])
    const res = useFetch<ListOfProducts[]>(baseUrl, query)

    if (res.loading) {
        return <Loader size="l" className={styles.products__loader} />
    }

    return (
        <>
            <div className={styles.cards}>
                {!res.loading && res.product !== null && res.product
                    .map(({ price, images, description, id, title }: ListOfProducts) => {
                        return (
                            <div onClick={() => goToProduct(id)} key={id}>
                                <Card price={price} images={images} id={id}
                                    description={description} title={title}
                                    key={id} className={styles.cards__item}
                                />
                            </div>
                        )
                    })}
            </div>
            <FooterNavigation page={page} />
        </>
    )
}

export default Products

