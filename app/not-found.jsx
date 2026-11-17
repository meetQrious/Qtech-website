import Link from "next/link";

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
