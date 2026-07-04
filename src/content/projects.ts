import type { Project } from "@/types/content";

export const projects: Project[] = [
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
    githubUrl: "https://github.com/henriquepella",
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
    githubUrl: "https://github.com/henriquepella",
  },
];
