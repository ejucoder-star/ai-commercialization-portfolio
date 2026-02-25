import Link from "next/link";
import Image from "next/image";
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
        <h2 className="sectionTitle">{t.cases.gov.name}</h2>
        <Link className="btn" href={`/${lang}/cases`}>{back}</Link>
      </div>
      <div className="card">
        <div className="caseMeta">{t.cases.gov.meta}</div>
        <div className="hr" />
        <p>{t.cases.gov.desc}</p>
        
<div className="hr" />
<div className="gallery">
  {["-1software_security_situation.png","1software_sca_big.png","2risk_app_detail.png","2attack_severity.png","3rasp_probe.png","3sca_probe.png"].map((img)=>(
    <div key={img} className="gItem">
      <Image src={`/images/${img}`} alt={img} width={1200} height={700} />
    </div>
  ))}
</div>

      </div>
      
<div className="grid">
  <div className="card col12">
    <h3>{lang==="zh"?"范围":"Scope"}</h3>
    <p>{lang==="zh"
      ? "整合 SCA 与 RASP 数据，形成资产→风险→告警→策略→运营的闭环视图，并面向多角色定义功能与交互。"
      : lang==="ja"
      ? "SCAとRASPを統合し、資産→リスク→アラート→ポリシー→運用の閉ループを定義。"
      : "Unified SCA & RASP signals into an asset→risk→alert→policy→ops closed loop with multi‑role UX."}</p>
  </div>
</div>

    </>
  );
}
