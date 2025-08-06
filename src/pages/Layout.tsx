import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../hoc/useAuth';

const headerHeight = 100;
const footerHeight = 100;

export function Layout() {
  const navigate = useNavigate();
  const { signout } = useAuth();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
      <header
        className="app-header"
        style={{
          height: `${headerHeight}px`,
          minHeight: `${headerHeight}px`,
          display: 'flex',
          flexDirection: 'row',
          gap: '16px',
        }}
      >
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/posts" className="nav-link">
          Posts
        </NavLink>
        <NavLink to="/create-post" className="nav-link">
          Create post
        </NavLink>
      </header>
      <div style={{ display: 'flex', width: '100%', height: `calc(100% - ${footerHeight + headerHeight}px)` }}>
        <Outlet />
      </div>
      <footer style={{ display: 'flex', height: `${footerHeight}px`, justifyContent: 'center', gap: '16px' }}>
        <button type="button" onClick={() => navigate(-1)} className="base-button">
          Go back
        </button>
        <button type="button" onClick={() => signout(() => navigate('/', { replace: true }))} className="base-button">
          Sign out
        </button>
      </footer>
    </div>
  );
}
