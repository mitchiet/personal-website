import { Heading } from '../tailwind-catalyst/heading'

import ImageWithSpinner from '../ImageWithSpinner';

import pic1 from '../../assets/images/headshot.jpg';
import pic2 from '../../assets/images/headshot-glasses.jpg';

interface IntroductionSectionProps {
    ref?: React.Ref<HTMLDivElement>;
    darkMode?: boolean;
}

function IntroductionSection({ ref, darkMode }: IntroductionSectionProps) {

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
      <div className="w-[60%] mx-auto">
        <ImageWithSpinner 
          src={darkMode? pic1 : pic2}
          alt="Senior Design Control Unit"
          className="rounded-xl border-2"
        />
      </div>
    </div>
  )
}

export default IntroductionSection
