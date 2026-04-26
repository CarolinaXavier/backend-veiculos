# backend-veiculos
# 🚗 Backend - API de Veículos

API REST desenvolvida com Node.js para gerenciamento de veículos.

---

## 📌 Tecnologias utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* Dotenv
* CORS

---

## 🚀 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/backend-veiculos.git
cd backend-veiculos
```

---

### 2. Instalar dependências

```bash
npm install
```

---

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/veiculos
```

---

### 4. Rodar o projeto

```bash
npm start
```

A API estará disponível em:

```
http://localhost:3000
```

---

## 📡 Endpoints

### 🔹 Listar veículos

```
GET /veiculos
```

---

### 🔹 Buscar veículo por ID

```
GET /veiculos/:id
```

---

### 🔹 Criar veículo

```
POST /veiculos
```

#### Exemplo de body:

```json
{
  "placa": "ABC1234",
  "chassi": "123456789",
  "renavam": "987654321",
  "modelo": "Civic",
  "marca": "Honda",
  "ano": 2022
}
```

---

### 🔹 Atualizar veículo

```
PUT /veiculos/:id
```

---

### 🔹 Remover veículo

```
DELETE /veiculos/:id
```

---

## 🧪 Testes

Os endpoints podem ser testados utilizando ferramentas como:

* Postman
* Insomnia

---

## 📁 Estrutura do projeto

```
src/
 ├── config/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── services/
 └── app.js
```

---

## ⚠️ Observações

* Projeto desenvolvido para fins de teste técnico
* Utiliza MongoDB como banco de dados
* Não possui autenticação
* Validações podem ser melhoradas em um cenário real

---

## 💡 Melhorias futuras

* Validação de dados (Joi/Zod)
* Autenticação (JWT)
* Paginação e filtros
* Testes automatizados
* Docker

---

## 👨‍💻 Autor

Desenvolvido por Carolina Xavier
