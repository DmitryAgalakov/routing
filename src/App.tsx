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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            {/* Переадресация */}
            <Route path="about-us" element={<Navigate to={'/about'} replace />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<Post />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
