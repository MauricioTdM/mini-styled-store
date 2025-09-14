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
        <div className="
      group flex flex-col overflow-hidden /* 'group' ativa o group-hover em elementos filhos */
      bg-card-bg border border-border rounded-lg shadow-low 
      transition-all duration-200 
      hover:-translate-y-1 hover:shadow-medium /* Efeito de hover (elevação e sombra) */
    ">
            <img
                className="aspect-square w-full object-cover"
                src={product.imageUrl}
                alt={product.title}
                loading="lazy"
            />

            <div className="flex flex-1 flex-col p-md">
                {product.tag && (
                    <span className="
            self-start rounded-full bg-green-100 px-3 py-1 text-sm 
            font-semibold text-green-800 dark:bg-green-900 dark:text-green-300
          ">
                        {product.tag}
                    </span>
                )}

                <h3 className="
          mt-2 min-h-[2.8em] font-bold text-text 
          line-clamp-2 /* Requisito: Título com 2 linhas e ellipsis */
        ">
                    {product.title}
                </h3>

                <p className="mt-2 text-yellow-500">★ {product.rating}</p>

                <p className="mt-1 text-2xl font-bold text-text">
                    {formatPrice(product.price)}
                </p>

                <div className="mt-auto pt-md">
                    <Button disabled={isDisabled} variant="solid" aria-label={`Adicionar ${product.title} ao carrinho`}>
                        Adicionar
                    </Button>
                </div>
            </div>
        </div>
    );
};