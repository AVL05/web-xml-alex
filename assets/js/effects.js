/**
 * effects.js - Efectos interactivos para el curso XML
 * Incluye: Scroll suave, animaciones al hacer scroll, efectos para navbar y más
 */

document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // 1. SCROLL SUAVE
    // ======================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    });

    // ======================
    // 2. EFECTO NAVBAR AL SCROLL
    // ======================
    const navbar = document.querySelector('.navbar-glass');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ======================
    // 3. ANIMACIÓN AL SCROLL (Intersection Observer)
    // ======================
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.semana-card, .feature-card, .section-header');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(element => {
            element.classList.add('animate__animated');
            observer.observe(element);
        });
    };

    // Inicializar solo si hay elementos que animar
    if (document.querySelector('.semana-card, .feature-card')) {
        animateOnScroll();
    }

    // ======================
    // 4. EFECTO PARALLAX PARA EL HERO
    // ======================
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }

    // ======================
    // 5. HIGHLIGHT DEL CÓDIGO EN EL HERO
    // ======================
    const codeBlock = document.querySelector('.hero-code pre');
    if (codeBlock) {
        // Simular efecto de typewriter para el código
        const code = codeBlock.textContent;
        codeBlock.textContent = '';
        
        let i = 0;
        const typeWriter = setInterval(function() {
            if (i < code.length) {
                codeBlock.textContent += code.charAt(i);
                i++;
                codeBlock.scrollTop = codeBlock.scrollHeight;
            } else {
                clearInterval(typeWriter);
            }
        }, 10);
    }

    // ======================
    // 6. TOOLTIPS PARA LOS BOTONES
    // ======================
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            trigger: 'hover',
            placement: 'top'
        });
    });

    // ======================
    // 7. EFECTO HOVER PARA TARJETAS
    // ======================
    document.querySelectorAll('.semana-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // ======================
    // 8. ANIMACIÓN DE BOTONES
    // ======================
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Efecto de onda al hacer click
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });

    // ======================
    // 9. DETECCIÓN DE PREFERENCIAS DE ANIMACIÓN
    // ======================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        document.body.classList.add('reduce-motion');
    }

    // ======================
    // 10. TABS DE CÓDIGO INTERACTIVOS
    // ======================
    const initCodeTabs = function() {
        const tabContainers = document.querySelectorAll('.code-example');
        
        tabContainers.forEach(container => {
            const tabs = container.querySelectorAll('.code-tab');
            const contents = container.querySelectorAll('.code-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const targetLang = this.getAttribute('data-lang');
                    
                    // Remover clases active
                    tabs.forEach(t => t.classList.remove('active'));
                    contents.forEach(c => c.classList.add('d-none'));
                    
                    // Activar tab y contenido correspondiente
                    this.classList.add('active');
                    const targetContent = container.querySelector(`.code-content[data-lang="${targetLang}"]`);
                    if (targetContent) {
                        targetContent.classList.remove('d-none');
                    }
                });
            });
        });
    };

    // Inicializar tabs si existen
    if (document.querySelector('.code-example')) {
        initCodeTabs();
    }

    // ======================
    // 11. CONTADOR ANIMADO PARA ESTADÍSTICAS
    // ======================
    const animateCounters = function() {
        const counters = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
                    const suffix = counter.textContent.replace(/[0-9]/g, '');
                    let current = 0;
                    const increment = target / 50;
                    
                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            counter.textContent = Math.ceil(current) + suffix;
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target + suffix;
                        }
                    };
                    
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    };

    // Inicializar contadores si existen
    if (document.querySelector('.stat-number')) {
        animateCounters();
    }
});
