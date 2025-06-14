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

import GitIcon from '../../assets/logos/technologies/git-svgrepo-com.svg?react';
import SVNIcon from '../../assets/logos/technologies/subversion-svgrepo-com.svg?react';
import DockerIcon from '../../assets/logos/technologies/docker-svgrepo-com.svg?react';
import PodmanIcon from '../../assets/logos/technologies/podmanio-icon.svg?react';
import GitlabIcon from '../../assets/logos/technologies/gitlab-svgrepo-com.svg?react';
import GithubIcon from '../../assets/logos/technologies/github-svgrepo-com.svg?react';

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
import MySQLIcon from '../../assets/logos/technologies/oracle-mysql.svg?react';
import SQLiteIcon from '../../assets/logos/technologies/sqlite-svgrepo-com.svg?react';

import DigilentIcon from '../../assets/logos/technologies/digilent.svg?react';
import EspressifIcon from '../../assets/logos/technologies/espressif-svgrepo-com.svg?react';

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
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
              <GitIcon className="size-12 mx-auto my-2" />
              <SVNIcon className="size-12 mx-auto my-2" />
              <DockerIcon className="size-12 mx-auto my-2" />
              <PodmanIcon className="size-12 mx-auto my-2" />
              <GitlabIcon className="size-12 mx-auto my-2" />
              <GithubIcon className="size-12 mx-auto my-2 dark:fill-white" />
              <JiraIcon className="size-12 mx-auto my-2" />
              <ConfluenceIcon className="size-12 mx-auto my-2" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Design Tools</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
              <XilinxIcon className="size-12 mx-auto my-2" />
              <LabVIEWIcon className="size-12 mx-auto my-2 dark:fill-white" />
              <CadenceIcon className="size-12 mx-auto my-2 dark:hidden" />
              <CadenceDarkIcon className="size-12 mx-auto my-2 hidden dark:block" />
              <AltiumIcon className="size-12 mx-auto my-2 invert dark:filter-none" />
              <LatexIcon className="size-12 mx-auto my-2" />
              <UnityIcon className="size-12 mx-auto my-2 dark:fill-white" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Database Tools</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
              <MongoDBIcon className="size-12 mx-auto my-2" />
              <MySQLIcon className="size-12 mx-auto my-2" />
              <SQLiteIcon className="size-12 mx-auto my-2" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Hardware Tools</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
              <DigilentIcon className="size-12 mx-auto my-2" />
              <button onClick={() => setIsESP32DialogOpen(true)} className="dialog-open-button">
                <EspressifIcon className="size-12 mx-auto my-2" />
              </button>
            </div>
          </div>
        </div>

      </div>

      <ESP32Dialog className="mt-16" isOpen={isESP32DialogOpen} isOpenSetter={setIsESP32DialogOpen}></ESP32Dialog>
    </div>
  )
}

export default SkillsSection
