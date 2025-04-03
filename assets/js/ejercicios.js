// assets/js/ejercicios.js
document.addEventListener('DOMContentLoaded', function() {
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

    // Botón para subir
    const btnSubir = document.getElementById('btnSubir');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            btnSubir.classList.add('mostrar');
        } else {
            btnSubir.classList.remove('mostrar');
        }
    });
    
    btnSubir.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
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