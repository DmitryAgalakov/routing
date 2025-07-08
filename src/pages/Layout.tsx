import { Link, Outlet } from 'react-router-dom';

interface Props {}

export function Layout(props: Props) {
  return (
    <div>
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">blog</Link>
      </header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}
