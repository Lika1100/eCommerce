import cn from "classnames";
import styles from "./Button.module.scss"
import Loader from "components/Loader";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ loading, children, className, disabled, ...props }) => {
    return (
        <button
            className={cn(styles.button, className)}
            disabled={disabled || loading}
            {...props}
        >
            {loading && <Loader size='s' color="#fff" />}
            {children}
        </button>
    )
};

export default Button;