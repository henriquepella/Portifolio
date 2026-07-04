import type { Dictionary, Locale } from "@/types/content";
import { pt } from "./pt";
import { en } from "./en";

export const dictionaries: Record<Locale, Dictionary> = { pt, en };

export const defaultLocale: Locale = "pt";

export const locales: Locale[] = ["pt", "en"];
