<div align="center">

# Luiz Henrique — Portfólio Pessoal

**Estudante de Ciência da Computação · Backend · Inteligência Artificial**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

[🌐 Ver ao vivo](https://luizhrx.github.io/portfolio) · [📬 Entrar em contato](mailto:luizlopeszx1@gmail.com) · [💼 LinkedIn](https://linkedin.com/in/luizhrx)

</div>

---

## 📸 Preview

> Site com estética **neon / glassmorphism / futurista** — fundo com grade animada, partículas flutuantes, efeito glow e animações de scroll.

---

## ✨ Funcionalidades

- **Hero section** com grade futurista animada, partículas flutuantes e foto com anéis orbitais
- **Efeito glow neon** pulsante no nome e elementos de destaque
- **Glassmorphism** na navbar e card de contato
- **Animações de scroll** com AOS (fade-up, fade-left, fade-right)
- **Barras de progresso** das skills animadas ao entrar na tela
- **Cards de projeto** com overlay e efeito hover lift
- **Navbar ativa** que destaca a seção atual ao rolar
- **Menu mobile** responsivo
- **Tipografia** com Syne (display) + JetBrains Mono + Inter
- **Scrollbar e cursor** personalizados

---

## 🗂️ Estrutura do Projeto

```
portfolio/
│
├── index.html              # Página principal — carrega todos os componentes
│
├── css/
│   └── style.css           # Estilos customizados (animações, pseudo-elementos)
│
├── js/
│   └── script.js           # Toda a lógica JavaScript
│
├── components/
│   ├── navbar.html         # Barra de navegação fixa
│   ├── hero.html           # Seção inicial (tela cheia)
│   ├── sobre.html          # Seção "Sobre Mim" + Skills
│   ├── projetos.html       # Grid de projetos
│   ├── contato.html        # Seção de contato
│   └── footer.html         # Rodapé
│
└── img/
    ├── fotoDeLuiz.png      # Foto de perfil
    ├── buscar-filmes.png   # Thumbnail — Projeto 1
    ├── conta.jpg           # Thumbnail — Projeto 2
    └── controle.jpg        # Thumbnail — Projeto 3
```

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica de todas as seções |
| **TailwindCSS** (CDN) | Estilização com classes utilitárias |
| **CSS customizado** | Animações, glassmorphism, efeitos especiais |
| **JavaScript vanilla** | Interações, carregamento de componentes, observers |
| **Lucide Icons** | Ícones SVG modernos |
| **AOS** | Animações ao rolar a página |
| **Google Fonts** | Syne · JetBrains Mono · Inter |

---

## 🚀 Como rodar localmente

> ⚠️ **Atenção:** o projeto usa `fetch()` para carregar os componentes, então **não funciona abrindo o `index.html` diretamente** no browser. É necessário um servidor local.

### Opção 1 — VS Code + Live Server (recomendado)

```bash
# 1. Instale a extensão "Live Server" no VS Code
# 2. Clique com botão direito no index.html
# 3. Selecione "Open with Live Server"
```

### Opção 2 — Python

```bash
# Dentro da pasta do projeto:
python -m http.server 3000

# Acesse: http://localhost:3000
```

### Opção 3 — Node.js

```bash
npx serve .
```

---

## 📦 Projetos em destaque

### 🎬 Buscador de Filmes (API OMDb)
Sistema em **Java** que consome a API OMDb para buscar e exibir detalhes de filmes. Possui menu interativo no terminal, histórico de buscas e tratamento de JSON com a biblioteca Gson.

`Java` `API REST` `Gson`
→ [Ver repositório](https://github.com/luizhrx/buscador-filmes)

---

### 🏦 Conta Bancária
Simulação de operações bancárias básicas em **Python**, demonstrando conceitos fundamentais de Programação Orientada a Objetos.

`Python` `POO`
→ [Ver repositório](https://github.com/luizhrx/projeto-Conta_Bancaria)

---

### 📦 Controle de Estoque
Sistema de gerenciamento de estoque para pequenos negócios em **Java**, com estrutura orientada a objetos para controle eficiente de produtos.

`Java` `POO`
→ [Ver repositório](https://github.com/luizhrx/ControleDeEstoque)

---

## 🧠 Habilidades

```
Java          ████████████████████░░░░░  75%
Python        ██████████████████░░░░░░░  70%
HTML5 / CSS3  ████████████████████████░  80%
SQL           ████████████████░░░░░░░░░  65%
Git / GitHub  ██████████████████░░░░░░░  70%
Lógica        █████████████████████░░░░  85%
```

---

## ➕ Como adicionar um novo projeto

1. Coloque a imagem do projeto em `img/`
2. Abra `components/projetos.html`
3. Localize o comentário `<!-- ===== ADICIONE NOVOS PROJETOS AQUI ===== -->`
4. Copie um bloco de projeto existente e cole antes do comentário
5. Atualize título, descrição, imagem, tags e link do GitHub

---

## ➕ Como adicionar uma nova seção

1. Crie `components/minha-secao.html` com o HTML da seção
2. Adicione um slot em `index.html`:
   ```html
   <div id="slot-minha-secao"></div>
   ```
3. Registre no `loadAllComponents()` dentro do `index.html`:
   ```js
   loadComponent('slot-minha-secao', 'components/minha-secao.html'),
   ```

---

## 📬 Contato

<div align="center">

| Canal | Link |
|---|---|
| 📧 Email | [luizlopeszx1@gmail.com](mailto:luizlopeszx1@gmail.com) |
| 💬 WhatsApp | [+55 83 98714-7830](https://wa.me/558387147830) |
| 💼 LinkedIn | [linkedin.com/in/luizhrx](https://linkedin.com/in/luizhrx) |
| 🐙 GitHub | [github.com/luizhrx](https://github.com/luizhrx) |
| 📸 Instagram | [@_luizhrx](https://instagram.com/_luizhrx) |

</div>

---

<div align="center">

Feito com 💚 por **Luiz Henrique** · [luizhrx](https://github.com/luizhrx)

</div>
