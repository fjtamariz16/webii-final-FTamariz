import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import axiosInstance from '../api/axiosInstance.js';

export default function Usuarios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const cargarUsuarios = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await axiosInstance.get('/users');
        setUsers(response.data);
      } catch (error) {
        setError('Error al cargar los usuarios.');
      } finally {
        setLoading(false);
      }
    };

    cargarUsuarios();
  }, []);

  return (
    <div className="page-bg">
      <Navbar />
      <div className="container py-5">
        <h2 className="section-title">Usuarios</h2>

        {loading && (
          <div className="loading-box">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}

        {!loading && !error && (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Ciudad</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address?.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
