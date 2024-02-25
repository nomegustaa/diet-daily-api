# Daily Diet API

## Descrição

- Este projeto implementa uma API para controle de dieta diária, a Daily Diet API. A aplicação permite criar e gerenciar usuários, registrar refeições, exibir estatísticas sobre as refeições registradas e mais.

## Regras da aplicação

- Deve ser possível criar um usuário
- Deve ser possível identificar o usuário entre as requisições
- Deve ser possível registrar uma refeição feita, com as seguintes informações:
    *As refeições devem ser relacionadas a um usuário.*
    - Nome
    - Descrição
    - Data e Hora
    - Está dentro ou não da dieta
- Deve ser possível editar uma refeição, podendo alterar todos os dados acima
- Deve ser possível apagar uma refeição
- Deve ser possível listar todas as refeições de um usuário
- Deve ser possível visualizar uma única refeição
- Deve ser possível recuperar as métricas de um usuário
    - Quantidade total de refeições registradas
    - Quantidade total de refeições dentro da dieta
    - Quantidade total de refeições fora da dieta
    - Melhor sequência de refeições dentro da dieta
- O usuário só pode visualizar, editar e apagar as refeições o qual ele criou

## Tecnologias Utilizadas

- **Node.js**
- **Fastify**
- **TypeScript**
- **SQL Server**

## Estrutura do Projeto

| Diretório   |
|-------------|
| config      | 
| connections |
| controllers |
| helpers     |
| middlewares |
| routes      |
| services    |

## Variavels de ambiemte que você vai precisar

 - DB_HOST
 - DB_USER
 - DB_PASSWORD
 - DB_DATABASE
 - DB_PORT
 - BCRYPT_AMOUNT
 - SECRET_KEY

## Configuração

1. Clonar o repositório:
- git clone https://github.com/nomegustaa/daily-diet-api.git

2. Instalar as dependências:
- npm install ou yarn install

3. Configurar o ambiente:
- configurar as variáveis de ambiente necessárias

4. Executar a aplicação:
- npm run dev ou yarn dev

## Contribuição

-Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
