import Link from "next/link";
import Image from "next/image";
import { getMessages, isLang, type Lang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  if (!isLang(raw)) notFound();
  const lang = raw as Lang;
  const t = await getMessages(lang);

  const cases = t.cases;

  return (
    <>
      <div className="hero">
        <div>
          <h1 className="hTitle">{t.hero.title}</h1>
          <p className="hSubtitle">{t.hero.subtitle}</p>
          <div className="ctaRow">
            <a className="btn btnPrimary" href="/resume.pdf" target="_blank" rel="noreferrer">
              {t.hero.ctaPrimary}
            </a>
            <Link className="btn" href={`/${lang}/cases`}>{t.hero.ctaSecondary}</Link>
          </div>

          <h2 className="sectionTitle">{t.sections.casesTitle}</h2>
          <p className="sectionHint">{t.sections.casesHint}</p>

          <div className="grid">
            <div className="card col6">
              <div className="caseTitle">{cases.sastAi.name}</div>
              <div className="caseMeta">{cases.sastAi.meta}</div>
              <div className="tagRow">
                <span className="tag">RAG</span><span className="tag">On‑prem</span><span className="tag">Explainability</span>
              </div>
              <div className="hr" />
              <p>{cases.sastAi.desc}</p>
              <div className="hr" />
              <Link className="btn" href={`/${lang}/cases/sast-ai`}>{lang==="zh"?"阅读案例":lang==="ja"?"読む":"Read case"}</Link>
            </div>

            <div className="card col6">
              <div className="caseTitle">{cases.sastBiz.name}</div>
              <div className="caseMeta">{cases.sastBiz.meta}</div>
              <div className="tagRow">
                <span className="tag">Revenue</span><span className="tag">Segmentation</span><span className="tag">Enablement</span>
              </div>
              <div className="hr" />
              <p>{cases.sastBiz.desc}</p>
              <div className="hr" />
              <Link className="btn" href={`/${lang}/cases/sast-revenue`}>{lang==="zh"?"阅读案例":lang==="ja"?"読む":"Read case"}</Link>
            </div>

            <div className="card col6">
              <div className="caseTitle">{cases.sca.name}</div>
              <div className="caseMeta">{cases.sca.meta}</div>
              <div className="tagRow">
                <span className="tag">Roadmap</span><span className="tag">Packaging</span><span className="tag">Competitive</span>
              </div>
              <div className="hr" />
              <p>{cases.sca.desc}</p>
              <div className="hr" />
              <Link className="btn" href={`/${lang}/cases/sca`}>{lang==="zh"?"阅读案例":lang==="ja"?"読む":"Read case"}</Link>
            </div>

            <div className="card col6">
              <div className="caseTitle">{cases.eju.name}</div>
              <div className="caseMeta">{cases.eju.meta}</div>
              <div className="tagRow">
                <span className="tag">Multimodal</span><span className="tag">Workflow</span><span className="tag">Vercel</span>
              </div>
              <div className="hr" />
              <p>{cases.eju.desc}</p>
              <div className="hr" />
              <Link className="btn" href={`/${lang}/cases/eju`}>{lang==="zh"?"阅读案例":lang==="ja"?"読む":"Read case"}</Link>
            </div>
          </div>
        </div>

        <div className="kpis">
          {t.kpis.map((k: any) => (
            <div key={k.t} className="card">
              <h3>{k.t}</h3>
              <p>{k.d}</p>
            </div>
          ))}
          <div className="card">
            <h3>{t.sections.galleryTitle}</h3>
            <p>{t.sections.galleryHint}</p>
            <div className="hr" />
            <div className="gallery">
              {["1software_sca_big.png","2risk_app_detail.png","2attack_severity.png","3rasp_probe.png","3sca_probe.png","-1software_security_situation.png"].map((img) => (
                <div key={img} className="gItem">
                  <Image src={`/images/${img}`} alt={img} width={1200} height={700} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
