/** biome-ignore-all assist/source/organizeImports: <explanation> */
import { useEffect, useState } from 'react';
import type { IPost } from '../models';
import { useParams } from 'react-router-dom';

export function Post() {
  const [post, setPost] = useState<IPost | null>(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div style={{ padding: '24px' }}>
      {post && (
        <>
          <h1 style={{ textTransform: 'capitalize', marginBottom: '16px' }}>{post.title}</h1>
          <span>{post.body}</span>
        </>
      )}
    </div>
  );
}
