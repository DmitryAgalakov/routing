import type { FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hoc/useAuth';

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = (location.state as any)?.from?.pathname ?? '/';

  const { signin } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
    };
    const user = target.username.value;
    signin(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
