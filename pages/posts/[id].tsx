function Post({ post }) {
  return (
    <article>
      <header>
        <h1>{post.title.rendered}</h1>
      </header>
      {`${post.content.rendered}`}
    </article>
  );
}

export const getServerSideProps = async ({ params }) => {
  const response = await (
    await fetch(
      `https://sitemaroto.000webhostapp.com/wp-json/wp/v2/posts/${params.id}`
    )
  ).json();

  return {
    props: {
      post: response,
    },
  };
};

export default Post;
