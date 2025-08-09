// biome-ignore assist/source/organizeImports: <explanation>
import { Await, defer, Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { Suspense, type FormEvent } from 'react';

export function Posts() {
  const { posts } = useLoaderData() as any;
  const [searchParams, setSearchParams] = useSearchParams();

  const postParam = searchParams.get('post') || '';

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target;
    const query = (form as any).search.value;
    setSearchParams({ post: query });
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h1 style={{ height: '50px' }}>Our posts</h1>

      <form autoComplete="off" onSubmit={submit}>
        <input type="search" name="search" />
        <input type="submit" value="Search" />
      </form>

      <div style={{ height: 'calc(100% - 50px)', width: '100%', overflow: 'hidden scroll', paddingLeft: '48px' }}>
        <Suspense fallback={<h2 style={{ color: 'white', marginTop: '16px' }}>Loading...</h2>}>
          <Await resolve={posts}>
            {(resolvedPosts) => (
              <>
                {/* 
                Рендер функция. 
                Можно вместо неё использовать компонент смотри как реализовано в <Post/>
               */}
                {resolvedPosts
                  .filter((post: any) => post.title.includes(postParam))
                  .map((post: any) => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: '16px',
                          marginTop: '8px',
                        }}
                      >
                        <div
                          style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'white' }}
                        ></div>
                        <span style={{ color: '#cacaca', fontSize: '1rem', textTransform: 'capitalize' }}>
                          {post.title}
                        </span>
                      </div>
                    </Link>
                  ))}
              </>
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Response('', { status: res.status, statusText: 'Not found' });
    // Или можно использовать throw json().
    // throw json(
    //   {
    //     message: "My error message.",
    //   },
    //   { status: 401 }
    // );
  }

  return res.json();
}

export const postsLoader = async () => {
  return defer({
    posts: getPosts(),
  });
};
