import { useContext } from "react";
import "./app.css"
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/postListStore";

const Post = ({post}) => {

  const {DeletePost} = useContext(PostList);

  return (
    <>
    <div className="card post-card" style={{width: "30rem"}}>

  <div className="card-body ">
    <h5 className="card-title">{post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
    onClick={() => DeletePost(post.id)}>
    <MdDelete />
  </span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((item) => <span key={item}className="badge text-bg-primary hashtag">{item}</span>)}

    <div className="alert alert-dark reaction" role="alert">
    This Post has been reacted by {post.reaction} peoples
    </div>
  </div>
</div>
</>
  )
}

export default Post;