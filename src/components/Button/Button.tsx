/**@jsx Loader */

import cn from "classnames";
import Loader from "components/Loader";
import styles from "./Button.module.scss"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean
    children: React.ReactNode
    className: string
    disabled: boolean
};

// eslint-disable-next-line react/prop-types
const Button: React.FC<ButtonProps> = ({ loading, children, className, disabled }): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className)}
            disabled={disabled || loading}
        >
            {loading && <Loader size='s' color="#fff" />}
            {children}
        </button>
    )
};

export default Button;