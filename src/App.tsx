import { useLayoutEffect, useRef, useState } from 'react'

import { Button } from './components/tailwind-catalyst/button'
import { Label } from './components/tailwind-catalyst/fieldset'
import { Navbar, NavbarSpacer } from './components/tailwind-catalyst/navbar'
import { Sidebar } from './components/tailwind-catalyst/sidebar'
import { Switch } from './components/tailwind-catalyst/switch'
import * as Headless from '@headlessui/react'

import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { BriefcaseIcon } from '@heroicons/react/24/solid'
import { CpuChipIcon } from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'

import IntroductionSection from './components/sections/IntroductionSection'
import EmploymentSection from './components/sections/EmploymentSection'
import EducationSection from "./components/sections/EducationSection"
import TechnologiesSection from "./components/sections/TechnologiesSection"
import ProfilesSection from './components/sections/ProfilesSection'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const introductionSectionRef = useRef<HTMLDivElement | null>(null)
  const educationSectionRef = useRef<HTMLDivElement | null>(null)
  const employmentSectionRef = useRef<HTMLDivElement | null>(null)
  const technologiesSectionRef = useRef<HTMLDivElement | null>(null)
  const profilesSectionRef = useRef<HTMLDivElement | null>(null)

  const scrollToElementRef = (elementRef:React.RefObject<HTMLElement | null>) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useLayoutEffect(() => {
    let darkModePreference: MediaQueryList | null = null;

    try {
      darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
    } catch (err) {
      console.warn("MatchMedia unavailable:", err);
    }

    const safeGetTheme = () => {
      try {
        return localStorage.getItem("theme");
      } catch (err) {
        console.warn("localStorage unavailable:", err);
        return null;
      }
    };

    const safeSetTheme = (val: string) => {
      try {
        localStorage.setItem("theme", val);
      } catch (err) {
        console.warn("localStorage unavailable:", err);
      }
    };

    const applyTheme = (dark: boolean) => {
      if (dark) {
        document.documentElement.classList.add("dark");
        setDarkMode(true);
        safeSetTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setDarkMode(false);
        safeSetTheme("light");
      }
    };

    // Initial load
    const storedTheme = safeGetTheme();
    if (storedTheme === "dark" || (!storedTheme && darkModePreference?.matches)) {
      applyTheme(true);
    } else {
      applyTheme(false);
    }

    // System theme change listener
    if (darkModePreference) {
      if (darkModePreference.addEventListener) {
        darkModePreference.addEventListener("change", (e) => applyTheme(e.matches));
      } else if ((darkModePreference as any).addListener) {
        (darkModePreference as any).addListener((e: MediaQueryListEvent) => applyTheme(e.matches));
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDarkMode(isDark);
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (err) {
      console.warn("localStorage unavailable:", err);
    }
  };


  let [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="overflow-y-clip">

      {/* Navbar section */}
      <Navbar id="main-nav">
        <Button plain className="cursor-pointer lg:hidden ml-3" onClick={() => setShowSidebar(true)}>
          <Bars3Icon />
        </Button>
        <NavbarSpacer />
        <Headless.Field className="flex float-end items-center gap-2 mr-3 p-3">
          <Label className="dark:opacity-50">Light</Label>
          <Switch className="cursor-pointer" checked={darkMode} onChange={toggleDarkMode} />
          <Label className="opacity-50 dark:opacity-100">Dark</Label>
        </Headless.Field>
      </Navbar>

      <div className="top-[5rem] flex max-lg:flex-col relative min-h-svh w-full">

        {/* Desktop Sidebar */}
        <div className="fixed inset-y-0 left-0 top-[5rem] w-64 max-lg:hidden z-50 border-r-2 border-zinc-950/10 dark:border-white/10 lg:bg-zinc-100 dark:lg:bg-zinc-950">
          <Sidebar>
            <div className="p-4">
               <Button plain className="cursor-pointer w-full justify-end !text-2xl" onClick={() => scrollToElementRef(introductionSectionRef)}>
                Introduction
                <UserIcon />
              </Button>
              <Button plain className="cursor-pointer w-full justify-end !text-2xl" onClick={() => scrollToElementRef(employmentSectionRef)}>
                Employment
                <BriefcaseIcon />
              </Button>
              <Button plain className="cursor-pointer w-full justify-end !text-2xl" onClick={() => scrollToElementRef(educationSectionRef)}>
                Education
                <AcademicCapIcon />
              </Button>
              <Button plain className="cursor-pointer w-full justify-end !text-2xl" onClick={() => scrollToElementRef(technologiesSectionRef)}>
                Technologies
                <CpuChipIcon />
              </Button>
              <Button plain className="cursor-pointer w-full justify-end !text-2xl" onClick={() => scrollToElementRef(profilesSectionRef)}>
                Profiles
                <GlobeAltIcon />
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
                <Button plain className="float-end cursor-pointer" onClick={() => setShowSidebar(false)}>
                  <ArrowLeftIcon />
                </Button>
              </div>
              <div className="p-4">
                <Button plain className="cursor-pointer w-full justify-end !text-2xl" onClick={() => {
                      scrollToElementRef(introductionSectionRef);
                      setShowSidebar(false);
                    }}>
                  Introduction
                  <UserIcon />
                </Button>
                <Button plain className="cursor-pointer w-full justify-end !text-2xl" onClick={() => {
                      scrollToElementRef(employmentSectionRef);
                      setShowSidebar(false);
                    }}>
                  Employment
                  <BriefcaseIcon />
                </Button>
                <Button plain className="cursor-pointer w-full justify-end !text-2xl" onClick={() => {
                      scrollToElementRef(educationSectionRef);
                      setShowSidebar(false);
                    }}>
                  Education
                  <AcademicCapIcon />
                </Button>
                <Button plain className="cursor-pointer w-full justify-end !text-2xl" onClick={() => {
                      scrollToElementRef(technologiesSectionRef);
                      setShowSidebar(false);
                    }}>
                  Technologies
                  <CpuChipIcon />
                </Button>
                <Button plain className="cursor-pointer w-full justify-end !text-2xl" onClick={() => {
                      scrollToElementRef(profilesSectionRef);
                      setShowSidebar(false);
                    }}>
                  Profiles
                  <GlobeAltIcon />
                </Button>
              </div>
            </div>
          </Headless.DialogPanel>
        </Headless.Dialog>

        {/* Main section */}
        <main className="flex flex-1 flex-col isolate lg:min-w-0 lg:pl-64 py-3">
          <div className="scrollable-main px-6 lg:px-10 pt-4 overflow-y-scroll overflow-x-clip scrollbar scroll-pt-4">
            <div className="mx-auto max-w-7xl">
              <IntroductionSection ref={introductionSectionRef} />
              <br/><br/><br/><br/>
              <EmploymentSection ref={employmentSectionRef} />
              <br/><br/><br/><br/>
              <EducationSection ref={educationSectionRef} />
              <br/><br/><br/><br/>
              <TechnologiesSection ref={technologiesSectionRef} />
              <br/><br/><br/><br/>
              <ProfilesSection ref={profilesSectionRef} />
              <br/>
            </div>
          </div>
        </main>

      </div>

    </div>
  )
}

export default App
