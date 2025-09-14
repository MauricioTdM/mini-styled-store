# Versão 3: Estilização com Tailwind CSS

Esta implementação da "Mini Loja" utiliza [Tailwind CSS](https://tailwindcss.com/), um framework "utility-first" que permite construir interfaces complexas compondo classes utilitárias diretamente no JSX.

Esta versão usa especificamente o **Tailwind CSS v4.1**, que introduz uma forma inovadora de configurar o tema diretamente no arquivo CSS.

---

## Principais Características

A filosofia é não escrever CSS customizado. Em vez de criar uma classe `.product-card`, aplicamos um conjunto de classes que definem seu estilo: `flex flex-col bg-card-bg rounded-lg shadow-low...`.

### 1. Estilização Direta no JSX

Todo o estilo dos componentes reside em suas props `className`. Isso inclui layout, cores, tipografia e espaçamento.

### 2. Design Responsivo e Estados com Variantes

A responsividade e os estados (hover, focus, etc.) são controlados por prefixos diretamente nas classes.

- **Responsividade:** `grid-cols-1 xs:grid-cols-2 sm:grid-cols-3`
- **Estados:** `hover:-translate-y-1`, `focus-visible:ring-2`, `disabled:opacity-50`

### 3. Dark Mode Híbrido

A troca de tema é particularmente elegante. O `ThemeContext` adiciona a classe `.dark` ao `<html>`, o que troca o valor das nossas Variáveis CSS globais (`--color-card-bg`, etc.). Como as classes do Tailwind (`bg-card-bg`) usam essas variáveis, elas se atualizam **automaticamente**, sem a necessidade de adicionar o prefixo `dark:` para a maioria das nossas cores customizadas.

### 4. Lógica de Variantes no Componente

A lógica para as variantes do `Button` (`solid`, `outline`, `ghost`) está inteiramente dentro do componente `Button.jsx`. Um `switch` seleciona a string correta de classes utilitárias a ser aplicada com base na prop `variant`.

## Estrutura de Arquivos

- `src/index.css`: Contém as diretivas `@tailwind`, a configuração `@theme` com todos os tokens, e estilos globais mínimos.
- `src/components/*.jsx`: Onde 99% do trabalho de estilização acontece.

## Como Executar

1. Navegue até esta pasta.
2. Rode `npm install` para instalar as dependências.
3. Rode `npm run dev` para iniciar o servidor de desenvolvimento.