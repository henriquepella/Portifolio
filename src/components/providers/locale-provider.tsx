"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { defaultLocale, dictionaries } from "@/content/translations";
import type { Dictionary, Locale } from "@/types/content";

const STORAGE_KEY = "locale";

interface LocaleContextValue {
  locale: Locale;
  dict: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

/**
 * Applied before hydration by the inline script in layout.tsx, which sets
 * `lang` on <html>; here we just read the persisted choice back.
 */
function getStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "pt" ? stored : defaultLocale;
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    // One-time post-mount sync with localStorage (same pattern as next-themes):
    // the server always renders the default locale, so the persisted choice can
    // only be applied on the client after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocaleState(getStoredLocale());
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "pt" ? "en" : "pt");
  }, [locale, setLocale]);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, dict: dictionaries[locale], setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
