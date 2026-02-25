import Link from "next/link";
import { getMessages, isLang, type Lang } from "../../../../lib/i18n";
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
        <h2 className="sectionTitle">{t.cases.eju.name}</h2>
        <Link className="btn" href={`/${lang}/cases`}>{back}</Link>
      </div>
      <div className="card">
        <div className="caseMeta">{t.cases.eju.meta}</div>
        <div className="hr" />
        <p>{t.cases.eju.desc}</p>
        
      </div>
      
<div className="grid">
  <div className="card col12">
    <h3>{lang==="zh"?"关键难点":"Key bottleneck"}</h3>
    <p>{lang==="zh"
      ? "图像型 PDF 的数学公式/几何图像识别很难，尝试过直接用大模型、工作流、Mathpix 等工具，最终选定多模态能力更强的模型路线后才开始正式开发。"
      : lang==="ja"
      ? "画像PDFの数式/幾何認識が難しく、単一モデル/OCR/Mathpix等を比較。最終的に高性能マルチモーダルのルートで開発。"
      : "Image‑PDF formula/geometry extraction is hard. After evaluating workflows/tools/models (incl. formula‑specialized), I selected a stronger multimodal path."}</p>
    <div className="hr" />
    <p>{lang==="zh"
      ? "已上线约 10 套题目与答案并部署到 Vercel。"
      : lang==="ja"
      ? "約10セットを公開し、Vercelへデプロイ済み。"
      : "Shipped ~10 sets and deployed on Vercel."}</p>
  </div>
</div>

    </>
  );
}
