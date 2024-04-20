import cn from "classnames";
// eslint-disable-next-line import/default
import React from "react";
import Loader from "components/Loader";
import styles from "./Button.module.scss"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean
    children: React.ReactNode
    className: string
    disabled: boolean
};

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