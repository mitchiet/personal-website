import { Navbar } from './components/tailwind-catalyst/navbar'
import { Sidebar } from './components/tailwind-catalyst/sidebar'
import { SidebarLayout } from './components/tailwind-catalyst/sidebar-layout'

import SkillsSection from "./components/sections/SkillsSection"
import ExperienceSection from './components/sections/ExperiencesSection'

function App() {
  return (
    <SidebarLayout
      navbar={
        <Navbar />
      }
      sidebar={
        <Sidebar />
      }
    >
      <ExperienceSection />
      <br/><br/><br/><br/>
      <SkillsSection />
    </SidebarLayout>
  )
}

export default App
