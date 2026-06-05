const toggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobileNav');

toggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Request Sent!';
  btn.style.background = '#27ae60';
  btn.disabled = true;
});
