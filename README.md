# Projeto Final Bloco 02 - E-commerce Farmácia

API backend desenvolvida no **Performance Goal Check do Bloco 02** da **Generation Brasil**.

O projeto foi feito com **NestJS**, **TypeScript**, **TypeORM** e **MySQL**, com CRUD de Categoria e uma feature extra de Produto com relacionamento.

---

## Tecnologias utilizadas

<div align="center">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="45" alt="Node.js" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="45" alt="TypeScript" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" width="45" alt="NestJS" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typeorm/typeorm-original.svg" width="45" alt="TypeORM" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="45" alt="MySQL" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" width="45" alt="Swagger" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="45" alt="Git" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="45" alt="GitHub" />

</div>

---

## Funcionalidades

### Categoria

CRUD completo de Categoria:

```http
POST /categorias
GET /categorias
GET /categorias/{id}
GET /categorias/descricao/{descricao}
PUT /categorias
DELETE /categorias/{id}
```

### Produto

Feature extra implementada na branch:

```txt
03_CRUD_Produto_Relacionamento
```

CRUD de Produto com relacionamento com Categoria:

```http
POST /produtos
GET /produtos
GET /produtos/{id}
GET /produtos/nome/{nome}
PUT /produtos
DELETE /produtos/{id}
```

---

## Relacionamento

O projeto possui relacionamento entre **Categoria** e **Produto**:

```txt
Categoria 1:N Produto
Produto N:1 Categoria
```

Ou seja, uma categoria pode ter vários produtos, e cada produto pertence a uma categoria.

Exemplo de retorno:

```json
{
  "id": 4,
  "nome": "Soro Fisiológico 0,9% 500ml",
  "descricao": "Solução para higienização nasal e limpeza geral",
  "preco": "9.50",
  "quantidade": 100,
  "dataValidade": "2027-02-28",
  "categoria": {
    "id": 2,
    "descricao": "Medicamentos"
  }
}
```

---

## Swagger

A API também possui documentação com Swagger.

Para acessar:

```txt
http://localhost:3000/swagger
```

No Swagger foram testadas as rotas de Produto, incluindo cadastro, busca por ID, listagem e exclusão.

---

## Variáveis de ambiente

As configurações do banco foram movidas para o arquivo `.env`.

O arquivo `.env` não deve ser enviado para o GitHub.

Exemplo de `.env.example`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_DATABASE=db_farmacia
```

---

## Como rodar

Clone o repositório:

```bash
git clone https://github.com/KefilweLourenco/projeto_final_bloco_02.git
```

Acesse a pasta:

```bash
cd projeto_final_bloco_02
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env` e depois rode:

```bash
npm run start:dev
```

---

## Branches

```txt
main
01_configurando_projeto
02_CRUD_Categoria
03_CRUD_Produto_Relacionamento
```

---

## Autor

Desenvolvido por **Kefilwe Lourenço** durante o Bloco 02 da **Generation Brasil**.
