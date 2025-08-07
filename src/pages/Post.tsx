import { Await, useAsyncValue, useLoaderData } from 'react-router-dom';
import type { IPost } from '../models';
import { Suspense } from 'react';

const PostBody = () => {
  const post = useAsyncValue() as IPost;
  return (
    <>
      <h1 style={{ textTransform: 'capitalize', marginBottom: '16px' }}>{post.title}</h1>
      <span>{post.body}</span>
    </>
  );
};

export function Post() {
  const { post, id } = useLoaderData() as { post: IPost; id: string };

  return (
    <div style={{ padding: '24px' }}>
      <Suspense fallback={<h2 style={{ color: 'white', marginTop: '16px' }}>Loading...</h2>}>
        <Await resolve={post}>
          <PostBody />
        </Await>
      </Suspense>
    </div>
  );
}

async function getPostById(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export const postLoader = async ({ params }: any) => {
  const { id } = params;

  return { post: getPostById(id), id };
};
