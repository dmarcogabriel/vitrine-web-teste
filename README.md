# Vitrine de Produtos

## Descrição

Este é um projeto simples de vitrine de produtos com uma autenticação simples.

A API foi criada utilizando `express` com `typescript` e o site web foi criado
usando `Next.js` na versão 15.

## Documentações

As documentações da API e web podem ser acessadas por esses links:

* [API](https://github.com/dmarcogabriel/vitrine-web-teste/blob/main/api/README.md)
* [web](https://github.com/dmarcogabriel/vitrine-web-teste/blob/main/web/README.md)

## Executando o projeto

para executar em modo produção
é necessário ter o `docker` instalado, execute o comando:

```bash
docker compose up -d
```

Esse comando vai criar os containers do `MongoDB`, `API` e `web`.

Caso queira rodar localmente em modo desenvolvimento, veja os arquivos README.md
da [API](https://github.com/dmarcogabriel/vitrine-web-teste/blob/main/api/README.md) 
e [web](https://github.com/dmarcogabriel/vitrine-web-teste/blob/main/web/README.md).

## Autenticação

Na inicialização da API, existem alguns `seeds` para criar os produtos e o usuário
administrador, quando tentar acessar a tela de detalhes de um produto a tela de 
login irá aparecer, então entre com as seguintes credenciais:

```
email: adm@teste.com
senha: @1Senha
```
