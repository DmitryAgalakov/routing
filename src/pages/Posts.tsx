import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { IPost } from '../models';

export function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h1 style={{ height: '50px' }}>Our posts</h1>
      <div style={{ height: 'calc(100% - 50px)', width: '100%', overflow: 'hidden scroll', paddingLeft: '48px' }}>
        {posts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', marginTop: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'white' }}></div>
              <span style={{ color: '#cacaca', fontSize: '1rem', textTransform: 'capitalize' }}>{post.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
