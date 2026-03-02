const skillData = {
    "linux": {
        title: "Linux / Ubuntu",
        date: "1991-yilda Linus Torvalds tomonidan yaratilgan",
        desc: "Ochiq kodli operatsion tizim yadrosi. Hozirgi kunda dunyodagi deyarli barcha serverlar, konteynerlar va bulutli infratuzilmalar bevosita Linux asosida ishlaydi."
    },
    "aws": {
        title: "Amazon Web Services (AWS)",
        date: "2006-yilda ommaga taqdim etilgan",
        desc: "Dunyodagi eng yirik va mashhur bulutli (Cloud) platforma. U serverlar, ma'lumotlar bazalari, xavfsizlik va infratuzilmani avtomatlashtirish kabi 200 dan ortiq xizmatlarni taqdim etadi."
    },
    "git": {
        title: "Git & GitHub",
        date: "Git 2005-yilda yaratilgan",
        desc: "Git — kod versiyalarini boshqarish uchun eng muhim vosita bo'lsa, GitHub — bu kodlarni saqlash, jamoa bo'lib ishlash va CI/CD jarayonlarini ulash uchun global platforma hisoblanadi."
    },
    "docker": {
        title: "Docker",
        date: "2013-yilda ishga tushirilgan",
        desc: "Dasturlarni o'zining barcha kutubxonalari va bog'liqliklari bilan bitta 'konteyner'ga joylash texnologiyasi. Bu kodning har qanday kompyuter yoki serverda bir xil xatosiz ishlashini ta'minlaydi."
    },
    "nginx": {
        title: "Nginx",
        date: "2004-yilda ishlab chiqilgan",
        desc: "Juda yuqori tezlikka ega veb-server va reverse proxy (teskari proksi). U bir vaqtning o'zida o'n minglab foydalanuvchi so'rovlarini qotib qolmasdan qayta ishlash imkonini beradi."
    },
    "postgres": {
        title: "PostgreSQL",
        date: "1996-yilda yaratilgan",
        desc: "Keng ko'lamli, xavfsiz va to'liq ochiq kodli relyatsion ma'lumotlar bazasi. Juda katta hajmdagi ma'lumotlarni ishonchli saqlash va murakkab so'rovlarni bajarishda yetakchi hisoblanadi."
    },
    "cicd": {
        title: "CI/CD Pipelines",
        date: "Zamonaviy DevOps amaliyoti",
        desc: "Continuous Integration & Continuous Deployment — kod yozilgandan so'ng uni avtomatik test qilish, qurish va to'g'ridan-to'g'ri serverga xatosiz yetkazib berish jarayonlari zanjiri."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('header');
    
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            });
        });
    }

    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
                header.style.padding = '10px 8%';
            } else {
                header.style.backgroundColor = 'rgba(15, 23, 42, 0.85)';
                header.style.padding = '20px 8%';
            }
        }
    });

    const modal = document.getElementById('skillModal');
    const closeBtn = document.querySelector('.close-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalDesc = document.getElementById('modalDesc');

    if (modal && closeBtn) {
        skillCards.forEach(card => {
            card.addEventListener('click', () => {
                const skillKey = card.getAttribute('data-skill');
                const data = skillData[skillKey];
                
                if (data) {
                    modalTitle.textContent = data.title;
                    modalDate.textContent = data.date;
                    modalDesc.textContent = data.desc;
                    modal.style.display = 'flex';
                    setTimeout(() => modal.classList.add('show'), 10);
                }
            });
        });

        const closeModal = () => {
            modal.classList.remove('show');
            setTimeout(() => modal.style.display = 'none', 300);
        };

        closeBtn.addEventListener('click', closeModal);

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});
