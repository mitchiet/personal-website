import { Heading } from '../tailwind-catalyst/heading'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/grid";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import L3HarrisLogo from '../../assets/logos/l3harris.svg?react';
import L3HarrisDarkLogo from '../../assets/logos/l3harris-dark.svg?react';
import minigripLogo from '../../assets/logos/minigrip.png';


interface EmploymentSectionProps {
    ref?: React.Ref<HTMLDivElement>;
}

function EmploymentSection({ ref }: EmploymentSectionProps) {

  return (
    <div ref={ref}>
      <div className="flex w-full items-end justify-between gap-4 border-b-2 border-zinc-950/10 pb-4 dark:border-white/10">
        <Heading>Employment</Heading>
      </div>
      <br/>
      <Swiper className="relative" slidesPerView={1}
          grid={{
            rows: 2,
            fill: "row"
          }}
          spaceBetween={50}
          navigation
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Navigation, Pagination]}>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <L3HarrisLogo className="dark:hidden w-7/10 h-64"/>
            <L3HarrisDarkLogo className="hidden dark:block w-7/10 h-64"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <div className="w-7/10">
              <img className="dark:bg-white rounded-xl mx-auto"
                  src={minigripLogo}
                  alt="Minigrip"
                  onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => e.currentTarget.classList.add('loaded')}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-15">
            <div className="flow-root">
              <h1 className="float-left font-bold">L3Harris</h1>
              <h1 className="float-right">2020 - Present</h1>
            </div>
            <h1 className="text-left italic">Greenville, Texas</h1>
            <h1 className="text-left italic">Sr. Associate Software Engineer</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-15">
            <div className="flow-root">
              <h1 className="float-left font-bold">Minigrip</h1>
              <h1 className="float-right">2019</h1>
            </div>
            <h1 className="text-left italic">Seguin, Texas</h1>
            <h1 className="text-left italic">Technical Intern</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default EmploymentSection
