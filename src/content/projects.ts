import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "fluxo",
    title: "Fluxo — Controle Financeiro",
    description: {
      pt: "Aplicação full-stack de finanças pessoais construída como monorepo (Next.js + NestJS): dashboard com gráficos de fluxo de caixa, lançamentos, orçamentos por categoria, múltiplas contas e exportação — tudo navegável por mês.",
      en: "Full-stack personal finance app built as a monorepo (Next.js + NestJS): cash-flow dashboard with charts, transactions, per-category budgets, multiple accounts and export — all navigable by month.",
    },
    challenge: {
      pt: "Construir um controle financeiro completo e escalável — dashboard, lançamentos, orçamentos e contas — mantendo a lógica de negócio independente de framework e o código sustentável para evoluir por módulos.",
      en: "Build a complete, scalable finance manager — dashboard, transactions, budgets and accounts — while keeping business logic framework-independent and the codebase maintainable to grow module by module.",
    },
    solution: {
      pt: "Monorepo com Turborepo separando frontend (Next.js 16, React 19, Tailwind) e backend (NestJS, Prisma, PostgreSQL), organizado com Clean Architecture e DDD: camada de domínio isolada, casos de uso como unidades de primeira classe e repositórios com inversão de dependência.",
      en: "Turborepo monorepo splitting the frontend (Next.js 16, React 19, Tailwind) and backend (NestJS, Prisma, PostgreSQL), organized with Clean Architecture and DDD: an isolated domain layer, use cases as first-class units and repositories with dependency inversion.",
    },
    learnings: {
      pt: "Clean Architecture e DDD na prática, organização de um monorepo com Turborepo, integração front-end/back-end tipada de ponta a ponta e modelagem de um domínio financeiro com contas, categorias e orçamentos.",
      en: "Clean Architecture and DDD in practice, structuring a Turborepo monorepo, end-to-end typed front-end/back-end integration and modeling a financial domain with accounts, categories and budgets.",
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Turborepo",
    ],
    cover: "/projects/fluxo/cover.png",
    gallery: [
      {
        src: "/projects/fluxo/cover.png",
        alt: { pt: "Dashboard financeiro", en: "Financial dashboard" },
      },
      {
        src: "/projects/fluxo/lancamentos.png",
        alt: { pt: "Lançamentos e filtros", en: "Transactions and filters" },
      },
      {
        src: "/projects/fluxo/orcamentos.png",
        alt: { pt: "Orçamentos por categoria", en: "Per-category budgets" },
      },
      {
        src: "/projects/fluxo/categorias.png",
        alt: {
          pt: "Categorias de receitas e despesas",
          en: "Income and expense categories",
        },
      },
    ],
    githubUrl: "https://github.com/henriquepella/controle-financeiro",
  },
  {
    id: "aldino",
    title: "Projeto Aldino",
    description: {
      pt: "Sistema de análise geoespacial em Python, desenvolvido como freelancer: processa dados urbanos multidimensionais e gera automaticamente mais de 50 visualizações analíticas e relatórios técnicos em PDF.",
      en: "Geospatial analysis system built in Python as a freelance project: processes multidimensional urban data and automatically generates 50+ analytical visualizations and technical PDF reports.",
    },
    challenge: {
      pt: "Transformar grandes volumes de dados urbanos multidimensionais em diagnósticos espaciais confiáveis, aplicando estatística espacial avançada e entregando resultados reproduzíveis em relatórios técnicos.",
      en: "Turn large volumes of multidimensional urban data into reliable spatial diagnostics, applying advanced spatial statistics and delivering reproducible results as technical reports.",
    },
    solution: {
      pt: "Pipeline em Python com GeoPandas e Pandas: análises espaciais exploratórias (ESDA, I de Moran, LISA local), interpolação espacial por Krigagem, IDW e regressão GWR, e geração automatizada de visualizações e relatórios PDF com Matplotlib e ReportLab.",
      en: "Python pipeline with GeoPandas and Pandas: exploratory spatial analyses (ESDA, Moran's I, Local LISA), spatial interpolation with Kriging, IDW and GWR regression, and automated generation of visualizations and PDF reports with Matplotlib and ReportLab.",
    },
    learnings: {
      pt: "Estatística espacial aplicada, interpolação geográfica, automação de relatórios e a prática de um projeto freelancer real — prazos, comunicação com cliente e entrega remota.",
      en: "Applied spatial statistics, geographic interpolation, report automation and the practice of a real freelance project — deadlines, client communication and remote delivery.",
    },
    technologies: [
      "Python",
      "GeoPandas",
      "Pandas",
      "NumPy",
      "SciPy",
      "Matplotlib",
      "ReportLab",
      "PyKrige",
    ],
    cover: "/projects/aldino/cover.jpg",
    gallery: [],
    githubUrl: "https://github.com/henriquepella/Aldino2",
  },
  {
    id: "fut360",
    title: "Dashboard Fut360",
    description: {
      pt: "Sistema completo para gerenciamento de dados esportivos, desenvolvido como Projeto Integrador na PUC Campinas. Gestão de atletas, calendário de jogos, controle financeiro e relatórios detalhados em um só lugar.",
      en: "Complete sports data management system, developed as an Integrative Project at PUC Campinas. Athlete management, match calendar, financial control and detailed reports in one place.",
    },
    challenge: {
      pt: "Centralizar a gestão de um clube de futebol — atletas, jogos, finanças e relatórios — que antes era feita de forma manual e descentralizada, garantindo consistência dos dados entre os módulos.",
      en: "Centralize the management of a football club — athletes, matches, finances and reports — previously handled manually and in silos, while keeping data consistent across modules.",
    },
    solution: {
      pt: "Sistema integrado em Java com persistência em MySQL via JDBC, organizado em módulos: dashboard com métricas em tempo real, cadastro e perfis de atletas, calendário interativo de eventos, controle financeiro e geração de relatórios analíticos.",
      en: "Integrated Java system with MySQL persistence via JDBC, organized into modules: real-time metrics dashboard, athlete registration and profiles, interactive event calendar, financial control and analytical report generation.",
    },
    learnings: {
      pt: "Modelagem de banco de dados relacional, arquitetura em camadas, integração Java + JDBC e trabalho em equipe com metodologia ágil em um projeto de ciclo completo.",
      en: "Relational database modeling, layered architecture, Java + JDBC integration and agile teamwork on a full-cycle project.",
    },
    technologies: ["Java", "Swing", "MySQL", "JDBC"],
    cover: "/projects/fut360/dashboard.png",
    gallery: [
      {
        src: "/projects/fut360/dashboard.png",
        alt: { pt: "Dashboard com métricas", en: "Metrics dashboard" },
      },
      {
        src: "/projects/fut360/atletas.png",
        alt: { pt: "Gestão de atletas", en: "Athlete management" },
      },
      {
        src: "/projects/fut360/calendario.png",
        alt: { pt: "Calendário de jogos", en: "Match calendar" },
      },
      {
        src: "/projects/fut360/financeiro.png",
        alt: { pt: "Controle financeiro", en: "Financial control" },
      },
      {
        src: "/projects/fut360/relatorios.png",
        alt: { pt: "Relatórios e análises", en: "Reports and analytics" },
      },
    ],
    githubUrl: "https://github.com/Kouqui/SI-PI4-2025-T101-G03",
  },
  {
    id: "registro-riscos",
    title: "App de Registro de Riscos",
    description: {
      pt: "Aplicativo Android nativo em Kotlin para reporte de riscos urbanos com localização, desenvolvido em equipe como Projeto Integrador na PUC Campinas. O usuário registra ocorrências com tipo, descrição, foto e localização e acompanha o status de cada uma no histórico.",
      en: "Native Android app built in Kotlin for reporting urban risks with location, developed as a team Integrative Project at PUC Campinas. Users register occurrences with type, description, photo and location, and track each report's status in the history.",
    },
    challenge: {
      pt: "Permitir que qualquer pessoa reporte riscos de forma rápida — com foto, localização e descrição — mantendo os dados sincronizados em tempo real entre os usuários e o status de cada ocorrência sempre atualizado.",
      en: "Let anyone report risks quickly — with photo, location and description — while keeping data synchronized in real time across users and each report's status always up to date.",
    },
    solution: {
      pt: "App Android nativo em Kotlin com ViewBinding, integrado ao Firebase: autenticação de usuários (Auth), sincronização das ocorrências em tempo real (Realtime Database), upload de fotos (Storage) e captura de localização via Google Play Services.",
      en: "Native Android app in Kotlin with ViewBinding, integrated with Firebase: user authentication (Auth), real-time report synchronization (Realtime Database), photo uploads (Storage) and location capture via Google Play Services.",
    },
    learnings: {
      pt: "Desenvolvimento Android nativo com Kotlin, integração de múltiplos serviços Firebase, uso de APIs de localização e colaboração em equipe com Git em um projeto de ciclo completo.",
      en: "Native Android development with Kotlin, integrating multiple Firebase services, working with location APIs and team collaboration with Git on a full-cycle project.",
    },
    technologies: [
      "Kotlin",
      "Android",
      "Firebase Auth",
      "Realtime Database",
      "Firebase Storage",
      "Location Services",
    ],
    cover: "/projects/riscos/cover.png",
    gallery: [
      {
        src: "/projects/riscos/cover.png",
        alt: { pt: "Telas do aplicativo", en: "App screens" },
      },
      {
        src: "/projects/riscos/registro.png",
        alt: { pt: "Tela de registro de risco", en: "Risk report screen" },
      },
      {
        src: "/projects/riscos/login.png",
        alt: { pt: "Tela de login", en: "Login screen" },
      },
      {
        src: "/projects/riscos/cadastro.png",
        alt: { pt: "Tela de cadastro", en: "Sign-up screen" },
      },
    ],
    githubUrl: "https://github.com/GuilhermePFA/ProjetoIntegrador_3_2025",
  },
  {
    id: "rpg-adventure",
    title: "RPG Adventure Game",
    description: {
      pt: "Jogo RPG completo desenvolvido em Java com interface gráfica Swing: criação de personagem com classes, combate por turnos, inventário e progressão de nível com narrativa imersiva.",
      en: "Complete RPG game built in Java with a Swing GUI: character creation with classes, turn-based combat, inventory and level progression with an immersive narrative.",
    },
    challenge: {
      pt: "Projetar um jogo com múltiplos sistemas interdependentes — classes (Guerreiro, Mago, Arqueiro), combate por turnos, inventário e progressão — mantendo o código organizado e extensível.",
      en: "Design a game with multiple interdependent systems — classes (Warrior, Mage, Archer), turn-based combat, inventory and progression — while keeping the code organized and extensible.",
    },
    solution: {
      pt: "Arquitetura orientada a objetos com herança e polimorfismo para as classes de personagem, sistema de combate estratégico por turnos, inventário com itens consumíveis e narrativa com múltiplas escolhas.",
      en: "Object-oriented architecture using inheritance and polymorphism for character classes, strategic turn-based combat system, inventory with consumable items and a branching narrative.",
    },
    learnings: {
      pt: "Aprofundamento em POO (herança, polimorfismo, encapsulamento), construção de interfaces com Swing e design de sistemas de jogo balanceados.",
      en: "Deepened OOP skills (inheritance, polymorphism, encapsulation), building GUIs with Swing and designing balanced game systems.",
    },
    technologies: ["Java", "Swing", "POO"],
    cover: "/projects/rpg/criacao.png",
    gallery: [
      {
        src: "/projects/rpg/criacao.png",
        alt: { pt: "Criação de personagem", en: "Character creation" },
      },
      {
        src: "/projects/rpg/gameplay.png",
        alt: { pt: "Gameplay", en: "Gameplay" },
      },
      {
        src: "/projects/rpg/combate.png",
        alt: { pt: "Combate por turnos", en: "Turn-based combat" },
      },
      {
        src: "/projects/rpg/inventario.png",
        alt: { pt: "Inventário", en: "Inventory" },
      },
    ],
    // Repositório privado — sem githubUrl, o botão do GitHub fica oculto.
  },
];
