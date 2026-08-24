# Mercado Libre Colombia — Landing Page (React)

Landing page responsive para un catálogo de productos tecnológicos de Mercado Libre Colombia, construida con React y Vite.

## Descripción

El proyecto presenta una página web con menú de navegación, sección principal, catálogo de productos y datos de contacto. El catálogo se renderiza dinámicamente a partir de un arreglo de datos, mostrando únicamente los productos que tienen unidades disponibles.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS3

## Funcionalidades

- Diseño responsive para computador, tablet y móvil.
- Menú de navegación.
- Sección principal con llamado a la acción.
- Catálogo de productos generado dinámicamente a partir de un arreglo de datos.
- Filtro de productos con stock mayor a cero.
- Tarjetas con imagen, nombre, precio y disponibilidad.
- Uso de Flexbox para la navegación y la sección principal.
- Uso de CSS Grid para organizar las tarjetas.
- Prevención de scroll horizontal.
- Arquitectura basada en componentes reutilizables.

## Estructura del proyecto

```text
Proyecto_React/
├── public/
│   └── Imagenes/
│       ├── Logo-mercadolibre.png
│       ├── mouse.jpeg
│       ├── teclado.jpeg
│       ├── monitor.jpeg
│       └── web.jpeg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── productos.js
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
- **ProductCard**: tarjeta individual de producto, recibe `nombre`, `precio`, `stock` e `imagen` como props.
- **ProductGrid**: recorre la lista de productos disponibles y renderiza un `ProductCard` por cada uno.
- **Footer**: información de contacto y derechos de autor.

## Lógica de datos

- `data/productos.js`: contiene el arreglo de productos (nombre, precio, stock e imagen).
- `utils/catalogo.js`: contiene `obtenerDisponibles()`, encargada de filtrar los productos con stock mayor a cero antes de renderizarlos.

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

Luego abrir la URL indicada en la terminal (por defecto `http://localhost:5173`).

## Autor

Juan Felipe González — juanfelipe.gonzalez@mercadolibre.com.co

&copy; 2026 Mercado Libre Colombia — Todos los derechos reservados.