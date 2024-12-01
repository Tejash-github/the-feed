// components/Post.js
const Post = ({ post }) => {
    return (
      <article className="mb-4">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p className="text-gray-600">{post.author} - {new Date(post.createdAt).toLocaleDateString()}</p>
        <div className="mt-2" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    );
  };
  
  export default Post;