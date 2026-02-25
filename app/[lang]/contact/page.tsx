import Link from "next/link";
import { getMessages, isLang, type Lang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  if (!isLang(raw)) notFound();
  const lang = raw as Lang;
  const t = await getMessages(lang);

  return (
    <>
      <h2 className="sectionTitle">{t.contact.title}</h2>
      <p className="sectionHint">{t.contact.hint}</p>
      <div className="grid">
        <div className="card col6">
          <h3>Email</h3>
          <p><a href={`mailto:${t.contact.email}`}>{t.contact.email}</a></p>
        </div>
        <div className="card col6">
          <h3>GitHub</h3>
          <p><Link href={t.contact.github}>{t.contact.github}</Link></p>
        </div>
      </div>
      <div className="hr" />
      <div className="card">
        <p>
          {lang==="zh"
            ? "提示：把你的简历命名为 resume.pdf 放到 public/ 下即可。"
            : lang==="ja"
            ? "ヒント：履歴書を resume.pdf として public/ に置いてください。"
            : "Tip: place your resume as public/resume.pdf."}
        </p>
      </div>
    </>
  );
}
