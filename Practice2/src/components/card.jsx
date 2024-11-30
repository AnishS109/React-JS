import { useContext } from 'react';
import '../App.css'
import { PostListDATA } from '../Store/postListStore';
import { MdDelete } from "react-icons/md";


const Card = ({post}) => {

  const {DeletePost} = useContext(PostListDATA)

  return (
    <>
    <div class="card post">

    <div class="card-body">

    <h5 class="card-title">{post.title}</h5>

    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
    onClick={() => {DeletePost(post.id)}}>
      <MdDelete />

    </span>

    <p class="card-text">{post.body}</p>

    {post.tags.map(item => <span key={item}className="badge text-bg-primary hashtag tags">{item}</span>)}

    <div className="alert alert-dark reaction reacts" role="alert">
    This Post has been reacted by {post.reaction} peoples
    </div>

  </div>

  </div>

    </>
  )
}

export default Card;