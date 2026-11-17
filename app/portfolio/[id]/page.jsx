import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";

function getPortfolioProjects() {
  const filePath = path.join(process.cwd(), "public", "data", "portfolio-projects.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export async function generateStaticParams() {
  const projects = getPortfolioProjects();
  return projects.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const projects = getPortfolioProjects();
  const project = projects.find((item) => item.id === id);
  if (!project) return { title: "Project Not Found | Qrious Tech" };
  return {
    title: `${project.title} | Portfolio | Qrious Tech`,
    description: project.summary || (project.overview && project.overview[0]) || "",
  };
}

export default async function PortfolioDetailPage({ params }) {
  const { id } = await params;
  const projects = getPortfolioProjects();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="portfolio-detail-page py-5">
      <div className="container py-4">
        <Link href="/portfolio" className="btn btn-outline-secondary mb-4">
          ← Back to Portfolio
        </Link>
        <div className="badge badge-warning text-uppercase mb-2 p-2">{project.category}</div>
        <h1 className="display-4 font-weight-bold text-dark mb-3">{project.title}</h1>
        {project.summary && <p className="lead text-muted mb-4">{project.summary}</p>}

        {project.metrics && project.metrics.length > 0 && (
          <div className="row my-4">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="col-md-3 col-6 mb-3">
                <div className="card border-0 bg-light p-3 text-center rounded">
                  <div className="h3 font-weight-bold text-warning mb-1">{m.value}</div>
                  <div className="small text-muted">{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="row mt-5">
          <div className="col-lg-8">
            {project.overview && (
              <div className="mb-4">
                <h3 className="font-weight-bold mb-3">Overview</h3>
                {project.overview.map((p, i) => (
                  <p key={i} className="text-secondary">{p}</p>
                ))}
              </div>
            )}

            {project.technicalOverview && (
              <div className="mb-4">
                <h3 className="font-weight-bold mb-3">Technical Overview</h3>
                {project.technicalOverview.map((p, i) => (
                  <p key={i} className="text-secondary">{p}</p>
                ))}
              </div>
            )}

            {project.features && (
              <div className="mb-4">
                <h3 className="font-weight-bold mb-3">Key Features</h3>
                <ul className="list-group list-group-flush">
                  {project.features.map((f, i) => (
                    <li key={i} className="list-group-item px-0">
                      <strong>•</strong> {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm p-4 mb-4 rounded">
              <h4 className="font-weight-bold mb-3">Technologies & Tools</h4>
              <div className="d-flex flex-wrap">
                {(project.technologies || []).map((tech, idx) => (
                  <span key={idx} className="badge badge-light border p-2 mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="card border-0 shadow-sm p-4 bg-light rounded text-center">
              <h5 className="font-weight-bold mb-2">Have a similar project?</h5>
              <p className="small text-muted mb-3">Let's discuss how our team can bring your vision to life.</p>
              <Link href="/contact" className="btn btn-warning text-white font-weight-bold">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
