import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import img1 from "../../assets/images/slider-image-1.jpeg"
import img2 from "../../assets/images/slider-image-2.jpeg"
import img3 from "../../assets/images/slider-image-3.jpeg"
export default function Mainslider() {
  return (
<div className="container"><div className="row g-0">
<div className="col-md-9">
<OwlCarousel className='owl-theme' items={1} loop margin={10} nav>
    <div class='item'>
    <img className='w-100' src={img1} height={400}  alt="" />
    </div>
    
    <div class='item'>
    <img className='w-100' src={img2} height={400}  alt="" />
    </div>
    <div class='item'>
    <img className='w-100' src={img3} height={400}  alt="" />
    </div>
</OwlCarousel>

</div>
<div className="col-md-3">
<img className='w-100' src={img2} height={200} alt="" />
<img className='w-100' src={img3}  height={200} alt="" />
</div>
</div></div>

  )
}
