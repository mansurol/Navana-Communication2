import React, { useState } from 'react';
import './SectionOne.css'
import SliderData from '../Fakedata/SliderData'
import SectionOnePartOne from '../SectionOne/SectionOnePartOne'
import Slider from "react-slick";

const SectionOne = () => {
    const [data , setData] = useState(SliderData)


    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
 
        autoplaySpeed: 3500
      };

    return (
        <div>
          <div className="container">
            <div className='pt-5 pb-5 text-center '>
                <h2>Software Development Lifecycle</h2>
            </div>
          <div className="row d-flex justify-content-between">
                <div className='col-lg-5 col-md-6  mt-5 Animition'>
                <Slider {...settings}>
                {
                data.map((Datas)=> <SectionOnePartOne AllData={Datas}/>)
               }
                </Slider>
                </div>

               
                <div className='col-lg-5 col-md-5  mt-4 p-5 bgColor mb-4' style={{borderRadius:'10%'}}>
                    <p>DEFINE</p>
                    <p>PLAN</p>
                    <p>DESIGN</p>
                    <p>IMPLEMENT</p>
                    <p>TEST</p>
                    <p>MAINTAIN</p>

            
                </div>

            </div>
             
          </div>
            
        </div>
    );
};

export default SectionOne;