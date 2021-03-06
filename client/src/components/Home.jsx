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
 axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key=AIzaSyAua-uH4IjEWSCVUIYjFbpn1OLJZ_VtJvw`)
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
 

// Second

const [videoCards2, setVideoCards2] = useState([]);



useEffect(() => {
 axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=MA&key=AIzaSyAua-uH4IjEWSCVUIYjFbpn1OLJZ_VtJvw`)
   .then(response => {
     console.log(response.data.items)
     createVideoCards2(response.data.items);
   })
   .catch(error => {
     console.log(error);
   })
}, [])



async function createVideoCards2(videoItems) {
 let newVideoCards2 = [];
 for (const video of videoItems) {
   const videoId = video.id;
   const snippet = video.snippet;
   const channelId = snippet.channelId;

   const response = await axios
                         .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyAua-uH4IjEWSCVUIYjFbpn1OLJZ_VtJvw`)
   const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
   const title2 = snippet.title;
     
   const image2 = snippet.thumbnails.medium.url;
   const views = video.statistics.viewCount;
   const channel = snippet.channelTitle;

   newVideoCards2.push({
     videoId,
     image2,
     title2,
     channel,
     views,
     channelImage
   });
 };
 setVideoCards2(newVideoCards2);

}


//Third

const [videoCards3, setVideoCards3] = useState([]);



useEffect(() => {
 axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=FR&key=AIzaSyAua-uH4IjEWSCVUIYjFbpn1OLJZ_VtJvw`)
   .then(response => {
     console.log(response.data.items)
     createVideoCards3(response.data.items);
   })
   .catch(error => {
     console.log(error);
   })
}, [])



async function createVideoCards3(videoItems) {
 let newVideoCards3 = [];
 for (const video of videoItems) {
   const videoId = video.id;
   const snippet = video.snippet;
   const channelId = snippet.channelId;

   const response = await axios
                         .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyAua-uH4IjEWSCVUIYjFbpn1OLJZ_VtJvw`)
   const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
   const title3 = snippet.title;
     
   const image3 = snippet.thumbnails.medium.url;
   const views = video.statistics.viewCount;
   const channel = snippet.channelTitle;

   newVideoCards3.push({
     videoId,
     image3,
     title3,
     channel,
     views,
     channelImage
   });
 };
 setVideoCards3(newVideoCards3);

}

//Fourth

const [videoCards4, setVideoCards4] = useState([]);



useEffect(() => {
 axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=CA&key=AIzaSyAua-uH4IjEWSCVUIYjFbpn1OLJZ_VtJvw`)
   .then(response => {
     console.log(response.data.items)
     createVideoCards4(response.data.items);
   })
   .catch(error => {
     console.log(error);
   })
}, [])



async function createVideoCards4(videoItems) {
 let newVideoCards4 = [];
 for (const video of videoItems) {
   const videoId = video.id;
   const snippet = video.snippet;
   const channelId = snippet.channelId;

   const response = await axios
                         .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyAua-uH4IjEWSCVUIYjFbpn1OLJZ_VtJvw`)
   const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
   const title4 = snippet.title;
     
   const image4 = snippet.thumbnails.medium.url;
   const views = video.statistics.viewCount;
   const channel = snippet.channelTitle;

   newVideoCards4.push({
     videoId,
     image4,
     title4,
     channel,
     views,
     channelImage
   });
 };
 setVideoCards4(newVideoCards4);

}
   

    return (
        <div>
            <Navbar />
            
        <div className="container1">
             
            {/* Left  */}
           

            <div className='left'>
                <div className='box11'> 
                <div className='box1'>
                    <h1>???????? ???????? ??????</h1>
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
                        <a href='#'>?????????? 2021</a>
                  
                        <a href='#'>?????????? ??????????</a>
                    </div>

                    <div className='link2'>
                        <a href='#'>?????????? HD</a>
              
                        <a href='#'>?????????? ????????????</a>
                    </div>
                    <div className='link2'>
                        <a href='#'>?????????? ??????????</a>
                
                        <a href='#'>?????????? ??????????</a>
                    </div>

                    <div className='link2'>
                        <a href='#'>?????????? ??????????????</a>
                
                        <a href='#'>?????????? ??????</a>
                    </div>


                    <div className='link2'>
                        <a href='#'>?????????? ????????????</a>
                
                        <a href='#'>?????????? ??????</a>
                    </div>


                    <div className='link2'>
                        <a href='#'>?????????? ????????</a>
                
                        <a href='#'>?????????? ????????????????</a>
                    </div>


                    <div className='link2'>
                        <a href='#'>?????????? ??????????</a>
                
                        <a href='#'>???????? ??????</a>
                    </div>


                    <div className='link2'>
                        <a href='#'>?????????? ???????? ????????</a>
                
                        <a href='#'>?????????? ??????????</a>
                    </div>


                    <div className='link2'>
                        <a href='#'>?????????? ??????????</a>
                
                        <a href='#'>?????????? ??????????????</a>
                    </div>
                </div>
            </div>
            </div>

            <div className='center'>
                
                <div className='box3'>
                    <h1>???????????? ?????? ???? ???????? ???????? ?????? ????????????</h1>
                </div>

                <div className='box4'>
                    <div className='box44'>
                        <p> ?? ????????????</p>
                        <h3>?????????????? ???????????? ????????????</h3>
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
                        <p> ?? ????????????</p>
                        <h3>??????????????
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
      { videoCards2.map(item => (
        <SwiperSlide>
            <div className='box5'>
            <img src={item.image2} className='img1' alt='image' />
            <p>{item.title2}</p>
            </div>
        </SwiperSlide>
          ))}

       
      </Swiper>
                    
                      
                </div>


                <div className='box4'>
                    <div className='box44'>
                        <p> ?? ????????????</p>
                        <h3>?????????? ??????????
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
       { videoCards3.map(item => (
        <SwiperSlide>
            <div className='box5'>
            <img src={item.image3} className='img1' alt='image' />
            <p>{item.title3}</p>
            </div>
        </SwiperSlide>
          ))}

       
      </Swiper>
                    
                      
                </div>



                <div className='box4'>
                    <div className='box44'>
                        <p> ?? ????????????</p>
                        <h3>?????????? ???? ?????????? ???????????????? ???</h3>
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
      { videoCards4.map(item => (
        <SwiperSlide>
            <div className='box5'>
            <img src={item.image4} className='img1' alt='image' />
            <p>{item.title4}</p>
            </div>
        </SwiperSlide>
          ))}

      
      </Swiper>
                </div>
            </div>
            <div className='right1'>
                <div className='box7'>
                    <h2> ???????? ??????</h2>
                    <h3> ???????????? ????????????</h3>
                    <h3> ??????????</h3>
                    <h3> ??????????????</h3>
                    <h3> ???? ???????????????? ??????????</h3>
                    <h3> ???? ?????????????? </h3>
                    <h3> ????????????</h3>
                </div>
                 
            </div>
            <AiFillFacebook className='fb' />
            <AiFillTwitterSquare className='tw' />
        </div> 
        </div>
    )
}

export default Home