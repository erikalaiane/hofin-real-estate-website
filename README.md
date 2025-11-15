# HOFIN - Real Estate Website

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Plataforma moderna de imóveis com design elegante e funcional 🏠**

Website responsivo para compra, venda e aluguel de propriedades

</div>

---

## Sobre o Projeto

**HOFIN** é uma plataforma completa de real estate desenvolvida para facilitar a busca, compra, venda e aluguel de propriedades. Com design moderno e interface intuitiva, o projeto oferece uma experiência premium para usuários que buscam seu imóvel dos sonhos.

### Características Principais

- Sistema de busca avançada de propriedades
- Listagens organizadas por categoria (venda e aluguel)
- Design totalmente responsivo para todos os dispositivos
- Seção "Como Funciona" com processo simplificado
- FAQ interativo com accordion
- Formulário de contato integrado
- Performance otimizada com Vite
- Arquitetura componentizada com React

---

## Tecnologias Utilizadas

- **[React](https://react.dev/)** `18.3.1` - Biblioteca JavaScript para construção de interfaces
- **[Vite](https://vitejs.dev/)** `5.x` - Build tool moderna e extremamente rápida
- **[Tailwind CSS](https://tailwindcss.com/)** `3.4` - Framework CSS utility-first para estilização
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones moderna e personalizável
- **[React Router DOM](https://reactrouter.com/)** - Roteamento para aplicações React
- **[ESLint](https://eslint.org/)** - Linter para manter código limpo e padronizado
- **[PostCSS](https://postcss.org/)** - Ferramenta para transformar CSS
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Adiciona prefixos de fornecedores automaticamente

---

## Preview

<div align="center">

![Preview](./public/site.png)

</div>

---

## Como Rodar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/erikalaiane/hofin-real-estate-website.git
```

2. **Entre no diretório do projeto**

```bash
cd hofin-real-estate-website
```

3. **Instale as dependências**

```bash
npm install
```

4. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

5. **Abra no navegador**

Acesse [http://localhost:5173](http://localhost:5173)

---

## Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Preview da build de produção
npm run lint     # Executa o linter
```

---

## Estrutura do Projeto

```
hofin-real-estate-website/
├── public/
│   └── images/              # Imagens do site
├── src/
│   ├── components/          # Componentes React
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── PropertyCard.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── PropertyList.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── properties.js    # Dados das propriedades
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Ponto de entrada
│   └── index.css            # Estilos globais
├── index.html
├── package.json
├── tailwind.config.js       # Configuração do Tailwind
├── vite.config.js           # Configuração do Vite
└── SETUP-COMPLETO.md        # Guia completo de instalação
```

---

## Funcionalidades

### Hero Section
- Banner principal com imagem de destaque
- Sistema de busca integrado com filtros (localização, tipo, preço)
- Navegação responsiva
- Call-to-action destacado

### Listagem de Propriedades
- Cards de propriedades com informações detalhadas
- Categorias separadas (venda e aluguel)
- Sistema de favoritos
- Imagens em alta qualidade

### FAQ Interativo
- Accordion com perguntas frequentes
- Animações suaves de abertura/fechamento
- Design limpo e organizado

### Formulário de Contato
- Campos para nome, email e mensagem
- Design moderno com validação
- Integração visual harmoniosa

---

## Responsividade

O projeto é totalmente responsivo e testado em:

- Mobile (320px - 767px)
- Tablet (768px - 1023px)
- Desktop (1024px - 1439px)
- Large Desktop (1440px+)

---

## Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## Roadmap

- [ ] Implementar React Router para navegação entre páginas
- [ ] Adicionar backend com API REST
- [ ] Sistema de autenticação de usuários
- [ ] Integração com banco de dados
- [ ] Filtros avançados de busca
- [ ] Sistema de favoritos persistente
- [ ] Mapa interativo com localização das propriedades
- [ ] Painel administrativo para gerenciar listagens
- [ ] Sistema de agendamento de visitas
- [ ] Integração com gateway de pagamento

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Autora

**Erika Laiane**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/erikalaiane)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/erika-laiane-azevedo)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:erikalaianeazevedosantos@gmail.com)

---

<div align="center">

Desenvolvido com 💜 por Erika Laiane

</div>