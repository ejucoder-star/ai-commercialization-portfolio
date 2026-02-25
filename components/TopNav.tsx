import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Lang } from "@/lib/i18n";

export default function TopNav({ lang, t }: { lang: Lang; t: any }) {
  return (
    <div className="nav">
      <div className="brand">
        <b>AI Commercialization PM</b>
        <small>{lang === "zh" ? "企业级 AI 产品化与商业转化" : lang === "ja" ? "企業向けAIの製品化と収益化" : "Enterprise AI productization & monetization"}</small>
      </div>

      <div className="lang">
        <Link className="pill" href={`/${lang}`}>{t.nav.home}</Link>
        <Link className="pill" href={`/${lang}/cases`}>{t.nav.cases}</Link>
        <Link className="pill" href={`/${lang}/about`}>{t.nav.about}</Link>
        <Link className="pill" href={`/${lang}/contact`}>{t.nav.contact}</Link>
        <LanguageSwitcher />
      </div>
    </div>
  );
}
