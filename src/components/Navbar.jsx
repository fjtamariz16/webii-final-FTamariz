import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">Examen Opción 2</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => navigate('/dashboard')}>Dashboard</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => navigate('/usuarios')}>Usuarios</button>
            </li>
          </ul>
          <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>Salir</button>
        </div>
      </div>
    </nav>
  );
}
