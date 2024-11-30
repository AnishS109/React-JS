import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './route/App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import CreatePost from './components/CreatePost.jsx'
import CardList from './components/cardList.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <App/>,
    children: [
      {
        path: "/" , element: <CardList/>
      },
      {
        path: "/create-post" , element: <CreatePost/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)