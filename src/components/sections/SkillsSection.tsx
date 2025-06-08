import { Heading } from '../tailwind-catalyst/heading'
const words = ["hi", "bye", "dry"]

const skills = [
  { title: 'Dev  Tools', items: ['C / C++', 'Python', 'Docker / Podman', 'MATLAB', 'Java', 'Verilog'] },
  { title: 'Web Tools', items: ['Javascript', 'PHP', 'HTML / CSS', 'React', 'AngularJS', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Design Tools', items: ['Xilinx Vivado', 'LabVIEW', 'Cadence Virtuoso', 'Altium', 'LaTeX', 'Unity / C#'] },
  { title: 'Agile Tools', items: ['Git', 'Subversion (SVN)', 'Jira / Confluence'] },
  { title: 'Database Tools', items: ['MongoDB', 'MySQL', 'SQLite'] },
  { title: 'Hardware Tools', items: ['ZYBO Z7-10 FPGA', 'ESP32 Microcontroller'] }
]

function SkillsSection() {
  return (
    <div>
      <div className="flex w-full items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
        <Heading>Skills</Heading>
      </div>
      <br/>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {skills.map((skillCategory) => (
        <div
          key={skillCategory.title}
          className="relative flex flex-col space-x-3 rounded-lg border-1 text-zinc-950 dark:text-white"
        >
          <div className="min-w-0 flex-1 m-1 flex-wrap">
            <h1 className="text-xl mb-1 ml-2">{skillCategory.title}</h1>
            <ul className="list-disc list-inside">
              {skillCategory.items.map((skill) => (
                <li className="pl-4 text-l">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default SkillsSection
