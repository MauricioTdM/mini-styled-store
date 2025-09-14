import styles from './Button.module.css';

export const Button = ({
    children,
    onClick,
    disabled = false,
    variant = 'solid',
    ...props
}) => {
    const buttonClassName = `${styles.btn} ${styles[variant]}`;

    return (
        <button
            className={buttonClassName}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};