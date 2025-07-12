import React, { useMemo, useRef } from 'react';

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
import pic2 from '../../assets/images/foo-fighters.png';
import pic3 from '../../assets/images/suarez.png';
import pic4 from '../../assets/images/volunteer-football.png';
import pic5 from '../../assets/images/coffee.png';

const images = [pic1, pic2, pic3, pic4, pic5];

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

  const swiperContent = useMemo(() => (
    <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="relative h-[48dvh] md:h-[64dvh] will-change-transform [transform:translateZ(0)]"
        virtual={false}
        watchSlidesProgress
        slidesPerView="auto"
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
        <SwiperSlide key={index} className="!w-auto">
          <img className="rounded-xl border-2 h-[40dvh] md:h-[55dvh] w-auto object-cover block [backface-visibility:hidden] [transform-style:preserve-3d]"
            src={src}
            loading="eager"
            alt={`Slide ${index}`}
            onLoad={handleImageLoad}
            onError={handleImageLoad}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ), [images]); // Only re-run if `images` changes

  return (
    <div ref={ref}>
      <div className="flex w-full items-end justify-between gap-4 border-b-2 border-zinc-950/10 pb-4 dark:border-white/10">
        <Heading>Introduction</Heading>
      </div>
      <br/>
      <div>
         {swiperContent}
      </div>
    </div>
  )
}

export default IntroductionSection
