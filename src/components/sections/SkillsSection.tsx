import { Heading } from '../tailwind-catalyst/heading'

function SkillsSection() {
  return (
    <div>
      <div className="flex w-full items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
        <Heading>Skills</Heading>
      </div>
      <br/>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

        <div className="relative flex flex-col space-x-3 rounded-lg border-1 text-zinc-950 dark:text-white">
          <div className="min-w-0 flex-1 m-1 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Dev Tools</h1>
            <ul className="list-disc list-inside">
              <li className="pl-4 text-l">C / C++</li>
              <li className="pl-4 text-l">Python</li>
              <li className="pl-4 text-l">MATLAB</li>
              <li className="pl-4 text-l">Java</li>
              <li className="pl-4 text-l">Verilog</li>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1 text-zinc-950 dark:text-white">
          <div className="min-w-0 flex-1 m-1 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Web Tools</h1>
            <ul className="list-disc list-inside">
              <li className="pl-4 text-l">Javascript</li>
              <li className="pl-4 text-l">PHP</li>
              <li className="pl-4 text-l">HTML / CSS</li>
              <li className="pl-4 text-l">React</li>
              <li className="pl-4 text-l">AngularJS</li>
              <li className="pl-4 text-l">Tailwind CSS</li>
              <li className="pl-4 text-l">Bootstrap</li>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1 text-zinc-950 dark:text-white">
          <div className="min-w-0 flex-1 m-1 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Workflow Tools</h1>
            <ul className="list-disc list-inside">
              <li className="pl-4 text-l">Git</li>
              <li className="pl-4 text-l">Subversion (SVN)</li>
              <li className="pl-4 text-l">Docker / Podman</li>
              <li className="pl-4 text-l">GitLab CI/CD</li>
              <li className="pl-4 text-l">Jira / Confluence</li>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1 text-zinc-950 dark:text-white">
          <div className="min-w-0 flex-1 m-1 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Design Tools</h1>
            <ul className="list-disc list-inside">
              <li className="pl-4 text-l">Xilinx Vivado</li>
              <li className="pl-4 text-l">LabVIEW</li>
              <li className="pl-4 text-l">Cadence Virtuoso</li>
              <li className="pl-4 text-l">Altium</li>
              <li className="pl-4 text-l">LaTeX</li>
              <li className="pl-4 text-l">Unity / C#</li>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1 text-zinc-950 dark:text-white">
          <div className="min-w-0 flex-1 m-1 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Database Tools</h1>
            <ul className="list-disc list-inside">
              <li className="pl-4 text-l">MongoDB</li>
              <li className="pl-4 text-l">MySQL</li>
              <li className="pl-4 text-l">SQLite</li>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col space-x-3 rounded-lg border-1 text-zinc-950 dark:text-white">
          <div className="min-w-0 flex-1 m-1 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">Hardware Tools</h1>
            <ul className="list-disc list-inside">
              <li className="pl-4 text-l">ZYBO Z7-10 FPGA</li>
              <li className="pl-4 text-l">ESP32 MCU</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SkillsSection
