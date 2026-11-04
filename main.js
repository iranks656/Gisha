const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-navigation');

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    navigation.classList.remove('is-open');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

const yearNode = document.querySelector('#current-year');
if (yearNode) yearNode.textContent = String(new Date().getFullYear());

const form = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

if (form && formStatus) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    formStatus.textContent = '';
    formStatus.classList.remove('is-error');

    if (!form.reportValidity()) return;

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.setAttribute('aria-busy', 'true');
    submitButton.dataset.originalLabel = submitButton.textContent;
    submitButton.textContent = 'Sending…';
    formStatus.textContent = 'Sending your enquiry…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        const detail = Array.isArray(result.errors) ? result.errors.map((error) => error.message).join(' ') : '';
        throw new Error(detail || 'The form service did not accept the message.');
      }

      form.reset();
      formStatus.textContent = 'Thank you. Your message has been sent to Gisha Freighters.';
    } catch (error) {
      formStatus.textContent = 'We could not send your message just now. Please email gishafreighters@gmail.com or use the WhatsApp link below.';
      formStatus.classList.add('is-error');
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-busy');
      submitButton.textContent = submitButton.dataset.originalLabel || 'Send your enquiry';
    }
  });
}
