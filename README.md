<h1 align="center"> Rentx </h1>

## Descrição do Projeto
<p>Api feita em Node, utilizando conceitos de SOLID e documentada pelo Swagger.</p>
<p>Projeto está sendo desenvolvido na trilha NodeJs do Ignite ofericida pela Rocketseat.</p>

<h4 align="center">🚀 Em contrução... 🚧</h4>

### Features
- [x] Cadastrar Categorias
- [x] Listar Categorias
- [x] Cadastrar Categorias via Importação
- [x] Cadastrar Especificações

### Tecnologias
As seguintes ferramentas foram usadas na construção do projeto

- Node.js
- TypeScript

# FUNCIONALIDADES

# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**RN**
Não deve ser possível cadastrar um carro com placa já existente.
Não deve ser possível alterar placa do carro já cadastrado.
O carro deve ser cadastrado como disponivel.
Somente usuários administradores podem cadastrar carros.


# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
O usuário não precisa estar logado para visualizar a listagem.


# Cadastro de Especificação do carro

**RF**
Deve ser possível cadastrar uma especficação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.


**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível especificação já existente para o mesmo carro.
Somente usuários administradores podem cadastrar carros.


# Cadastro de imagem do carro

**RF**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos ops carros.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.


# Aluguel de carro

**RF**
Deve ser possível cadastrar o aluguel


**RNF**

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não dever ser possível cadastrar um novo aluguel casjo já exista um aberto para o mesmo usuário.
Não dever ser possível cadastrar um novo aluguel casjo já exista um aberto para o mesmo carro.

