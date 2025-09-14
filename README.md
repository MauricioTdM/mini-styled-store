# Exercício de Estilização em React: Mini Loja

Este projeto é uma resposta prática a "Atividade 6 - Estilização em React 'Mini Loja'" do curso Desenvolvedor Full Stack Jr. da +praTi em parceria com a Codifica Edu. O objetivo principal é implementar a mesma interface de usuário (uma "Mini Loja") utilizando quatro abordagens de estilização diferentes e populares no ecossistema React.

A finalidade é explorar, comparar e entender as vantagens, desvantagens e fluxos de trabalho de cada técnica em um cenário prático.

---

## Funcionalidades Implementadas

A interface da "Mini Loja" é consistente em todas as quatro versões e inclui as seguintes funcionalidades:

- **Navbar Fixa:** Com logo, um toggle de tema e um badge de carrinho.
- **Tema Claro/Escuro:** Com persistência de dados no `localStorage`.
- **Grid de Produtos Responsivo:** O layout da grade se adapta a 4 breakpoints diferentes, de 1 a 4 colunas.
- **Cards de Produto Detalhados:** Com imagem, título com elipse, preço, rating e tags.
- **Componente de Botão com Variantes:** `solid`, `outline`, e `ghost`.
- **Estados Interativos:** Efeitos de `hover`, `focus-visible` e estado `disabled`.
- **Loading Skeletons:** Para simular o carregamento de dados sem causar "layout shift".
- **Acessibilidade:** Foco na navegação por teclado, uso de atributos `aria-*` e bom contraste de cores.

## As Quatro Versões

O projeto está dividido em quatro pastas, cada uma contendo uma implementação completa e independente.

### 1. [CSS Global](./01-css-global/)
> A abordagem clássica. Um arquivo CSS centralizado com Variáveis CSS para tokens e um seletor de atributo `[data-theme]` para o modo escuro.

### 2. [CSS Modules](./02-css-modules/)
> Estilos escopados localmente para cada componente. Evita conflitos de classes e a lógica de composição de estilos é feita no JSX.

### 3. [Tailwind CSS](./03-tailwind/)
> Uma abordagem "utility-first". A estilização é construída diretamente no JSX compondo classes utilitárias. Utiliza a versão **v4.1** com configuração de tema via `@theme`.

### 4. [styled-components](./04-styled-components/)
> Uma abordagem "CSS-in-JS". Os estilos são escritos em JavaScript, criando componentes React que já vêm com seus estilos embutidos. O tema é gerenciado via `<ThemeProvider>` e as variantes são controladas por `props`.

---

## Como Navegar e Executar

Cada pasta é um projeto Vite autônomo. Para executar qualquer uma das versões:

1. **Navegue até a pasta desejada** no terminal:
   ```bash
   cd 01-css-global
   # ou cd 02-css-modules, etc.
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

## Stack Tecnológico Principal

- **React 18**
- **Vite**
- **Context API** (para o gerenciador de tema)
