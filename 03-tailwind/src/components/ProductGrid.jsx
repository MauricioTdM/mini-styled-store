import { ProductCard } from './ProductCard';
import { SkeletonCard } from './SkeletonCard';
import { products } from '../data/products';

export const ProductGrid = ({ isLoading }) => {
    const SKELETON_COUNT = products.length;

    return (
        <div className="
      grid
      grid-cols-1        /* Padrão (até 480px): 1 coluna */
      xs:grid-cols-2    /* A partir de 481px: 2 colunas */
      sm:grid-cols-3    /* A partir de 769px: 3 colunas */
      lg:grid-cols-4    /* A partir de 1025px: 4 colunas */
      gap-md            /* Espaçamento (nosso token --spacing-md) */
      pt-[80px] pb-md px-md /* Paddings */
    ">
            {isLoading
                ? Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))
                : products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </div>
    );
};