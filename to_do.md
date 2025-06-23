# Plan de Desarrollo: Sitio Web Dra. Daniela Ramírez

Este documento describe el plan de desarrollo para el sitio web institucional de la Dra. Daniela Ramírez. Se desglosan las secciones y componentes para una implementación modular.

## 1. Configuración del Proyecto

*   **Framework:** Se utilizará un framework moderno como Next.js (React) para facilitar el desarrollo de componentes, el enrutamiento y la optimización (SEO).
*   **Estilos:** Se empleará Tailwind CSS para un diseño modular y mantenible, siguiendo la paleta de colores y las preferencias de UI.
*   **Estructura de Carpetas:**
    *   `components/`: Para todos los componentes reutilizables (Botones, Cards, etc.).
    *   `sections/`: Para las secciones principales de la página (Hero, SobreMi, Servicios, etc.).
    *   `pages/`: Para las páginas del sitio (Home, Blog, etc.).
    *   `public/`: Para los assets estáticos (imágenes, íconos).
    *   `styles/`: Para estilos globales.

## 2. Desglose de Componentes por Sección

### Sección 0: Componentes Globales
*   `Layout`: Componente principal que envuelve todas las páginas, incluye `Header` y `Footer`.
*   `Header`:
    *   Logo.
    *   Menú de navegación (Sobre mí, Servicios, Contacto, Blog).
    *   Menú hamburguesa para móviles.
    *   Botón CTA principal "Agendar Cita".
*   `Footer`:
    *   Enlaces a redes sociales.
    *   Aviso de privacidad y política de cookies.
*   `BotonFlotanteWhatsApp`: Botón fijo en la pantalla.
*   `Boton`: Componente de botón reutilizable (primario, secundario).

### Sección 1: Hero / Portada
*   Imagen de fondo profesional y cálida.
*   Contenedor con efecto de transparencia/desenfoque.
*   Título principal (`<h1>`).
*   Párrafo descriptivo.
*   Botón principal "Agendar tu cita".
*   Fila con datos rápidos (estadísticas).

### Sección 2: Sobre la Doctora
*   Layout de dos columnas (imagen y texto).
*   Foto profesional de la Dra.
*   Biografía breve, valores y certificaciones.

### Sección 3: Servicios
*   Título de la sección.
*   Grid de tarjetas de servicio (`ServiceCard`).

### Sección 4: Testimonios
*   Título de la sección.
*   Slider (carrusel) o un Grid de testimonios (`TestimonioCard`).

### Sección 5: Formulario de Cita Rápida
*   Título: "Agenda una cita".
*   Campos: Nombre, Correo, Teléfono, Motivo.
*   Botón "Reservar cita" llamativo.

### Sección 6: Casos de Éxito / Galería
*   Título de la sección.
*   Slider o galería de imágenes "Antes y Después".

### Sección 7: Preguntas Frecuentes (FAQ)
*   Título de la sección.
*   Lista de preguntas en formato acordeón.

### Sección 8: Ubicación y Contacto
*   Mapa embebido de Google Maps.
*   Información de contacto: Dirección, teléfono, correo, horarios.

### Sección 9: Blog / Consejos Dentales
*   Título de la sección.
*   Grid de artículos del blog (`ArticuloCard`).

---

**Plan de Implementación**

1.  **Inicializar el proyecto** con `create-next-app`.
2.  **Configurar Tailwind CSS** para el estilizado.
3.  **Crear la estructura de carpetas** (`components`, `sections`, etc.).
4.  **Comenzar el desarrollo** sección por sección, empezando por la Portada (Hero). 