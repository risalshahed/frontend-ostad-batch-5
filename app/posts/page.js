import getAllPosts from '@/lib/getAllPosts'
import Link from 'next/link';
import Button from '../components/Button';

export default async function Posts() {
  const posts = await getAllPosts();

  // console.log(posts);

  return (
    <div className='p-6'>
      <Button />
      <h2 className="font-semibold my-5 text-xl">
        Posts
      </h2>

      {
        posts?.map(post =>
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h3 className='font-semibold text-xl my-5'>
                {post.title}
              </h3>
            </Link>
          </div>
        )
      }
    </div>
  )
}
