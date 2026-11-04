// ==========================================================================
// FITUR JAVASCRIPT: LOGIKA & INTERAKSI WEB PORTOFOLIO
// Saepul Anwar - Junior Web Developer
// ==========================================================================

// --- 1. Fitur Ganti Tema (Dark / Light Mode) ---
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Membaca pengaturan tema yang tersimpan di browser (Local Storage)
if (localStorage.getItem('theme') === 'light') {
    html.classList.remove('dark');
    themeIcon.className = 'fa-solid fa-sun';
}

themeBtn.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    themeIcon.className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// --- 2. Fitur Animasi Muncul Saat Scroll (Intersection Observer) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.scroll-text-anim').forEach(el => observer.observe(el));

// --- 3. Fitur Active Nav Link Saat Scroll ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.desktop-menu .nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// --- 4. Fitur Notifikasi Toast ---
function showToast(title, msg) {
    document.getElementById('toast-title').textContent = title;
    document.getElementById('toast-msg').textContent = msg;
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
}
