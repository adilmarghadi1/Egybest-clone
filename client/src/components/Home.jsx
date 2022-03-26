import './Home.css'
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import img1 from '../images/img1.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillTwitterSquare } from "react-icons/ai";
import Navbar from './Navbar';
// Import Swiper styles
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from 'axios'
import { Pagination, Navigation } from "swiper";
function Home() {
     
    let navigate = useNavigate();
  
  const [user, setUser] = useState(null)

  const getUser = async () => {
    const res = await axios.get("/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    setUser(res.data)
  }

//   useEffect(() => {
//     getUser()
//     if (!localStorage.getItem("token")) {
//       navigate("/login")
//     }
//   }, [])

 

const [videoCards, setVideoCards] = useState([]);



useEffect(() => {
 axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=MA&key=AIzaSyAua-uH4IjEWSCVUIYjFbpn1OLJZ_VtJvw`)
   .then(response => {
     console.log(response.data.items)
     createVideoCards(response.data.items);
   })
   .catch(error => {
     console.log(error);
   })
}, [])



async function createVideoCards(videoItems) {
 let newVideoCards = [];
 for (const video of videoItems) {
   const videoId = video.id;
   const snippet = video.snippet;
   const channelId = snippet.channelId;

   const response = await axios
                         .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyAua-uH4IjEWSCVUIYjFbpn1OLJZ_VtJvw`)
   const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
   const title = snippet.title;
     
   const image = snippet.thumbnails.medium.url;
   const views = video.statistics.viewCount;
   const channel = snippet.channelTitle;

   newVideoCards.push({
     videoId,
     image,
     title,
     channel,
     views,
     channelImage
   });
 };
 setVideoCards(newVideoCards);

}

   

    return (
        <div>
            <Navbar />
            
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
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
          { videoCards.map(item => (
        <SwiperSlide>
            <div className='box5'>
            <img src={item.image} className='img1' alt='image' />
            <p>{item.title}</p>
            </div>
        </SwiperSlide>
          ))}
      
      </Swiper>
                    
                      
                </div>
                

                <div className='box4'>
                    <div className='box44'>
                        <p> » المزيد</p>
                        <h3>مسرحيات
</h3>
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
      { videoCards.map(item => (
        <SwiperSlide>
            <div className='box5'>
            <img src={item.image} className='img1' alt='image' />
            <p>{item.title}</p>
            </div>
        </SwiperSlide>
          ))}

       
      </Swiper>
                    
                      
                </div>


                <div className='box4'>
                    <div className='box44'>
                        <p> » المزيد</p>
                        <h3>أفلام جديدة
</h3>
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
       { videoCards.map(item => (
        <SwiperSlide>
            <div className='box5'>
            <img src={item.image} className='img1' alt='image' />
            <p>{item.title}</p>
            </div>
        </SwiperSlide>
          ))}

       
      </Swiper>
                    
                      
                </div>



                <div className='box4'>
                    <div className='box44'>
                        <p> » المزيد</p>
                        <h3>أفلام عن الحرب العالمية ☢</h3>
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
      { videoCards.map(item => (
        <SwiperSlide>
            <div className='box5'>
            <img src={item.image} className='img1' alt='image' />
            <p>{item.title}</p>
            </div>
        </SwiperSlide>
          ))}

      
      </Swiper>
                </div>
            </div>
            <div className='right1'>
                <div className='box7'>
                    <h2> ايجي بست</h2>
                    <h3> الأكثر مشاهدة</h3>
                    <h3> أفلام</h3>
                    <h3> مسلسلات</h3>
                    <h3> 💪 المصارعة الحرة</h3>
                    <h3> 😆 مسرحيات </h3>
                    <h3> مكتبتي</h3>
                </div>
                 
            </div>
            <AiFillFacebook className='fb' />
            <AiFillTwitterSquare className='tw' />
        </div> 
        </div>
    )
}

export default Home