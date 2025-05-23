# Vitrine API

## Decisões Técnicas

### Arquitetura

Utilizei uma arquitetura mais voltada para o clean architecture onde separo as 
camadas `controllers`, `service`, `routes` e `repositories`:

#### Controller

Responsável apenas em direcionar o request para a camada de services e responder ao client.

#### Services

A camada de services `core/<entity>/<entity>.service.ts` é responsável por aplicar
as regras de negócio.

### Design Patterns Utilizados

A API foi pensada em cima de `Dependency Injection` para maior facilidade de alteração e desacoplamento de responsabilidades, poderia melhorar o nível de abstração criando interfaces ao invés de classes concretas, porém como a API é para um escopo menor, não achei necessário.

Juntamente utilizei `Simple Factory` parar facilitar o gerenciamento das dependências de cada domínio, centralizando a injeção de dependências.

### Base de Dados

Utilizei `MongoDB` e criei um método para fazer os seeds de produtos já que a aplicação
não é focada na criação de produtos novos.

## Rodando o projeto localmente

Para rodar o projeto localmente, primeiro crie um container do `MongoDB` com o 
comando:

```bash
docker run --name mongo-db -p 27017:27017 -d mongo
```

depois que o banco de dados for criado, crie um arquivo `.env` com as seguintes
variáveis de ambiente:

```
MONGO_URI=mongodb://localhost:27017/vitrine
JWT_KEY=development
```

E então execute os seguintes comandos para executar a API em modo desenvolvimento:

```bash
npm install # ou yarn install

npm run dev # ou yarn dev
```

## Rotas/Endpoints

### GET /api/produtos

Não precisa de autenticação

Retorna todos os produtos salvos no banco de dados

Response Body:
```json
  "products": [
		{
			"name": "Relógio Digital de Pulso",
			"description": "Design moderno com diversas funcionalidades.",
			"amount": 9990,
			"slug": "Relogio-Digital-de-Pulso",
			"id": "6830b4c195b9a1d5beeb51b6"
		}
  ]
```

### GET /api/produtos/:id

Necessita de autenticação

Retorna um produto pelo seu id

Request Headers:

```
Cookie: <token de acesso>
```
> Obs: Se você estiver usando `Insomnia` ou `Postman` o header vai ser settado
> automaticamente quando fizer o login.
> Ou seja, não é necessário settar manualmente o header Cookie.

Response Body:

```json
{
	"product": {
		"name": "Teclado Mecânico",
		"description": "Teclado com switches mecânicos e iluminação LED.",
		"amount": 18990,
		"slug": "Teclado-Mecanico",
		"id": "682f780af9f3cded3caea9a8"
	}
}
```

### POST /api/auth/entrar

Retorna uma mensagem de sucesso ou falha de autenticação

Request Body:
```json
{
	"email": "adm@teste.com",
	"password": "@1Senha"
}
```

Response Header:
```
Set-Cookie: <token de acesso>
```

Response Body:
```json
{
	"message": "Entrou com sucesso"
}
```