import { Heading } from '../tailwind-catalyst/heading'

import { DocumentTextIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

import GitHubLogo from '../../assets/logos/GitHub_Logo.png';
import GitHubMarkLogo from '../../assets/logos/github-mark.png';
import GitHubDarkLogo from '../../assets/logos/GitHub_Logo_White.png';
import GitHubMarkDarkLogo from '../../assets/logos/github-mark-white.png';
import LinkedInLogo from '../../assets/logos/LI-Logo.png';

import resume from '../../assets/mitchell_taylor_resume.pdf';

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
          <div className="flex h-20">
            <img className="cursor-pointer h-full dark:bg-white p-3 rounded-xl"
                src={LinkedInLogo}
                alt="LinkedIn"
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => e.currentTarget.classList.add('loaded')}
            />
          </div>
        </a>
      </div>
      <br/><br/>
      <div className="flex justify-center">
        <a href="https://github.com/mitchiet">
          <div className="flex dark:hidden h-20">
            <img className="h-full"
                src={GitHubLogo}
                alt="GitHub" 
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => e.currentTarget.classList.add('loaded')}
            />
            <img className="h-full"
                src={GitHubMarkLogo}
                alt="GitHub Cat"
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => e.currentTarget.classList.add('loaded')}
            />
          </div>
          <div className="hidden dark:flex h-20">
            <img className="h-full"
                src={GitHubDarkLogo}
                alt="GitHub"
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => e.currentTarget.classList.add('loaded')}
            />
            <img className="h-full"
                src={GitHubMarkDarkLogo}
                alt="GitHub Cat"
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => e.currentTarget.classList.add('loaded')}
            />
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
        <a href={resume} target="_blank">
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
