import { Link } from "react-router-dom";
import { Post } from "./Post.jsx";
export const PostList = ({ filteredPosts }) => {
  return (
    <div>
      <div className="posts-container">
        {filteredPosts.map((postObj) => {
          return (
            <Link key={postObj.id} to={`/posts/${postObj.id}`}>
              <Post post={postObj} key={postObj.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
