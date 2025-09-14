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
            <main>
                <div className="container">
                <ProductGrid isLoading={isLoading} />
                </div>
            </main>
        </>
    );
}

export default App;