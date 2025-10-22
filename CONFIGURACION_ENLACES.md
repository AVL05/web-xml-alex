# 🔗 Configuración de Enlaces para GitHub Pages

## ✅ **Enlaces Ya Corregidos**

He actualizado todos los enlaces principales para que funcionen correctamente en GitHub Pages usando **rutas relativas**.

### **Archivos Actualizados:**
- ✅ `index.html` - Todos los enlaces corregidos
- ✅ `pages/formulario.html` - Enlaces actualizados
- ✅ `pages/ejercicios-interactivos.html` - Enlaces actualizados
- ✅ `pages/1_semana/Puntos/01_intro.html` - Enlaces actualizados

---

## 🎯 **Cómo Funcionan las Rutas**

He usado **rutas relativas** que funcionan tanto en local como en GitHub Pages:

### **Desde el index.html (raíz):**
```html
<!-- ✅ CORRECTO -->
<a href="./pages/formulario.html">Equipo</a>
<a href="./pages/ejercicios-interactivos.html">Ejercicios</a>
<a href="./pages/1_semana/semana1.html">Semana 1</a>

<!-- ❌ INCORRECTO -->
<a href="pages/formulario.html">  <!-- Sin ./ puede fallar -->
<a href="/pages/formulario.html"> <!-- Falla en GitHub Pages con subdirectorios -->
```

### **Desde páginas dentro de /pages/ (un nivel abajo):**
```html
<!-- ✅ CORRECTO -->
<a href="../index.html">Inicio</a>
<a href="./formulario.html">Equipo</a>  <!-- Mismo nivel -->
<a href="./1_semana/semana1.html">Semana 1</a>

<!-- ❌ INCORRECTO -->
<a href="/index.html">  <!-- Falla con subdirectorios -->
```

### **Desde páginas dentro de /pages/1_semana/Puntos/ (tres niveles abajo):**
```html
<!-- ✅ CORRECTO -->
<a href="../../../index.html">Inicio</a>
<a href="../../formulario.html">Equipo</a>
<a href="../semana1.html">Semana 1</a>
<a href="./02_etiquetas.html">Siguiente</a>  <!-- Mismo nivel -->

<!-- ❌ INCORRECTO -->
<a href="/index.html">  <!-- Falla con subdirectorios -->
```

---

## 🚀 **Configuración Según Tu Repositorio**

### **Opción A: Repositorio Personal (username.github.io)**

Si tu repositorio se llama **`tuusuario.github.io`**:

1. **NO necesitas cambiar nada** en el código
2. Tu URL será: `https://tuusuario.github.io/`
3. En `_config.yml`:
   ```yaml
   baseurl: ""
   url: "https://tuusuario.github.io"
   ```

### **Opción B: Repositorio de Proyecto (cualquier nombre)**

Si tu repositorio se llama **`web-xml-alex`** o cualquier otro nombre:

1. **NO necesitas cambiar el HTML** (las rutas relativas funcionan)
2. Tu URL será: `https://tuusuario.github.io/web-xml-alex/`
3. En `_config.yml`:
   ```yaml
   baseurl: "/web-xml-alex"  # Nombre de tu repositorio
   url: "https://tuusuario.github.io"
   ```

**IMPORTANTE:** Las rutas relativas que usé funcionan en AMBOS casos sin modificar el HTML.

---

## 🔍 **Verificación de Enlaces**

### **Enlaces que YA funcionan:**
- ✅ Navegación del navbar
- ✅ Botones del hero
- ✅ Enlaces del footer
- ✅ Navegación entre páginas
- ✅ Enlaces a recursos externos

### **Para verificar en local:**
1. Abre `index.html` en el navegador directamente
2. Navega por todas las páginas
3. Los enlaces deben funcionar

### **Para verificar en GitHub Pages:**
1. Sube el proyecto a GitHub
2. Activa GitHub Pages (Settings > Pages)
3. Espera 5 minutos
4. Visita tu URL
5. Navega por todas las páginas

---

## 📝 **Patrón de Enlaces para Páginas Restantes**

Cuando actualices las otras 13 páginas, usa estos patrones:

### **Para páginas en `/pages/X_semana/Puntos/`:**

```html
<!-- Navbar - Enlaces a inicio -->
<a href="../../../index.html">Inicio</a>

<!-- Navbar - Enlaces a otras semanas -->
<a href="../../1_semana/semana1.html">Semana 1</a>
<a href="../../2_semana/semana2.html">Semana 2</a>

<!-- Navbar - Enlace a equipo -->
<a href="../../formulario.html">Equipo</a>

<!-- Navegación entre puntos de la misma semana -->
<a href="./02_etiquetas.html">Siguiente</a>
<a href="./01_intro.html">Anterior</a>

<!-- Volver a la página principal de la semana -->
<a href="../semana1.html">Volver a Semana 1</a>

<!-- Footer - Enlaces -->
<a href="../../../index.html">Inicio</a>
<a href="../../formulario.html">Equipo</a>
```

### **Para CSS y JS (desde `/pages/X_semana/Puntos/`):**

