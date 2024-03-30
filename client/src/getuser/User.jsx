import React from 'react'
import { Link } from 'react-router-dom'
import "./User.css"
const User = () => {
  return (
    <div className='userTable'>
       <Link to={"/add"} className='addButton' >Add  User </Link>
       <table border={1} cellPadding={10} cellSpacing={0} >
        <thead>
          <tr>
            <th>S No</th>
            <th>User name</th>
            <th>User Email</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>amit</td>
              <td>amit@</td>
              <td>
                <div className="actionButton">
              <Link to={'/edit'} ><button className='delete'><i className="fa-solid fa-trash"></i></button></Link>
              <Link to={'/edit'}><button className='edit'><i className="fa-solid fa-edit"></i></button></Link>
              </div>
              </td>
            </tr>
          </tbody>
        
       </table>
    </div>
  )
}

export default User
