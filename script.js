// ============================================
// SAFEGUARD AI - LANDING PAGE
// Colegio MAHANAYM - Danny Moreno
// ============================================

// Animación al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 Landing Page SafeGuard AI - Colegio MAHANAYM");
    console.log("👨‍💻 Desarrollador: Danny Moreno");
    
    // Agregar animación a los elementos
    const animateElements = document.querySelectorAll('.feature-card, .stat-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
    
    // Si la imagen del logo falla, usar emoji como respaldo
    const logoImg = document.getElementById('schoolLogo');
    if (logoImg) {
        logoImg.addEventListener('error', () => {
            logoImg.style.display = 'none';
            const parent = logoImg.parentElement;
            const fallbackSpan = document.createElement('span');
            fallbackSpan.textContent = '📚';
            fallbackSpan.style.fontSize = '3rem';
            parent.insertBefore(fallbackSpan, logoImg);
        });
    }
    
    // Actualizar año en copyright
    const copyright = document.querySelector('.footer-copyright p');
    if (copyright) {
        const currentYear = new Date().getFullYear();
        copyright.innerHTML = copyright.innerHTML.replace('2024 - 2025', `2024 - ${currentYear}`);
    }
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#caracteristicas' && href !== '#tecnologias') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Efecto de escritura para el título (opcional)
const title = document.querySelector('h1');
if (title) {
    const originalText = title.innerText;
    title.innerText = '';
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.innerText += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    // Descomentar para efecto de escritura
    // typeWriter();
}
// Manejo de error de imagen del logo
document.addEventListener('DOMContentLoaded', () => {
    const logoImg = document.querySelector('.school-logo-img');
    if (logoImg) {
        logoImg.addEventListener('error', function() {
            this.style.display = 'none';
            const parent = this.parentElement;
            const fallback = document.createElement('div');
            fallback.className = 'logo-icon-fallback';
            fallback.innerHTML = '<i class="fas fa-school"></i>';
            fallback.style.cssText = `
                width: 80px;
                height: 80px;
                background: linear-gradient(135deg, #ff4444, #ff8888);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2.5rem;
            `;
            parent.insertBefore(fallback, this.nextSibling);
        });
    }
});