document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("floating-menu-btn");
  const toggle = document.querySelector(".greedy-nav__toggle");
  if (!btn || !toggle) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => toggle.click(), 250);
  });
});
