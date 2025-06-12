import { useLayoutEffect, useState } from 'react'

import { Label } from './components/tailwind-catalyst/fieldset'
import { Navbar } from './components/tailwind-catalyst/navbar'
import { Sidebar } from './components/tailwind-catalyst/sidebar'
import { SidebarLayout } from './components/tailwind-catalyst/sidebar-layout'
import { Switch } from './components/tailwind-catalyst/switch'
import * as Headless from '@headlessui/react'

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

  return (
    <SidebarLayout
      navbar={
        <Navbar />
      }
      sidebar={
        <Sidebar />
      }
    >
    <Headless.Field className="flex float-end items-center gap-2">
      <Label className="dark:opacity-50">Light</Label>
      <Switch checked={darkMode} onChange={toggleDarkMode} />
      <Label className="opacity-50 dark:opacity-100">Dark</Label>
    </Headless.Field>
    <ExperienceSection />
      <br/><br/><br/><br/>
      <SkillsSection />
    </SidebarLayout>
  )
}

export default App
