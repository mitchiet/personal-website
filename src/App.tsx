import { Navbar } from './components/tailwind-catalyst/navbar'
import { Sidebar } from './components/tailwind-catalyst/sidebar'
import { SidebarLayout } from './components/tailwind-catalyst/sidebar-layout'

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
    </SidebarLayout>
  )
}

export default App
