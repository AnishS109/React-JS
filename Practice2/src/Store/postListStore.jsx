import { useCallback } from "react";
import { createContext, useReducer } from "react";

export const PostListDATA = createContext([])

const postlistReducer = (currpostlist,action) => {
  let newlist = currpostlist

  if (action.type === "DELETE_POST") {
    newlist = currpostlist.filter((post) => post.id !== action.payload.event)
  }

  else if (action.type === "ADD_INI_POST"){
    newlist = action.payload.posts
  }

  else if (action.type === "ADD_POST") {
    newlist = [...currpostlist,action.payload]
  }

  return newlist
}


const PostListProvider = ({children}) => {

  const[postlist,dispatchPostList] = useReducer(postlistReducer,[])

  const DeletePost = (event) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        event
      }
    })
  }

  const AddPost = (Title,content,tags,reactions,event) => {
     console.log(` ${Title} ${content} ${tags} ${reactions}  `)

     dispatchPostList({
      type: "ADD_POST",
      payload:{
        id:Date.now(),
        title:Title,
        body:content,
        reactions: reactions,
        tags:tags
      }
     })
  }

  const AddPosts = (posts) => {

    dispatchPostList({
     type: "ADD_INI_POST",
     payload:{
       posts
     }
    })
 }

  return (
    <PostListDATA.Provider value={{postlist,DeletePost,AddPost,AddPosts}}>
     
     {children}
     
    </PostListDATA.Provider>
  )
}


export default PostListProvider;