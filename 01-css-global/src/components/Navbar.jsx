import { useTheme } from '../contexts/ThemeContext';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { CartIcon } from './icons/CartIcon';

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <span className="navbar__logo">Mini Loja</span>

                <div className="navbar__controls">
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
                    >
                        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                    </button>

                    <div className="cart-badge">
                        <CartIcon />
                        <span className="cart-badge__count">
                            3
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};