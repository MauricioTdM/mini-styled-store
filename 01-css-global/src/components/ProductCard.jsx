import { Button } from './Button';

const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);
};

export const ProductCard = ({ product }) => {
    const isDisabled = false;

    return (
        <div className="product-card">
            <img
                className="product-card__image"
                src={product.imageUrl}
                alt={product.title}
                loading="lazy"
            />
            <div className="product-card__content">
                {product.tag && (
                    <span className="product-card__tag">{product.tag}</span>
                )}
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__rating">★ {product.rating}</p>
                <p className="product-card__price">{formatPrice(product.price)}</p>

                <Button disabled={isDisabled} variant="solid" aria-label={`Adicionar ${product.title} ao carrinho`}>
                    Adicionar
                </Button>
            </div>
        </div>
    );
};