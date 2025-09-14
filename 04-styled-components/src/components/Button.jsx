import styled, { css } from 'styled-components';

const solidVariant = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    border-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const outlineVariant = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.cardBg};
  }
`;

const ghostVariant = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid transparent;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary}20; /* Adiciona 20% de opacidade */
  }
`;

const StyledButton = styled.button`
  /* Estilos base para todas as variantes */
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 10px 16px;
  font-weight: 600;
  text-align: center;
  transition: background-color ${({ theme }) => theme.transition}, color ${({ theme }) => theme.transition};
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Aplica o bloco de estilo correto com base na prop 'variant' */
  ${({ variant }) => {
        switch (variant) {
            case 'outline':
                return outlineVariant;
            case 'ghost':
                return ghostVariant;
            case 'solid':
            default:
                return solidVariant;
        }
    }}
`;

export const Button = (props) => {
    return <StyledButton {...props} />;
};