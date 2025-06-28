import { useState } from 'react'

import { Badge } from '../tailwind-catalyst/badge'
import { Dropdown, DropdownButton, DropdownMenu } from '../tailwind-catalyst/dropdown'
import { Heading } from '../tailwind-catalyst/heading'

import ESP32Dialog from '../dialogs/ESP32Dialog'

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

import CPPIcon from '../../assets/logos/technologies/cpp3-svgrepo-com.svg?react';
import CIcon from '../../assets/logos/technologies/c3-svgrepo-com.svg?react';
import MATLABIcon from '../../assets/logos/technologies/matlab-svgrepo-com.svg?react';
import PythonIcon from '../../assets/logos/technologies/python-svgrepo-com.svg?react';
import JavaIcon from '../../assets/logos/technologies/java-svgrepo-com.svg?react';
import VerilogIcon from '../../assets/logos/technologies/verilog-svgrepo-com.svg?react';

import JavascriptIcon from '../../assets/logos/technologies/javascript-svgrepo-com.svg?react';
import TypescriptIcon from '../../assets/logos/technologies/typescript-svgrepo-com.svg?react';
import PHPIcon from '../../assets/logos/technologies/php3-svgrepo-com.svg?react';
import ReactIcon from '../../assets/logos/technologies/reactjs-svgrepo-com.svg?react';
import AngularJSIcon from '../../assets/logos/technologies/angular-icon-logo-svgrepo-com.svg?react';
import HTMLIcon from '../../assets/logos/technologies/html-svgrepo-com.svg?react';
import CSSIcon from '../../assets/logos/technologies/css-svgrepo-com.svg?react';
import TailwindCSSIcon from '../../assets/logos/technologies/tailwind-svgrepo-com.svg?react';
import BootstrapIcon from '../../assets/logos/technologies/bootstrap-svgrepo-com.svg?react';

import GitIcon from '../../assets/logos/technologies/git-svgrepo-com.svg?react';
import SVNIcon from '../../assets/logos/technologies/subversion-svgrepo-com.svg?react';
import DockerIcon from '../../assets/logos/technologies/docker-svgrepo-com.svg?react';
import PodmanIcon from '../../assets/logos/technologies/podmanio-icon.svg?react';
import GitLabIcon from '../../assets/logos/technologies/gitlab-svgrepo-com.svg?react';
import GitHubIcon from '../../assets/logos/technologies/github-svgrepo-com.svg?react';

import JiraIcon from '../../assets/logos/technologies/jira-svgrepo-com.svg?react';
import ConfluenceIcon from '../../assets/logos/technologies/confluence-svgrepo-com.svg?react';

import XilinxIcon from '../../assets/logos/technologies/xilinx.svg?react';
import LabVIEWIcon from '../../assets/logos/technologies/labview-svgrepo-com.svg?react';
import CadenceIcon from '../../assets/logos/technologies/cadence.svg?react';
import CadenceDarkIcon from '../../assets/logos/technologies/cadence-dark.svg?react';
import AltiumIcon from '../../assets/logos/technologies/altium.svg?react';
import LatexIcon from '../../assets/logos/technologies/latex.svg?react';
import UnityIcon from '../../assets/logos/technologies/unity-svgrepo-com.svg?react';

import MongoDBIcon from '../../assets/logos/technologies/mongodb-svgrepo-com.svg?react';
import MySQLIcon from '../../assets/logos/technologies/mysql-official.svg?react';
import SQLiteIcon from '../../assets/logos/technologies/sqlite-svgrepo-com.svg?react';

import RedhatIcon from '../../assets/logos/technologies/redhat-svgrepo-com.svg?react';
import RockyIcon from '../../assets/logos/technologies/rocky.svg?react';
import CentosIcon from '../../assets/logos/technologies/centos-icon-svgrepo-com.svg?react';
import WindowsIcon from '../../assets/logos/technologies/windows.svg?react';
import AppleIcon from '../../assets/logos/technologies/apple-173-svgrepo-com.svg?react';
import DigilentIcon from '../../assets/logos/technologies/digilent.svg?react';
import EspressifIcon from '../../assets/logos/technologies/espressif-svgrepo-com.svg?react';

interface TechnologiesSectionProps {
    ref?: React.Ref<HTMLDivElement>;
}

