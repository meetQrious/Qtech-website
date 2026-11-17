const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const LEGACY_DIR = path.join(PROJECT_ROOT, '_legacy_html');
const APP_DIR = path.join(PROJECT_ROOT, 'app');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'components');

if (!fs.existsSync(APP_DIR)) fs.mkdirSync(APP_DIR, { recursive: true });
if (!fs.existsSync(COMPONENTS_DIR)) fs.mkdirSync(COMPONENTS_DIR, { recursive: true });

console.log('--- Step 1: Converting Header Component ---');
const headerHtml = fs.readFileSync(path.join(LEGACY_DIR, 'header.html'), 'utf8');
const $h = cheerio.load(headerHtml);

// Clean up links in header
$h('a[href="/index"], a[href="/index.html"]').attr('href', '/');
$h('a[href$=".html"]').each((_, el) => {
  const current = $h(el).attr('href');
  if (current && !current.startsWith('http')) {
    $h(el).attr('href', current.replace(/\.html$/, ''));
  }
});

const headerTagHtml = $h('header.main-header').toString();
const mobileMenuHtml = $h('.mobile-menu').toString();

const headerComponent = `"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Mega-menu tabs & mobile interactions
  useEffect(() => {
    // Mega menu tech hover
    const techItems = document.querySelectorAll(".main-header .main-technology");
    const techLists = document.querySelectorAll(".main-header .tech-practices-item-list");

    const resetTech = () => {
      techItems.forEach(t => t.classList.remove("active-technology"));
      techLists.forEach(l => {
        l.classList.remove("active-technology-list");
        l.classList.add("inactive-technology-list");
      });
      const defaultTech = document.getElementById("data-visulization");
      const defaultList = document.getElementById("data-visulization-content");
      if (defaultTech) defaultTech.classList.add("active-technology");
      if (defaultList) {
        defaultList.classList.remove("inactive-technology-list");
        defaultList.classList.add("active-technology-list");
      }
    };

    techItems.forEach(item => {
      item.addEventListener("mouseenter", () => {
        techItems.forEach(t => t.classList.remove("active-technology"));
        item.classList.add("active-technology");
        techLists.forEach(l => {
          l.classList.remove("active-technology-list");
          l.classList.add("inactive-technology-list");
        });
        const id = item.id;
        const targetList = document.getElementById(id + "-content");
        if (targetList) {
          targetList.classList.remove("inactive-technology-list");
          targetList.classList.add("active-technology-list");
        }
      });
    });

    const dropdowns = document.querySelectorAll(".main-header .navigation .dropdown");
    dropdowns.forEach(d => d.addEventListener("mouseenter", resetTech));

    // Mobile nav toggle
    const mobileToggler = document.querySelector(".mobile-nav-toggler");
    if (mobileToggler) {
      mobileToggler.onclick = () => setIsMobileMenuOpen(true);
    }
  }, []);

  return (
    <>
      <div
        className={isScrolled ? "fixed-header-wrapper" : ""}
        dangerouslySetInnerHTML={{
          __html: ${JSON.stringify(headerTagHtml)}
        }}
      />
      <div
        className={"mobile-menu " + (isMobileMenuOpen ? "mobile-menu-visible" : "mobile-menu-hidden")}
      >
        <div className="menu-backdrop" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="icon flaticon-close-1"></span>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: ${JSON.stringify(mobileMenuHtml)}
          }}
        />
      </div>
    </>
  );
}
`;

fs.writeFileSync(path.join(COMPONENTS_DIR, 'Header.jsx'), headerComponent);
console.log('✅ Header component generated.');

console.log('--- Step 2: Converting Footer Component ---');
const footerHtml = fs.readFileSync(path.join(LEGACY_DIR, 'footer.html'), 'utf8');
const $ft = cheerio.load(footerHtml);

$ft('a[href="/index"], a[href="/index.html"]').attr('href', '/');
$ft('a[href$=".html"]').each((_, el) => {
  const current = $ft(el).attr('href');
  if (current && !current.startsWith('http')) {
    $ft(el).attr('href', current.replace(/\.html$/, ''));
  }
});

const footerTagHtml = $ft('footer.main-footer').toString();

const footerComponent = `import React from "react";

export default function Footer() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: ${JSON.stringify(footerTagHtml)}
      }}
    />
  );
}
`;

fs.writeFileSync(path.join(COMPONENTS_DIR, 'Footer.jsx'), footerComponent);
console.log('✅ Footer component generated.');

