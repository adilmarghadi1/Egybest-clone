import './Home.css'
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import img1 from '../images/img1.jpg'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

function Home() {
    return (
        
        <div className="container1">
            
            {/* Left  */}

            <div className='left'>
                <div className='box11'> 
                <div className='box1'>
                    <h1>تابع ايجي بست</h1>
                    <div className='links'>
                    <a href="">EgyBestOriginal</a>
                    <AiFillFacebook className='linksf'/>
                    </div>

                    <div className='links'>
                    <a href="">EgyBestOriginal@</a>
                    <FaTwitterSquare className='linksf'/>
                    </div>
                </div>

                <div className='box2'>
                    <div className='link2'>
                        <a href='#'>افلام 2021</a>
                  
                        <a href='#'>افلام عربية</a>
                    </div>

                    <div className='link2'>
                        <a href='#'>افلام HD</a>
              
                        <a href='#'>افلام بلوراى</a>
                    </div>
                    <div className='link2'>
                        <a href='#'>افلام مصرية</a>
                
                        <a href='#'>افلام كورية</a>
                    </div>

                    <div className='link2'>
                        <a href='#'>افلام وثائقية</a>
                
                        <a href='#'>افلام حرب</a>
                    </div>


                    <div className='link2'>
                        <a href='#'>افلام آسيوية</a>
                
                        <a href='#'>افلام رعب</a>
                    </div>


                    <div className='link2'>
                        <a href='#'>افلام اكشن</a>
                
                        <a href='#'>افلام رومانسية</a>
                    </div>


                    <div className='link2'>
                        <a href='#'>افلام كرتون</a>
                
                        <a href='#'>ايجي بست</a>
                    </div>


                    <div className='link2'>
                        <a href='#'>افلام خيال علمى</a>
                
                        <a href='#'>افلام كورية</a>
                    </div>


                    <div className='link2'>
                        <a href='#'>افلام مصرية</a>
                
                        <a href='#'>افلام وثائقية</a>
                    </div>
                </div>
            </div>
            </div>

            <div className='center'>
                <div className='box3'>
                    <h1>مرحباً بكم في موقع ايجي بست الاصلي</h1>
                </div>

                <div className='box4'>
                    <div className='box44'>
                        <p> » المزيد</p>
                        <h3>الأفلام الأكثر مشاهدة</h3>
                    </div>
                    <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='box5'>
            <img src={img1} className='img1' alt='image' />
            <p>Titanic</p>
            </div>
        </SwiperSlide>

       <SwiperSlide>
            <div className='box5'>
            <img src={img1} className='img1' alt='image' />
            <p>Titanic</p>
            </div>
        </SwiperSlide>

       <SwiperSlide>
            <div className='box5'>
            <img src={img1} className='img1' alt='image' />
            <p>Titanic</p>
            </div>
        </SwiperSlide>

         <SwiperSlide>
            <div className='box5'>
            <img src={img1} className='img1' alt='image' />
            <p>Titanic</p>
            </div>
        </SwiperSlide>

         <SwiperSlide>
            <div className='box5'>
            <img src={img1} className='img1' alt='image' />
            <p>Titanic</p>
            </div>
        </SwiperSlide>

          <SwiperSlide>
            <div className='box5'>
            <img src={img1} className='img1' alt='image' />
            <p>Titanic</p>
            </div>

        </SwiperSlide>
         <SwiperSlide>
            <div className='box5'>
            <img src={img1} className='img1' alt='image' />
            <p>Titanic</p>
            </div>
        </SwiperSlide>
      </Swiper>
                    
                      
                </div>
                
            </div>


            <div className='right1'>
                <h1>Hello</h1>
            </div>
            
        </div>
    )
}

export default Home