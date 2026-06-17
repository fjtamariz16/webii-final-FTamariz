import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Completa todos los campos.');
      return;
    }

    const token = btoa(email + ':' + Date.now());
    localStorage.setItem('token', token);
    navigate('/dashboard');
  };

  return (
    <div className="page-bg d-flex align-items-center justify-content-center p-3">
      <div className="auth-card">
        <h2 className="section-title text-center">Iniciar sesión</h2>
        <p className="text-muted text-center mb-4">
          Ingrese sus credenciales para acceder al panel de control.
        </p>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
