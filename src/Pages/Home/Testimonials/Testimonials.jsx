import SectionTitle from "../../../Components/SectionTitle/SectionTitle"

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonials = () => {

  const [reviews,setReviews] = useState([])
  useEffect(()=>{
    fetch('review.json')
    .then(res => res.json())
    .then(data =>setReviews(data))

  },[])
  return (
    <section>
      <SectionTitle
        subHeading={'What Our Client Says'}
        heading={"testimonials"}
      >

      </SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
          reviews.map(review => <SwiperSlide
            key={review._id}
          >
            <div className="m-24 flex flex-col items-center">

            <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-orange-500">{review.name}</h3>
            </div>

          </SwiperSlide>)
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials