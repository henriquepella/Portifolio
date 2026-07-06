import type { TimelineItem } from "@/types/content";

/** Reverse-chronological — most recent first. */
export const timeline: TimelineItem[] = [
  {
    id: "aldino-freelance",
    year: "2025",
    period: { pt: "Fev 2025 – Concluído", en: "Feb 2025 – Completed" },
    title: {
      pt: "Desenvolvedor Freelancer — Projeto Aldino",
      en: "Freelance Developer — Aldino Project",
    },
    place: {
      pt: "Análise Geoespacial · Remoto",
      en: "Geospatial Analysis · Remote",
    },
  },
  {
    id: "puc-campinas",
    year: "2024",
    period: { pt: "2024 – 2027", en: "2024 – 2027" },
    title: {
      pt: "Bacharelado em Engenharia de Software",
      en: "B.Sc. in Software Engineering",
    },
    place: { pt: "PUC Campinas", en: "PUC Campinas" },
    ongoing: true,
  },
  {
    id: "intercambio-eua",
    year: "2023",
    period: { pt: "2022 – 2023", en: "2022 – 2023" },
    title: {
      pt: "Intercâmbio — Senior Year Graduation",
      en: "Exchange Program — Senior Year Graduation",
    },
    place: { pt: "Lassen High School, EUA", en: "Lassen High School, USA" },
    image: {
      src: "/timeline/lassen-diploma.jpg",
      alt: {
        pt: "Diploma de conclusão do Lassen High School",
        en: "Lassen High School graduation diploma",
      },
    },
  },
  {
    id: "ensino-medio",
    year: "2021",
    period: { pt: "2018 – 2021", en: "2018 – 2021" },
    title: { pt: "Ensino Médio", en: "High School" },
    place: {
      pt: "Anglo São João da Boa Vista",
      en: "Anglo São João da Boa Vista",
    },
  },
  {
    id: "curso-ingles",
    year: "2017",
    period: { pt: "2017 – 2021", en: "2017 – 2021" },
    title: { pt: "Curso de Inglês", en: "English Course" },
    place: {
      pt: "America São João da Boa Vista",
      en: "America São João da Boa Vista",
    },
  },
];
