import cn from "classnames";
import styles from "./Button.module.css"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /** Состояние загрузки */
    loading?: boolean;
    /** Текст кнопки */
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ loading, children, className, disabled, ...props }) => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.button_disabled]: disabled,
                [styles.button_load]: loading,
                [styles.button_active]: !loading && !disabled,
                /* [styles.button_hover_load_not_disabled]: loading && disabled, */
                [styles.button_hover_load]: loading && !disabled,
            })}
            disabled={disabled || loading}
            {...props}
        >
            {/* {loading && <Loader className="loader-button" size='s' />} */}
            {children}
        </button>
    )
};

export default Button;