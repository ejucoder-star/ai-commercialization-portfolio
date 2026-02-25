// lib/i18n.ts
export type Lang = "zh" | "en" | "ja";

export const SUPPORTED_LANGS: Lang[] = ["zh", "en", "ja"];

export function normalizeLang(input?: string): Lang {
  if (!input) return "zh";
  const v = input.toLowerCase();
  if (v === "zh" || v === "en" || v === "ja") return v;
  // 兼容你按钮里可能写 jp
  if (v === "jp") return "ja";
  return "zh";
}

type Dict = Record<string, any>;

// 点路径取值：t("nav.cases")
function getByPath(obj: Dict, path: string): string | undefined {
  const parts = path.split(".");
  let cur: any = obj;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in cur) cur = cur[p];
    else return undefined;
  }
  return typeof cur === "string" ? cur : undefined;
}

export async function getMessages(lang: Lang): Promise<Dict> {
  // messages/ 下放 zh.json / en.json / ja.json
  switch (lang) {
    case "en":
      return (await import("../messages/en.json")).default as Dict;
    case "ja":
      return (await import("../messages/ja.json")).default as Dict;
    case "zh":
    default:
      return (await import("../messages/zh.json")).default as Dict;
  }
}

export async function getT(lang: Lang) {
  const messages = await getMessages(lang);
  return (key: string, fallback?: string) =>
    getByPath(messages, key) ?? fallback ?? key;
}
