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

docker run --name mongo-db -p 27017:27017 -d mongo