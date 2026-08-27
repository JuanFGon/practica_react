# Mercado Libre Colombia — Marketplace (React + Spring Boot + PostgreSQL)

Landing page responsive para un catálogo de productos tecnológicos de Mercado Libre Colombia, construida con React y Vite. El frontend ya no usa datos estáticos: consume en tiempo real la API REST del backend (Spring Boot), que a su vez lee el catálogo desde una base de datos PostgreSQL.

## Descripción

El proyecto presenta una página web con menú de navegación, sección principal, catálogo de productos y datos de contacto. Al cargar, el catálogo se obtiene mediante una petición HTTP al backend y se renderiza dinámicamente, mostrando únicamente los productos con unidades disponibles. Incluye además buscador por nombre y ordenamiento por precio.

## Arquitectura

```text
React + Vite (localhost:5173)  --HTTP/JSON-->  Spring Boot API (localhost:8080)  -->  PostgreSQL
```

Este repositorio corresponde solo a la capa de frontend. La API y la base de datos viven en el proyecto `marketplace-api-starter`.

## Tecnologías utilizadas

- React 19
- Vite
- JavaScript (ES6+)
- CSS3 (Flexbox y Grid)
- Fetch API para el consumo de servicios REST

## Funcionalidades

- Diseño responsive para computador, tablet y móvil.
- Menú de navegación.
- Sección principal con llamado a la acción.
- Consumo del catálogo real vía `GET http://localhost:8080/api/productos`.
- Estados de carga (`Cargando productos...`) y de error si la petición al backend falla.
- Filtro de productos con stock mayor a cero.
- Buscador de productos por nombre, en tiempo real.
- Ordenamiento por precio (menor a mayor / mayor a menor).
- Tarjetas con imagen, nombre, precio y disponibilidad.
- Imagen de respaldo (placeholder) cuando el producto no tiene una imagen asociada.
- Uso de Flexbox para la navegación y la sección principal.
- Uso de CSS Grid para organizar las tarjetas.
- Prevención de scroll horizontal.
- Arquitectura basada en componentes reutilizables y controlados.

## Estructura del proyecto

```text
Proyecto_React/
├── public/
│   └── Imagenes/
│       ├── Logo-mercadolibre.png
│       ├── Mouse.jpeg
│       ├── teclado.jpeg
│       ├── monitor.jpeg
│       └── web.jpeg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SortSelect.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── SearchBar.css
│   │   ├── SortSelect.css
│   │   ├── ProductCard.css
│   │   └── ProductGrid.css
│   ├── data/
│   │   └── productos.js      # dataset de ejemplo, ya no se usa en tiempo de ejecución
│   ├── utils/
│   │   └── catalogo.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## Componentes

- **Header**: menú de navegación con logo y enlaces.
- **Hero**: sección principal con título, descripción y botón de llamado a la acción.
- **SearchBar**: input controlado para buscar productos por nombre; recibe `value` y `onChange`.
- **SortSelect**: select controlado con tres opciones de orden (sin orden, menor a mayor, mayor a menor); recibe `value` y `onChange`.
- **ProductGrid**: recorre la lista de productos ya filtrada y ordenada, y renderiza un `ProductCard` por cada uno. Muestra un mensaje si no hay resultados.
- **ProductCard**: tarjeta individual de producto, recibe `nombre`, `precio`, `stock` e `imagen` como props. Si el producto no trae imagen, muestra un placeholder generado con `placehold.co`.
- **Footer**: información de contacto y derechos de autor.

## Lógica de datos y conexión con el backend

- `App.jsx` hace `fetch` a `http://localhost:8080/api/productos` dentro de un `useEffect` al montar el componente, y guarda el resultado en el estado `productos`. Controla también los estados `cargando` y `error`.
- `utils/catalogo.js`: contiene `obtenerDisponibles()`, encargada de filtrar los productos con stock mayor a cero.
- Sobre esa lista se aplican en cadena el filtro de búsqueda (estado `busqueda`) y el ordenamiento por precio (estado `orden`) antes de pasarla a `ProductGrid`.
- `data/productos.js` se mantiene como referencia del dataset original del ejercicio, pero ya no se importa en ningún componente: todo el catálogo que se muestra viene ahora de la base de datos a través de la API.

## Requisitos previos

- Tener corriendo el backend `marketplace-api-starter` en `http://localhost:8080` (Spring Boot + PostgreSQL). Ver el README de ese proyecto para levantarlo.
- El backend debe tener habilitado CORS para el origen `http://localhost:5173` (ya configurado en `CorsConfig`).

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

Luego abrir la URL indicada en la terminal (por defecto `http://localhost:5173`). Si el backend no está corriendo, la página mostrará el mensaje de error definido en `App.jsx` en lugar del catálogo.

## Autor

Juan Felipe González — juanfelipe.gonzalez@mercadolibre.com.co

&copy; 2026 Mercado Libre Colombia — Todos los derechos reservados.