console.log('--- Step 3: Generating Client Scripts / Interactive Helpers ---');
const clientScripts = `"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Hide preloader
    const preloader = document.querySelector(".preloader");
    if (preloader) {
      preloader.style.transition = "opacity 0.4s ease";
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 400);
    }

    // Scroll to top button handling
    const scrollTopBtn = document.querySelector(".scroll-to-top");
    const onScroll = () => {
      if (scrollTopBtn) {
        if (window.scrollY > 300) {
          scrollTopBtn.style.display = "block";
        } else {
          scrollTopBtn.style.display = "none";
        }
      }
    };
    window.addEventListener("scroll", onScroll);

    if (scrollTopBtn) {
      scrollTopBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    }

    // Populate staff headshots on homepage if #staff-image exists
    const staffContainer = document.getElementById("staff-image");
    if (staffContainer && staffContainer.children.length === 0) {
      const allStaff = Array.from(new Array(88)).map((_, index) => {
        return '<div class="team-member"><img alt="" src="/images/staff-headshots/' + (index + 1) + '.webp" /></div>';
      });
      staffContainer.innerHTML = allStaff.join("");
    }

    // Tab buttons handling
    const tabBtns = document.querySelectorAll(".tabs-box .tab-buttons .tab-btn");
    tabBtns.forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        const targetSelector = btn.getAttribute("data-tab");
        if (targetSelector) {
          const parent = btn.closest(".tabs-box");
          if (parent) {
            parent.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active-btn"));
            btn.classList.add("active-btn");
            parent.querySelectorAll(".tabs-content .tab").forEach(t => {
              t.classList.remove("active-tab");
              t.style.display = "none";
            });
            const targetTab = parent.querySelector(targetSelector);
            if (targetTab) {
              targetTab.classList.add("active-tab");
              targetTab.style.display = "block";
            }
          }
        }
      };
    });

    // FAQ Accordion handling
    const accordions = document.querySelectorAll(".accordion-box .acc-btn");
    accordions.forEach(acc => {
      acc.onclick = () => {
        const parent = acc.closest(".accordion");
        if (parent) {
          const content = parent.querySelector(".acc-content");
          const isActive = parent.classList.contains("active-block");
          if (isActive) {
            parent.classList.remove("active-block");
            acc.classList.remove("active");
            if (content) content.style.display = "none";
          } else {
            parent.classList.add("active-block");
            acc.classList.add("active");
            if (content) content.style.display = "block";
          }
        }
      };
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return null;
}
`;

fs.writeFileSync(path.join(COMPONENTS_DIR, 'ClientScripts.jsx'), clientScripts);
console.log('✅ ClientScripts component generated.');

console.log('--- Step 4: Generating Root Layout ---');
const layoutContent = `import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://qrioustech.com"),
  title: "Qrious Tech | Enterprise AI & Custom Software Engineering",
  description: "Enterprise software engineering, AI modernization partner, cloud web applications, and custom digital product development.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/header.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="stylesheet" href="/css/testimonial.css" />
        <link rel="stylesheet" href="/css/custom-animate.css" />
        <link rel="stylesheet" href="/css/product-development.css" />
        <link rel="stylesheet" href="/css/working-methodology.css" />
        <link rel="stylesheet" href="/css/techpractice.css" />
        <link rel="stylesheet" href="/css/qt-kids.css" />
      </head>
      <body>
        <div className="page-wrapper">
          <div className="preloader">
            <div className="icon"></div>
          </div>
          <Header />
          <main>{children}</main>
          <Footer />
          <ClientScripts />
          <div className="scroll-to-top scroll-to-target" data-target="html" style={{ display: "none" }}>
            <span className="fa fa-angle-up"></span>
          </div>
        </div>
      </body>
    </html>
  );
}
`;

fs.writeFileSync(path.join(APP_DIR, 'layout.jsx'), layoutContent);

// Also create globals.css
const globalsCss = `/* Next.js Globals */
html, body {
  margin: 0;
  padding: 0;
}

.fixed-header-wrapper .main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #ffffff;
}
`;
fs.writeFileSync(path.join(APP_DIR, 'globals.css'), globalsCss);
console.log('✅ Root layout & globals.css generated.');

console.log('--- Step 5: Converting All 44 Pages ---');
const files = fs.readdirSync(LEGACY_DIR).filter(f => f.endsWith('.html'));

const skipFiles = new Set(['header.html', 'footer.html', 'case-study.html', 'portfolio-detail.html']);

