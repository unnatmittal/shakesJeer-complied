import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "./image/image1.jpg";
import image2 from "./image/image2.jpeg";
import image3 from "./image/image3.jpeg";
import image4 from "./image/image4.jpeg";
import image5 from "./image/image5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/effect-creative";
import "swiper/css/effect-flip";

import "swiper/css/thumbs";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Parallax,
  Keyboard,
  Pagination,
  EffectCreative,
  EffectFlip,
  Navigation,
  Thumbs
} from "swiper";

// install Swiper modules
SwiperCore.use([
  Autoplay,
  EffectFlip,
  EffectCreative,
  Parallax,
  Keyboard,
  Pagination,
  Navigation,
  Thumbs
]);

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        keyboard={{
          enabled: true
        }}
        grabCursor={true}
        // effect={"flip"}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400]
          },
          next: {
            translate: ["100%", 0, 0]
          }
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        speed={600}
        parallax={true}
        className="mySwiper2"
      >
        
        <SwiperSlide>
          <img src= {image2} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {image1} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="..." />
        </SwiperSlide>
      </Swiper>

      {/* <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            alt="..."
          />
        </SwiperSlide>
      </Swiper> */}
    </>
  );
}
