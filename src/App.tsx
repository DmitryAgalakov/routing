/** biome-ignore-all assist/source/organizeImports: <explanation> */
import './App.css';
import {
  Route,
  createBrowserRouter,
  BrowserRouter,
  Navigate,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Posts, postsLoader } from './pages/Posts';
import { NotFound } from './pages/NotFound';
import { Layout } from './pages/Layout';
import { Post, postLoader } from './pages/Post';
import { Login } from './pages/Login';
import { CreatePost } from './pages/CreatePost';
import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';
import { ErrorInfo } from './pages/ErrorInfo';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorInfo />}>
      <Route index element={<Home />} />
      <Route path="about/*" element={<About />}>
        <Route path="contacts" element={<span>Route with our contacts.</span>} />
      </Route>
      {/* Переадресация */}
      <Route path="about-us" element={<Navigate to={'/about'} replace />} />
      <Route path="posts" element={<Posts />} loader={postsLoader} />
      <Route
        path="create-post"
        element={
          <RequireAuth>
            <CreatePost />
          </RequireAuth>
        }
      />
      <Route path="posts/:id" element={<Post />} loader={postLoader} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
