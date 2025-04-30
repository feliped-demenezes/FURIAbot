# 🦁 FURIAbot – Chatbot Interativo para Fãs de CS:GO

Projeto desenvolvido para simular uma experiência conversacional para fãs do time de CS:GO FURIA Esports. Com integração de IA (OpenAI).
## 🚀 Funcionalidades

- Chatbot web com interface moderna (React + Vite)
- Comunicação com IA via API REST
- Estilização baseada em identidade visual da FURIA

---

## 🧠 Tecnologias Utilizadas

| Camada      | Tecnologia               |
|-------------|--------------------------|
| Frontend    | React + Vite             |
| Backend     | Node.js + Express        |
| IA          | OpenAI API               |
| Estilo      | Tailwind CSS             |

---

## ⚙️ Como Rodar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/furia-chatbot.git
cd furia-chatbot
````

### 2. Instale as depenências

```bash
 Backend
cd server
npm install

 Frontend
cd ../client
npm install
````

### 3.Configure a chave da IA

```bash
No arquivo .env dentro de /server, coloque:
OPENAI_API_KEY=sua-chave-aqui
````

### 4.Rode o servidor e client

```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
````
