import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  // TODO: leer el token de localStorage
  // TODO: si no existe token, redirigir a /login

  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
