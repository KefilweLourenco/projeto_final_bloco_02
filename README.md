## Etapa 2 - CRUD Categoria

A branch `02_CRUD_Categoria` contém a implementação do CRUD completo do recurso **Categoria**, conforme solicitado no Performance Goal Check do Bloco 02.

O recurso Categoria representa os grupos de produtos disponíveis no sistema de e-commerce de farmácia, como:

- Medicamentos
- Antigripais
- Dermocosméticos
- Vitaminas e suplementos
- Higiene pessoal

### Métodos implementados

| Método HTTP | Rota | Descrição |
|---|---|---|
| GET | `/categorias` | Lista todas as categorias |
| GET | `/categorias/:id` | Busca uma categoria pelo ID |
| GET | `/categorias/descricao/:descricao` | Busca categorias pela descrição |
| POST | `/categorias` | Cadastra uma nova categoria |
| PUT | `/categorias` | Atualiza uma categoria existente |
| DELETE | `/categorias/:id` | Deleta uma categoria pelo ID |

### Testes

Os testes foram realizados no **Insomnia**, contemplando os 6 métodos obrigatórios do CRUD.
