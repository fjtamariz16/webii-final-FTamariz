# Proyecto Examen

Proyecto base para la evaluación final de Programación Web 2.

## Tecnologías

- React 19
- React Router 6
- Axios
- Bootstrap 5
- Vite

## Estructura

```
opcion2-base/
├── src/
│   ├── api/
│   │   └── axiosInstance.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   └── Usuarios.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Funcionalidades a implementar

1. **Login funcional** (`src/pages/Login.jsx`): formulario controlado con email y contraseña. Guardar token simulado en `localStorage` y redirigir a `/dashboard`.
2. **Protección de rutas** (`src/components/ProtectedRoute.jsx`): leer el token de `localStorage`. Si no existe, redirigir a `/login`. Proteger `/dashboard` y `/usuarios`.
3. **Axios con interceptor** (`src/api/axiosInstance.js`): configurar `baseURL: 'https://jsonplaceholder.typicode.com'` y agregar header `Authorization: Bearer [token]` en cada request.
4. **Pantalla /usuarios** (`src/pages/Usuarios.jsx`): consumir `/users` con Axios, mostrar nombre, email y ciudad. Manejar loading y error.

## Instalación y ejecución

```bash
cd opcion2-base
npm install
npm run dev
```

## Entrega

Subir el proyecto a un repositorio público en GitHub e incluir en el `README.md` una captura de pantalla de la aplicación funcionando.
