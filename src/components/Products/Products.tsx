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

const limit = 9

export type PageProps = {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export const Products: React.FC<PageProps> = ({ page, setPage }) => {

    const navigate = useNavigate();


    function back() {
        setPage((prev) => {
            if (prev === 1) {
                return 1
            }
            return prev - 1
        })
        navigate(`/${page}`)
    }
    function next() {
        setPage((prev) => {
            return prev + 1
        })
        navigate(`/${page}`)
    }

    function handleClick(productId: number) {
        navigate(`${productId}`)
    }

    const [products, setProducts] = useState<ListOfProducts[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetch = async () => {
            const result = await axios({
                method: 'get',
                url: baseUrl
            });

            setProducts(result.data
                .map((raw: ListOfProducts) => {
                    return {
                        id: raw.id,
                        description: raw.description,
                        images: raw.images,
                        price: raw.price,
                        title: raw.title
                    }
                })
                .slice(page * limit - limit, page * limit)
            )
        }
        fetch();
        setLoading(false)
    }, [page, location])


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

