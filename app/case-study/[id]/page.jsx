import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";

function getCaseStudies() {
  const filePath = path.join(process.cwd(), "public", "data", "case-studies.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export async function generateStaticParams() {
  const studies = getCaseStudies();
  return studies.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const studies = getCaseStudies();
  const cs = studies.find((item) => item.id === id);
  if (!cs) return { title: "Case Study Not Found | Qrious Tech" };
  return {
    title: `${cs.title} | Qrious Tech Team LLP`,
    description: cs.heroDesc,
  };
}

export default async function CaseStudyPage({ params }) {
  const { id } = await params;
  const studies = getCaseStudies();
  const cs = studies.find((item) => item.id === id);

  if (!cs) {
    notFound();
  }

  const kpis = cs.kpis || [];
  const overview = cs.overview || {};
  const challenges = cs.challenge || {};
  const solutions = cs.solution || {};
  const outcomes = cs.outcome || {};

  return (
    <div className="cs-detail-page">
      <section className="main-page-header py-5" style={{ background: "#1a1a2e", color: "#fff" }}>
        <div className="container py-4">
          <div className="badge badge-warning mb-3 px-3 py-2 text-uppercase font-weight-bold">
            {cs.category}
          </div>
          <h1 className="display-4 font-weight-bold text-white mb-3">{cs.title}</h1>
          <p className="lead text-light" style={{ maxWidth: 800 }}>{cs.heroDesc}</p>
          <div className="row mt-4">
            {kpis.map((kpi, idx) => (
              <div key={idx} className="col-md-3 col-6 mb-3">
                <div className="p-3 rounded text-center" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <div className="h2 font-weight-bold text-warning mb-1">{kpi.val}</div>
                  <div className="text-light small">{kpi.lbl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            {overview.subtitle && (
              <div className="mb-5">
                <h2 className="font-weight-bold text-dark mb-3">Overview</h2>
                <p className="text-muted lead">{overview.subtitle}</p>
                {overview.background && <p>{overview.background}</p>}
              </div>
            )}

            {challenges.points && (
              <div className="mb-5">
                <h3 className="font-weight-bold text-dark mb-3">The Challenge</h3>
                <p>{challenges.summary}</p>
                <ul className="list-unstyled">
                  {challenges.points.map((pt, i) => (
                    <li key={i} className="mb-2 d-flex">
                      <span className="text-danger mr-2 font-weight-bold">✕</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {solutions.points && (
              <div className="mb-5">
                <h3 className="font-weight-bold text-dark mb-3">Our Solution</h3>
                <p>{solutions.summary}</p>
                <ul className="list-unstyled">
                  {solutions.points.map((pt, i) => (
                    <li key={i} className="mb-2 d-flex">
                      <span className="text-success mr-2 font-weight-bold">✓</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {outcomes.points && (
              <div className="mb-5">
                <h3 className="font-weight-bold text-dark mb-3">Key Outcomes & Results</h3>
                <ul className="list-unstyled">
                  {outcomes.points.map((pt, i) => (
                    <li key={i} className="mb-2 d-flex">
                      <span className="text-warning mr-2 font-weight-bold">★</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm border-0 p-4 mb-4" style={{ borderRadius: 12 }}>
              <h4 className="font-weight-bold mb-3">Project Info</h4>
              <p className="mb-2"><strong>Sector:</strong> {cs.category}</p>
              {cs.client && <p className="mb-2"><strong>Client:</strong> {cs.client}</p>}
              {cs.technologies && (
                <div className="mt-3">
                  <strong>Tech Stack:</strong>
                  <div className="d-flex flex-wrap mt-2">
                    {cs.technologies.map((t, i) => (
                      <span key={i} className="badge badge-light border mr-1 mb-1 p-2">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="card shadow-sm border-0 p-4 bg-light" style={{ borderRadius: 12 }}>
              <h5 className="font-weight-bold mb-2">Want Similar Results?</h5>
              <p className="small text-muted mb-3">Schedule a consultation with our senior engineers today.</p>
              <Link href="/contact" className="btn btn-warning font-weight-bold text-white btn-block">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
