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

## Variáveis de ambiente

Copie `.env.example` para `.env.local`. Nenhuma é obrigatória para rodar, mas
as duas são recomendadas em produção:

| Variável | Para quê |
|---|---|
| `GITHUB_TOKEN` | Eleva o rate limit da API do GitHub (60 → 5.000 req/h) na seção de stats. Use um token **fine-grained sem nenhuma permissão** — dados públicos não exigem escopo. |
| `NEXT_PUBLIC_FORMSUBMIT_ID` | ID aleatório do FormSubmit. Sem ele o e-mail vai em texto claro no bundle JS e é coletado por scrapers. |

`.env.local` nunca é versionado. Em produção, defina as duas nas
*Environment Variables* do projeto na Vercel.

## Segurança

- **Headers**: CSP, HSTS, `X-Frame-Options`, `X-Content-Type-Options`,
  `Referrer-Policy` e `Permissions-Policy` são aplicados em `next.config.ts`.
  Ao adicionar um domínio externo (script, imagem, fetch), inclua-o na
  diretiva correspondente da CSP ou a requisição será bloqueada.
- **Formulário de contato**: validação com zod (mínimos e máximos) mais um
  campo *honeypot* (`_honey`) contra bots.
- **Dependências**: rode `npm audit` antes de cada deploy. O CLI `shadcn`
  vive em `devDependencies` — ele não é runtime e arrastava ~286 pacotes
  para produção.

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
    sections/     hero, about, timeline, skills, projects, github-stats,
                  services, contact
    shared/       reveal, section-heading, particles, avatar, back-to-top
    providers/    theme, locale (i18n), lenis
    ui/           componentes shadcn
  content/        dados tipados: site, projects, timeline, skills, services,
                  stats, translations/{pt,en}
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
- **Skills / Serviços**: `skills.ts`, `services.ts`
- **Links, e-mail, CV, domínio**: `src/content/site.ts`
  - Atualize `url` quando tiver domínio próprio (usado em SEO/sitemap)

**Foto de perfil**: adicione `public/avatar.jpg` — o monograma "HP" é substituído automaticamente, sem mudança de código.

## Deploy

Pronto para deploy na [Vercel](https://vercel.com): importe o repositório e faça o deploy sem configuração extra.
