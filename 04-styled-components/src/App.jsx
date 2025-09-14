import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ProductGrid } from './components/ProductGrid';
import { useTheme } from './contexts/ThemeContext';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { Container } from './components/Container';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const { theme } = useTheme();

    const currentTheme = theme === 'light' ? lightTheme : darkTheme;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <StyledThemeProvider theme={currentTheme}>
            <GlobalStyles />
            <>
                <Navbar />
                <main>
                    <Container>
                        <ProductGrid isLoading={isLoading} />
                    </Container>
                </main>
            </>
        </StyledThemeProvider>
    );
}

export default App;