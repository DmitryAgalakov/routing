import { NavLink, Outlet } from 'react-router-dom';

const headerHeight = 100;
const footerHeight = 100;

export function Layout() {
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
      </header>
      <div style={{ display: 'flex', width: '100%', height: `calc(100% - ${footerHeight + headerHeight}px)` }}>
        <Outlet />
      </div>
      <footer style={{ display: 'flex', height: `${footerHeight}px` }}>footer</footer>
    </div>
  );
}
