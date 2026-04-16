# Projeto Final Bloco 02 - Feature Extra: Produto com Relacionamento Categoria

Este projeto faz parte do **Performance Goal Check do Bloco 02** da **Generation Brasil**.

A branch `03_CRUD_Produto_Relacionamento` foi desenvolvida como **feature extra**, adicionando o recurso **Produto** ao backend de e-commerce para farmácia, com CRUD completo e relacionamento com a entidade **Categoria**.

---

## Sobre a feature

Nesta branch foi implementado o recurso **Produto**, permitindo cadastrar, listar, buscar, atualizar e deletar produtos.

Além disso, foi criado o relacionamento entre **Produto** e **Categoria**, seguindo a regra:

- Uma **Categoria** pode ter vários **Produtos**
- Um **Produto** pertence a uma **Categoria**

Ou seja:

```txt
Categoria 1:N Produto
Produto N:1 Categoria
