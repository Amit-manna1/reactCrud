import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import User from './getuser/User'
import Add from './adduser/Add';

const route =createBrowserRouter([
  {
    path:'/',
    element:<User/>
  },
  {
    path:'/add',
    element:<Add/>
  },
  {
    path:'/edit',
    element:<User/>
  },
  

]);
function App() {
  
  return (
    <>
     <RouterProvider router={route}></RouterProvider>
    </>
  )
} 

export default App
