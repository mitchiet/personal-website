import { Heading } from '../tailwind-catalyst/heading'

import ImageWithSpinner from '../ImageWithSpinner';

import pic from '../../assets/images/headshot-glasses.jpg';

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
      <p className="mx-5 sm:mx-15">
        Hello! My name is Mitchell Taylor, and you have landed on my personal website.
        This site serves as an interactive résumé showcasing some of my skills and personality.
        Take a look around!
      </p>
      <br/><br/>
      <div className="mx-auto aspect-[3.4/4.25] max-h-[35vh] sm:max-h-[50vh]">
        <ImageWithSpinner 
          src={pic}
          alt="Professional Headshot"
          className="rounded-xl border-2 max-h-[35vh] sm:max-h-[50vh]"
        />
      </div>
    </div>
  )
}

export default IntroductionSection
