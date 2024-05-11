import React from 'react'

export default function Tichnique() {
  return (
    <div className=' container  '>
<div className=' text-center mt-5 '> <h2 className='underline-text'>Lorem ipsum dolor sit amet consectetur.</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, mollitia nam! Expedita natus ut perferendis quas doloribus labore, voluptates voluptate tempore, minus at necessitatibus, consequatur consequuntur totam repudiandae quaerat molestias?</p>
    </div>
      
      <div className='row justify-content-center container-buttom '>

        <div className='divv1 col-md-4 text-center fw-bold '>
          <p className='cameraaa'>convert sign<br></br> language by the<br></br> camera into text<br></br> and audio recording</p>
          <button className='white-buttom mt-4'><a href='../Login'>Start</a></button>
        </div>

        <div className='divv1 col-md-4 text-center divv2 fw-bold '>
          <p className='cameraaa'>convert text<br></br> into audio<br></br> recording</p>
          <button className='white-buttom mt-4'><a href='../Audio'>Start</a></button>
        </div>
       
        <div className='divv1 col-md-4 text-center fw-bold '>
          <p className='cameraaa'>Choose a <br></br>picture or video<br></br> to convert it<br></br> into text</p>
          <button className='white-buttom mt-4 '><a href='../camera'>Start</a></button>
        </div>
        
      </div>
    </div>
  )
}
