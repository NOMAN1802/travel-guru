import React, { useEffect, useState } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import sajek from '../../assets/Sajek.png'
import Sreemongol from '../../assets/Sreemongol.png'
import sundorbon from '../../assets/sundorbon.png'
import Header from '../Header/Header';
import { Card } from 'react-bootstrap';

const Home = () => {

  const [places, setPlaces] =useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/places')
  .then(response => response.json())
  .then(data => {
    // Process the fetched data here
    setPlaces(data);
  })
  .catch(error => {
    // Handle any errors during the fetch request
    console.log('Error:', error);
  });

  },[])
  // console.log(places);
    return (
    <div className='bg'>
    
  
        <Header></Header>
        <section className='mt-6'>
        <div className='mt-6 d-flex'>
         <div className='w-25 m-auto p-auto'>
           <h3 className='text-white' style={{margin: '40px'}}>Sundar bon</h3>
           <p className='text-white'style={{margin: '40px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores officiis sequi dicta minus dolor totam amet ratione assumenda delectus saepe aspernatur magnam quidem iste, deleniti provident. Suscipit quisquam debitis repellat fugit earum deleniti est!</p>
           <button className='btn btn-warning' style={{margin: '40px'}}>Book now</button>
         </div>
         <div className='w-75 m-auto p-auto'>
         <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
    //   spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={{margin: '40px'}}
    >
         <div>
        {
          places?.map(place => <p
          key ={place.id}
          
          >
            <SwiperSlide>
      <Card className="w-75 text-white border-3 border-danger">
      <Card.Img src={place.image} style={{height: '350px',}} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='text-center'><h3>{place.name}</h3></Card.Title>
        
      </Card.ImgOverlay>
    </Card>
      </SwiperSlide>
          </p>)
        }
       </div>
      {/* <SwiperSlide>
      <Card className="w-75 text-white border-3 border-danger">
      <Card.Img src={sajek} style={{height: '350px',}} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='text-center'><h3>Sajek</h3></Card.Title>
        
      </Card.ImgOverlay>
    </Card>
      </SwiperSlide> */}
      {/* <SwiperSlide>
      <Card className="w-75 text-white border-3 border-danger">
      <Card.Img src={Sreemongol} style={{height: '350px',}} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='text-center'><h3>Sreemongol</h3></Card.Title>
        
      </Card.ImgOverlay>
    </Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card className="w-75  text-white border-3 border-danger">
      <Card.Img src={sundorbon} style={{height: '350px',}} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='text-center'><h3>Sundorbon</h3></Card.Title>
        
      </Card.ImgOverlay>
    </Card>
      </SwiperSlide>

      <SwiperSlide>
      <Card className="w-75 text-white  border-3 border-danger">
      <Card.Img src={sajek} style={{height: '350px',}} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='text-center'><h3>Sajek</h3></Card.Title>
        
      </Card.ImgOverlay>
    </Card>
      </SwiperSlide> */}
    
      ...
    </Swiper>
         </div>
      </div>
        </section>
    </div>
        
    );
};

export default Home;