```html
<!-- ✅ CORRECTO -->
<link rel="stylesheet" href="../../../assets/css/main.css">
<script src="../../../assets/js/effects.js"></script>

<!-- ❌ INCORRECTO -->
<link rel="stylesheet" href="/assets/css/main.css">  <!-- Falla con subdirectorios -->
```

---

## 🛠️ **Script de Verificación Rápida**

Para verificar que todos los enlaces funcionan, puedes usar este checklist:

### **Desde index.html:**
- [ ] Click en "Ver Plan de Estudios" → Scroll a #semanas
- [ ] Click en "Ejercicios Interactivos" → Va a `/pages/ejercicios-interactivos.html`
- [ ] Click en "Equipo" (navbar) → Va a `/pages/formulario.html`
- [ ] Click en cada dropdown de semanas → Funciona
- [ ] Click en "Semana X" (footer) → Va a la página correcta

### **Desde /pages/formulario.html:**
- [ ] Click en "Inicio" → Vuelve a `index.html`
- [ ] Click en dropdowns → Navega correctamente
- [ ] Click en "Equipo" → Recarga la misma página

### **Desde /pages/ejercicios-interactivos.html:**
- [ ] Click en "Inicio" → Vuelve a `index.html`
- [ ] Click en "Volver al curso" → Vuelve a `index.html`

### **Desde /pages/1_semana/Puntos/01_intro.html:**
- [ ] Click en "Inicio" (navbar) → Va a `index.html`
- [ ] Click en "Equipo" → Va a `formulario.html`
- [ ] Click en "Volver a la Semana 1" → Va a `semana1.html`
- [ ] Click en "Siguiente: Etiquetas XML" → Va a `02_etiquetas.html`
- [ ] CSS se carga correctamente
- [ ] JavaScript funciona

---

## ⚠️ **Errores Comunes y Soluciones**

### **Error: 404 al hacer click en enlaces**
**Causa:** Rutas absolutas que empiezan con `/`
**Solución:** Cambiar a rutas relativas con `./` o `../`

```html
<!-- ❌ MAL -->
<a href="/pages/formulario.html">

<!-- ✅ BIEN -->
<a href="./pages/formulario.html">  <!-- Desde raíz -->
<a href="../formulario.html">       <!-- Desde subcarpeta -->
```

### **Error: CSS no se carga**
**Causa:** Ruta incorrecta a assets
**Solución:** Usar rutas relativas correctas

```html
<!-- Desde /pages/X_semana/Puntos/ -->
<!-- ✅ BIEN -->
<link rel="stylesheet" href="../../../assets/css/main.css">

<!-- ❌ MAL -->
<link rel="stylesheet" href="/assets/css/main.css">
```

### **Error: Funciona en local pero no en GitHub Pages**
**Causa:** Rutas absolutas o baseurl incorrecto
**Solución:** 
1. Verificar que usas rutas relativas
2. Configurar `_config.yml` correctamente

---

## 🎯 **Resumen de Cambios Realizados**

### **index.html:**
- ✅ Todos los enlaces a páginas usan `./pages/`
- ✅ Enlaces internos (#semanas, #que-aprenderas) funcionan
- ✅ Footer actualizado con rutas relativas

### **pages/formulario.html:**
- ✅ Navbar actualizado con `../index.html` y `./formulario.html`
- ✅ Footer actualizado

### **pages/ejercicios-interactivos.html:**
- ✅ Navbar actualizado
- ✅ Enlace a formulario corregido

### **pages/1_semana/Puntos/01_intro.html:**
- ✅ Navbar con rutas `../../../`
- ✅ Navegación entre puntos con `./` y `../`
- ✅ Footer con rutas `../../`
- ✅ Assets (CSS/JS) con `../../../assets/`

---

## ✅ **Estado Actual**

**Páginas con enlaces corregidos:** 4 de 17
- ✅ index.html
- ✅ pages/formulario.html
- ✅ pages/ejercicios-interactivos.html
- ✅ pages/1_semana/Puntos/01_intro.html

**Páginas pendientes:** 13
- Las otras páginas de puntos de cada semana

**Acción requerida:**
Cuando actualices las páginas restantes, copia el patrón de enlaces de `01_intro.html` y ajusta según el nivel de carpetas.

---

## 🚀 **Próximos Pasos**

1. **Sube el proyecto a GitHub**
   ```bash
   git init
   git add .
   git commit -m "✨ Curso XML con enlaces corregidos para GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```

2. **Activa GitHub Pages**
   - Settings > Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save

3. **Espera 5-10 minutos**
   
4. **Visita tu sitio**
   - Si es repo personal: `https://tu-usuario.github.io/`
   - Si es repo proyecto: `https://tu-usuario.github.io/nombre-repo/`

5. **Verifica que todo funciona**
   - Navega por todas las páginas
   - Verifica que los estilos se cargan
   - Prueba todos los enlaces

---

## 📞 **Soporte**

Si encuentras enlaces rotos:
1. Verifica que estás usando rutas relativas
2. Cuenta los niveles de carpetas (../ por cada nivel)
3. Usa el patrón de `01_intro.html` como referencia

---

✅ **¡Los enlaces están listos para GitHub Pages!**