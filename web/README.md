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

### Middleware

Criei um middleware muito simples apenas para verificar se a rota é `produtos/[id]`
e se o usuário está logado no sistema, caso não esteja ele é redirecionado para
a página de login.

## Rodando o projeto localmente

Caso opte por executar o projeto em modo desenvolvimento (sem utilizar o 
`docker compose`), rode os comandos:

### Instalação de dependencias
```bash
npm install # ou yarn install
```

### Executar o site

Lembre-se de criar um arquivo `.env` na raiz do projeto com a variável de ambiente:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api
```

E por último, rode o comando:

```bash
npm run dev # ou yarn dev
```
Seu site deve ouvir a porta 3000 caso ela não esteja sendo usada por outro programa.