files.forEach(file => {
  if (skipFiles.has(file)) return;

  const html = fs.readFileSync(path.join(LEGACY_DIR, file), 'utf8');
  const $ = cheerio.load(html);

  const title = $('title').text() || 'Qrious Tech | Enterprise AI & Custom Software Engineering';
  const description = $('meta[name="description"]').attr('content') || '';
  const keywords = $('meta[name="keywords"]').attr('content') || '';

  // Clean links
  $('a[href="/index"], a[href="/index.html"]').attr('href', '/');
  $('a[href$=".html"]').each((_, el) => {
    const cur = $(el).attr('href');
    if (cur && !cur.startsWith('http')) {
      $(el).attr('href', cur.replace(/\.html$/, ''));
    }
  });

  // Ensure all image src paths are absolute from root
  $('img').each((_, el) => {
    let src = $(el).attr('src');
    if (src && !src.startsWith('/') && !src.startsWith('http') && !src.startsWith('data:')) {
      if (src.startsWith('./')) src = src.substring(2);
      $(el).attr('src', '/' + src);
    }
  });

  // Fix relative image urls in inline styles
  $('[style]').each((_, el) => {
    let style = $(el).attr('style');
    if (style && style.includes('url(')) {
      style = style.replace(/url\((['"]?)(?:\.\/)?images\//g, 'url($1/images/');
      $(el).attr('style', style);
    }
  });

  // Remove preloader, header, and footer divs since they are in RootLayout
  $('.preloader').remove();
  $('#header').remove();
  $('#footer').remove();
  $('footer.main-footer').remove();
  $('header.main-header').remove();
  $('.scroll-to-top').remove();

  // Remove external scripts loaded in head/footer
  $('script').each((_, el) => {
    const s = $(el).attr('src') || '';
    if (s.includes('jquery') || s.includes('bootstrap') || s.includes('OwlCarousel') || s.includes('wow') || s.includes('header.js') || s.includes('scrollbar.js')) {
      $(el).remove();
    }
  });

  // Extract content inside .page-wrapper, or body
  let mainContent = '';
  if ($('.page-wrapper').length) {
    mainContent = $('.page-wrapper').html();
  } else {
    mainContent = $('body').html();
  }

  const baseName = file.replace(/\.html$/, '');
  let routeDir = '';

  if (baseName === 'index') {
    routeDir = APP_DIR;
  } else {
    routeDir = path.join(APP_DIR, baseName);
    if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true });
  }

  const pageContent = `import React from "react";

export const metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description)},
  keywords: ${JSON.stringify(keywords)},
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: ${JSON.stringify(mainContent)}
      }}
    />
  );
}
`;

  fs.writeFileSync(path.join(routeDir, 'page.jsx'), pageContent);
  console.log('  ✓ Converted ' + file + ' -> ' + (baseName === 'index' ? 'app/page.jsx' : 'app/' + baseName + '/page.jsx'));
});

console.log('--- Step 6: Creating Dynamic Case Study Route ---');
const caseStudyDir = path.join(APP_DIR, 'case-study', '[id]');
if (!fs.existsSync(caseStudyDir)) fs.mkdirSync(caseStudyDir, { recursive: true });

const caseStudyPageContent = `import fs from "fs";
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
    title: \`\${cs.title} | Qrious Tech Team LLP\`,
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
`;

fs.writeFileSync(path.join(caseStudyDir, 'page.jsx'), caseStudyPageContent);
console.log('✅ Dynamic Case Study route generated.');

console.log('--- Step 7: Creating Dynamic Portfolio Route ---');
const portfolioDir = path.join(APP_DIR, 'portfolio', '[id]');
if (!fs.existsSync(portfolioDir)) fs.mkdirSync(portfolioDir, { recursive: true });

const portfolioPageContent = `import fs from "fs";
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
    title: \`\${project.title} | Portfolio | Qrious Tech\`,
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
`;

fs.writeFileSync(path.join(portfolioDir, 'page.jsx'), portfolioPageContent);
console.log('✅ Dynamic Portfolio route generated.');

console.log('--- Step 8: Creating Not Found Page ---');
const notFoundContent = `import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | Qrious Tech",
  description: "The requested page could not be found.",
};

export default function NotFound() {
  return (
    <div className="container py-5 text-center" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1 className="display-1 font-weight-bold text-warning mb-3">404</h1>
      <h2 className="font-weight-bold mb-3">Page Not Found</h2>
      <p className="lead text-muted mb-4" style={{ maxWidth: 500 }}>
        The page you are looking for might have been moved, removed, or is temporarily unavailable.
      </p>
      <Link href="/" className="btn btn-warning font-weight-bold text-white px-4 py-2">
        Return to Home
      </Link>
    </div>
  );
}
`;

fs.writeFileSync(path.join(APP_DIR, 'not-found.jsx'), notFoundContent);
console.log('✅ Not Found page generated.');

console.log('--- Migration Completed Successfully! ---');
