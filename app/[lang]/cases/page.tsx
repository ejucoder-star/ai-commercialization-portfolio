import Link from "next/link";
codex/fix-build-errors-on-vercel-3ac9i4
import { getMessages, isLang, type Lang } from "@/lib/i18n";
import { getMessages, isLang, type Lang } from "../../../lib/i18n";
main
import { notFound } from "next/navigation";

export default async function Cases({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  if (!isLang(raw)) notFound();
  const lang = raw as Lang;
  const t = await getMessages(lang);
  const c = t.cases;

  const items = [
    { slug: "sast-ai", ...c.sastAi },
    { slug: "sast-revenue", ...c.sastBiz },
    { slug: "sca", ...c.sca },
    { slug: "gov-platform", ...c.gov },
    { slug: "eju", ...c.eju },
  ];

  return (
    <>
      <h2 className="sectionTitle">{t.sections.casesTitle}</h2>
      <p className="sectionHint">{t.sections.casesHint}</p>

      <div className="grid">
        {items.map((it: any) => (
          <div key={it.slug} className="card col6">
            <div className="caseTitle">{it.name}</div>
            <div className="caseMeta">{it.meta}</div>
            <div className="hr" />
            <p>{it.desc}</p>
            <div className="hr" />
            <Link className="btn" href={`/${lang}/cases/${it.slug}`}>{lang==="zh"?"打开":lang==="ja"?"開く":"Open"}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
