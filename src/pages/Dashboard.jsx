import Navbar from '../components/Navbar.jsx';

export default function Dashboard() {
  return (
    <div className="page-bg">
      <Navbar />
      <div className="container py-5">
        <h2 className="section-title">Dashboard</h2>
        <p>Bienvenido al panel principal.</p>
      </div>
    </div>
  );
}
