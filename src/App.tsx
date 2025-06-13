import { useLayoutEffect, useState } from 'react'

import { Button } from './components/tailwind-catalyst/button'
import { Label } from './components/tailwind-catalyst/fieldset'
import { Navbar, NavbarItem, NavbarSpacer } from './components/tailwind-catalyst/navbar'
import { Switch } from './components/tailwind-catalyst/switch'
import * as Headless from '@headlessui/react'

import { Bars3Icon } from '@heroicons/react/24/solid'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

import SkillsSection from "./components/sections/SkillsSection"
import ExperienceSection from './components/sections/ExperiencesSection'

function App() {

  const [darkMode, setDarkMode] = useState(false);

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
    <div className="p-6 lg:p-10">

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
          <div className="-mb-3 px-4 pt-3">
            <Headless.CloseButton as={NavbarItem} aria-label="Close navigation" className="float-end">
              <ArrowLeftIcon />
            </Headless.CloseButton>
          </div>
          {/* {children} */}
        </div>
      </Headless.DialogPanel>
    </Headless.Dialog>

      {/* Navbar section */}
      <Navbar id="main-nav" className="fixed top-0 left-0 right-0 z-50 opacity-100 border-double border-b-4">
        <Button plain className="lg:hidden ml-3" onClick={() => setShowSidebar(true)}>
          <Bars3Icon />
        </Button>
        <NavbarSpacer />
        <Headless.Field className="flex float-end items-center gap-2 mr-3">
          <Label className="dark:opacity-50">Light</Label>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <Label className="opacity-50 dark:opacity-100">Dark</Label>
        </Headless.Field>
      </Navbar>

      {/* Main section */}
      <div className="mt-20">
        <ExperienceSection />
        <br/><br/><br/><br/>
        <SkillsSection />
      </div>

    </div>
  )
}

export default App
