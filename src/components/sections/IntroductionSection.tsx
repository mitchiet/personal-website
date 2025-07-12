import React, { useRef } from 'react';

import { Heading } from '../tailwind-catalyst/heading'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import pic1 from '../../assets/images/lincoln-memorial.jpg';
import pic2 from '../../assets/images/foo-fighters.jpg';
import pic3 from '../../assets/images/suarez.jpg';
import pic4 from '../../assets/images/volunteer-football.jpg';
import pic5 from '../../assets/images/coffee.jpg';

interface IntroductionSectionProps {
    ref?: React.Ref<HTMLDivElement>;
}

function IntroductionSection({ ref }: IntroductionSectionProps) {

  const swiperRef = useRef<SwiperCore>(null);
  const totalImages = 5; // Update if you add/remove slides
  const loadedCount = useRef(0);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.classList.add('loaded')
    loadedCount.current += 1;
    if (loadedCount.current === totalImages) {
      swiperRef.current?.update();
    }
  };

  return (
    <div ref={ref}>
      <div className="flex w-full items-end justify-between gap-4 border-b-2 border-zinc-950/10 pb-4 dark:border-white/10">
        <Heading>Introduction</Heading>
      </div>
      <br/>
      <div>
        <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="relative h-[48dvh] md:h-[64dvh]"
            slidesPerView="auto"
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            spaceBetween={30}
            centeredSlides
            freeMode
            navigation
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, FreeMode, Navigation, Pagination]}>
          <SwiperSlide className="!w-auto">
            <div className="inline-block">
              <img className="rounded-xl border-2 h-[40dvh] md:h-[55dvh] w-auto object-cover block"
                src={pic1}
                alt="Totally Professional Headshot at the Lincoln Memorial"
                onLoad={handleImageLoad}
                onError={handleImageLoad}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="inline-block">
              <img className="rounded-xl border-2 h-[40dvh] md:h-[55dvh] w-auto object-cover block"
                src={pic2}
                alt="Totally Professional Headshot at Dos Equis Pavilion"
                onLoad={handleImageLoad}
                onError={handleImageLoad}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="inline-block">
              <img className="rounded-xl border-2 h-[40dvh] md:h-[55dvh] w-auto object-cover block"
                src={pic3}
                alt="Totally Professional Headshot at Topgolf"
                onLoad={handleImageLoad}
                onError={handleImageLoad}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="inline-block">
              <img className="rounded-xl border-2 h-[40dvh] md:h-[55dvh] w-auto object-cover block"
                src={pic4}
                alt="Totally Professional Headshot at an enemy football stadium"
                onLoad={handleImageLoad}
                onError={handleImageLoad}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-auto">
            <div className="inline-block">
              <img className="rounded-xl border-2 h-[40dvh] md:h-[55dvh] w-auto object-cover block"
                src={pic5}
                alt="Totally Professional Headshot on a hike"
                onLoad={handleImageLoad}
                onError={handleImageLoad}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default IntroductionSection
