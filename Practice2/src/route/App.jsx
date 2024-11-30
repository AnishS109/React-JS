import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import CardList from '../components/cardList'
import { useState } from 'react'
import CreatePost from '../components/CreatePost'
import PostListProvider from '../Store/postListStore'
import { Outlet } from 'react-router-dom'

function App() {

  // const [selectedtab,setselectedtab] = useState("Home")

  return (
    <>

    <PostListProvider>

    <div className="container">


    <SideBar ></SideBar>

    <div className="app-content">

     <Header/>

    <Outlet>
    </Outlet>

    {/* {selectedtab === "Home" && <CardList/>}
    {selectedtab === "Create Post" && <CreatePost></CreatePost>} */}

    

     <Footer/>

     </div>

     </div>

     </PostListProvider>
    </>
  )
}

export default App