function TechnologiesSection({ ref }: TechnologiesSectionProps) {
  let [isESP32DialogOpen, setIsESP32DialogOpen] = useState(false)

  const [isDevelopmentDropdownVisible, setIsDevelopmentDropdownVisible] = useState(false);
  const [isWebDropdownVisible, setIsWebDropdownVisible] = useState(false);
  const [isWorkflowDropdownVisible, setIsWorkflowDropdownVisible] = useState(false);
  const [isDesignDropdownVisible, setIsDesignDropdownVisible] = useState(false);
  const [isDatabaseDropdownVisible, setIsDatabaseDropdownVisible] = useState(false);
  const [isArchOSDropdownVisible, setIsArchOSDropdownVisible] = useState(false);

  return (
    <div ref={ref}>
      <div className="flex w-full items-end justify-between gap-4 border-b-2 border-zinc-950/10 pb-4 dark:border-white/10">
        <Heading>Technologies</Heading>
      </div>
      <br/>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Development</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <div className="tech-icon-container"><CPPIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><CIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><PythonIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><MATLABIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><JavaIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><VerilogIcon className="tech-icon" /></div>
            </div>
          </div>
          <div className="relative w-full flex">
            <Dropdown>
              <DropdownButton
                  onClick={() => setIsDevelopmentDropdownVisible(!isDevelopmentDropdownVisible)}
                  color="rose" className="cursor-pointer m-2 flex-1">
                More
                {!isDevelopmentDropdownVisible && <ChevronDownIcon />}
                {isDevelopmentDropdownVisible && <ChevronUpIcon />}
              </DropdownButton>
              <DropdownMenu modal={false} anchor="bottom">
                <div className="flex flex-wrap gap-2 m-2 w-50 xl:w-70">
                  <Badge color="rose">C++</Badge>
                  <Badge color="rose">C</Badge>
                  <Badge color="rose">Python</Badge>
                  <Badge color="rose">MATLAB</Badge>
                  <Badge color="rose">Java</Badge>
                  <Badge color="rose">Verilog</Badge>
                </div>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Web</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <div className="tech-icon-container"><JavascriptIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><TypescriptIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><PHPIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><ReactIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><AngularJSIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><HTMLIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><CSSIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><TailwindCSSIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><BootstrapIcon className="tech-icon" /></div>
            </div>
          </div>
          <div className="relative w-full flex">
            <Dropdown>
              <DropdownButton
                  onClick={() => setIsWebDropdownVisible(!isWebDropdownVisible)}
                  color="green" className="cursor-pointer m-2 flex-1">
                More
                {!isWebDropdownVisible && <ChevronDownIcon />}
                {isWebDropdownVisible && <ChevronUpIcon />}
              </DropdownButton>
              <DropdownMenu modal={false} anchor="bottom">
                <div className="flex flex-wrap gap-2 m-2 w-50 xl:w-70">
                  <Badge color="purple">Javascript</Badge>
                  <Badge color="purple">Typescript</Badge>
                  <Badge color="purple">PHP</Badge>
                  <Badge color="purple">React</Badge>
                  <Badge color="purple">AngularJS</Badge>
                  <Badge color="purple">HTML</Badge>
                  <Badge color="purple">CSS</Badge>
                  <Badge color="purple">Tailwind CSS</Badge>
                  <Badge color="purple">Bootstrap</Badge>
                </div>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Workflow</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <div className="tech-icon-container"><GitIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><SVNIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><DockerIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><PodmanIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><GitLabIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><GitHubIcon className="tech-icon dark:fill-white" /></div>
              <div className="tech-icon-container"><JiraIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><ConfluenceIcon className="tech-icon" /></div>
            </div>
          </div>
          <div className="relative w-full flex">
            <Dropdown>
              <DropdownButton
                  onClick={() => setIsWorkflowDropdownVisible(!isWorkflowDropdownVisible)}
                  color="sky" className="cursor-pointer m-2 flex-1">
                More
                {!isWorkflowDropdownVisible && <ChevronDownIcon />}
                {isWorkflowDropdownVisible && <ChevronUpIcon />}
              </DropdownButton>
              <DropdownMenu modal={false} anchor="bottom">
                <div className="flex flex-wrap gap-2 m-2 w-50 xl:w-70">
                  <Badge color="sky">Git</Badge>
                  <Badge color="sky">Subversion (SVN)</Badge>
                  <Badge color="sky">Docker</Badge>
                  <Badge color="sky">Podman</Badge>
                  <Badge color="sky">GitLab</Badge>
                  <Badge color="sky">GitHub</Badge>
                  <Badge color="sky">Jira</Badge>
                  <Badge color="sky">Confluence</Badge>
                </div>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Design</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <div className="tech-icon-container"><XilinxIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><LabVIEWIcon className="tech-icon dark:fill-white" /></div>
              <div className="tech-icon-container">
                <CadenceIcon className="tech-icon dark:hidden" />
                <CadenceDarkIcon className="tech-icon hidden dark:block" />
              </div>
              <div className="tech-icon-container"><AltiumIcon className="tech-icon invert dark:filter-none" /></div>
              <div className="tech-icon-container"><LatexIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><UnityIcon className="tech-icon dark:fill-white" /></div>
            </div>
          </div>
          <div className="relative w-full flex">
            <Dropdown>
              <DropdownButton
                  onClick={() => setIsDesignDropdownVisible(!isDesignDropdownVisible)}
                  color="orange" className="cursor-pointer m-2 flex-1">
                More
                {!isDesignDropdownVisible && <ChevronDownIcon />}
                {isDesignDropdownVisible && <ChevronUpIcon />}
              </DropdownButton>
              <DropdownMenu modal={false} anchor="bottom">
                <div className="flex flex-wrap gap-2 m-2 w-50 xl:w-70">
                  <Badge color="orange">Xilinx Vivado</Badge>
                  <Badge color="orange">LabVIEW</Badge>
                  <Badge color="orange">Cadence Virtuoso</Badge>
                  <Badge color="orange">Altium</Badge>
                  <Badge color="orange">LaTeX</Badge>
                  <Badge color="orange">Unity</Badge>
                </div>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Database</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
               <div className="tech-icon-container"><MongoDBIcon className="tech-icon" /></div>
               <div className="tech-icon-container"><MySQLIcon className="tech-icon" /></div>
               <div className="tech-icon-container"><SQLiteIcon className="tech-icon" /></div>
            </div>
          </div>
          <div className="relative w-full flex">
            <Dropdown>
              <DropdownButton
                  onClick={() => setIsDatabaseDropdownVisible(!isDatabaseDropdownVisible)}
                  color="green" className="cursor-pointer m-2 flex-1">
                More
                {!isDatabaseDropdownVisible && <ChevronDownIcon />}
                {isDatabaseDropdownVisible && <ChevronUpIcon />}
              </DropdownButton>
              <DropdownMenu modal={false} anchor="bottom">
                <div className="flex flex-wrap gap-2 m-2 w-50 xl:w-70">
                  <Badge color="green">MongoDB</Badge>
                  <Badge color="green">MySQL</Badge>
                  <Badge color="green">SQLite</Badge>
                </div>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Arch / OS</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <div className="tech-icon-container"><RedhatIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><RockyIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><CentosIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><WindowsIcon className="tech-icon" /></div>
              <div className="tech-icon-container"><AppleIcon className="tech-icon dark:invert" /></div>
              <div className="tech-icon-container"><DigilentIcon className="tech-icon" /></div>
              <div className="tech-icon-container">
                <button onClick={() => setIsESP32DialogOpen(true)} className="tech-more-info">
                  <EspressifIcon className="tech-icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-full flex">
            <Dropdown>
              <DropdownButton
                  onClick={() => setIsArchOSDropdownVisible(!isArchOSDropdownVisible)}
                  color="pink" className="cursor-pointer m-2 flex-1">
                More
                {!isArchOSDropdownVisible && <ChevronDownIcon />}
                {isArchOSDropdownVisible && <ChevronUpIcon />}
              </DropdownButton>
              <DropdownMenu modal={false} anchor="bottom">
                <div className="flex flex-wrap gap-2 m-2 w-50 xl:w-70">
                  <Badge color="pink">Red Hat Enterprise Linux</Badge>
                  <Badge color="pink">Rocky Linux</Badge>
                  <Badge color="pink">CentOS</Badge>
                  <Badge color="pink">Windows</Badge>
                  <Badge color="pink">MacOS</Badge>
                  <Badge color="pink">Digilent Z7 FPGA</Badge>
                  <Badge color="pink">EspressIf ESP32 MCU</Badge>
                </div>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>

      </div>

      <ESP32Dialog className="absolute flex flex-col rounded-3xl inset-x-0 mx-auto bottom-16 top-26 min-h-50 max-w-5/6 sm:max-w-lg" isOpen={isESP32DialogOpen} isOpenSetter={setIsESP32DialogOpen} />
    </div>
  )
}

export default TechnologiesSection
