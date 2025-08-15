import React, { useEffect, useRef, useState } from 'react';

import { Heading } from '../tailwind-catalyst/heading'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import pic1 from '../../assets/images/lincoln-memorial.png';
import pic2 from '../../assets/images/hiking.png';
import pic3 from '../../assets/images/suarez.png';
import pic4 from '../../assets/images/volunteer-football.png';
import pic5 from '../../assets/images/concert.png';

const images = [pic1, pic2, pic3, pic4, pic5];

interface IntroductionSectionProps {
    ref?: React.Ref<HTMLDivElement>;
}

function IntroductionSection({ ref }: IntroductionSectionProps) {
  const [allLoaded, setAllLoaded] = useState(false);
  const swiperRef = useRef<SwiperCore>(null);

  const preloadAndDecode = (src: string): Promise<void> => 
    new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = async () => {
        try {
          if (img.decode) {
            await img.decode();
          }
        } catch {
          // Ignore decoding errors
        } finally {
          resolve();
        }
      };
      img.onerror = () => resolve();
    });

  useEffect(() => {
    const loadImages = async () => {
      await Promise.all(images.map(preloadAndDecode));
      if (swiperRef.current) swiperRef.current.update();
      setAllLoaded(true);
    };
    loadImages();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex w-full items-end justify-between gap-4 border-b-2 border-zinc-950/10 pb-4 dark:border-white/10">
        <Heading>Introduction</Heading>
      </div>
      <br/>
      <p className="mx-5 sm:mx-15">
        Hello! My name is Mitchell Taylor, and you have landed on my personal website.
        This site serves as an interactive résumé showcasing some of my skills and personality.
        Take a look around!
      </p>
      <br/><br/>
      <div>
        {!allLoaded && (
        <div className="flex justify-center items-center intro-swiper">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
        {allLoaded && (
        <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="relative intro-swiper will-change-transform [transform:translateZ(0)]"
            virtual={false}
            watchSlidesProgress
            slidesPerView='auto'
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false
            }}
            spaceBetween={30}
            centeredSlides
            freeMode
            navigation
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, FreeMode, Navigation, Pagination]}>
          {images.map((src, index) => (
            <SwiperSlide key={index} className="!w-auto overflow-visible will-change-transform [transform:translateZ(0)]">
              <img className="rounded-xl border-2 intro-swiper-slide w-auto object-cover block loaded [backface-visibility:hidden] [transform-style:preserve-3d] will-change-transform [transform:translateZ(0)]"
                src={src}
                loading="eager"
                alt={`Slide ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>)}
      </div>
    </div>
  )
}

export default IntroductionSection
