import { ProductCard } from './ProductCard';
import { SkeletonCard } from './SkeletonCard';
import { products } from '../data/products'; 

export const ProductGrid = ({isLoading }) => {
    const SKELETON_COUNT = products.length;

    return (
        <div className="product-grid">
            {isLoading
                ?
                Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))
                :
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
        </div>
    );
};