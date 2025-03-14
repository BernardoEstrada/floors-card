import { HomeAssistant } from 'ha';
import { en, es } from 'translations';
import { FloorsCardTranslations } from 'types';


const languages: Record<string, FloorsCardTranslations> = {
  en,
  es,
};

const DEFAULT_LANG = 'en';

function getTranslatedString(key: string, lang: string): string | undefined {
  try {
    return key.split('.').reduce((acc, cur) => {
      return acc[cur];
    }, languages[lang] as any);

  } catch (_) {
    return undefined;
  }
}

export default function setupCustomlocalize(hass?: HomeAssistant, path?: string[], hassPath?: string[]): (key: string) => string {
  return function (key: string): string {
    if (!key || key.startsWith('!')) return '';
    const lang = hass?.locale.language ?? DEFAULT_LANG;
    const composedKey = `${path?.join('.') || 'root' }.${key}`

    let translated = getTranslatedString(composedKey, lang);
    if (!translated) translated = getTranslatedString(composedKey, DEFAULT_LANG);
    if (!translated && hass && hassPath) translated = hass.localize(`${hassPath.join('.')}.${key}`);
    if (!translated) console.warn(`Translation for key ${composedKey} not found`);
    return translated ?? composedKey;
  };
}
