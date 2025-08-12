

## Sobre o Projeto

Este é um projeto **Full Stack** de um sistema de gerenciamento de projetos, pensado para quem está começando na área de desenvolvimento. O objetivo é mostrar como funciona a integração entre o front-end e o back-end de uma aplicação real, usando ferramentas e bibliotecas modernas, mas de forma simples e didática.

## Funcionalidades
- Cadastro e login de usuários
- Criação, edição e exclusão de projetos
- Gerenciamento de tarefas dentro dos projetos
- Interface simples e fácil de usar

## Tecnologias, Ferramentas e Bibliotecas Utilizadas

### Back-end (`back/`)
- **Java 17**
- **Spring Boot 3.4.5**
  - spring-boot-starter-web (API REST)
  - spring-boot-starter-data-jpa (persistência com JPA/Hibernate)
  - spring-boot-starter-validation (validações de dados)
  - spring-boot-devtools (hot reload para desenvolvimento)
  - spring-boot-starter-test (testes automatizados)
- **Lombok** (para facilitar o código Java, reduzindo boilerplate)
- **MySQL Connector/J** (driver para banco de dados MySQL)
- **Jackson Datatype JSR310** (suporte a datas Java 8+)
- **Maven** (gerenciador de dependências e build)
- **Maven Compiler Plugin** (compilação do projeto)
- **Spring Boot Maven Plugin** (empacotamento e execução)

### Front-end (`front/`)
- **ReactJS 19**
- **React DOM**
- **React Router DOM 7** (rotas SPA)
- **React Scripts** (scripts de build e dev)
- **Axios** (requisições HTTP para a API)
- **Bootstrap 5** (estilização e componentes visuais)
- **date-fns** (manipulação de datas)
- **ESLint** (padronização de código)
- **Browserslist** (compatibilidade de navegadores)

### Outras Ferramentas
- **Git** (controle de versão)
- **VS Code** (recomendado para edição)

## Estrutura das Pastas
- `back/` - Código do back-end (Java, Spring Boot)
- `front/` - Código do front-end (ReactJS)

## Como Rodar o Projeto

1. Clone este repositório
2. Instale as dependências do back-end (Maven) e do front-end (npm ou yarn)
3. Configure o banco de dados MySQL (veja o arquivo `application.properties` em `back/`)
4. Rode o back-end: `./mvnw spring-boot:run` (Linux/Mac) ou `mvnw.cmd spring-boot:run` (Windows)
5. Rode o front-end: `npm start` dentro da pasta `front/`
6. Acesse a aplicação pelo navegador

## Para Quem é Este Projeto?
Este projeto é ideal para quem está começando e quer aprender como funciona um sistema completo, do zero até a entrega final. O código está bem organizado e comentado para facilitar o entendimento.

## Por que este projeto é legal?
- Ótimo para treinar lógica de programação e organização de código
- Ajuda a entender como front-end e back-end conversam
- Perfeito para colocar no portfólio e mostrar para recrutadores

---

Sinta-se à vontade para usar, estudar e modificar este projeto!
