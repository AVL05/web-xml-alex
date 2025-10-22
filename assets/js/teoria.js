// assets/js/teoria.js
document.addEventListener('DOMContentLoaded', function() {
    // Añadir badges de teoría a todas las secciones
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.classList.add('teoria-card');
        
        const badge = document.createElement('span');
        badge.className = 'teoria-badge';
        badge.textContent = 'TEORÍA';
        article.prepend(badge);
    });

    // Inicializar tooltips para conceptos clave
    const conceptKeys = document.querySelectorAll('.concept-key');
    conceptKeys.forEach(key => {
        // Crear tooltip de Bootstrap
        new bootstrap.Tooltip(key, {
            trigger: 'hover focus',
            placement: 'top'
        });
        
        // Añadir evento click para resaltar
        key.addEventListener('click', function() {
            this.classList.add('highlight');
            setTimeout(() => {
                this.classList.remove('highlight');
            }, 2000);
        });
    });

    // Funcionalidad para copiar bloques de código
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.innerHTML = '📋 Copiar';
        btn.title = 'Copiar al portapapeles';
        block.appendChild(btn);
        
        btn.addEventListener('click', function() {
            const code = block.querySelector('code') || block;
            navigator.clipboard.writeText(code.textContent.trim())
                .then(() => {
                    btn.innerHTML = '✓ Copiado!';
                    setTimeout(() => {
                        btn.innerHTML = '📋 Copiar';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Error al copiar: ', err);
                    btn.innerHTML = '❌ Error';
                });
        });
    });

    // Efecto de scroll suave para anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});