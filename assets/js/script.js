const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuToggle.textContent = '☰';
  });
});

// Highlight the navigation item for the section currently in view.
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => observer.observe(section));

document.getElementById('year').textContent = new Date().getFullYear();

// WhatsApp contact widget. Messages are opened in WhatsApp for the visitor to send.
const chatPanel = document.getElementById('chat-panel');
const chatToggle = document.getElementById('chat-toggle');
const chatClose = document.getElementById('chat-close');

function setChatOpen(open) {
  chatPanel.hidden = !open;
  chatToggle.setAttribute('aria-expanded', String(open));
}
chatToggle.addEventListener('click', () => setChatOpen(chatPanel.hidden));
chatClose.addEventListener('click', () => setChatOpen(false));

document.getElementById('chat-send').addEventListener('click', () => {
  const name = document.getElementById('chat-name').value.trim();
  const phone = document.getElementById('chat-phone').value.trim();
  const message = document.getElementById('chat-message').value.trim();

  if (!name || !phone || !message) {
    alert('Please enter your name, phone number and message.');
    return;
  }

  const businessNumber = '256770740151';
  const text = `Hello Gisha Freighters, my name is ${name}. My phone number is ${phone}. ${message}`;
  const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});
