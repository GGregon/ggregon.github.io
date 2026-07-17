// Theme toggle: persists choice in localStorage, defaults to system preference.
(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  function currentTheme() {
    const attr = root.getAttribute("data-theme");
    if (attr) return attr;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function initToggle() {
    const btn = document.querySelector("[data-theme-toggle]");
    if (!btn) return;
    const sync = () => {
      btn.textContent = currentTheme() === "dark" ? "☀ Light" : "☾ Dark";
    };
    sync();
    btn.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      sync();
    });
  }

  // Highlight the current nav link based on the page path.
  function markActiveNav() {
    const links = document.querySelectorAll(".site-nav a");
    const path = window.location.pathname.replace(/\/index\.html$/, "/");
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;
      const resolved = new URL(href, window.location.href).pathname.replace(/\/index\.html$/, "/");
      if (resolved === path) link.classList.add("active");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initToggle();
    markActiveNav();
  });
})();
