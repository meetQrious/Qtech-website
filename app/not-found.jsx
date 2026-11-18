import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | Qrious Tech",
  description: "The requested page could not be found.",
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden">
      <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-2 mb-6 flex items-center justify-center shadow-lg">
        <img src="/logo.png" alt="Qrious Tech Logo" className="w-12 h-12 object-contain" />
      </div>
      <div className="font-mono text-xs text-[#ff5a1f] dark:text-[#ff8a48] uppercase tracking-wider mb-2 font-semibold">
        404 // Node Not Found
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        Page Does Not Exist
      </h1>
      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md leading-relaxed mb-8">
        The requested URL was not found on this cluster. The route may have been migrated or updated.
      </p>
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#090d16] dark:bg-white text-white dark:text-[#07080b] hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-md"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}
