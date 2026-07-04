import {
  AppWindow,
  Database,
  Globe,
  ShieldCheck,
  Waypoints,
  Workflow,
} from "lucide-react";
import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    id: "web",
    icon: Globe,
    title: { pt: "Desenvolvimento Web", en: "Web Development" },
    description: {
      pt: "Aplicações web modernas, responsivas e performáticas com React, Next.js e Node.js.",
      en: "Modern, responsive and performant web applications with React, Next.js and Node.js.",
    },
  },
  {
    id: "apis",
    icon: Waypoints,
    title: { pt: "APIs REST", en: "REST APIs" },
    description: {
      pt: "APIs bem documentadas e escaláveis com Java, Spring Boot e Node.js.",
      en: "Well-documented, scalable APIs with Java, Spring Boot and Node.js.",
    },
  },
  {
    id: "desktop",
    icon: AppWindow,
    title: { pt: "Aplicações Desktop", en: "Desktop Applications" },
    description: {
      pt: "Sistemas desktop completos em Java, do design da interface à persistência de dados.",
      en: "Complete desktop systems in Java, from UI design to data persistence.",
    },
  },
  {
    id: "databases",
    icon: Database,
    title: { pt: "Banco de Dados", en: "Databases" },
    description: {
      pt: "Modelagem, procedures, functions e triggers em Oracle, PostgreSQL e MySQL.",
      en: "Modeling, procedures, functions and triggers in Oracle, PostgreSQL and MySQL.",
    },
  },
  {
    id: "qa",
    icon: ShieldCheck,
    title: { pt: "QA & Testes", en: "QA & Testing" },
    description: {
      pt: "Testes de qualidade para garantir software confiável e livre de regressões.",
      en: "Quality testing to ensure reliable, regression-free software.",
    },
  },
  {
    id: "automation",
    icon: Workflow,
    title: { pt: "Automações", en: "Automation" },
    description: {
      pt: "Scripts e rotinas em Python para automatizar tarefas repetitivas e integrar sistemas.",
      en: "Python scripts and routines to automate repetitive tasks and integrate systems.",
    },
  },
];
