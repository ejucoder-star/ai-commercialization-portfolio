import Link from "next/link";
import { getT } from "../../../lib/i18n";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  if (!isLang(raw)) notFound();
  const lang = raw as Lang;
  const t = await getMessages(lang);

  const back = lang === "zh" ? "返回案例列表" : lang === "ja" ? "事例一覧へ戻る" : "Back to cases";

  return (
    <>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"}}>
        <h2 className="sectionTitle">{t.cases.sca.name}</h2>
        <Link className="btn" href={`/${lang}/cases`}>{back}</Link>
      </div>
      <div className="card">
        <div className="caseMeta">{t.cases.sca.meta}</div>
        <div className="hr" />
        <p>{t.cases.sca.desc}</p>
        
      </div>
      
<div className="grid">
  <div className="card col12">
    <h3>{lang==="zh"?"你做了什么":"What I did"}</h3>
    <p>{lang==="zh"
      ? "参与竞品评价框架与能力分层、Roadmap 与核心能力设计；并推进标品/定制边界划分，明确复用与行业化交付范围。"
      : lang==="ja"
      ? "競合評価/能力分層、ロードマップ/コア機能に参画。標準/カスタム境界を定義。"
      : "Contributed to competitive framework, capability layering, roadmap/core design, and defined standard vs custom boundaries."}</p>
  </div>
</div>

    </>
  );
}
