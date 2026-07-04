import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { BackToTop } from "@/components/shared/back-to-top";
import { siteConfig } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Portfólio de Henrique Pella — Software Engineer. Desenvolvimento Full Stack com Java, Python, React e Node.js, focado em performance e boas práticas de engenharia de software.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description,
  keywords: [
    "Henrique Pella",
    "Software Engineer",
    "Full Stack Developer",
    "Java",
    "Python",
    "React",
    "Node.js",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.fullName, url: siteConfig.links.github }],
  creator: siteConfig.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  jobTitle: siteConfig.role,
  email: `mailto:${siteConfig.email}`,
  url: siteConfig.url,
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "PUC Campinas",
  },
  knowsAbout: ["Java", "Python", "JavaScript", "TypeScript", "React", "Node.js", "SQL"],
  nationality: { "@type": "Country", name: "Brazil" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Applies the persisted locale to <html lang> before hydration. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var l=localStorage.getItem('locale');if(l==='en'){document.documentElement.lang='en';}}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col overflow-x-clip">
        <ThemeProvider>
          <LocaleProvider>
            <LenisProvider>
              <a
                href="#home"
                className="sr-only z-[70] rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
              >
                Pular para o conteúdo · Skip to content
              </a>
              <ScrollProgress />
              <Header />
              <main id="content" className="flex-1">
                {children}
              </main>
              <Footer />
              <BackToTop />
            </LenisProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
