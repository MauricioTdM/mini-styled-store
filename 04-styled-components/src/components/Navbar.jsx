import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { CartIcon } from './icons/CartIcon';
import { Container } from './Container';

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 1000;
  
  /* Acessando o tema para cores, bordas e sombras */
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.low};
  transition: background-color ${({ theme }) => theme.transition}, border-color ${({ theme }) => theme.transition};
`;

const NavContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.span`
  font-weight: bold;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ThemeToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.text};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const CartBadgeWrapper = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.text};
`;

const CartBadgeCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 2px;
  background-color: red;
  color: white;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: bold;
`;

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <NavWrapper>
            <NavContainer>
                <Logo>Mini Loja</Logo>
                <Controls>
                    <ThemeToggleButton
                        onClick={toggleTheme}
                        aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
                    >
                        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                    </ThemeToggleButton>
                    <CartBadgeWrapper>
                        <CartIcon />
                        <CartBadgeCount>3</CartBadgeCount>
                    </CartBadgeWrapper>
                </Controls>
            </NavContainer>
        </NavWrapper>
    );
};