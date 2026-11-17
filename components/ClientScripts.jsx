"use client";

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
