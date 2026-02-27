// Mobile Menu Logic
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('hidden');
            if (isOpen) {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            } else {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });

    // Scroll Effect for Header
    const navbar = document.getElementById('navbar');
    const navText = document.querySelectorAll('.nav-text');
    const navLogo = document.getElementById('nav-logo');
    const navBtn = document.getElementById('nav-btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass-header', 'py-4');
            navbar.classList.remove('bg-transparent', 'py-6');
            navLogo.classList.add('text-marrom-escuro');
            navLogo.classList.remove('text-white');
            navBtn.classList.add('bg-marrom-escuro', 'text-bege-elegante');
            navBtn.classList.remove('bg-white', 'text-marrom-escuro');
            navText.forEach(text => {
                text.classList.add('text-marrom-escuro');
                text.classList.remove('text-white');
            });
        } else {
            navbar.classList.remove('glass-header', 'py-4');
            navbar.classList.add('bg-transparent', 'py-6');
            navLogo.classList.remove('text-marrom-escuro');
            navLogo.classList.add('text-white');
            navBtn.classList.remove('bg-marrom-escuro', 'text-bege-elegante');
            navBtn.classList.add('bg-white', 'text-marrom-escuro');
            navText.forEach(text => {
                text.classList.remove('text-marrom-escuro');
                text.classList.add('text-white');
            });
        }
    });

    // Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Guto entrará em contato em breve.');
            contactForm.reset();
        });
    }
});
