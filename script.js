// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking a nav link (on mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Typing animation
const typed = new typed('#typed-text', {
  strings: ["Hi, I'm Zamzam 👩‍💻", "Welcome to my portfolio."],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 1000,
  loop: true
});
