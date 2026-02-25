codex/fix-build-errors-on-vercel-3ac9i4
import { getMessages, isLang, type Lang } from "@/lib/i18n";
import { getMessages, isLang, type Lang } from "../../../lib/i18n";
main
import { notFound } from "next/navigation";

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  if (!isLang(raw)) notFound();
  const lang = raw as Lang;
  const t = await getMessages(lang);

  return (
    <>
      <h2 className="sectionTitle">{t.about.title}</h2>
      <div className="card">
        <p>{t.about.p1}</p>
        <div className="hr" />
        <p>{t.about.p2}</p>
        <div className="hr" />
        <div className="tagRow">
          <span className="tag">AI Productization</span>
          <span className="tag">On‑prem / Security</span>
          <span className="tag">Monetization</span>
          <span className="tag">Complex Systems</span>
        </div>
      </div>
    </>
  );
}
