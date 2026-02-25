import TopNav from "../../components/TopNav";
codex/fix-build-errors-on-vercel-3ac9i4
import { getMessages, isLang, type Lang } from "@/lib/i18n";
import { getMessages, isLang, type Lang } from "../../lib/i18n";
main
import { notFound } from "next/navigation";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  if (!isLang(raw)) notFound();
  const lang = raw as Lang;
  const t = await getMessages(lang);

  return (
    <div className="container">
      <TopNav lang={lang} t={t} />
      {children}
      <div className="footer">© ejucoder-star · ai-commercialization-portfolio</div>
    </div>
  );
}
