import styled from 'styled-components';
import { ProductCard } from './ProductCard';
import { SkeletonCard } from './SkeletonCard';
import { products } from '../data/products';

const GridWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: ${({ theme }) => theme.spacing.md};
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  
  /* Requisito: Grid Responsivo (Mobile-first) */
  grid-template-columns: 1fr; /* ≤480px */

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ProductGrid = ({ isLoading }) => {
    const SKELETON_COUNT = products.length;

    return (
        <GridWrapper>
            {isLoading
                ? Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))
                : products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </GridWrapper>
    );
};