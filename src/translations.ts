import en from "./locales/en.json";
import hi from "./locales/hi.json";
import ru from "./locales/ru.json";
import de from "./locales/de.json";

import type { SupportedLang, Translation } from "./types/translations";

export const translations: Record<SupportedLang, Translation> = {
  en,
  hi,
  ru,
  de,
};
