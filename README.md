# React + Vite

# Panel Administrativo web con React JS

## Descripción
Este proyecto es un panel administrativo web desarrollado como ejercicio 
práctico para la materia de Ingeniería de Sistemas e Informática de la 
Universidad Industrial de Santander (UIS). 

El panel simula la gestión de información de una empresa, permitiendo 
visualizar datos de Clientes, Proveedores y Usuarios del sistema mediante 
una interfaz moderna y navegación dinámica sin recarga de página.

---

## Tecnologías utilizadas
- **React 18** → Biblioteca principal para construir la interfaz de usuario
- **Vite** → Herramienta de desarrollo rápida para proyectos frontend
- **Bootstrap 5** → Framework de estilos para el diseño visual
- **React Router DOM** → Librería para la navegación entre vistas
- **Font Awesome** → Librería de iconos para mejorar la interfaz

---

## Estructura del proyecto
src/
├── components/
│   ├── Header.jsx      → Logo y nombre del sitio en la navbar
│   ├── Menu.jsx        → Enlaces de navegación
│   └── Navbar.jsx      → Barra de navegación completa
├── pages/
│   ├── Clientes.jsx    → Vista con lista de clientes
│   ├── Proveedor.jsx   → Vista con lista de proveedores
│   ├── Usuarios.jsx    → Vista con usuarios del sistema
│   └── Logout.jsx      → Vista de cierre de sesión
├── App.jsx             → Componente principal con las rutas
└── main.jsx            → Punto de entrada de la aplicación

---

## Características del proyecto
- Barra de navegación con logo y enlaces a cada sección
- Navegación moderna sin recarga de página usando React Router
- Tablas con datos de prueba para Clientes, Proveedores y Usuarios
- Diseño responsivo usando Bootstrap 5
- Iconos con Font Awesome

---

## Pasos para ejecutar el proyecto

### Requisitos previos
- Tener instalado **Node.js** (versión 18 o superior)
- Tener instalado **npm**

### Instalación
1. Clonar el repositorio
2. Entrar a la carpeta: `cd panel-admin`
3. Instalar dependencias: `npm install`
4. Ejecutar el proyecto: `npm run dev`
5. Abrir en el navegador: `http://localhost:5173`

---

## Vistas del proyecto
- **Clientes** → Muestra una tabla con nombre, correo, teléfono y ciudad
- **Proveedor** → Muestra una tabla con nombre, contacto, teléfono y ciudad
- **Usuarios** → Muestra una tabla con nombre de usuario, rol y estado
- **Logout** → Pantalla de cierre de sesión

---

## Autor
**Cristian** - Estudiante Universidad Industrial de Santander (UIS)  
Profesor: Carlos Adolfo Beltrán Castro  
I Semestre 2025