// import axios from 'axios'
// import React from 'react'
// import { useQueries, useQuery } from 'react-query'
// import { useParams } from 'react-router-dom'

// export default function Productdetails() {
//     // let {id}=useParams()
//     // console.log(x);
//     function productdetails(){
//        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
//     }

//   let {isError,data,isLoading,isFetching}=  useQuery("productDetails",productdetails)

//   return (
//     <div>

// {isFetching?<div className='loading position-fixed d-flex  justify-content-center  align-items-center   bg-white  end-0 start-0 top-0 bottom-0  '>
//  <span className="loader"></span>
//  </div>:  <div className="container">
//         <div className="row align-items-center py-5  ">
//             <div className="col-3">

// <img className='w-100' src={data?.data.data.imageCover} alt="" />
//             </div>

//             <div className="col-9 py-5  ">

// <h1>{ data?.data.data.title} </h1>
// <p>{data?.data.data.description} </p>
// <button className='btn btn-success d-block w-100'>Add To Cart +</button>
//             </div>
//         </div>
//       </div>}
    
//     </div>
//   )
// }
