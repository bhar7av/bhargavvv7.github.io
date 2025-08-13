// Fade-in effect for sections on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.animationDelay = "0.2s";
        entry.target.classList.remove('fade-in');
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});
