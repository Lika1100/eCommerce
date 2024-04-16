import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { useNavigate } from "react-router-dom";
import { Card } from "../Card/Card";

//?limit=9&offset=3
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

export function Products() {
    const navigate = useNavigate();
    function handleClick(productId: number) {
        navigate(`/${productId}`)
    }
    const [products, setProducts] = useState<ListOfProducts[]>([])
    useEffect(() => {
        axios.get<ListOfProducts[]>(baseUrl)
            .then(res => setProducts(res.data))
    }, [products])

    return (
        <div className={styles.cards_wrap}>
            {products.map(({ price, images, description, id, title }: ListOfProducts) => {
                return (
                    <div onClick={() => handleClick(id)}>
                        <Card price={price} images={images} id={id} description={description} title={title} key={id} className={styles.card} />
                    </div>
                )
            })}
        </div>
    )
}

