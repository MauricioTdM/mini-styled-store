import { ProductCard } from './ProductCard';
import { SkeletonCard } from './SkeletonCard';
import { products } from '../data/products';
import styles from './ProductGrid.module.css';

export const ProductGrid = ({ isLoading }) => {
    const SKELETON_COUNT = products.length;

    return (
        <div className={styles.productGrid}>
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