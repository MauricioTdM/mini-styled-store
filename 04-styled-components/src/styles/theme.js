const baseTokens = {
    spacing: {
        md: '16px',
    },
    radius: {
        lg: '8px',
    },
    shadows: {
        low: '0.3px 0.5px 0.7px hsl(220 3% 15% / 0.34), 0.4px 0.8px 1px -1.2px hsl(220 3% 15% / 0.34), 1px 2px 2.5px -2.5px hsl(220 3% 15% / 0.34)',
        medium: '0.3px 0.5px 0.7px hsl(220 3% 15% / 0.36), 0.8px 1.6px 2px -0.8px hsl(220 3% 15% / 0.36), 2.1px 4.1px 5.2px -1.7px hsl(220 3% 15% / 0.36), 5px 10px 12.6px -2.5px hsl(220 3% 15% / 0.36)',
    },
    transition: '200ms',
};

export const lightTheme = {
    ...baseTokens,
    colors: {
        background: '#f8f9fa',
        text: '#212529',
        border: '#dee2e6',
        cardBg: '#ffffff',
        primary: '#007bff',
        primaryHover: '#0056b3',
    },
};

export const darkTheme = {
    ...baseTokens,
    colors: {
        background: '#121212',
        text: '#f8f9fa',
        border: '#444',
        cardBg: '#1e1e1e',
        primary: '#3f9eff',
        primaryHover: '#5caaff',
    },

    shadows: {
        low: '0.3px 0.5px 0.7px hsl(220 40% 2% / 0.34), 0.4px 0.8px 1px -1.2px hsl(220 40% 2% / 0.34), 1px 2px 2.5px -2.5px hsl(220 40% 2% / 0.34)',
        medium: '0.3px 0.5px 0.7px hsl(220 40% 2% / 0.36), 0.8px 1.6px 2px -0.8px hsl(220 40% 2% / 0.36), 2.1px 4.1px 5.2px -1.7px hsl(220 40% 2% / 0.36), 5px 10px 12.6px -2.5px hsl(220 40% 2% / 0.36)',
    },
};