lucide.createIcons();

AOS.init({
    duration: 700,            
    easing: 'ease-out-cubic', 
    once: true,               
    offset: 80,               
});



function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}



function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('mobile-menu').classList.add('hidden');
    }
}

function initNavObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`[data-section="${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, {
        threshold: 0.4 
    });

    sections.forEach(section => observer.observe(section));
}

initNavObserver();

function initProgressBars() {
    const skillsBars = document.getElementById('skills-bars');
    if (!skillsBars) return; 

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.progress-bar').forEach(bar => {
                    const targetWidth = bar.dataset.width + '%';
                    setTimeout(() => { bar.style.width = targetWidth; }, 200);
                });
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.3 });

    observer.observe(skillsBars);
}

initProgressBars();



function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return; 

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size     = Math.random() * 3 + 2;    
        const left     = Math.random() * 100;        
        const duration = Math.random() * 12 + 8;    
        const delay    = Math.random() * 10;         

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            opacity: ${Math.random() * 0.5 + 0.1};
        `;

        container.appendChild(particle);
    }
}

createParticles();

function initTypingEffect() {
    const typingEl = document.getElementById('typing-text');
    if (!typingEl) return; // Elemento não existe, sai sem erro

    const texts = [
        'Backend Developer',
        'CS Student',
        'Problem Solver',
        'Java Enthusiast',
    ];

    let textIndex  = 0;
    let charIndex  = 0;
    let isDeleting = false;

    function type() {
        const current = texts[textIndex];

        if (!isDeleting) {
            
            typingEl.textContent = current.slice(0, charIndex++);
            if (charIndex > current.length) {
                isDeleting = true;
                setTimeout(type, 1500); 
                return;
            }
        } else {
            
            typingEl.textContent = current.slice(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                textIndex  = (textIndex + 1) % texts.length; 
                setTimeout(type, 300);
                return;
            }
        }

        setTimeout(type, isDeleting ? 60 : 100);
    }

    setTimeout(type, 1000); 
}

initTypingEffect();

function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(2, 8, 23, 0.95)';
        } else {
            navbar.style.background = 'rgba(2, 8, 23, 0.6)';
        }
    });
}

initNavbarScroll();
