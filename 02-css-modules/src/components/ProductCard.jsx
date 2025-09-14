import { useTheme } from '../contexts/ThemeContext';
import { Button } from './Button';
import styles from './ProductCard.module.css';

const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
};

export const ProductCard = ({ product }) => {
    const { theme } = useTheme();
    const isDisabled = false;

    const cardClassName = `${styles.card} ${theme === 'dark' ? styles.dark : ''}`;

    return (
        <div className={cardClassName}>
            <img className={styles.image} src={product.imageUrl} alt={product.title} loading="lazy" />
            <div className={styles.content}>
                {product.tag && (<span className={styles.tag}>{product.tag}</span>)}
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.rating}>★ {product.rating}</p>
                <p className={styles.price}>{formatPrice(product.price)}</p>
                <Button disabled={isDisabled} variant="solid" aria-label={`Adicionar ${product.title} ao carrinho`}>
                    Adicionar
                </Button>
            </div>
        </div>
    );
};