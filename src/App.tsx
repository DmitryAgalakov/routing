/** biome-ignore-all assist/source/organizeImports: <explanation> */
import './App.css';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Posts } from './pages/Posts';
import { NotFound } from './pages/NotFound';
import { Layout } from './pages/Layout';
import { BlogWithTitle } from './pages/BlogWithTitle';
import { Post } from './pages/Post';
import { Login } from './pages/Login';
import { CreatePost } from './pages/CreatePost';
import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about/*" element={<About />}>
                <Route path="contacts" element={<span>Route with our contacts.</span>} />
              </Route>
              {/* Переадресация */}
              <Route path="about-us" element={<Navigate to={'/about'} replace />} />
              <Route path="posts" element={<Posts />} />
              <Route
                path="create-post"
                element={
                  <RequireAuth>
                    <CreatePost />
                  </RequireAuth>
                }
              />
              <Route path="posts/:id" element={<Post />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
