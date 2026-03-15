import { useState } from 'react'
import ReactDOM from 'react-dom'

import { Badge } from '../tailwind-catalyst/badge'
import { Dropdown, DropdownButton, DropdownMenu } from '../tailwind-catalyst/dropdown'
import { Heading } from '../tailwind-catalyst/heading'

import AltiumDialog from '../dialogs/AltiumDialog'
import ESP32Dialog from '../dialogs/ESP32Dialog'
import JavaDialog from '../dialogs/JavaDialog'
import LaTeXDialog from '../dialogs/LaTeXDialog'
import TailwindCSSDialog from '../dialogs/TailwindCSSDialog'

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

// --- File-based SVG imports (no ?react) ---
import cppUrl from '../../assets/logos/technologies/cpp3-svgrepo-com.svg';
import cUrl from '../../assets/logos/technologies/c3-svgrepo-com.svg';
import matlabUrl from '../../assets/logos/technologies/matlab-svgrepo-com.svg';
import pythonUrl from '../../assets/logos/technologies/python-svgrepo-com.svg';
import bashUrl from '../../assets/logos/technologies/bash-icon-svgrepo-com.svg';
import javaUrl from '../../assets/logos/technologies/java-svgrepo-com.svg';
import verilogUrl from '../../assets/logos/technologies/verilog-svgrepo-com.svg';

import javascriptUrl from '../../assets/logos/technologies/javascript-svgrepo-com.svg';
import typescriptUrl from '../../assets/logos/technologies/typescript-svgrepo-com.svg';
import phpUrl from '../../assets/logos/technologies/php3-svgrepo-com.svg';
import reactUrl from '../../assets/logos/technologies/reactjs-svgrepo-com.svg';
import angularUrl from '../../assets/logos/technologies/angular-icon-logo-svgrepo-com.svg';
import htmlUrl from '../../assets/logos/technologies/html-svgrepo-com.svg';
import cssUrl from '../../assets/logos/technologies/css-svgrepo-com.svg';
import tailwindUrl from '../../assets/logos/technologies/tailwind-svgrepo-com.svg';
import bootstrapUrl from '../../assets/logos/technologies/bootstrap-svgrepo-com.svg';

import gitUrl from '../../assets/logos/technologies/git-svgrepo-com.svg';
import svnUrl from '../../assets/logos/technologies/subversion-svgrepo-com.svg';
import dockerUrl from '../../assets/logos/technologies/docker-svgrepo-com.svg';
import podmanUrl from '../../assets/logos/technologies/podmanio-icon.svg';
import gitlabUrl from '../../assets/logos/technologies/gitlab-svgrepo-com.svg';
import githubUrl from '../../assets/logos/technologies/github-svgrepo-com.svg';
import githubDarkUrl from '../../assets/logos/technologies/github-svgrepo-com-dark.svg';

import jiraUrl from '../../assets/logos/technologies/jira-svgrepo-com.svg';
import confluenceUrl from '../../assets/logos/technologies/confluence-svgrepo-com.svg';

import xilinxUrl from '../../assets/logos/technologies/xilinx.svg';
import labviewUrl from '../../assets/logos/technologies/labview-svgrepo-com.svg';
import labviewDarkUrl from '../../assets/logos/technologies/labview-svgrepo-com-dark.svg';
import cadenceUrl from '../../assets/logos/technologies/cadence.svg';
import cadenceDarkUrl from '../../assets/logos/technologies/cadence-dark.svg';
import altiumUrl from '../../assets/logos/technologies/altium.svg';
import altiumDarkUrl from '../../assets/logos/technologies/altium-dark.svg';
import latexUrl from '../../assets/logos/technologies/latex.svg';
import unityUrl from '../../assets/logos/technologies/unity-svgrepo-com.svg';
import unityDarkUrl from '../../assets/logos/technologies/unity-svgrepo-com-dark.svg';

import mongodbUrl from '../../assets/logos/technologies/mongodb-svgrepo-com.svg';
import mysqlUrl from '../../assets/logos/technologies/mysql-official.svg';
import sqliteUrl from '../../assets/logos/technologies/sqlite-svgrepo-com.svg';

