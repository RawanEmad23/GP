
// import React, { useContext, useState } from 'react'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'
// import img2 from'../../assets/images/WhatsApp Image 2024-03-17 at 12.59.27 AM.jpeg'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// export default function Resendcod() {


// let Nav=useNavigate()


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

  
// onSubmit:ResendcodApi,

// validationSchema
// }
//  )


// async function ResendcodApi(val) {

//   setLoading(false);
//   let req = await axios.post("https:youssifallam.pythonanywhere.com/api/user/resend-otp/" , val)
// //   .catch((err)=>{
// // setMsg(err.response.data.message)

// // setLoading(true);
// //   }
// // )

// console.log(val);

// if(req.request.statusText=="OK"){
//   Nav('/Verifyemail');  
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

