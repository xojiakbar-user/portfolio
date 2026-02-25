// Mobil menyu uchun Burger toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Skroll qilinganda Navbar fonini ozgartirish
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(2, 6, 23, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    }
});
