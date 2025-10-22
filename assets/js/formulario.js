// formulario.js - Versión mejorada con animaciones y manejo de errores

// Detectar si estamos en GitHub Pages o en local
const isGitHubPages = window.location.host.includes('github.io');

// Definir rutas según el entorno
const rutaXML = isGitHubPages 
    ? '/web-xml-alex/data/forms/contactForm.xml'  // Ruta para GitHub Pages
    : '../../data/forms/contactForm.xml';           // Ruta para desarrollo local

document.addEventListener('DOMContentLoaded', function() {
    // Configuración inicial
    const RUTA_XML = '../../data/forms/contactForm.xml';
    const CONTENEDOR_PRINCIPAL = document.getElementById('equipo-container');
    const USUARIOS_POR_FILA = 3;

    // Función para crear elementos con atributos
    const crearElemento = (tag, atributos = {}) => {
        const elemento = document.createElement(tag);
        Object.keys(atributos).forEach(key => {
            elemento.setAttribute(key, atributos[key]);
        });
        return elemento;
    };

    // Función para sanitizar URLs
    const sanitizarURL = (url) => {
        return url === '#' || !url.trim() ? '#' : url;
    };

    // Función para crear tarjeta de usuario
    const crearTarjetaUsuario = (usuario, index) => {
        const nombre = usuario.querySelector('Nombre')?.textContent || 'Sin nombre';
        const apellidos = usuario.querySelector('Apellidos')?.textContent || '';
        const descripcion = usuario.querySelector('Descripcion')?.textContent || 'Sin descripción disponible';
        
        const redes = usuario.querySelector('RedesSociales');
        const twitter = sanitizarURL(redes?.querySelector('Twitter')?.textContent || '#');
        const instagram = sanitizarURL(redes?.querySelector('Instagram')?.textContent || '#');
        const linkedin = sanitizarURL(redes?.querySelector('LinkedIn')?.textContent || '#');
        const github = sanitizarURL(redes?.querySelector('GitHub')?.textContent || '#');

        // Crear elementos
        const col = crearElemento('div', {
            'class': `col-md-6 col-lg-4 mb-4 usuario-${index}`
        });

        const card = crearElemento('div', {
            'class': `team-card ${index % 2 === 0 ? '' : 'bg-accent'}`
        });

        const cardHeader = crearElemento('div', {
            'class': `card-header ${index % 2 === 0 ? '' : 'bg-accent'}`
        });

        const cardBody = crearElemento('div', {
            'class': 'card-body'
        });

        // Construir contenido
        cardHeader.innerHTML = `
            <span class="card-badge">Miembro</span>
            <h3 class="card-title">${nombre} ${apellidos}</h3>
        `;

        let redesHTML = '<div class="social-links">';
        if (twitter !== '#') redesHTML += `<a href="${twitter}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary me-2"><i class="bi bi-twitter"></i></a>`;
        if (instagram !== '#') redesHTML += `<a href="${instagram}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-danger me-2"><i class="bi bi-instagram"></i></a>`;
        if (linkedin !== '#') redesHTML += `<a href="${linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary me-2"><i class="bi bi-linkedin"></i></a>`;
        if (github !== '#') redesHTML += `<a href="${github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-dark"><i class="bi bi-github"></i></a>`;
        redesHTML += '</div>';

        cardBody.innerHTML = `
            <p class="card-text">${descripcion}</p>
            ${redesHTML}
        `;

        // Ensamblar tarjeta
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        col.appendChild(card);

        return col;
    };

    // Cargar y procesar XML
    fetch(RUTA_XML)
        .then(response => {
            if (!response.ok) throw new Error('Error al cargar el XML');
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");
            
            // Verificar errores de parseo
            const errorNode = xmlDoc.querySelector('parsererror');
            if (errorNode) {
                throw new Error('Error al parsear el XML');
            }

            const usuarios = xmlDoc.querySelectorAll('Usuario');
            
            if (usuarios.length === 0) {
                CONTENEDOR_PRINCIPAL.innerHTML = `
                    <div class="alert alert-warning">
                        No se encontraron miembros del equipo en el archivo XML.
                    </div>
                `;
                return;
            }

            // Crear filas y columnas responsivas
            const row = crearElemento('div', {
                'class': 'row justify-content-center'
            });

            usuarios.forEach((usuario, index) => {
                const tarjeta = crearTarjetaUsuario(usuario, index);
                row.appendChild(tarjeta);
            });

            CONTENEDOR_PRINCIPAL.appendChild(row);
        })
        .catch(error => {
            console.error('Error:', error);
            CONTENEDOR_PRINCIPAL.innerHTML = `
                <div class="alert alert-danger">
                    Error al cargar la información del equipo: ${error.message}
                </div>
            `;
        });
});