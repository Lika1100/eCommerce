import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { useNavigate } from "react-router-dom";
import { Card } from "../Card/Card";

export const baseUrl = "https://api.escuelajs.co/api/v1/products";
export interface Category {
    id: number,
    name: string,
    image: string,
    creationAt: string,
    updatedAt: string
}
export interface ListOfProducts {
    id: number,
    title?: string,
    price?: number,
    description?: string,
    images: string[],
    category: Category,
}

export const Products = () => {
    const numOfProducts = 9
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(1)

    function back() {
        navigate(`/${page - 1}`)
        setPage(() => {
            if (page === 1) {
                return 1
            }
            return page - 1
        })
    }
    function next() {
        navigate(`/${page + 1}`)
        setPage(() => {
            return page + 1
        })
    }

    function handleClick(productId: number) {
        navigate(`/id/${productId}`)
    }

    const [products, setProducts] = useState<ListOfProducts[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios.get<ListOfProducts[]>(`${baseUrl}?limit=${numOfProducts}&offset=${page * numOfProducts - numOfProducts}`)
            .then(res => {
                setProducts(res.data)
                setLoading(false)
            })
    }, [page])

    if (loading) {
        return "loading"
    }

    return (
        <div>
            <div className={styles.cards_wrap}>
                {!loading && products.map(({ price, images, description, id, title }: ListOfProducts) => {
                    return (
                        <div onClick={() => handleClick(id)} key={id}>
                            <Card price={price} images={images} id={id} description={description} title={title} key={id} className={styles.card} />
                        </div>
                    )
                })}
            </div>
            <div className={styles.menu}>
                <button onClick={back}>
                    <svg className={styles.arrow_left}><use xlinkHref="/sprite.svg#arrow" /></svg>
                </button>
                <button onClick={next}>
                    <svg className={styles.arrow_right}><use xlinkHref="/sprite.svg#arrowRight" /></svg>
                </button>
            </div>
        </div>
    )
}

