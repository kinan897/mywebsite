// Fades sections in as they scroll into view. Anything with class
// "reveal" starts hidden (see style.css) and gets ".in-view" added
// the first time it crosses into the viewport.
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const revealElements = document.querySelectorAll(".reveal");

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          // Only needs to happen once per element.
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  // No animation support, or the visitor asked for reduced motion —
  // just show everything immediately instead of leaving it hidden.
  revealElements.forEach((el) => el.classList.add("in-view"));
}
