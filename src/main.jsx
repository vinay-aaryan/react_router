import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/AboutUs/AboutUs.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github, { gitHubInfoLoader } from './components/Github/Github.jsx'

// 1st method to set rout

// const router = createBrowserRouter([
//   {
//     path : '/', 
//     element: <Layout />,
//     children: [
//       {path : '', element : <Home />}, 
//       {path : 'about' , element : <About />},
//       {path : 'contact' , element : <Contact />},
//     ]
//   }
// ])
 
// 2nd method to set routes

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout />} >
    <Route path='' element = {<Home/>} />
    <Route path='about' element = {<About/>} />
    <Route path='contact' element = {<Contact/>} />
    <Route path='user/:userid' element = {<User />} />
    <Route 
      loader={gitHubInfoLoader}
      path='github'
      element={<Github />}/>
   </Route>
  )
)


createRoot(document.getElementById('root')).render(
<StrictMode> 

    <RouterProvider router={router} />
</StrictMode>,
)


