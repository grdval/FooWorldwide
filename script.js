const logoTrigger = document.getElementById('logoTrigger');

if (logoTrigger) {
  logoTrigger.addEventListener('click', () => {
    document.body.classList.add('loaded');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      document.body.classList.add('loaded');
    }
  });
}
