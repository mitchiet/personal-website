import { useLayoutEffect, useRef, useState } from 'react'

import { Button } from './components/tailwind-catalyst/button'
import { Label } from './components/tailwind-catalyst/fieldset'
import { Navbar, NavbarItem, NavbarSpacer } from './components/tailwind-catalyst/navbar'
import { Sidebar } from './components/tailwind-catalyst/sidebar'
import { Switch } from './components/tailwind-catalyst/switch'
import * as Headless from '@headlessui/react'

import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { BriefcaseIcon } from '@heroicons/react/24/solid'
import { CpuChipIcon } from '@heroicons/react/24/solid'

import TechnologiesSection from "./components/sections/TechnologiesSection"
import EmploymentSection from './components/sections/EmploymentSection'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const employmentSectionRef = useRef<HTMLDivElement | null>(null)
  const technologiesSectionRef = useRef<HTMLDivElement | null>(null)

  const scrollToElementRef = (elementRef:React.RefObject<HTMLElement | null>) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useLayoutEffect(() => {

    // Apply dark mode if preferred initially, but don't store until the switch has been clicked
    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
    if (("theme" in localStorage && localStorage.theme === "dark") ||
        (!("theme" in localStorage) && darkModePreference.matches)) {
        document.documentElement.classList.add('dark');
        setDarkMode(true);
    }

    const applyTheme = (e:MediaQueryListEvent) => {
      if (e.matches) {
        // Dark mode
        document.documentElement.classList.add('dark');
        localStorage.theme = "dark";
        setDarkMode(true);
      } else {
        // Light mode
        document.documentElement.classList.remove('dark');
        localStorage.theme = "light";
        setDarkMode(false);
      }
    }

    // Listen for changes
    darkModePreference.addEventListener("change", applyTheme);
  }, []);

  const toggleDarkMode = () => {
    if (document.documentElement.classList.toggle("dark")) {
      localStorage.theme = "dark";
      setDarkMode(true);
    }
    else {
      localStorage.theme = "light";
      setDarkMode(false);
    }
  }

  let [showSidebar, setShowSidebar] = useState(false)

  return (
    <div>

      {/* Navbar section */}
      <Navbar id="main-nav" className="fixed top-0 left-0 right-0 z-100 opacity-100 border-double border-b-4">
        <Button plain className="lg:hidden ml-3" onClick={() => setShowSidebar(true)}>
          <Bars3Icon />
        </Button>
        <NavbarSpacer />
        <Headless.Field className="flex float-end items-center gap-2 mr-3 p-3">
          <Label className="dark:opacity-50">Light</Label>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <Label className="opacity-50 dark:opacity-100">Dark</Label>
        </Headless.Field>
      </Navbar>

      <div className="p-6 lg:p-10 flex max-lg:flex-col relative isolate min-h-svh w-full">

        {/* Desktop Sidebar */}
        <div className="fixed mt-14 inset-y-0 left-0 w-64 max-lg:hidden z-50 border-r-2 border-zinc-950/10 dark:border-white/10 lg:bg-zinc-100 dark:lg:bg-zinc-950">
          <Sidebar>
            <div className="p-4 mt-4">
              <Button plain className="w-full justify-end !text-2xl" onClick={() => scrollToElementRef(employmentSectionRef)}>
                Employment
                <BriefcaseIcon />
              </Button>
              <Button plain className="w-full justify-end !text-2xl" onClick={() => scrollToElementRef(technologiesSectionRef)}>
                Technologies
                <CpuChipIcon />
              </Button>
            </div>
          </Sidebar>
        </div>
        
        {/* Mobile Sidebar */}
        <Headless.Dialog open={showSidebar} onClose={() => setShowSidebar(false)} className="lg:hidden">
          <Headless.DialogBackdrop
            transition
            className="fixed inset-0 bg-black/30 transition data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
          />
          <Headless.DialogPanel
            transition
            className="fixed z-100 inset-y-0 w-full max-w-80 p-2 transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex h-full flex-col rounded-lg bg-white shadow-xs ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10">
              <div className="mb-3 px-4 pt-3">
                <Headless.CloseButton as={NavbarItem} aria-label="Close navigation" className="float-end">
                  <ArrowLeftIcon />
                </Headless.CloseButton>
              </div>
              <div className="p-4">
                <Button plain className="w-full justify-end !text-2xl" onClick={() => scrollToElementRef(employmentSectionRef)}>
                  Employment
                  <BriefcaseIcon />
                </Button>
                <Button plain className="w-full justify-end !text-2xl" onClick={() => scrollToElementRef(technologiesSectionRef)}>
                  Technologies
                  <CpuChipIcon />
                </Button>
              </div>
            </div>
          </Headless.DialogPanel>
        </Headless.Dialog>

        {/* Main section */}
        <main className="flex flex-1 flex-col pb-2 lg:min-w-0 mt-10 lg:mt-0 lg:pt-2 lg:pr-2 lg:pl-64">
          <div className="grow p-6 lg:p-10">
            <div className="mx-auto max-w-6xl">
              <EmploymentSection ref={employmentSectionRef} />
              <br/><br/><br/><br/>
              <TechnologiesSection ref={technologiesSectionRef} />
              <br/>
            </div>
          </div>
        </main>

      </div>

    </div>
  )
}

export default App
