import Card from "./card";
import { PostListDATA } from "../Store/postListStore";
import { useContext, useEffect, useState} from "react";
import WelcomeMsg from "./Welcomemsg";
import Loading from "./Loading";

const CardList = () => {

  const {postlist,AddPosts} = useContext(PostListDATA);
  const[fetching,setFetching] = useState(false)

  useEffect(()=> {

    setFetching(true);  

      fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {AddPosts(data.posts);
    setFetching(false);
      });

    return () => {
      console.log("CLEANED");
      
    };
  },[]);

  
  return (

    <>

    {fetching === true && <Loading/>}

    {fetching === false && postlist.length === 0 && < WelcomeMsg/>}

    {fetching === false && postlist.map((post) => (
      <Card key={post.id} post = {post}/>
    ))}

    </>

  )
  
}

export default CardList;