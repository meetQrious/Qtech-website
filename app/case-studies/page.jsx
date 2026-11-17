import React from "react";

export const metadata = {
  title: "Case Studies | Qrious Tech Team LLP",
  description: "Explore Qrioustech Team LLP's case studies. See how we help global clients scale engineering capacity, build SaaS products, and modernize with artificial intelligence.",
  keywords: "",
};

export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: "\n    <!-- Preloader -->\n    \n\n    <!-- Header -->\n    \n\n    <!-- Hero Section -->\n    <section class=\"cs-hero\">\n      <div class=\"max-width text-center\">\n        <h1 class=\"cs-hero-title\">\n          Our <span class=\"text-orange\">Case Studies</span>\n        </h1>\n        <p class=\"cs-hero-subtitle\">\n          Real-world proof of how we help global businesses scale engineering\n          capacity, transition to cloud SaaS platforms, and modernize using\n          artificial intelligence.\n        </p>\n      </div>\n    </section>\n\n    <!-- Case Studies Container -->\n    <section class=\"cs-container\">\n      <div class=\"max-width\">\n        <!-- Filter Tabs -->\n        <div class=\"cs-tabs-wrapper\">\n          <div class=\"cs-tabs-container\">\n            <button class=\"cs-filter-tab active\" data-tab=\"ai\">\n              <i class=\"fa-solid fa-brain\"></i> AI\n            </button>\n            <button class=\"cs-filter-tab\" data-tab=\"web\">\n              <i class=\"fa-solid fa-laptop-code\"></i> Web\n            </button>\n            <button class=\"cs-filter-tab\" data-tab=\"mobile\">\n              <i class=\"fa-solid fa-mobile-screen-button\"></i> Mobile\n            </button>\n            <button class=\"cs-filter-tab\" data-tab=\"salesforce\">\n              <i class=\"fa-brands fa-salesforce\"></i> Salesforce\n            </button>\n            <button class=\"cs-filter-tab\" data-tab=\"power-bi\">\n              <i class=\"fa-solid fa-chart-line\"></i> Power BI\n            </button>\n          </div>\n        </div>\n\n        <!-- Case Studies List -->\n        <div id=\"case-studies-list-container\">\n          <div class=\"text-center py-5\">\n            <div class=\"spinner-border text-primary\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n            <p class=\"mt-2 text-muted\">Loading case studies...</p>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"full-width half-padding\"></section>\n    <!-- Footer -->\n    \n  "
      }}
    />
  );
}
