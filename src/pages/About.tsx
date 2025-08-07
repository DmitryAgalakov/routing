import { Link, Outlet } from 'react-router-dom';

export function About() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '16px', alignItems: 'flex-start', gap: '8px' }}>
      <h1>About</h1>
      <Link style={{ color: 'white' }} to="contacts">
        Open contacts
      </Link>
      <Outlet />

      {/* Либо вложенные роуты можно определять так.
       Нужно заворачивать в <Routes/> и тогда не нужно использовать <Outlet/> */}
      {/* <Routes>
        <Route path="contacts" element={<span>Route with our contacts.</span>} />
      </Routes> */}
    </div>
  );
}
