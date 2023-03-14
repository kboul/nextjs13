interface UserPostsProps {
  promise: Promise<Post[]>;
}

export default async function UserPosts({ promise }: UserPostsProps) {
  const posts = await promise;

  const content = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <br />
    </article>
  ));
  return content;
}
