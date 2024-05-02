import Text from 'components/Text';
import styles from "./About.module.scss"

export default function About() {
  return (
    <div className={styles.about}>
        <Text view="title" tag="h2">
            Products
        </Text>
        <Text view='p-20' className={styles.about__text}>
            We display products based on the latest products we have, if you want
            to see our old products please enter the name of the item
        </Text>
    </div>
  )
}
