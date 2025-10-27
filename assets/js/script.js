const hamburger = document.getElementById('hamburger');
const headerMenu = document.getElementById('headerMenu');
const body = document.body;
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

const menuLinks = headerMenu.querySelectorAll('a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    headerMenu.classList.remove('active');
    hamburger.classList.remove('active');
    body.classList.remove('no-scroll');
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('is-fixed');
  } else {
    header.classList.remove('is-fixed');
  }
});


window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.left = `-${window.scrollX}px`;
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const headerHeight = header ? header.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
