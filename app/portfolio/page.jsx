import React from "react";

export const metadata = {
  title: "Portfolio | Qrious Tech Team LLP",
  description: "Explore Qrioustech Team LLP's project portfolio. View detailed web, mobile, cloud, healthcare, ecommerce, finance, community, and workforce management projects.",
  keywords: "",
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "\n      \n\n      \n\n      <!-- <section class=\"portfolio-hero\">\n        <div class=\"max-width\">\n          <span class=\"portfolio-eyebrow\">Project Portfolio</span>\n          <h1>Real project work, organized as detailed product stories.</h1>\n          <p>\n            Explore selected delivery work across finance, healthcare,\n            community, ecommerce, and workforce platforms. Each project includes\n            the overview, technical approach, tools, and feature details shared\n            in the portfolio document.\n          </p>\n        </div>\n      </section> -->\n      <section class=\"cs-hero\">\n        <div class=\"max-width text-center\">\n          <h1 class=\"cs-hero-title\">\n            Project <span class=\"text-orange\">Portfolio</span>\n          </h1>\n          <p class=\"cs-hero-subtitle\">\n            Explore selected delivery work across finance, healthcare,\n            community, ecommerce, and workforce platforms. Each project includes\n            the overview, technical approach, tools, and feature details shared\n            in the portfolio document.\n          </p>\n        </div>\n      </section>\n\n      <section class=\"portfolio-wrap\">\n        <div class=\"max-width\">\n          <div class=\"portfolio-grid\" id=\"portfolio-list\"></div>\n        </div>\n      </section>\n\n      <section class=\"full-width half-padding\"></section>\n      \n    "
      }}
    />
  );
}
