import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/home/home'
import About from './pages/about/About'
import Cours from './pages/Cours/Cours'
import Events from './pages/events/Events'
import Blog from './pages/blog/Blog'
import Contact from './pages/contacts/Contact'



const App = () => {
  
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout/>,
        children: [
          {
            index: true,
            element: <Home/>
          }, 
          {
            path: "/about",
            element: <About/>
          },
          {
            path: "/courses",
            element: <Cours/>
          },
          {
            path: "/events",
            element: <Events/>
          },
          {
            path: "/blog",
            element: <Blog/>
          },
          {
            path: "/contact",
            element: <Contact/>
          }
        ]
       
      },
    ]
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
