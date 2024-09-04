import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
    {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobDescription/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
]
 
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    {/* <h1 className='text-red-500'>Let's build job portal</h1> */}
    {/* <Navbar/> */}
    <RouterProvider router={appRouter}/>
 
    </div>
  )
}

export default App
