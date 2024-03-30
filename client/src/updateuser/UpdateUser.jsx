import React, { useEffect, useState } from 'react'
import './UpdateUser.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const UpdateUser = () => {
    
    const {id} = useParams();
    const [user,setUser] = useState({ fname: '', lname: '', email: '', password: '' });
    const navigate = useNavigate();

    const onSubmitForm = async(e) => {
        e.preventDefault();
        //ue axios to comunicate with api
        await axios.put(`http://localhost:8000/api/update/${id}`, user)
            .then((reponse) => { 
                console.log(reponse);
                toast.success("Updated Successfully", {position:'top-right'});
                navigate("/");
            })
            .catch(error => console.log(error))
             
    }


    const inputChangeHandler = async(e) =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
        console.log(user);
    }

    //fetching data 
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getone/${id}`)
        .then((response)=>{setUser(response.data)})
        .catch((error)=>{console.log(error); })
    },[id])
  return (
    <div className='login-box'>
    <form onSubmit={onSubmitForm}>

        <div className="user-box">

            <input type="text" id="fname" name="fname" onChange={inputChangeHandler} required="" autoComplete='false' value={user.fname} />
            <label>First Name</label>
        </div>

        <div className="user-box">
            <input type="text" name="lname" onChange={inputChangeHandler} required=""  autoComplete='false'  value={user.lname} />
            <label>Last Name</label>
        </div>
        <div className="user-box">
            <input type="email" name="email" onChange={inputChangeHandler} required="" autoComplete='false'   value={user.email}/>
            <label>Email</label>
        </div>
        <div className="user-box">
            <input type="password" name="password" onChange={inputChangeHandler} required="" autoComplete='false' value={user.password}  />
            <label>Password</label>
        </div>
        <button className="form-btn" type='submit'>Submit</button>
        <Link className='back-btn' to={"/"}>
            <button className="form-btn">Back</button>
        </Link>
    </form>
</div>
  )
}

export default UpdateUser
