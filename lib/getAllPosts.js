export default async function getAllPosts() {
  const result = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10', {
      // Incremental Static Regeneration (ISR)
      next: {
        revalidate: 30  // In seconds
      }
    });

  // return the promise
  return result.json();
}