import redhatUrl from '../../assets/logos/technologies/redhat-svgrepo-com.svg';
import rockyUrl from '../../assets/logos/technologies/rocky.svg';
import centosUrl from '../../assets/logos/technologies/centos-icon-svgrepo-com.svg';
import windowsUrl from '../../assets/logos/technologies/windows.svg';
import appleUrl from '../../assets/logos/technologies/apple-173-svgrepo-com.svg';
import appleDarkUrl from '../../assets/logos/technologies/apple-173-svgrepo-com-dark.svg';
import digilentUrl from '../../assets/logos/technologies/digilent.svg';
import espressifUrl from '../../assets/logos/technologies/espressif-svgrepo-com.svg';

interface TechnologiesSectionProps {
  ref?: React.Ref<HTMLDivElement>;
}

function TechnologiesSection({ ref }: TechnologiesSectionProps) {
  let [isAltiumDialogOpen, setIsAltiumDialogOpen] = useState(false)
  let [isESP32DialogOpen, setIsESP32DialogOpen] = useState(false)
  let [isJavaDialogOpen, setIsJavaDialogOpen] = useState(false)
  let [isLaTeXDialogOpen, setIsLaTeXDialogOpen] = useState(false)
  let [isTailwindCSSDialogOpen, setIsTailwindCSSDialogOpen] = useState(false)

  return (
    <div ref={ref}>
      <div className="flex w-full items-end justify-between gap-4 border-b-2 border-zinc-950/10 pb-4 dark:border-white/10">
        <Heading>Technologies</Heading>
      </div>
      <br/>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

        {/* Development */}
        <div className="relative flex flex-col space-x-3 rounded-lg border-1 shadow-lg shadow-rose-500">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Development</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <div className="tech-icon-container"><img src={cppUrl} alt="C++" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={cUrl} alt="C" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={pythonUrl} alt="Python" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={bashUrl} alt="Bash" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={matlabUrl} alt="MATLAB" className="tech-icon" /></div>
              <div className="tech-icon-container">
                <button onClick={() => setIsJavaDialogOpen(true)} className="tech-more-info rose-shadow">
                  <img src={javaUrl} alt="Java" className="tech-icon" />
                </button>
              </div>
              <div className="tech-icon-container"><img src={verilogUrl} alt="Verilog" className="tech-icon" /></div>
            </div>
          </div>
          <Dropdown>
            {({ open: outerOpen }) => (
              <div className="relative w-full flex">
                <DropdownButton className="tech-button rose-bg cursor-pointer m-2 flex-1">
                  More
                  {outerOpen ? (<ChevronUpIcon className="fill-white"/>) : (<ChevronDownIcon className="fill-white"/>)}
                </DropdownButton>
                <DropdownMenu modal={false} className="popover" anchor="bottom">
                  <div className="flex flex-wrap gap-2 m-2 w-50 xl:w-70">
                    <Badge color="rose">C++</Badge>
                    <Badge color="rose">C</Badge>
                    <Badge color="rose">Python</Badge>
                    <Badge color="rose">Bash</Badge>
                    <Badge color="rose">MATLAB</Badge>
                    <Badge color="rose">Java</Badge>
                    <Badge color="rose">Verilog</Badge>
                  </div>
                </DropdownMenu>
              </div>
            )}
          </Dropdown>
        </div>

        {/* Web */}
        <div className="relative flex flex-col space-x-3 rounded-lg border-1 shadow-lg shadow-purple-500">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Web</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <div className="tech-icon-container"><img src={javascriptUrl} alt="JavaScript" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={typescriptUrl} alt="TypeScript" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={phpUrl} alt="PHP" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={reactUrl} alt="React" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={angularUrl} alt="AngularJS" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={htmlUrl} alt="HTML" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={cssUrl} alt="CSS" className="tech-icon" /></div>
              <div className="tech-icon-container">
                <button onClick={() => setIsTailwindCSSDialogOpen(true)} className="tech-more-info purple-shadow">
                  <img src={tailwindUrl} alt="Tailwind CSS" className="tech-icon" />
                </button>
              </div>
              <div className="tech-icon-container"><img src={bootstrapUrl} alt="Bootstrap" className="tech-icon" /></div>
            </div>
          </div>
          <Dropdown>
            {({ open: outerOpen }) => (
              <div className="relative w-full flex">
                <DropdownButton className="tech-button purple-bg cursor-pointer m-2 flex-1">
                  More
                  {outerOpen ? (<ChevronUpIcon className="fill-white"/>) : (<ChevronDownIcon className="fill-white"/>)}
                </DropdownButton>
                <DropdownMenu modal={false} className="popover" anchor="bottom">
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
              </div>
            )}
          </Dropdown>
        </div>

        {/* Workflow */}
        <div className="relative flex flex-col space-x-3 rounded-lg border-1 shadow-lg shadow-sky-500">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Workflow</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <div className="tech-icon-container"><img src={gitUrl} alt="Git" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={svnUrl} alt="SVN" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={dockerUrl} alt="Docker" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={podmanUrl} alt="Podman" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={gitlabUrl} alt="GitLab" className="tech-icon" /></div>
              <div className="tech-icon-container">
                <img src={githubUrl} alt="GitHub" className="tech-icon dark:hidden" />
                <img src={githubDarkUrl} alt="GitHub Dark" className="tech-icon hidden dark:block" />
              </div>
              <div className="tech-icon-container"><img src={jiraUrl} alt="Jira" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={confluenceUrl} alt="Confluence" className="tech-icon" /></div>
            </div>
          </div>
          <Dropdown>
            {({ open: outerOpen }) => (
              <div className="relative w-full flex">
                <DropdownButton className="tech-button sky-bg cursor-pointer m-2 flex-1">
                  More
                  {outerOpen ? (<ChevronUpIcon className="fill-white"/>) : (<ChevronDownIcon className="fill-white"/>)}
                </DropdownButton>
                <DropdownMenu modal={false} className="popover" anchor="bottom">
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
              </div>
            )}
          </Dropdown>
        </div>

        {/* Design */}
        <div className="relative flex flex-col space-x-3 rounded-lg border-1 shadow-lg shadow-orange-500">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Design</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <div className="tech-icon-container"><img src={xilinxUrl} alt="Xilinx" className="tech-icon" /></div>
              <div className="tech-icon-container">
                <img src={labviewUrl} alt="LabVIEW" className="tech-icon dark:hidden" />
                <img src={labviewDarkUrl} alt="LabVIEW Dark" className="tech-icon hidden dark:block" />
              </div>
              <div className="tech-icon-container">
                <img src={cadenceUrl} alt="Cadence" className="tech-icon dark:hidden" />
                <img src={cadenceDarkUrl} alt="Cadence Dark" className="tech-icon hidden dark:block" />
              </div>
              <div className="tech-icon-container">
                <button onClick={() => setIsAltiumDialogOpen(true)} className="tech-more-info orange-shadow">
                  <img src={altiumUrl} alt="Altium" className="tech-icon dark:hidden" />
                  <img src={altiumDarkUrl} alt="Altium Dark" className="tech-icon hidden dark:block" />
                </button>
              </div>
              <div className="tech-icon-container">
                <button onClick={() => setIsLaTeXDialogOpen(true)} className="tech-more-info orange-shadow">
                  <img src={latexUrl} alt="LaTeX" className="tech-icon" />
                </button>
              </div>
              <div className="tech-icon-container">
                <img src={unityUrl} alt="Unity" className="tech-icon dark:hidden" />
                <img src={unityDarkUrl} alt="Unity Dark" className="tech-icon hidden dark:block" />
              </div>
            </div>
          </div>
          <Dropdown>
            {({ open: outerOpen }) => (
              <div className="relative w-full flex">
                <DropdownButton className="tech-button orange-bg cursor-pointer m-2 flex-1">
                  More
                  {outerOpen ? (<ChevronUpIcon className="fill-white"/>) : (<ChevronDownIcon className="fill-white"/>)}
                </DropdownButton>
                <DropdownMenu modal={false} className="popover" anchor="bottom">
                  <div className="flex flex-wrap gap-2 m-2 w-50 xl:w-70">
                    <Badge color="orange">Xilinx Vivado</Badge>
                    <Badge color="orange">LabVIEW</Badge>
                    <Badge color="orange">Cadence Virtuoso</Badge>
                    <Badge color="orange">Altium</Badge>
                    <Badge color="orange">LaTeX</Badge>
                    <Badge color="orange">Unity</Badge>
                  </div>
                </DropdownMenu>
              </div>
            )}
          </Dropdown>
        </div>

        {/* Database */}
        <div className="relative flex flex-col space-x-3 rounded-lg border-1 shadow-lg shadow-green-600">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Database</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <div className="tech-icon-container"><img src={mongodbUrl} alt="MongoDB" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={mysqlUrl} alt="MySQL" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={sqliteUrl} alt="SQLite" className="tech-icon" /></div>
            </div>
          </div>
          <Dropdown>
            {({ open: outerOpen }) => (
              <div className="relative w-full flex">
                <DropdownButton className="tech-button green-bg cursor-pointer m-2 flex-1">
                  More
                  {outerOpen ? (<ChevronUpIcon className="fill-white"/>) : (<ChevronDownIcon className="fill-white"/>)}
                </DropdownButton>
                <DropdownMenu modal={false} className="popover" anchor="bottom">
                  <div className="flex flex-wrap gap-2 m-2 w-50 xl:w-70">
                    <Badge color="green">MongoDB</Badge>
                    <Badge color="green">MySQL</Badge>
                    <Badge color="green">SQLite</Badge>
                  </div>
                </DropdownMenu>
              </div>
            )}
          </Dropdown>
        </div>

        {/* Arch / OS */}
        <div className="relative flex flex-col space-x-3 rounded-lg border-1 shadow-lg shadow-pink-500">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Arch / OS</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <div className="tech-icon-container"><img src={redhatUrl} alt="Red Hat" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={rockyUrl} alt="Rocky Linux" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={centosUrl} alt="CentOS" className="tech-icon" /></div>
              <div className="tech-icon-container"><img src={windowsUrl} alt="Windows" className="tech-icon" /></div>
              <div className="tech-icon-container">
                <img src={appleUrl} alt="Apple" className="tech-icon dark:hidden" />
                <img src={appleDarkUrl} alt="Apple Dark" className="tech-icon hidden dark:block" />
              </div>
              <div className="tech-icon-container"><img src={digilentUrl} alt="Digilent" className="tech-icon" /></div>
              <div className="tech-icon-container">
                <button onClick={() => setIsESP32DialogOpen(true)} className="tech-more-info pink-shadow">
                  <img src={espressifUrl} alt="Espressif" className="tech-icon" />
                </button>
              </div>
            </div>
          </div>
          <Dropdown>
            {({ open: outerOpen }) => (
              <div className="relative w-full flex">
                <DropdownButton className="tech-button pink-bg cursor-pointer m-2 flex-1">
                  More
                  {outerOpen ? (<ChevronUpIcon className="fill-white"/>) : (<ChevronDownIcon className="fill-white"/>)}
                </DropdownButton>
                <DropdownMenu modal={false} className="popover" anchor="bottom">
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
              </div>
            )}
          </Dropdown>
        </div>

      </div>

      {ReactDOM.createPortal(
        <div>
          <AltiumDialog
            className="absolute modal flex flex-col rounded-3xl inset-x-0 mx-auto top-26 max-h-[80vh] min-h-50 max-w-5/6 sm:max-w-lg"
            isOpen={isAltiumDialogOpen}
            isOpenSetter={setIsAltiumDialogOpen}
            isESP32DialogOpenSetter={setIsESP32DialogOpen}
          />
          <ESP32Dialog
            className="absolute modal flex flex-col rounded-3xl inset-x-0 mx-auto top-26 max-h-[80vh] min-h-50 max-w-5/6 sm:max-w-lg"
            isOpen={isESP32DialogOpen}
            isOpenSetter={setIsESP32DialogOpen}
          />
          <JavaDialog
            className="absolute modal flex flex-col rounded-3xl inset-x-0 mx-auto top-26 max-h-[80vh] min-h-50 max-w-5/6 sm:max-w-lg"
            isOpen={isJavaDialogOpen}
            isOpenSetter={setIsJavaDialogOpen}
          />
          <LaTeXDialog
            className="absolute modal flex flex-col rounded-3xl inset-x-0 mx-auto top-26 max-h-[80vh] min-h-50 max-w-5/6 sm:max-w-lg"
            isOpen={isLaTeXDialogOpen}
            isOpenSetter={setIsLaTeXDialogOpen}
          />
          <TailwindCSSDialog
            className="absolute modal flex flex-col rounded-3xl inset-x-0 mx-auto top-26 max-h-[80vh] min-h-50 max-w-5/6 sm:max-w-lg"
            isOpen={isTailwindCSSDialogOpen}
            isOpenSetter={setIsTailwindCSSDialogOpen}
          />
        </div>,
        document.body
      )}
    </div>
  )
}

export default TechnologiesSection
