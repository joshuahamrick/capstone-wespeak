import "./Post.css";
export const Post = ({ post }) => {
  return (
    <div className="post">
      <header className="card-header">
        <div>{post.group.name}</div>
        <div>
          {post.user.username} - {post.date}
        </div>
      </header>
      <div className="post-title">{post.title}</div>
      <footer className="post-footer">
        <div></div>
        <div></div>
        <div>Likes</div>
      </footer>
    </div>
  );
};
