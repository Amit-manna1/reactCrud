import './Add.css';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios  from 'axios';
import toast from 'react-hot-toast'
const Add = () => {
    const [user, setUser] = useState({ fname: '', lname: '', email: '', password: '' });
   
    // to redirect to home when submit 
    const navigate = useNavigate();
   
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(user);
    };
    const onSubmitForm = async (e) => {
        e.preventDefault();
        //ue axios to comunicate with api
        await axios.post("http://localhost:8000/api/create", user)
            .then((reponse) => { 
                console.log(reponse);
                toast.success("Added Succesfully" , {position:'top-right'});
                navigate("/");
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='login-box'>


            <form onSubmit={onSubmitForm}>

                <div className="user-box">

                    <input type="text" id="fname" name="fname" onChange={inputHandler} required="" />
                    <label>First Name</label>
                </div>

                <div className="user-box">
                    <input type="text" name="lname" onChange={inputHandler} required="" />
                    <label>Last Name</label>
                </div>
                <div className="user-box">
                    <input type="email" name="email" onChange={inputHandler} required="" />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="password" name="password" onChange={inputHandler} required="" />
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

export default Add
