# Vitrine Web

## Decisões Técnicas

### Layout

Para o layout utilizei a biblioteca [Shadcn/ui](https://ui.shadcn.com) que cria 
componentes base utilizando Tailwind e me permitindo fazer alterações localmente
 já que os componentes utilizados são criados diretamente no meu código.

Foquei em um layout mais minimalista apenas com as principais funcionalidades.

### Metadata

Devido a nova versão do Nextjs, não utilizei o componente `next/head`, ao invés, 
utilizei o `metadata` e `generateMetadata`, e a pesar de na página `produtos/[id]` 
a função `getProductById` ser chamada 2 vezes, estou utilizando do cache do fetch
para reduzir o custo por chamadas.

## Rodando o projeto localmente

