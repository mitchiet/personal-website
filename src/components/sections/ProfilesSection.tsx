import { Heading } from '../tailwind-catalyst/heading'

import LinkedInLogo from '../../assets/logos/Li-Logo.png';

interface ProfilesSectionProps {
    ref?: React.Ref<HTMLDivElement>;
}

function ProfilesSection({ ref }: ProfilesSectionProps) {

  return (
    <div ref={ref}>
      <div className="flex w-full items-end justify-between gap-4 border-b-2 border-zinc-950/10 pb-4 dark:border-white/10">
        <Heading>Profiles</Heading>
      </div>
      <br/>
      <a href="https://www.linkedin.com/in/mitchell-h-taylor8">
        <img className="cursor-pointer mx-auto h-20 dark:bg-white p-2 rounded-xl" src={LinkedInLogo} alt="LinkedIn" />
      </a>
    </div>
  )
}

export default ProfilesSection
