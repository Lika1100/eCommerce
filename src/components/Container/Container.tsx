import cn from "classnames";
import styles from "./Container.module.scss";

export type ContainerProps = {
    maxWidth: "s" | "m" | "l",
    fixed: boolean,
    className?: string,
}

const Container: React.FC<ContainerProps> = ({ maxWidth, fixed, className, ...props }) => {
    const style = {
        maxWidth,
        fixed,
        ...props
    }
    return (
        <div style={style} className={cn(className, styles[maxWidth], styles.container)}></div>
    )
}

export default Container
