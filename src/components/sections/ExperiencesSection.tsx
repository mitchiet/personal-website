import { Heading } from '../tailwind-catalyst/heading'

import l3harrisLogo from '../../assets/logos/l3harris.svg';
import l3harrisDarkLogo from '../../assets/logos/l3harris-dark.svg';

function ExperiencesSection() {

  return (
    <div>
      <div className="flex w-full items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
        <Heading>Experiences</Heading>
      </div>
      <br/>
      <img className="dark:hidden" src={l3harrisLogo}></img>
      <img className="hidden dark:block" src={l3harrisDarkLogo}></img>
    </div>
  )
}

export default ExperiencesSection
