import { observer } from "mobx-react-lite";
import Card from "components/Card";
import { ProductModel } from "store/models/products";
import styles from "./Products.module.scss"


type ProductsProps = {
    list: ProductModel[],
}

const Products = ({list}: ProductsProps) => {
    return (
    <div className={styles.scrollableDiv}>
      <div className={styles.cards} id="scrollableDiv">
        {list
            .map(({ price, images, description, id, title }) => {
                return (
                    <div key={id}>
                        <Card price={price} images={images} id={id}
                            description={description} title={title}
                            key={id} className={styles.cards__item}
                        />
                    </div>
                )
        })}
      </div>
    </div>   
    )
}

export default observer(Products)

