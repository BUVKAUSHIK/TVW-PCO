"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // if scroll down hide the navbar
          setIsHidden(true)
        } else {
          // if scroll up show the navbar
          setIsHidden(false)
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])


  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
      role="banner"
    >
      <nav
        className="mx-auto max-w-6xl px-4 py-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/331530d8-af3c-4398-8a49-cd8f755b05b2.png" alt="Teach with TVW Logo" width={140} height={36} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-end">
            <div className="flex items-center w-full max-w-[900px] justify-between text-base">
              <Link href="/what-is-pco" className="text-wa-green-700 hover:text-wa-green-900 transition-colors duration-200 font-medium dark:text-wa-green-200 dark:hover:text-wa-gold-400">What is a PCO?</Link>
              <Link href="/party-platforms" className="text-wa-green-700 hover:text-wa-green-900 transition-colors duration-200 font-medium dark:text-wa-green-200 dark:hover:text-wa-gold-400">Party Platforms</Link>
              <Link href="/become-pco" className="text-wa-green-700 hover:text-wa-green-900 transition-colors duration-200 font-medium dark:text-wa-green-200 dark:hover:text-wa-gold-400">Become a PCO</Link>
              <Link href="/find-precinct" className="text-wa-green-700 hover:text-wa-green-900 transition-colors duration-200 font-medium dark:text-wa-green-200 dark:hover:text-wa-gold-400">Find Your Precinct</Link>
              <Link href="/resources" className="text-wa-green-700 hover:text-wa-green-900 transition-colors duration-200 font-medium dark:text-wa-green-200 dark:hover:text-wa-gold-400">Resources</Link>
              {pathname === '/' && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full text-wa-green-700 dark:text-wa-green-200 hover:bg-wa-green-100 dark:hover:bg-wa-green-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              )}

            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-wa-green-700 hover:text-wa-green-900 dark:text-wa-green-200 dark:hover:text-wa-gold-400 transition-colors focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 rounded-md"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden mt-4 pb-4" role="menu">
            <div className="flex flex-col space-y-3 pt-4" role="none">
              <Link href="/what-is-pco" className="block text-wa-green-700 dark:text-wa-green-200 hover:bg-wa-green-50 dark:hover:bg-wa-green-800 px-3 py-2 rounded-md font-medium">What is a PCO?</Link>
              <Link href="/party-platforms" className="block text-wa-green-700 dark:text-wa-green-200 hover:bg-wa-green-50 dark:hover:bg-wa-green-800 px-3 py-2 rounded-md font-medium">Party Platforms</Link>
              <Link href="/become-pco" className="block text-wa-green-700 dark:text-wa-green-200 hover:bg-wa-green-50 dark:hover:bg-wa-green-800 px-3 py-2 rounded-md font-medium">Become a PCO</Link>
              <Link href="/find-precinct" className="block text-wa-green-700 dark:text-wa-green-200 hover:bg-wa-green-50 dark:hover:bg-wa-green-800 px-3 py-2 rounded-md font-medium">Find Your Precinct</Link>
              <Link href="/resources" className="block text-wa-green-700 dark:text-wa-green-200 hover:bg-wa-green-50 dark:hover:bg-wa-green-800 px-3 py-2 rounded-md font-medium">Resources</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
