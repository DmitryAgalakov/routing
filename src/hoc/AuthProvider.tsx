import { createContext, type ReactNode, useState } from 'react';

interface Context {
  user: string;
  signin: (newUser: string, cb: () => void) => void;
  signout: (cb: () => void) => void;
}

export const AuthContext = createContext<Context | null>(null);

interface Props {
  children: ReactNode;
}

export function AuthProvider(props: Props) {
  const { children } = props;

  const [user, setUser] = useState('');

  const signin = (newUser: string, cb: () => void) => {
    setUser(newUser);
    cb();
  };

  const signout = (cb: () => void) => {
    setUser('');
    cb();
  };

  return <AuthContext.Provider value={{ user, signin, signout }}>{children}</AuthContext.Provider>;
}
