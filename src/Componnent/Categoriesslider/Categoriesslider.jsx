import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
export default function Categoriesslider() {
  let [categorylist,setcategorylist]=useState([])
  useEffect(()=>{
    getcategory()
  },[])
 async function getcategory(){

  let req= await  axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  setcategorylist(req.data.data)
  }
  
  return (
<div>
<h2>Categories</h2>
<OwlCarousel items={7} loop autoplay>

{categorylist.map((element)=>{
return   <div class='item'>
<img className='w-100' src={element.image} height={300} alt="" />
</div>
})}

</OwlCarousel>
</div>

  )
}
 