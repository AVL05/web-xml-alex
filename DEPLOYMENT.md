# 🚀 Guía de Despliegue en GitHub Pages

Esta guía te ayudará a desplegar tu curso XML en GitHub Pages paso a paso.

## 📋 Prerrequisitos

- Cuenta de GitHub activa
- Repositorio público en GitHub
- Los archivos del proyecto subidos al repositorio

## 🛠️ Pasos de Despliegue

### 1. Preparar el Repositorio

1. **Subir archivos**: Asegúrate de que todos los archivos del proyecto estén en tu repositorio de GitHub.

2. **Verificar estructura**: Tu repositorio debe tener esta estructura:
   ```
   tu-repositorio/
   ├── index.html
   ├── assets/
   ├── pages/
   ├── content/
   ├── README.md
   ├── _config.yml
   └── .gitignore
   ```

### 2. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. Scroll hacia abajo hasta la sección **Pages**
4. En **Source** selecciona **Deploy from a branch**
5. En **Branch** selecciona `main` (o `master`)
6. Deja **Folder** como `/ (root)`
7. Haz clic en **Save**

### 3. Configurar el Dominio (Opcional)

Si tienes un dominio personalizado:

1. En la sección Pages, en **Custom domain**
2. Ingresa tu dominio (ej: `mi-curso-xml.com`)
3. Marca **Enforce HTTPS**
4. GitHub creará un archivo `CNAME` automáticamente

### 4. Verificar el Despliegue

1. GitHub procesará tu sitio (puede tomar 5-10 minutos)
2. Una vez listo, verás un mensaje verde: "Your site is published at..."
3. El enlace será: `https://tu-usuario.github.io/nombre-repositorio/`

## ⚡ Optimizaciones para GitHub Pages

### Configuración de Jekyll

El archivo `_config.yml` ya está configurado para Jekyll. Si necesitas personalizarlo:

```yaml
title: "Tu Título Personalizado"
description: "Tu descripción"
baseurl: "/nombre-de-tu-repositorio" # Solo si no es tu repositorio principal
url: "https://tu-usuario.github.io"
```

### Performance y SEO

1. **Imágenes optimizadas**: Todas las imágenes deben estar comprimidas
2. **Meta tags**: Ya incluidos en el HTML para mejor SEO
3. **Sitemap**: Se genera automáticamente con Jekyll
4. **HTTPS**: Habilitado automáticamente por GitHub Pages

### Assets y Recursos

- Todos los CSS y JS están minificados
- Se usan CDNs para Bootstrap y otras librerías
- Las fuentes están preloadeadas para mejor performance

## 🔧 Solución de Problemas

### Error: "Page build failed"

1. Revisa que no haya errores de sintaxis en `_config.yml`
2. Verifica que todos los enlaces internos sean relativos
3. Asegúrate de que no haya archivos con nombres especiales de Jekyll sin `_`

### Las páginas no cargan correctamente

1. Revisa las rutas en los enlaces HTML
2. Asegúrate de que todos los archivos CSS/JS sean accesibles
3. Verifica la consola del navegador para errores 404

### Los estilos no se aplican

1. Verifica que las rutas a CSS sean correctas
2. GitHub Pages puede tardar en actualizar los assets
3. Fuerza el refresh con Ctrl+F5

## 📱 Testing

Después del despliegue, verifica:

- ✅ Página principal carga correctamente
- ✅ Navegación funciona en todos los dispositivos
- ✅ Ejercicios interactivos funcionan
- ✅ Enlaces externos se abren en nueva pestaña
- ✅ Formularios y funcionalidades JS funcionan
- ✅ Diseño responsive en móvil/tablet
- ✅ Velocidad de carga aceptable

## 🔄 Actualizaciones

Para actualizar tu sitio:

1. Haz cambios en tu repositorio local
2. Commit y push a GitHub
3. GitHub Pages se actualizará automáticamente (2-10 minutos)

## 📊 Analytics (Opcional)

Para añadir Google Analytics:

1. Crea una cuenta en Google Analytics
2. Obtén tu ID de seguimiento (GA4)
3. Añade este código antes de `</head>` en tus páginas:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-GA-ID');
</script>
```

## 🛡️ Seguridad

- GitHub Pages usa HTTPS por defecto
- No subas información sensible al repositorio
- Los repositorios públicos son visibles para todos

## 💡 Tips Adicionales

1. **Usa ramas**: Desarrolla en `develop` y mergea a `main` solo cuando esté listo
2. **Backup**: Mantén copias locales de tu trabajo
3. **Testing local**: Usa `jekyll serve` para probar localmente antes de subir
4. **Compresión**: GitHub Pages comprime automáticamente algunos assets
5. **Cache**: Los cambios pueden tardar en aparecer debido al cache de CDN

## 📞 Soporte

Si tienes problemas:

1. Revisa la [documentación oficial de GitHub Pages](https://docs.github.com/en/pages)
2. Consulta el [status de GitHub](https://www.githubstatus.com/)
3. Revisa los logs en la pestaña Actions de tu repositorio

---

¡Tu curso XML está listo para ser compartido con el mundo! 🌟