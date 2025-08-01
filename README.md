<div align="center">
  <img src="public/images/numbers_logo_full_white.png" alt="NumbERS Logo" width="300"/>
</div>

<h1 align="center">NumbERS - Núcleo de Pesquisa</h1>

<p align="center">
  Website institucional do NumbERS, o Núcleo de Pesquisa em Tecnologias Emergentes e Soluções Inovadoras do Instituto Federal de Goiás (IFG) - Campus Inhumas.
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-projeto">Projeto</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-licença">Licença</a>
</p>

---

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **React:** Biblioteca para construção da interface de usuário.
- **Vite:** Ferramenta de build para um desenvolvimento rápido e otimizado.
- **React Router DOM:** Para gerenciamento de rotas e navegação.
- **Tailwind CSS:** Framework CSS para estilização moderna e responsiva.
- **Framer Motion:** Para animações e transições suaves entre páginas.
- **Lucide React:** Pacote de ícones.
- **Zustand:** Para gerenciamento de estado global.
- **Docker & Docker Compose:** Para containerização e facilidade no deploy.

---

## 💻 Projeto

O site do NumbERS é uma plataforma para apresentar o núcleo de pesquisa, sua missão, equipe e projetos. O objetivo é criar um canal de comunicação claro e moderno com a comunidade acadêmica, a indústria e a sociedade, demonstrando as inovações e pesquisas desenvolvidas.

**Funcionalidades Principais:**
- **Design Responsivo:** Interface adaptável para desktops, tablets e celulares.
- **Transições Suaves:** Animações fluidas entre as páginas para uma melhor experiência de usuário.
- **Showcase de Projetos:** Seção detalhada com filtros por categoria para explorar os projetos do núcleo.
- **Página Institucional:** Apresentação da missão, visão, valores e equipe do NumbERS.

---

## 🚀 Como Executar

Siga as instruções abaixo para executar o projeto em seu ambiente local.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [Docker](https://www.docker.com/products/docker-desktop/) (para o método com container)

### Executando Localmente (Desenvolvimento)

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/luixsouza/numbers-site.git
    cd numbers-site
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no terminal).

### Executando com Docker (Recomendado para Testes)

Este método utiliza o **Docker Compose** para construir a imagem e iniciar o container com um único comando, simplificando o processo.

1.  **Suba o container:**
    O comando `up` constrói a imagem e inicia o container. A flag `-d` executa em segundo plano e `--build` força a reconstrução da imagem caso haja alterações no código.

    ```bash
    docker-compose up -d --build
    ```

2.  **Acesse o site:**
    Abra seu navegador e acesse `http://localhost:5173`.

3.  **Para parar o container:**
    ```bash
    docker-compose down
    ```