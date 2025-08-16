import React, { createContext, useContext, useState } from "react";
import { translations } from "../translations";
import type { SupportedLang, Translation } from "../types/translations";

interface TranslationContextType {
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
  t: Translation;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<SupportedLang>("en");

  return (
    <TranslationContext.Provider
      value={{ lang, setLang, t: translations[lang] }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used inside TranslationProvider");
  }
  return context;
};
