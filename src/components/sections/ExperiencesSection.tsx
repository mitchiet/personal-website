import { Heading } from '../tailwind-catalyst/heading'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import l3harrisLogo from '../../assets/logos/l3harris.svg';
import l3harrisDarkLogo from '../../assets/logos/l3harris-dark.svg';
import minigripLogo from '../../assets/logos/minigrip.png';

function ExperiencesSection() {

  return (
    <div>
      <div className="flex w-full items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
        <Heading>Experiences</Heading>
      </div>
      <br/>
      <Swiper navigation pagination modules={[Navigation, Pagination]}>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img className="dark:hidden" src={l3harrisLogo}></img>
            <img className="hidden dark:block" src={l3harrisDarkLogo}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img className="dark:bg-gray-400 dark:border-2 dark:text-white" src={minigripLogo}></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ExperiencesSection
