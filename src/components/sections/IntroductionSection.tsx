import { Heading } from '../tailwind-catalyst/heading'

import pic from '../../assets/images/lincoln-memorial.jpg';

interface IntroductionSectionProps {
    ref?: React.Ref<HTMLDivElement>;
}

function IntroductionSection({ ref }: IntroductionSectionProps) {

  return (
    <div ref={ref}>
      <div className="flex w-full items-end justify-between gap-4 border-b-2 border-zinc-950/10 pb-4 dark:border-white/10">
        <Heading>Introduction</Heading>
      </div>
      <br/>
      <img className="mx-auto rounded-xl border-2 h-[70dvh]" src={pic} alt="Totally Professional Headshot" />
    </div>
  )
}

export default IntroductionSection
