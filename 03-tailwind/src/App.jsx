import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ProductGrid } from './components/ProductGrid';

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
            <main className="max-w-7xl mx-auto">
                <ProductGrid isLoading={isLoading} />
            </main>
        </>
    );
}

export default App;