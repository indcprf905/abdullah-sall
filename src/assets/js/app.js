// Minimal theme bootstrap
document.documentElement.classList.add('js-enabled');
const sticky = {{ 'sticky_header' | setting | default(true) }};
if (!sticky) {
  document.querySelectorAll('.header').forEach(h => { h.style.position = 'static'; });
}
