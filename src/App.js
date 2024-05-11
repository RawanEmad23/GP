import React, { useContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from"./Componnent/Home/Home"
import Register from"./Componnent/Register/Register"
import Signup from"./Componnent/Signup/Signup"
import Login from"./Componnent/Login/Login"
import Notfound from"./Componnent/Notfound/Notfound"
import Layout from"./Componnent/Layout/Layout"
import ForgetPassword from './Componnent/ForgetPassword/ForgetPassword'
import ResetPassword from './Componnent/ResetPassword/ResetPassword'
import { UserContext } from './Componnent/Context/Usercontext';
import VerifyCode from './Componnent/VerifyCode/VerifyCode';
import {QueryClient,QueryClientProvider} from"react-query"
import Verifyemail from './Componnent/Verifyemail/Verifyemail'
import Camera from './Componnent/Camera/Camera'
import Tichnique from './Componnent/Tichnique/Tichnique'
import Audio from './Componnent/Audio/Audio'
import Audiooooooo from './Componnent/Audiooooooo/Audiooooooo'
import Profile from './Componnent/Profile/Profile'
export default function App() {
// let {Settoken}=useContext(UserContext)

// useEffect=(()=>{
//   if(localStorage.getItem('usertoken')!==null){
//     Settoken(  localStorage.setItem('usertoken'))
//   }
// },[])
let QueryClients =new QueryClient()
 let Routes=createBrowserRouter(
  
  [
    
    {path:"", element:<Layout></Layout>,
    children:[
    
    {path:"Home",element: <Home/> },

    {path:"VerifyCode",element:  <VerifyCode/>},
    {index:true,element:  <Register/>},
    {path:"Signup",element: <Signup/>},
    {path:"login",element:<Login></Login> },
    {path:"*",element:  <Notfound/> },
    {path:"resetpassword",element:  <ResetPassword></ResetPassword>},
    {path:"forgetpassword",element:<ForgetPassword></ForgetPassword>},
    {path:"Verifyemail/:id",element:<Verifyemail/>},
    {path:"camera",element:<Camera></Camera>},
    {path:"tichnique",element:<Tichnique></Tichnique>},
    {path:"Verifyemail/:id",element:<Verifyemail/>},
    {path:"Audio",element:<Audio></Audio>},
    {path:"Audiooooooo",element:<Audiooooooo></Audiooooooo>},
    {path:"profile",element:<Profile></Profile>}
]

    }])

 
    

    return(
   
    <RouterProvider router={Routes}></RouterProvider> 
         
   

  
    
    )




  }