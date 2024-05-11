
// import React, { useContext, useState } from 'react'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'
// import img2 from'../../assets/images/WhatsApp Image 2024-03-17 at 12.59.27 AM.jpeg'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// export default function ForgetPassword() {


// let Nav=useNavigate()


// let {tokens}=useParams()
//   let validationSchema = Yup.object({
  
//     email: Yup.string().required('Email is required').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Enter valid email'),
   

//   })


//  let[errMsg,setMsg]=useState("")
//  let[Loading,setLoading]=useState(true)


 
//   let formik=useFormik(
// {
// initialValues:{

//   email:"",

// },

  
// onSubmit:ForgetPasswordApi,

// validationSchema
// }
//  )


// async function ForgetPasswordApi(val) {

//   setLoading(false);
//   let req = await axios.post("https://youssifallam.pythonanywhere.com/api/forgot_password/" , val).catch((err)=>{
// setMsg(err.response.data.message)

// setLoading(true);
//   }
// )
// console.log(req);

// if(req.request.statusText=="OK"){
//   Nav('/resetpassword');  
//   // <link  to={`https://youssifallam.pythonanywhere.com/api/reset_password/${tokens}`} />
// }
// }

//    return (

//     <div className='container   d-flex justify-content-around      all  py-5'>
//       <div className='color2'>
// <div className='formik'>

// {errMsg? <div  className='alert alert-danger ' >{errMsg}</div>:""}
//       <h2 className=' fw-bold '>Verify The Code</h2>
     
//  {errMsg!=''?<div className='alert alert-danger '>{errMsg}</div>:""}


  
  
//   <form className='' onSubmit={formik.handleSubmit} >
  

//   <div className='mb-3'>
//   <label htmlFor="email"></label>
//   <input  placeholder='email' onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control' type="text" name='email' id='email'/>
//   {formik.errors.email&& formik.touched.email?<p className='text-danger'>{formik.errors.email}</p>:""}
 
//   </div>
 
 
 
 
 
//   {Loading?
  
//   <button disabled={!(formik.isValid&&formik.dirty)} type='submit' className=' button w-100 d-block  '>send</button>
  
  
//   :<button  className='btn btn-success ' type='button'><i class="fa-solid fa-spinner"></i></button> }
 
 
//   </form>






  

// </div>
   

//       </div>

//       <div  className='photo'><img className='w-100' src={img2} alt="" /></div>
 
// </div>

//   )}



import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import img2 from '../../assets/images/WhatsApp Image 2024-03-17 at 12.59.27 AM.jpeg';
import { UserContext } from '../Context/Usercontext';

export default function ForgetPassword() {
  let { setEmailuser } = useContext(UserContext);
  let Nav = useNavigate();

  let validationSchema = Yup.object({
   
        email: Yup.string().email('email is invalid').required('email is required'),
    
    
  });

  let [errMsg, setMsg] = useState('');
  let [Loading, setLoading] = useState(true);

  let formik = useFormik({
    initialValues: {

  email:"",

 
    },
    onSubmit: registerApi,
    validationSchema,
  });

  async function registerApi(value) {
    setLoading(false);
    let req = await axios.post("https://youssifallam.pythonanywhere.com/api/forgot_password/" , value).catch((err)=>{
     setMsg(err.response.data.message)
      
     setLoading(true);
       }
     )
     console.log(req);
      
     if(req.request.statusText=="OK"){
       Nav('/resetpassword');  
      // <link  to={`https://youssifallam.pythonanywhere.com/api/reset_password/${tokens}`} />
     }
     }

  return (
    <div className='container  d-flex  all     py-5'>
      <div className='row      '>
        <div className='col-md-6  color2'>
        <div className=' d-flex  justify-content-between '>
    <div className=' mt-4 bbb d-flex justify-content-between '>  
      <h2 className=' fw-bold    ' >Verify The Code</h2>
      </div>
      {errMsg!==''?<div className=' text-danger  '>{errMsg}</div>:""}
</div>





<form onSubmit={formik.handleSubmit} >





<div className='email mb-3'>
<label htmlFor="email"></label>
 <i class="fa-solid fa-envelope"></i>
 <input placeholder='     Valid email' value={formik.values.email}  onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control' type="text" name='email' id='email'/>
 {formik.errors.email&& formik.touched.email?<p className='text-danger   '>{formik.errors.email}</p>:""}

 </div>






 {/* <p className=' text-center my-3 '><input type="checkbox" name="" id="" />  By checking the box you agree to our <span className='span'>Terms</span> and <span className='span' >Conditions</span>.</p> */}

 {Loading? <button disabled={!(formik.isValid&&formik.dirty)} type='submit' className='button w-100  d-block  '>send </button>:<button  className='button ' type='button'><i class="fa-solid fa-spinner"></i></button> }




 </form>


        </div>
        <div className='col-md-4 photo'>
         <div  className='photo'>
<img className='' src={img2} alt="" />
 </div>ّّ
        </div>
      </div>
    </div>
  );
}