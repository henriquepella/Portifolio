"use client";

import { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Send,
  XCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { z } from "zod";
import { useLocale } from "@/components/providers/locale-provider";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/content/site";
import type { Dictionary } from "@/types/content";

/**
 * FormSubmit target. Prefer the random form ID over the raw address: the
 * endpoint ships in the client bundle, so using the e-mail directly publishes
 * it to every scraper that reads the JS. Get the ID from the confirmation
 * e-mail FormSubmit sends on first submit and set it in `.env.local` /
 * Vercel as `NEXT_PUBLIC_FORMSUBMIT_ID`.
 */
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${
  process.env.NEXT_PUBLIC_FORMSUBMIT_ID || siteConfig.email
}`;

type FormStatus = "idle" | "sending" | "success" | "error";

function buildSchema(validation: Dictionary["contact"]["form"]["validation"]) {
  return z.object({
    name: z.string().trim().min(2, validation.nameMin).max(80),
    email: z.string().trim().email(validation.emailInvalid).max(160),
    subject: z.string().trim().min(3, validation.subjectMin).max(120),
    message: z.string().trim().min(10, validation.messageMin).max(3000),
    // Honeypot: hidden from users, filled in by naive bots. FormSubmit drops
    // any submission where `_honey` is non-empty.
    _honey: z.string().max(0).optional(),
  });
}

type ContactFormValues = z.infer<ReturnType<typeof buildSchema>>;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-xs text-destructive">{message}</p>;
}

export function Contact() {
  const { dict, locale } = useLocale();
  const [status, setStatus] = useState<FormStatus>("idle");

  const schema = useMemo(
    () => buildSchema(dict.contact.form.validation),
    [dict],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...values,
          _subject: `Portfolio — ${values.subject}`,
          _template: "table",
          // Honeypot stays enabled server-side; see `_honey` in the schema.
          _honey: values._honey ?? "",
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const contactCards = [
    {
      label: dict.contact.labels.email,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
    },
    {
      label: dict.contact.labels.linkedin,
      value: siteConfig.name,
      href: siteConfig.links.linkedin,
      icon: FaLinkedin,
    },
    {
      label: dict.contact.labels.github,
      value: `@${siteConfig.githubUsername}`,
      href: siteConfig.links.github,
      icon: FaGithub,
    },
    {
      label: dict.contact.labels.whatsapp,
      value: siteConfig.whatsappDisplay,
      href: siteConfig.links.whatsapp,
      icon: FaWhatsapp,
    },
  ];

  const inputClassName =
    "h-11 border-border bg-background/70 transition-all duration-300 focus-visible:border-primary focus-visible:ring-primary/30";

  return (
    <section id="contato" className="section-padding relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-spotlight opacity-70"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={dict.contact.eyebrow}
          heading={`${dict.contact.heading} ${dict.contact.headingHighlight}`}
          description={dict.contact.subtitle}
        />

        <div className="grid gap-10 lg:grid-cols-[5fr_6fr]">
          <Reveal direction="right" className="space-y-4">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <card.icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {card.label}
                  </p>
                  <p className="truncate text-sm font-medium">{card.value}</p>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </span>
              <div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {dict.contact.labels.location}
                </p>
                <p className="text-sm font-medium">
                  {dict.contact.locationValue}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="glass-card space-y-5 rounded-2xl border border-border p-6 sm:p-8"
            >
              {/*
                Honeypot: invisible to humans and to screen readers, but a bot
                that blindly fills every input trips it and the submission is
                discarded. Must stay out of the tab order.
              */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="sr-only"
                {...register("_honey")}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">{dict.contact.form.name}</Label>
                  <Input
                    id="contact-name"
                    autoComplete="name"
                    placeholder={dict.contact.form.namePlaceholder}
                    aria-invalid={!!errors.name}
                    className={inputClassName}
                    {...register("name")}
                  />
                  <FieldError message={errors.name?.message} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">
                    {dict.contact.form.email}
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder={dict.contact.form.emailPlaceholder}
                    aria-invalid={!!errors.email}
                    className={inputClassName}
                    {...register("email")}
                  />
                  <FieldError message={errors.email?.message} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-subject">
                  {dict.contact.form.subject}
                </Label>
                <Input
                  id="contact-subject"
                  placeholder={dict.contact.form.subjectPlaceholder}
                  aria-invalid={!!errors.subject}
                  className={inputClassName}
                  {...register("subject")}
                />
                <FieldError message={errors.subject?.message} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">
                  {dict.contact.form.message}
                </Label>
                <Textarea
                  id="contact-message"
                  rows={5}
                  placeholder={dict.contact.form.messagePlaceholder}
                  aria-invalid={!!errors.message}
                  className="min-h-32 border-border bg-background/70 transition-all duration-300 focus-visible:border-primary focus-visible:ring-primary/30"
                  {...register("message")}
                />
                <FieldError message={errors.message?.message} />
              </div>

              <Button
                type="submit"
                disabled={status === "sending"}
                className="h-11 w-full gap-2 text-sm transition-shadow duration-300 hover:bg-primary-hover hover:glow-primary-sm"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    {dict.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    {dict.contact.form.send}
                  </>
                )}
              </Button>

              <div aria-live="polite" className="min-h-5">
                {status === "success" ? (
                  <p className="flex items-center gap-2 text-sm text-success">
                    <CheckCircle2 className="size-4 shrink-0" />
                    {dict.contact.form.success}
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="flex items-center gap-2 text-sm text-destructive">
                    <XCircle className="size-4 shrink-0" />
                    {dict.contact.form.error}
                  </p>
                ) : null}
              </div>

              {/* locale is read so the form re-validates messages after a language switch */}
              <input type="hidden" name="_locale" value={locale} readOnly />
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
