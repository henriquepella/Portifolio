# Portfólio — Henrique Pella

Portfólio pessoal de **Henrique Aguiar de Souza Pella**, Software Engineer.
Single-page premium construída com Next.js (App Router), com dark mode, i18n PT/EN, animações suaves e SEO completo.

## Stack

- [Next.js 16](https://nextjs.org) + React 19 + TypeScript (strict)
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://motion.dev) (reveals, microinterações) + [GSAP ScrollTrigger](https://gsap.com) (timeline)
- [Lenis](https://lenis.darkroom.engineering) smooth scroll
- [next-themes](https://github.com/pacocoursey/next-themes) (dark/light, dark por padrão)
- react-hook-form + zod (formulário de contato via [FormSubmit](https://formsubmit.co))
- lucide-react + react-icons

## Rodando localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run lint    # eslint
```

## Estrutura

```
src/
  app/            layout, page, globals.css, SEO (sitemap, robots, og-image)
  components/
    layout/       header, footer, scroll-progress
    sections/     hero, about, timeline, skills, projects, github, services,
                  certificates, contact
    shared/       reveal, section-heading, particles, avatar, back-to-top
    providers/    theme, locale (i18n), lenis
    ui/           componentes shadcn
  content/        dados tipados: site, projects, timeline, skills, services,
                  certificates, translations/{pt,en}
  hooks/          use-active-section, use-count-up
  types/          contratos de conteúdo (Dictionary, Project, ...)
public/
  projects/       screenshots reais dos projetos
  cv/             currículos PT/EN
```

## Como editar o conteúdo

Todo o conteúdo fica em `src/content/` — nenhum texto está hardcoded nos componentes:

- **Textos PT/EN**: `src/content/translations/pt.ts` e `en.ts`
- **Projetos** (descrição, desafio/solução/aprendizados, imagens, links): `src/content/projects.ts`
  - `githubUrl` aponta para o perfil até os repositórios ficarem públicos — troque pelo link do repo quando quiser
- **Timeline**: `src/content/timeline.ts`
- **Skills / Serviços / Certificados**: `skills.ts`, `services.ts`, `certificates.ts`
  - Certificados usam `status: "in-progress"`; mude para `"completed"` conforme concluir
- **Links, e-mail, CV, domínio**: `src/content/site.ts`
  - Atualize `url` quando tiver domínio próprio (usado em SEO/sitemap)

**Foto de perfil**: adicione `public/avatar.jpg` — o monograma "HP" é substituído automaticamente, sem mudança de código.

## Deploy

Pronto para deploy na [Vercel](https://vercel.com): importe o repositório e faça o deploy sem configuração extra.
