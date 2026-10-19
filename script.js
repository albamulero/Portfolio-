const nav = document.getElementById('siteNav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.textContent = navLinks.classList.contains('open') ? 'x' : '=';
});

navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open'); 
    navToggle.textContent= '=';
}));

const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target)
        }
    }); 
}, { theshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-img').forEach(el => io.observe(el));