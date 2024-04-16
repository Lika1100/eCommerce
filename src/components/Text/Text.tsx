import cn from "classnames";
import styles from "./Text.module.css"

export type TextProps = {
    /** Дополнительный класс */
    className?: string;
    /** Стиль отображения */
    view?: 'title' | 'button' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
    /** Html-тег */
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
    /** Начертание шрифта */
    weight?: 'normal' | 'medium' | 'bold';
    /** Контент */
    children: React.ReactNode;
    /** Цвет */
    color?: 'primary' | 'secondary' | 'accent';
    /** Максимальное кол-во строк */
    maxLines?: number;
};

const Text: React.FC<TextProps> = ({ view, tag = "p", weight, children, color = "inherit", maxLines }) => {
    const Tag = tag
    return (
        <>
            <Tag className={view}
                style={{
                    fontWeight: weight, color: `var(--text-${color})`,
                    WebkitLineClamp: maxLines,
                    display: "-webkit-box", WebkitBoxOrient: "vertical",
                    overflow: maxLines !== undefined ? "hidden" : ""
                }}>
                {children}
            </Tag>
        </>
    )
}

export default Text;