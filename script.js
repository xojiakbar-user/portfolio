document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav) {
        // Burgerni bosganda menyuni ochish/yopish
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });

        // Linklardan birini bosganda menyuni yopish
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            });
        });
    }

    // Skroll qilinganda Navbar fonini o'zgartirish
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(2, 6, 23, 0.95)';
            } else {
                header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
            }
        }
    });
});
