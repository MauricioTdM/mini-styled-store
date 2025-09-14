import { useTheme } from '../contexts/ThemeContext';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { CartIcon } from './icons/CartIcon';

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="
      fixed top-0 left-0 w-full h-[60px] z-[1000] /* Posicionamento fixo */
      bg-card-bg border-b border-border shadow-low /* Cores, borda e sombra a partir das nossas variáveis */
      transition-colors duration-200 /* Animação */
    ">
            <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-md">
                <span className="font-bold text-text">Mini Loja</span>

                <div className="flex items-center gap-md">
                    <button
                        onClick={toggleTheme}
                        aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
                        className="flex items-center justify-center w-9 h-9 rounded-full text-text
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                    </button>

                    <div className="relative text-text">
                        <CartIcon />
                        <span className="absolute -top-2 -right-2 flex items-center justify-center 
                           min-w-[20px] h-5 px-1 bg-red-600 text-white 
                           rounded-full text-xs font-bold">
                            3
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};