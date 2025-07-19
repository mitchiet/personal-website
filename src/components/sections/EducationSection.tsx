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
      <p className="mx-5 sm:mx-15">
        Howdy! My name is Mitchell Taylor, and I am the
        loudest and proudest member of the Fightin' Texas Aggie Class of 2021!
      </p>
      <TAMLogo className="dark:hidden h-60 md:h-100 mx-auto" />
      <TAMDarkLogo className="hidden dark:block h-60 md:h-100 mx-auto" />
      <div className="mx-5 sm:mx-15">
        <div className="flow-root">
          <h1 className="float-left font-bold">Texas A&M University</h1>
          <h1 className="float-right">2017 - 2021</h1>
        </div>
        <h1 className="text-left italic">Electrical Engineering Major</h1>
        <h1 className="text-left italic">Computer Science Minor</h1>
        
      </div>
      
    </div>
  )
}

export default EducationSection
