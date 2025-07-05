import { Heading } from '../tailwind-catalyst/heading'

import { DocumentTextIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

import GitHubLogo from '../../assets/logos/GitHub_Logo.png';
import GitHubMarkLogo from '../../assets/logos/github-mark.png';
import GitHubDarkLogo from '../../assets/logos/GitHub_Logo_White.png';
import GitHubMarkDarkLogo from '../../assets/logos/github-mark-white.png';
import LinkedInLogo from '../../assets/logos/LI-Logo.png';

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
      <div className="flex justify-center">
        <a href="https://www.linkedin.com/in/mitchell-h-taylor8">
          <img className="cursor-pointer h-20 dark:bg-white p-3 rounded-xl" src={LinkedInLogo} alt="LinkedIn" />
        </a>
      </div>
      <br/><br/>
      <div className="flex justify-center">
        <a href="https://github.com/mitchiet">
          <div className="flex dark:hidden">
            <img className="h-20" src={GitHubLogo} alt="GitHub" />
            <img className="h-20" src={GitHubMarkLogo} alt="GitHub Cat" />
          </div>
          <div className="hidden dark:flex">
            <img className="h-20" src={GitHubDarkLogo} alt="GitHub" />
            <img className="h-20" src={GitHubMarkDarkLogo} alt="GitHub Cat" />
          </div>
        </a>
      </div>
      <br/><br/>
      <div className="flex justify-center">
        <a href="mailto:mitchell.h.taylor8@gmail.com">
          <div className="flex content-center items-center">
            <EnvelopeIcon className="h-20" />
            <h1 className="text-6xl" >Email</h1>
          </div>
        </a>
      </div>
       <br/><br/>
      <div className="flex justify-center">
        <a href="src/assets/mitchell_taylor_resume.pdf" target="_blank">
          <div className="flex content-center items-center">
            <DocumentTextIcon className="h-20" />
            <h1 className="text-6xl" >Résumé</h1>
          </div>
        </a>
      </div>
    </div>
  )
}

export default ProfilesSection
