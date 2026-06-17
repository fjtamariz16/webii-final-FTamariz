import Navbar from '../components/Navbar.jsx';

const token = localStorage.getItem('token');

export default function Dashboard() {
  return (
    <div className="page-bg">
      <Navbar />
      <div className="container py-4 text-center">
        <h2 className="section-title">Dashboard</h2>
        <p>Bienvenido al panel principal.</p>
      </div>

      <div className="px-3"
        style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '50px' }}>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm bordero-0 h-100">
              <div className="card-body">
                <h5 className="card-title">Usuarios</h5>
                <p className="card-text">Consulta información de usuarios de una API externa.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm bordero-0 h-100">
              <div className="card-body">
                <h5 className="card-title">Seguridad</h5>
                <p className="card-text">Acceso protegido mediante token almacenado en Local storage.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm bordero-0 h-100">
              <div className="card-body">
                <h5 className="card-title">API</h5>
                <p className="card-text">Integración con JSONPlaceholder utilizando Axios e interceptores.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm bordero-0 h-100">
              <div className="card-body">
                <h5 className="card-title">Token activo</h5>
                <p className="card-text">{token}.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
