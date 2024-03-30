import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import User from './getuser/User'
import Add from './adduser/Add';
import UpdateUser from './updateuser/UpdateUser';

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
    path:'/edit/:id',
    element:<UpdateUser/>
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
