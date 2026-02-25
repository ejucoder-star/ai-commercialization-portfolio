export type Lang = "zh" | "en" | "ja";
export const LANGS: Lang[] = ["zh", "en", "ja"];

export function isLang(v: string): v is Lang {
  return (LANGS as string[]).includes(v);
}

export async function getMessages(lang: Lang) {
  const mod = await import(`../messages/${lang}.json`);
  return mod.default as any;
}
