import styled from 'styled-components';
import { Button } from './Button';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.low};
  transition: transform ${({ theme }) => theme.transition}, box-shadow ${({ theme }) => theme.transition};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const CardImage = styled.img`
  aspect-ratio: 1 / 1;
  width: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.md};
`;

const Tag = styled.span`
  align-self: flex-start;
  border-radius: 999px;
  background-color: #e0f2f1; /* Cor de fundo para a tag */
  padding: 4px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #00796b; /* Cor do texto para a tag */
`;

const Title = styled.h3`
  margin-top: 8px;
  min-height: 2.8em;
  font-weight: 600;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Rating = styled.p`
  margin-top: 8px;
  color: #f8c200;
`;

const Price = styled.p`
  margin-top: 4px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  margin-top: auto; /* Empurra o botão para o final */
  padding-top: ${({ theme }) => theme.spacing.md};
`;

const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);
};

export const ProductCard = ({ product }) => {
    const isDisabled = false;

    return (
        <CardWrapper>
            <CardImage src={product.imageUrl} alt={product.title} loading="lazy" />
            <CardContent>
                {product.tag && <Tag>{product.tag}</Tag>}
                <Title>{product.title}</Title>
                <Rating>★ {product.rating}</Rating>
                <Price>{formatPrice(product.price)}</Price>
                <ButtonContainer>
                    <Button disabled={isDisabled} variant="solid" aria-label={`Adicionar ${product.title} ao carrinho`}>
                        Adicionar
                    </Button>
                </ButtonContainer>
            </CardContent>
        </CardWrapper>
    );
};