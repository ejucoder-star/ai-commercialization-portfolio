import Link from "next/link";
import { getMessages, isLang, type Lang } from "../../../lib/i18n";
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
        <h2 className="sectionTitle">{t.cases.sastBiz.name}</h2>
        <Link className="btn" href={`/${lang}/cases`}>{back}</Link>
      </div>
      <div className="card">
        <div className="caseMeta">{t.cases.sastBiz.meta}</div>
        <div className="hr" />
        <p>{t.cases.sastBiz.desc}</p>
        
      </div>
      
<div className="grid">
  <div className="card col12">
    <h3>{lang==="zh"?"目标":"Goal"}</h3>
    <p>{lang==="zh"
      ? "在固定成本约束下设计可复制的营收落地路径，推动从关系型销售到产品驱动销售。"
      : lang==="ja"
      ? "固定コスト制約下で再現性のある売上達成ルートを設計し、関係型営業からプロダクト主導へ。"
      : "Design a repeatable revenue delivery path and move from relationship‑driven to product‑led selling."}</p>
  </div>
  <div className="card col12">
    <h3>{lang==="zh"?"关键机制":"Mechanisms"}</h3>
    <p>{lang==="zh"
      ? "行业分层打法：电力→竞品替代（对比材料与优势点）；金融→可回溯与合规，强调 DevSecOps 深度嵌合。"
      : lang==="ja"
      ? "業界別：電力→競合置換。金融→監査/コンプライアンス重視で DevSecOps 統合。"
      : "Industry playbooks: power via displacement; finance via auditability/compliance and deep DevSecOps integration."}</p>
    <div className="hr" />
    <p>{lang==="zh"
      ? "销售工具包：产品介绍、参数、竞品分析、白皮书、报价、招标模板、售前FAQ、话术等。"
      : lang==="ja"
      ? "営業ツール：紹介、仕様、競合分析、WP、見積、入札テンプレ、FAQ、トーク等。"
      : "Sales kit: overview, specs, competitive analysis, whitepaper, quotes, tender templates, FAQ, talk tracks."}</p>
  </div>
</div>

    </>
  );
}
