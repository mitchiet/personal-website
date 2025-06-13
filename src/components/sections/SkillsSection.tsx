import { useState } from 'react'

import { Heading } from '../tailwind-catalyst/heading'

import ESP32Dialog from '../dialogs/ESP32Dialog'

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

function SkillsSection() {
  let [isESP32DialogOpen, setIsESP32DialogOpen] = useState(false)

  return (
    <div>
      <div className="flex w-full items-end justify-between gap-4 border-b-2 border-zinc-950/10 pb-4 dark:border-white/10">
        <Heading>Skills</Heading>
      </div>
      <br/>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Dev Tools</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
              <CPPIcon className="size-12 mx-auto my-2" />
              <CIcon className="size-12 mx-auto my-2" />
              <PythonIcon className="size-12 mx-auto my-2" />
              <MATLABIcon className="size-12 mx-auto my-2" />
              <JavaIcon className="size-12 mx-auto my-2" />
              <VerilogIcon className="size-12 mx-auto my-2" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Web Tools</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
              <JavascriptIcon className="size-12 mx-auto my-2" />
              <TypescriptIcon className="size-12 mx-auto my-2" />
              <PHPIcon className="size-12 mx-auto my-2" />
              <ReactIcon className="size-12 mx-auto my-2" />
              <AngularJSIcon className="size-12 mx-auto my-2" />
              <HTMLIcon className="size-12 mx-auto my-2" />
              <CSSIcon className="size-12 mx-auto my-2" />
              <TailwindCSSIcon className="size-12 mx-auto my-2" />
              <BootstrapIcon className="size-12 mx-auto my-2" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Workflow Tools</h1>
            <ul className="list-disc list-inside">
              <li className="pl-3 text-l">Git</li>
              <li className="pl-3 text-l">Subversion (SVN)</li>
              <li className="pl-3 text-l">Docker / Podman</li>
              <li className="pl-3 text-l">GitLab CI/CD</li>
              <li className="pl-3 text-l">Jira / Confluence</li>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Design Tools</h1>
            <ul className="list-disc list-inside">
              <li className="pl-3 text-l">Xilinx Vivado</li>
              <li className="pl-3 text-l">LabVIEW</li>
              <li className="pl-3 text-l">Cadence Virtuoso</li>
              <li className="pl-3 text-l">Altium</li>
              <li className="pl-3 text-l">LaTeX</li>
              <li className="pl-3 text-l">Unity / C#</li>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Database Tools</h1>
            <ul className="list-disc list-inside">
              <li className="pl-3 text-l">MongoDB</li>
              <li className="pl-3 text-l">MySQL</li>
              <li className="pl-3 text-l">SQLite</li>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Hardware Tools</h1>
            <ul className="list-disc list-inside">
              <li className="pl-3 text-l">ZYBO Z7 FPGA</li>
              <li className="pl-3 text-l"><button onClick={() => setIsESP32DialogOpen(true)} className="dialog-open-button">ESP32 MCU</button></li>
            </ul>
          </div>
        </div>

      </div>

      <ESP32Dialog isOpen={isESP32DialogOpen} isOpenSetter={setIsESP32DialogOpen}></ESP32Dialog>
    </div>
  )
}

export default SkillsSection
