/**
 * local-server.js
 * Local development server that mirrors Vercel's cleanUrls behavior.
 * Run: node local-server.js
 * Then open: http://localhost:8000
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8000;
const ROOT = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css":  "text/css",
  ".js":   "application/javascript",
  ".json": "application/json",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif":  "image/gif",
  ".svg":  "image/svg+xml",
  ".ico":  "image/x-icon",
  ".woff": "font/woff",
  ".woff2":"font/woff2",
  ".ttf":  "font/ttf",
  ".eot":  "application/vnd.ms-fontobject",
  ".webp": "image/webp",
  ".mp4":  "video/mp4",
  ".webm": "video/webm",
  ".pdf":  "application/pdf",
  ".md":   "text/markdown; charset=utf-8",
};

function serveFile(res, filePath, statusCode = 200) {
  const ext  = path.extname(filePath).toLowerCase();
  const mime = MIME_TYPES[ext] || "application/octet-stream";
  const data = fs.readFileSync(filePath);
  res.writeHead(statusCode, {
    "Content-Type": mime,
    "Vary": "Accept",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Pragma": "no-cache",
    "Expires": "0"
  });
  res.end(data);
}

const server = http.createServer((req, res) => {
  // Strip query string
  let urlPath = req.url.split("?")[0];

  // Decode URI
  try { urlPath = decodeURIComponent(urlPath); } catch (e) {}

  console.log(`[Request] ${req.method} ${req.url} -> urlPath: ${urlPath}`);

  // Resolve to filesystem path
  let fsPath = path.join(ROOT, urlPath);

  // Content Negotiation for Homepage (acceptmarkdown.com)
  const acceptsMarkdown = (req.headers["accept"] || "").includes("text/markdown");
  if (acceptsMarkdown && (urlPath === "/" || urlPath === "/index" || urlPath === "/index.html")) {
    const mdHome = path.join(ROOT, "index.md");
    if (fs.existsSync(mdHome)) {
      res.writeHead(200, {
        "Content-Type": "text/markdown; charset=utf-8",
        "Vary": "Accept",
        "Cache-Control": "no-cache"
      });
      return res.end(fs.readFileSync(mdHome));
    }
  }

  // 0. Dynamic routing for case studies: /case-study/:id -> case-study.html
  const csMatch = urlPath.match(/^\/case-study\/([^/]+)$/);
  if (csMatch && !csMatch[1].includes(".")) {
    const templatePath = path.join(ROOT, "case-study.html");
    if (fs.existsSync(templatePath)) {
      return serveFile(res, templatePath);
    }
  }

  // Dynamic routing for portfolio: /portfolio/:id -> portfolio-detail.html
  const portfolioMatch = urlPath.match(/^\/portfolio\/([^/]+)$/);
  if (portfolioMatch && !portfolioMatch[1].includes(".")) {
    const templatePath = path.join(ROOT, "portfolio-detail.html");
    if (fs.existsSync(templatePath)) {
      return serveFile(res, templatePath);
    }
  }

  // 1. Exact file exists → serve it
  if (fs.existsSync(fsPath) && fs.statSync(fsPath).isFile()) {
    return serveFile(res, fsPath);
  }

  // 2. Directory with index.html → serve index.html
  if (fs.existsSync(fsPath) && fs.statSync(fsPath).isDirectory()) {
    const indexPath = path.join(fsPath, "index.html");
    if (fs.existsSync(indexPath)) {
      return serveFile(res, indexPath);
    }
  }

  // 3. Clean URL: try adding .html (mirrors Vercel cleanUrls)
  const htmlPath = fsPath + ".html";
  if (fs.existsSync(htmlPath)) {
    return serveFile(res, htmlPath);
  }

  // 4. Not found → 404
  if (acceptsMarkdown) {
    const mdNotFound = path.join(ROOT, "404.md");
    if (fs.existsSync(mdNotFound)) {
      res.writeHead(404, {
        "Content-Type": "text/markdown; charset=utf-8",
        "Vary": "Accept",
        "Cache-Control": "no-cache"
      });
      return res.end(fs.readFileSync(mdNotFound));
    }
  }
  
  const notFound = path.join(ROOT, "404.html");
  if (fs.existsSync(notFound)) {
    return serveFile(res, notFound, 404);
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404 – Page Not Found");
});

server.listen(PORT, () => {
  console.log(`\n✅  Qrioustech local server running at:\n`);
  console.log(`   → http://localhost:${PORT}\n`);
  console.log(`   Clean URLs enabled (e.g. /case-studies → case-studies.html)\n`);
  console.log(`   Press Ctrl+C to stop.\n`);
});
