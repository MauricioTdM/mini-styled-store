export const Button = ({
    children,
    onClick,
    disabled = false,
    variant = 'solid', // 'solid', 'outline', 'ghost'
    ...props 
}) => {

    const baseClasses = `
    w-full rounded-lg px-4 py-2.5 text-center font-semibold 
    transition-colors duration-200
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
    disabled:cursor-not-allowed disabled:opacity-50
  `;

    let variantClasses = '';
    switch (variant) {
        case 'outline':
            variantClasses = `
        bg-transparent text-primary border border-primary
        hover:bg-primary hover:text-card-bg
        focus-visible:ring-primary
      `;
            break;
        case 'ghost':
            variantClasses = `
        bg-transparent text-primary border border-transparent
        hover:bg-primary/15
        focus-visible:ring-primary
      `;
            break;
        case 'solid':
        default:
            variantClasses = `
        bg-primary text-white border border-primary
        hover:bg-primary-hover hover:border-primary-hover
        focus-visible:ring-primary
      `;
            break;
    }

    return (
        <button
            className={`${baseClasses} ${variantClasses}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};