import { Heading } from '../tailwind-catalyst/heading'

import TAMLogo from '../../assets/logos/RBG-TAM-Stacked-Maroon.svg?react';
import TAMDarkLogo from '../../assets/logos/RBG-TAM-Stacked-MaroonWhite.svg?react';

interface EducationSectionProps {
    ref?: React.Ref<HTMLDivElement>;
}

function EducationSection({ ref }: EducationSectionProps) {

  return (
    <div ref={ref}>
      <div className="flex w-full items-end justify-between gap-4 border-b-2 border-zinc-950/10 pb-4 dark:border-white/10">
        <Heading>Education</Heading>
      </div>
      <br/>
      <TAMLogo className="dark:hidden h-60 md:h-100 mx-auto" />
      <TAMDarkLogo className="hidden dark:block h-60 md:h-100 mx-auto" />
      
    </div>
  )
}

export default EducationSection
