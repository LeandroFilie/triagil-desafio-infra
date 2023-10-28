# triagil-desafio-infra
- Este projeto consiste em uma API para o teste técnico da empresa Triágil
- Contém as seguintes funcionalidades:
  - Cadastro de times
  - Leitura de todos os times
  - Leitura de um time

## Endpoints
### Cadastro de um time
```
  POST /api/teams
```

| Parâmetro   | Tipo       |
| :---------- | :--------- |
| `body`      | `json` |

#### input
```json
{
  "user": "sleao",
  "team": [
    "blastoise",
    "pikachu",
    "charizard",
    "venusaur",
    "lapras",
    "dragonite"
  ]
}
```

### Retorna todos os times
```
  GET /api/teams
```

#### output
```json
{
  "1": {
    "owner": "sleao",
    "pokemons": [
      {
        "id": 9,
        "name": "blastoise",
        "weight": 855,
        "height": 16
      },
      {
        "id": 25,
        "name": "pikachu",
        "weight": 60,
        "height": 4
      }
    ]
  },
  "2": {
    "owner": "sleao",
    "pokemons": [
      {
        "id": 9,
        "name": "blastoise",
        "weight": 855,
        "height": 16
      },
      {
        "id": 25,
        "name": "pikachu",
        "weight": 60,
        "height": 4
      },
      {
        "id": 3,
        "name": "venusaur",
        "weight": 1000,
        "height": 20
      },
      {
        "id": 6,
        "name": "charizard",
        "weight": 905,
        "height": 17
      },
      {
        "id": 131,
        "name": "lapras",
        "weight": 2200,
        "height": 25
      },
      {
        "id": 54,
        "name": "psyduck",
        "weight": 196,
        "height": 8
      }
    ]
  }
}
```

### Cadastro de um time
```
  GET /api/teams/:id
```

| Parâmetro   | Tipo       |
| :---------- | :--------- |
| `url param`      | `string` |

#### output
```json
{
  "owner": "sleao",
  "pokemons": [
    {
      "id": 9,
      "name": "blastoise",
      "weight": 855,
      "height": 16
    },
    {
      "id": 25,
      "name": "pikachu",
      "weight": 60,
      "height": 4
    }
  ]
}
```

## Stack Utilizada
- Node.js
- TypeScript
- MySQL
- Docker
- Axios
- EsLint
- Prettier
- Husky

## Como rodar?
### Requisitos
- É necessário que tenha o [Docker](https://docs.docker.com/get-docker/) instalado

### Rodando
1. Clone o projeto, acesse a pasta e instale as dependências
```bash
$ git clone git@github.com:LeandroFilie/triagil-desafio-infra.git

$ cd triagil-desafio-infra

$ npm install
```

2. Renomeie o arquivo .env.example para .env e preencha as variáveis de acordo com as credenciais

3. Execute o docker-compose
```bash
$ docker-compose up
```

4. Faça as requisições pelo endereço: [http://localhost:3003](http://localhost:3003)
