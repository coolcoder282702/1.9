// scroll animation for sections
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
});

// Function to toggle the side navigation bar
function toggleNav() {
  const sideNav = document.getElementById('sideNav');
  const overlay = document.querySelector('.overlay');
  const body = document.body;
  
  sideNav.classList.toggle('open');
  overlay.classList.toggle('active');
  body.classList.toggle('nav-open');
}
