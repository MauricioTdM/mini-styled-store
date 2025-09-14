import { useTheme } from '../contexts/ThemeContext';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { CartIcon } from './icons/CartIcon';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <span className={styles.logo}>Mini Loja</span>
                <div className={styles.controls}>
                    <button
                        className={styles.themeToggle}
                        onClick={toggleTheme}
                        aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
                    >
                        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                    </button>
                    <div className={styles.cartBadge}>
                        <CartIcon />
                        <span className={styles.cartBadgeCount}>3</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};