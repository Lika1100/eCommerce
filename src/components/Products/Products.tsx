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

export type ProductsProps = {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export const Products: React.FC<ProductsProps> = ({ page, setPage }) => {
    const numOfProducts = 9
    const navigate = useNavigate();

    function back(page: number) {
        setPage(prev => prev - 1)
        navigate(`/${page}`)
    }
    function next(page: number) {
        setPage(prev => prev + 1)
        navigate(`/${page}`)
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
                <button onClick={() => back(page)}>
                    <svg className={styles.arrow_left}><use xlinkHref="/sprite.svg#arrow" /></svg>
                </button>
                <button onClick={() => next(page)}>
                    <svg className={styles.arrow_right}><use xlinkHref="/sprite.svg#arrowRight" /></svg>
                </button>
            </div>
        </div>
    )
}

