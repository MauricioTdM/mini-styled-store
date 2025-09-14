import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ProductGrid } from './components/ProductGrid';
import { products } from './data/products';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <div className="container">
                    <ProductGrid products={products} isLoading={isLoading} />
                </div>
            </main>
        </>
    );
}

export default App;