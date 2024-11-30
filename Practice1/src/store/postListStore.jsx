import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  AddPost: () => {},
  DeletePost: () => {},
});

const postListReducer = (currPostList,action) => {

  let newPostlist = currPostList

  if (action.type === "DELETE_POST"){
    newPostlist = currPostList.filter(post =>
      post.id !== action.payload.postId
    )
  }
  return newPostlist
}


const PostListProvider = ({children}) => {

  const [postList,dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST)

  const AddPost = () => {

  }
  const DeletePost = (postId) => {
    console.log(postId);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId
      }
    })  
  } 

  return(
    <PostList.Provider value={{postList,AddPost,DeletePost}}>
      {children}
    </PostList.Provider>
  )
}

const DEFAULT_POST_LIST = [{
   id:"1",
   title:"Going to Goa",
   body:"Hi Friends! I am going to Goa for my vacations",
   reaction: 0,
   userId:"user-9",
   tags:["vacation","Goa"]
},
{
  id:"2",
  title:"Going to Mumbai",
  body:"Hi Friends! I am going to Mumbai for my vacations",
  reaction: 15,
  userId:"user-10",
  tags:["vacation","Mumbai"]
},
{
  id:"3",
  title:"Going to Mumbai",
  body:"Hi Friends! I am going to Mumbai for my vacations",
  reaction: 15,
  userId:"user-10",
  tags:["vacation","Mumbai"]
}]

export default PostListProvider;