export const Button = ({
    children,
    onClick,
    disabled = false,
    variant = 'solid', // 'solid', 'outline', 'ghost'
    ...props
}) => {
    const className = `btn btn--${variant}`;

    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};