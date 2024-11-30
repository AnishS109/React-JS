import { useContext, useRef } from 'react';
import '../App.css'
import { PostListDATA } from '../Store/postListStore';

const CreatePost = () => {

  const{AddPost} = useContext(PostListDATA)

  const userId = useRef()
  const title = useRef()
  const Content = useRef()
  const Tags = useRef()
  const Reactions = useRef()

  const handleSubmit = (event) => {

    event.preventDefault()

    const titleData = title.current.value;
    const contentIdData = Content.current.value;
    const tagsData = Tags.current.value.split("");
    const reactionsData = Reactions.current.value;

    const dataSet = {
      userId:userId,
      title:title,
      body:Content,
      reactions: Reactions,
      tags:Tags
    }

    const jsonData = JSON.stringify(dataSet)

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonData ,
    })
    .then(res => res.json())
    .then(console.log);

    AddPost(titleData,contentIdData,tagsData,reactionsData)
  }


  return (
    <>
    <form className='createPost' onSubmit={handleSubmit}>

    <div class="mb-3">

    <label htmlFor="userId" class="form-label">Enter your User Id here</label>
    <input type="text" ref={userId} class="form-control" id="userId"/>

    </div>

  <div class="mb-3">

    <label htmlFor="Title" class="form-label">Post Title</label>
    <input type="text" ref={title} class="form-control" id="Title"/>

  </div>

  <div class="mb-3">

    <label htmlFor="Content" class="form-label">Post Content</label>
    <textarea type="text" ref={Content} rows="4" class="form-control" id="Content"/>

  </div>

  <div class="mb-3">

    <label htmlFor="Tags" class="form-label">Post Tags</label>
    <input type="text" ref={Tags} class="form-control" id="Tags"/>

  </div>

  <div class="mb-3">

    <label htmlFor="reactions" class="form-label">Post Reactions</label>
    <input type="text" ref={Reactions} class="form-control" id="reactions"/>

  </div>
  
  <button type="submit" class="btn btn-primary">Create New post</button>

</form>
</>
  )
}

export default CreatePost;