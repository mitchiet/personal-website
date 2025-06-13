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
          <div className="mb-10">
            <div className="flex items-center justify-center">
              <img className="dark:hidden w-7/10" src={l3harrisLogo}></img>
              <img className="hidden dark:block w-7/10" src={l3harrisDarkLogo}></img>
            </div>
            <div className="mx-15">
              <div className="flow-root">
                <h1 className="float-left underline">L3Harris</h1>
                <h1 className="float-right">2020 - Present</h1>
              </div>
              <h1 className="text-left italic">Greenville, Texas</h1>
              <h1 className="text-left italic">Sr. Associate Software Engineer</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-10">
            <div className="flex items-center justify-center">
              <img className="dark:bg-gray-400 dark:border-2 w-6/10" src={minigripLogo}></img>
            </div>
            <div className="mx-15 mt-10">
              <div className="flow-root">
                <h1 className="float-left underline">Minigrip</h1>
                <h1 className="float-right">2019</h1>
              </div>
              <h1 className="text-left italic">Seguin, Texas</h1>
              <h1 className="text-left italic">Technical Intern</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ExperiencesSection
