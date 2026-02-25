import Link from "next/link";
codex/fix-build-errors-on-vercel-3ac9i4
import { getMessages, isLang, type Lang } from "@/lib/i18n";
codex/fix-build-errors-on-vercel-tpc7xd
import { getMessages, isLang, type Lang } from "../../../../lib/i18n";
import { getMessages, isLang, type Lang } from "../../../lib/i18n";
main
main
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
        <h2 className="sectionTitle">{t.cases.sastAi.name}</h2>
        <Link className="btn" href={`/${lang}/cases`}>{back}</Link>
      </div>
      <div className="card">
        <div className="caseMeta">{t.cases.sastAi.meta}</div>
        <div className="hr" />
        <p>{t.cases.sastAi.desc}</p>
        <div className="hr" /><div className="tagRow"><span className="tag">FP ~50%</span><span className="tag">On‑prem</span><span className="tag">RAG</span><span className="tag">Free → Paid</span></div>
      </div>
      
<div className="grid">
  <div className="card col12">
    <h3>{lang==="zh"?"1) 问题":"1) Problem"}</h3>
    <p>
      {lang==="zh"
        ? "传统 SAST 静态规则受限，误报率高（约50%），导致安全团队复核成本高；POC阶段客户最在意核心能力匹配与服务响应。"
        : lang==="ja"
        ? "従来のSASTは誤検知が多く（概ね50%）、手動レビュー負荷が高い。POCでは中核能力の適合とサポート速度が重視される。"
        : "Traditional SAST produces high false positives (~50%), creating heavy manual triage. In POC, customers care about core capability fit and responsiveness."}
    </p>
    <div className="hr" />
    <h3>{lang==="zh"?"2) 约束":"2) Constraints"}</h3>
    <p>
      {lang==="zh"
        ? "客户要求本地化部署：代码与扫描数据不出域；输出需可解释、可审计；吞吐与算力可控。"
        : lang==="ja"
        ? "オンプレ要件：コード/データは外部送信不可。出力は説明可能・監査可能。計算資源とスループットも制御。"
        : "On‑prem requirement: code/scan data stays in‑house; outputs must be explainable/auditable with controllable compute & throughput."}
    </p>
  </div>

  <div className="card col12">
    <h3>{lang==="zh"?"3) 方案（RAG）":"3) Solution (RAG)"}</h3>
    <p>
      {lang==="zh"
        ? "SAST 上下文（规则ID/代码片段/路径）→ 召回规则定义、边界条件与误报案例 → 调用客户侧 LLM 推理服务 → 输出结构化判定（误报/真阳性/需复核）+ 置信度 + 依据。"
        : lang==="ja"
        ? "SAST文脈→ルール定義/境界/事例をRAGで検索→顧客側LLM推論→構造化判定+信頼度+根拠。"
        : "SAST context → retrieve rule definitions/edge cases/examples via RAG → call customer‑hosted LLM → return structured verdict + confidence + evidence."}
    </p>
    <div className="hr" />
    <p>
      {lang==="zh"
        ? "风险控制：阈值与回退、强制引用依据，避免模型直接覆盖引擎结果。"
        : lang==="ja"
        ? "リスク制御：しきい値/フォールバック、根拠参照の強制。"
        : "Risk controls: thresholds & fallback, forced evidence citations."}
    </p>
  </div>

  <div className="card col12">
    <h3>{lang==="zh"?"4) 商业化路径":"4) Monetization"}</h3>
    <p>
      {lang==="zh"
        ? "初期免费用于提升 POC 竞争力与信任；稳定后拆为独立付费模块（按扫描量/项目数/推理调用量或企业版本打包）。"
        : lang==="ja"
        ? "初期は無料でPOC競争力を向上。安定後、有料アドオン（スキャン量/プロジェクト数/推論回数等）として販売。"
        : "Phase 1 free to win POCs; Phase 2 as paid add‑on (priced by scan volume/projects/inference usage or enterprise tier)."}
    </p>
  </div>
</div>

    </>
  );
}
