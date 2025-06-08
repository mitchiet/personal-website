import { Navbar } from './components/tailwind-catalyst/navbar'
import { Sidebar } from './components/tailwind-catalyst/sidebar'
import { SidebarLayout } from './components/tailwind-catalyst/sidebar-layout'

import SkillsSection from "./components/sections/SkillsSection"

function App() {
  return (
    <SidebarLayout
      navbar={
        <Navbar>
        </Navbar>
      }
      sidebar={
        <Sidebar>
        </Sidebar>
      }
    >
      <SkillsSection></SkillsSection>
    </SidebarLayout>
  )
}

export default App
