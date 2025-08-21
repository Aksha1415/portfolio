// Animate skill bars when section is visible
document.addEventListener("DOMContentLoaded", () => {
  const skillLevels = document.querySelectorAll(".skill-level");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const percent = bar.getAttribute("data-percent");
        bar.style.width = percent;
        bar.textContent = percent;
        observer.unobserve(bar); // animate once
      }
    });
  }, { threshold: 0.5 });

  skillLevels.forEach(bar => {
    observer.observe(bar);
  });
});
// Select all project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    // remove active class from all
    projectCards.forEach(c => c.classList.remove('active'));
    // add active class to clicked card
    card.classList.add('active');
  });
});
