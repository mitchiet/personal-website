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

import RedhatIcon from '../../assets/logos/technologies/redhat-svgrepo-com.svg?react';
import RockyIcon from '../../assets/logos/technologies/rocky.svg?react';
import CentosIcon from '../../assets/logos/technologies/centos-icon-svgrepo-com.svg?react';
import WindowsIcon from '../../assets/logos/technologies/windows.svg?react';
import AppleIcon from '../../assets/logos/technologies/apple-173-svgrepo-com.svg?react';
import DigilentIcon from '../../assets/logos/technologies/digilent.svg?react';
import EspressifIcon from '../../assets/logos/technologies/espressif-svgrepo-com.svg?react';

function SkillsSection() {
  let [isESP32DialogOpen, setIsESP32DialogOpen] = useState(false)

  return (
    <div>
      <div className="flex w-full items-end justify-between gap-4 border-b-2 border-zinc-950/10 pb-4 dark:border-white/10">
        <Heading>Technologies</Heading>
      </div>
      <br/>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Development</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <CPPIcon className="tech-icon" />
              <CIcon className="tech-icon" />
              <PythonIcon className="tech-icon" />
              <MATLABIcon className="tech-icon" />
              <JavaIcon className="tech-icon" />
              <VerilogIcon className="tech-icon" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Web</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <JavascriptIcon className="tech-icon" />
              <TypescriptIcon className="tech-icon" />
              <PHPIcon className="tech-icon" />
              <ReactIcon className="tech-icon" />
              <AngularJSIcon className="tech-icon" />
              <HTMLIcon className="tech-icon" />
              <CSSIcon className="tech-icon" />
              <TailwindCSSIcon className="tech-icon" />
              <BootstrapIcon className="tech-icon" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Workflow</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <GitIcon className="tech-icon" />
              <SVNIcon className="tech-icon" />
              <DockerIcon className="tech-icon" />
              <PodmanIcon className="tech-icon" />
              <GitlabIcon className="tech-icon" />
              <GithubIcon className="tech-icon dark:fill-white" />
              <JiraIcon className="tech-icon" />
              <ConfluenceIcon className="tech-icon" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Design</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <XilinxIcon className="tech-icon" />
              <LabVIEWIcon className="tech-icon dark:fill-white" />
              <CadenceIcon className="tech-icon dark:hidden" />
              <CadenceDarkIcon className="tech-icon hidden dark:block" />
              <AltiumIcon className="tech-icon invert dark:filter-none" />
              <LatexIcon className="tech-icon" />
              <UnityIcon className="tech-icon dark:fill-white" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Database</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <MongoDBIcon className="tech-icon" />
              <MySQLIcon className="tech-icon" />
              <SQLiteIcon className="tech-icon" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1">
          <div className="min-w-0 flex-1 mx-1 my-2 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Arch / OS</h1>
            <div className="grid grid-cols-3 xl:grid-cols-4">
              <RedhatIcon className="tech-icon" />
              <RockyIcon className="tech-icon" />
              <CentosIcon className="tech-icon" />
              <WindowsIcon className="tech-icon" />
              <AppleIcon className="tech-icon dark:invert" />
              <DigilentIcon className="tech-icon" />
              <button onClick={() => setIsESP32DialogOpen(true)} className="dialog-open-button">
                <EspressifIcon className="tech-icon" />
              </button>
            </div>
          </div>
        </div>

      </div>

      <ESP32Dialog className="fixed inset-x-0 mx-auto top-24" isOpen={isESP32DialogOpen} isOpenSetter={setIsESP32DialogOpen}></ESP32Dialog>
    </div>
  )
}

export default SkillsSection
