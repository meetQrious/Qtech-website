import "./globals.css";
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
