


 import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import {UserContext} from '../Context/Usercontext'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/Usercontext';
import img3 from "../../assets/images/WhatsApp Image 2024-05-09 at 6.08.29 AM.jpeg"
 export default function Navpar() {
  let navigate=useNavigate() 
  let{Usertoken,Settoken}=useContext(UserContext)
  function LogOut(){
    localStorage.setItem('usertoken',null)
    Settoken(null)
    navigate('/login')
  }

   return (
     <div className='naav'>
       <nav class="navbar   navbar-expand-lg bg-body-tertiary">

  <div class="container-fluid">
    <a class="navbar-brand circle_logo" href="#"><img className="logo" src={img3} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

    {Usertoken !== null? <ul class='navbar-nav ms-auto mb-2  mb-lg-0'>
      <li class="px-4 nav-item ">
          <span class=" text-black nav-link active" onClick={LogOut} aria-current="page" to="Signup">Logout </span>
        </li>
       
<div className=' d-flex navvvvv'>

<li class="nav-item navbar-nav mb-2  mb-lg-0 ">
          <NavLink class='tttt' aria-current="page" to="camera">cameraa </NavLink>
        </li>
        <li class=''>
          <NavLink class=" " aria-current="page" to="tichnique">Tichniques </NavLink>
        </li>

</div>
      
        

      </ul>:
         <ul class="navbar-nav me-auto mb-2  mb-lg-0">
        <li class=" px-4 nav-item">
          <NavLink class=" text-black nav-link active" aria-current="page" to="login">Log in</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class=" text-black nav-link active" aria-current="page" to="Signup">Sign up </NavLink>
        </li>
     
        <li class="nav-item">
          <NavLink class=" text-black nav-link active" aria-current="page" to="profile">profile </NavLink>
        </li>
 
        <li class=''>
          <NavLink class=" " aria-current="page" to="resetpassword">resetpassword </NavLink>
        </li>
       
      
        
        </ul>
     
      
    
    }
     
      
  


      </div>
    </div>
 
</nav>
     </div>
   )
 }
  
        