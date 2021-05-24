import Link from "next/link";

function PostLinkItem({ id, label }) {
  return (
    <li>
      <Link href={`/posts/[id]`} as={`/posts/${id}`}>
        <a>
          <strong>{label}</strong>
        </a>
      </Link>
    </li>
  );
}

function Posts({ posts }) {
  const renderPosts = (post) => {
    return (
      <PostLinkItem key={post.id} id={post.id} label={post.title.rendered} />
    );
  };

  return <ul>{posts.map(renderPosts)}</ul>;
}

export const getStaticProps = async () => {
  const res = await (
    await fetch("https://sitemaroto.000webhostapp.com/wp-json/wp/v2/posts")
  ).json();

  return {
    props: {
      posts: res,
    },
  };
};

export default Posts;
