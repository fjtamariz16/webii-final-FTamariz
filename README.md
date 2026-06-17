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

## Funcionalidades

1. **Login ** (`src/pages/Login.jsx`): formulario controlado con useState. Token simulado en `localStorage` generado con `btoa`.
2. **ProtectedRoute** (`src/components/ProtectedRoute.jsx`): Verifica token de `localStorage` antes de permitir acceso a `/dashboard` y `/usuarios`.
3. **Axios con interceptor** (`src/api/axiosInstance.js`): Centralisa `baseURL: 'https://jsonplaceholder.typicode.com'` y agregar el header `Authorization: Bearer [token]`.
4. **/usuarios** (`src/pages/Usuarios.jsx`): Consume `/users` con Axios, muestra nombre, email y ciudad. Maneja estados de `loading` y `error`.

## Instalación y ejecución

```bash
cd opcion2-base
npm install
npm run dev
```

## Capturas de pantalla

1. **Login**
<img width="440" height="423" alt="Screenshot 2026-06-17 at 6 31 37 PM" src="https://github.com/user-attachments/assets/78ef3702-b6bf-4feb-bf5b-9b63063bad37" />
<br>
2. **Dashboard**
<img width="1270" height="458" alt="Screenshot 2026-06-17 at 6 26 05 PM" src="https://github.com/user-attachments/assets/a6b4c949-2e24-45bc-9078-97814939c038" />
<br>
3. **Usuarios**
<img width="1266" height="605" alt="Screenshot 2026-06-17 at 6 26 13 PM" src="https://github.com/user-attachments/assets/5c838e39-11e9-46fd-b6db-75764db3c895" />
