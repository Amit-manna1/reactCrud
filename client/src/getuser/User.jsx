import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./User.css"
import toast from 'react-hot-toast'
const User = () => { 
  const [users, setUser] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getall");
      setUser(response.data);
    }
    fetchData();
  }, [])

  const deleteUser = async(userid) => {
    await axios.delete(`http://localhost:8000/api/delete/${userid}`)
    .then((response)=>{
      setUser(prevUser => prevUser.filter(user=> user._id !== userid))
    })
    .catch((error) => {console.log(error)});
    toast.success("Deleted Successfully", {position:'top-right'});
  }
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
          {users.map((item, index) => {
            return (
              <tr key={users._id}>
                <td>{index + 1}</td>
                <td>{item.fname}{item.lname}</td>
                <td>{item.email}</td>
                <td>
                  <div className="actionButton">
                   <button className='delete' onClick={()=>deleteUser(item._id)}><i className="fa-solid fa-trash"></i></button>
                    <Link to={'/edit/'+item._id}><button className='edit'><i className="fa-solid fa-edit"></i></button></Link>
                  </div>
                </td>
              </tr>
            )
          })}
          <tr>

          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default User
