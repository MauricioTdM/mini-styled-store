# Versão 2: Estilização com CSS Modules

Esta implementação da "Mini Loja" utiliza [CSS Modules](https://github.com/css-modules/css-modules), uma abordagem que escopa os estilos localmente para cada componente, evitando conflitos de classes em escala.

---

## Principais Características

A principal filosofia do CSS Modules é que "todos os estilos são locais por padrão". Cada componente React importa seu próprio arquivo `.module.css`, e as classes definidas nele são transformadas em nomes únicos durante o processo de build.

## Estrutura de Arquivos

```
/src
|-- /components
|   |-- Button.jsx
|   |-- Button.module.css  <-- Estilos do botão
|   |-- ProductCard.jsx
|   |-- ProductCard.module.css <-- Estilos do card
|-- globals.css            <-- Tokens e reset globais
```

## Como Executar

1. Navegue até esta pasta.
2. Rode `npm install` para instalar as dependências.
3. Rode `npm run dev` para iniciar o servidor de desenvolvimento.