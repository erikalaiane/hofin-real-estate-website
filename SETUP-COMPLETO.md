# Setup Completo - Passo a Passo

## INFORMAÇÕES DO PROJETO

**Nome do Repositório:** `hofin-real-estate-website`

**Descrição:**
```
Modern and responsive real estate website built with React, Vite, and Tailwind CSS. Features property listings, search functionality, and elegant UI design for property buying, selling, and renting services.
```

---

## 1️⃣ CRIAR REPOSITÓRIO NO GITHUB

1. Vá em: https://github.com/new
2. Preencha:
   - **Repository name:** `hofin-real-estate-website`
   - **Description:** Cole a descrição acima
   - ✅ Add a README file
   - ✅ Add .gitignore: Node
   - ✅ Choose a license: MIT
3. Clique em **Create repository**

---

## 2️⃣ COMANDOS PARA EXECUTAR NO TERMINAL

### Clonar e configurar o projeto:

```bash
# Clone o repositório (SUBSTITUA SEU-USUARIO)
git clone https://github.com/SEU-USUARIO/hofin-real-estate-website.git
cd hofin-real-estate-website

# Inicializar Vite + React
npm create vite@latest . -- --template react

# Instalar dependências
npm install

# Instalar Tailwind CSS 3.4
npm install -D tailwindcss@3.4 postcss autoprefixer
npx tailwindcss init -p

# Instalar bibliotecas adicionais
npm install lucide-react react-router-dom

# Criar estrutura de pastas
mkdir -p src/components/Hero
mkdir -p src/components/About
mkdir -p src/components/PropertyCard
mkdir -p src/components/HowItWorks
mkdir -p src/components/PropertyList
mkdir -p src/components/FAQ
mkdir -p src/components/Contact
mkdir -p src/components/Footer
mkdir -p src/data
```

---

## 3️⃣ ARQUIVOS PARA CRIAR/MODIFICAR

### Configuração: `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#60A5FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### Estilos: `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans antialiased;
  }
}
```

### Depois, copie todos os componentes que forneci:
- ✅ `src/main.jsx`
- ✅ `src/App.jsx`
- ✅ `src/data/properties.js`
- ✅ `src/components/Hero/Hero.jsx`
- ✅ `src/components/About/About.jsx`
- ✅ `src/components/PropertyCard/PropertyCard.jsx`
- ✅ `src/components/HowItWorks/HowItWorks.jsx`
- ✅ `src/components/PropertyList/PropertyList.jsx`
- ✅ `src/components/FAQ/FAQ.jsx`
- ✅ `src/components/Contact/Contact.jsx`
- ✅ `src/components/Footer/Footer.jsx`

---

## 4️⃣ INICIAR O PROJETO

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse: **http://localhost:5173**

---

## 5️⃣ FAZER COMMIT E PUSH

```bash
# Adicionar arquivos
git add .

# Commit
git commit -m "feat: initial project setup with all components"

# Push para o GitHub
git push origin main
```

---

## Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build produção
npm run preview  # Preview da build
```

---

## CHECKLIST FINAL

- [ ] Repositório criado no GitHub
- [ ] Projeto clonado localmente
- [ ] Dependências instaladas
- [ ] Tailwind CSS configurado
- [ ] Todos os componentes criados
- [ ] Servidor rodando em localhost:5173
- [ ] Commit e push realizados

---

## PRONTO!

Seu projeto Hofin está configurado e rodando!

**Próximos passos:**
1. Customizar cores e estilos
2. Adicionar mais propriedades
3. Implementar funcionalidades
4. Deploy (Vercel, Netlify, etc.)