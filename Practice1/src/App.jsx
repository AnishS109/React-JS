import Navbar from "./components/NavBar"
import Footer from "./components/Footer"
import SideBar from "./components/Sidebar"
import Styles from "./App.module.css" 
import CreatePost from "./components/CreatePost"
import PostList from "./components/postList"
import { useState } from "react"
import PostListProvider from "./store/postListStore"


function App() {

  const [selectedTab,setselectedtab] = useState("Home");

  return (
    
    <PostListProvider>

    <div className={Styles.app_container}>

    <SideBar selectedTab={selectedTab} setselectedtab={setselectedtab}/>

    <div className={Styles.content}>

    <Navbar/>

    {selectedTab === "Home" && <PostList></PostList>}
    {selectedTab === "Create Post" && <CreatePost></CreatePost>}

    <Footer/>

    </div>

    </div>
    
    </PostListProvider>
  )
}

export default App
