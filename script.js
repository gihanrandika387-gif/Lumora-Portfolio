/* Lumora's small, dependency-free site interactions. */
(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  function closeMenu() {
    if (!menuButton || !nav) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      nav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  const teamGrid = document.getElementById("team-grid");
  const team = Array.isArray(window.LUMORA_TEAM) ? window.LUMORA_TEAM : [];

  if (teamGrid) {
    team.forEach((member, index) => {
      const card = document.createElement("article");
      card.className = "team-card";
      card.setAttribute("data-reveal", "");
      const photo = document.createElement("div");
      photo.className = "team-photo";

      const placeholder = document.createElement("div");
      placeholder.className = "team-placeholder";
      placeholder.setAttribute("aria-hidden", "true");
      placeholder.textContent = (member.name || "Team Member")
        .trim().split(/\s+/).slice(0, 2).map((part) => part[0] || "").join("").toUpperCase();
      photo.appendChild(placeholder);

      if (typeof member.image === "string" && member.image.trim()) {
        const image = document.createElement("img");
        image.src = member.image;
        image.alt = `Portrait of ${member.name || "team member"}`;
        image.loading = "lazy";
        image.addEventListener("error", () => image.remove());
        photo.appendChild(image);
      }

      const text = document.createElement("div");
      text.className = "team-copy";
      const number = document.createElement("span");
      number.className = "team-index";
      number.textContent = String(index + 1).padStart(2, "0") + " / TEAM";
      const role = document.createElement("span");
      role.className = "team-role";
      role.textContent = member.role || "Team Member";
      const name = document.createElement("h3");
      name.textContent = member.name || "Team Member";
      const description = document.createElement("p");
      description.textContent = member.description || "";
      text.append(number, role, name, description);
      card.append(photo, text);
      teamGrid.appendChild(card);
    });
  }

  const form = document.getElementById("inquiry-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const values = new FormData(form);
      const name = String(values.get("name") || "").trim();
      const email = String(values.get("email") || "").trim();
      const service = String(values.get("service") || "").trim();
      const message = String(values.get("message") || "").trim();
      const subject = `Lumora inquiry: ${service}`;
      const body = `Hello Lumora,\n\n${message}\n\nName: ${name}\nEmail: ${email}\nService: ${service}\n`;
      window.location.href = `mailto:lumorabusinesscreative@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  const year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px 30px 0px" });
    revealItems.forEach((el) => observer.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add("is-visible"));
  }
})();
