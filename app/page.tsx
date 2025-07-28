"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WashingtonMapBackground } from "@/components/ui/washington-map-background"
import { ExternalLink, Vote, MapPin, BookOpen, HelpCircle, Menu, X } from 'lucide-react'

export default function HomePage() {
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const fullText = "Never heard of a PCO?"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-wa-green-50 relative">
      {/* Washington State Map Background */}
      <WashingtonMapBackground />
      
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-wa-green-700 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav
        className="bg-white/95 backdrop-blur-sm border-b border-wa-green-100 sticky top-0 z-50 shadow-sm relative"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-wa-green-800 tracking-tight">
              WA PCO Guide
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              <Link
                href="/what-is-pco"
                className="text-wa-green-700 hover:text-wa-green-900 transition-colors duration-200 font-medium"
              >
                What is a PCO?
              </Link>
              <Link
                href="/party-platforms"
                className="text-wa-green-700 hover:text-wa-green-900 transition-colors duration-200 font-medium"
              >
                Party Platforms
              </Link>
              <Link
                href="/become-pco"
                className="text-wa-green-700 hover:text-wa-green-900 transition-colors duration-200 font-medium"
              >
                Become a PCO
              </Link>
              <Link
                href="/find-precinct"
                className="text-wa-green-700 hover:text-wa-green-900 transition-colors duration-200 font-medium"
              >
                Find Your Precinct
              </Link>
              <Link
                href="/resources"
                className="text-wa-green-700 hover:text-wa-green-900 transition-colors duration-200 font-medium"
              >
                Resources
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-wa-green-700 hover:text-wa-green-900 transition-colors focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 rounded-md"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div id="mobile-menu" className="lg:hidden mt-4 pb-4 border-t border-wa-green-100" role="menu">
              <div className="flex flex-col space-y-3 pt-4" role="none">
                <Link
                  href="/what-is-pco"
                  className="text-wa-green-700 hover:text-wa-green-900 transition-colors font-medium"
                >
                  What is a PCO?
                </Link>
                <Link
                  href="/party-platforms"
                  className="text-wa-green-700 hover:text-wa-green-900 transition-colors font-medium"
                >
                  Party Platforms
                </Link>
                <Link
                  href="/become-pco"
                  className="text-wa-green-700 hover:text-wa-green-900 transition-colors font-medium"
                >
                  Become a PCO
                </Link>
                <Link
                  href="/find-precinct"
                  className="text-wa-green-700 hover:text-wa-green-900 transition-colors font-medium"
                >
                  Find Your Precinct
                </Link>
                <Link
                  href="/resources"
                  className="text-wa-green-700 hover:text-wa-green-900 transition-colors font-medium"
                >
                  Resources
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main id="main-content" role="main" className="relative z-10">
        <section className="py-20 lg:py-32 px-4 relative" aria-labelledby="hero-heading">
          <div className="container mx-auto text-center max-w-5xl">
            <div className="mb-12 animate-fade-in">
              <h1
                id="hero-heading"
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-wa-green-900 mb-6 leading-tight"
              >
                <span aria-live="polite" aria-atomic="true">
                  {currentText}
                  {isTyping && (
                    <span className="animate-pulse text-wa-gold-500" aria-hidden="true">
                      |
                    </span>
                  )}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-wa-green-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                You're not alone. Most young voters don't know about this crucial role in local democracy.
              </p>
            </div>

            {/* Statistic Card */}
            <Card
              className="bg-white/90 backdrop-blur-sm border-wa-green-200 shadow-xl mb-16 max-w-2xl mx-auto hover:shadow-2xl transition-all duration-300 relative"
              role="region"
              aria-labelledby="voter-statistic"
            >
              <CardContent className="p-8 lg:p-12">
                <div className="text-5xl lg:text-6xl font-bold text-wa-gold-600 mb-4" aria-label="16 percent">
                  16%
                </div>
                <p id="voter-statistic" className="text-xl lg:text-2xl text-wa-green-800 font-medium mb-2">
                  Only 16% of 18-24 year olds voted in the last local election
                </p>
                <p className="text-wa-green-600 text-lg">Your voice matters more than you think</p>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/what-is-pco" target="_blank" aria-label="Learn what is a PCO - opens in new tab">
                <Button
                  size="lg"
                  className="bg-wa-green-700 text-white hover:bg-wa-green-800 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2"
                >
                  What is a PCO?
                  <ExternalLink
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
              <Link href="/become-pco" target="_blank" aria-label="Learn how to become a PCO - opens in new tab">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-wa-gold-500 text-wa-gold-700 hover:bg-wa-gold-500 hover:text-white text-lg px-8 py-4 bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Become a PCO
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Navigation Cards */}
        <section className="py-20 px-4 relative z-10 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-wa-green-900 mb-4">Explore Your Civic Power</h2>
              <p className="text-xl text-wa-green-700 max-w-2xl mx-auto">
                Discover how you can make a real difference in your community through local political engagement
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link
                href="/party-platforms"
                target="_blank"
                className="group focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 rounded-lg"
                aria-label="Party Platforms - opens in new tab"
              >
                <Card className="bg-white/95 border-wa-green-100 hover:border-wa-green-300 shadow-md hover:shadow-xl transition-all duration-300 h-full focus-within:ring-2 focus-within:ring-wa-green-500">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <Vote className="h-16 w-16 text-wa-green-600 mx-auto mb-6 group-hover:scale-110 group-hover:text-wa-green-700 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-wa-green-900 mb-4">Party Platforms</h3>
                    <p className="text-wa-green-700 mb-6 flex-grow">
                      Compare Democratic and Republican positions on key issues
                    </p>
                    <div className="flex items-center justify-center text-wa-green-600 group-hover:text-wa-green-800 transition-colors">
                      <span className="text-sm font-medium mr-1">Opens in new tab</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="/find-precinct"
                target="_blank"
                className="group focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 rounded-lg"
                aria-label="Find Your Precinct - opens in new tab"
              >
                <Card className="bg-white/95 border-wa-green-100 hover:border-wa-green-300 shadow-md hover:shadow-xl transition-all duration-300 h-full focus-within:ring-2 focus-within:ring-wa-green-500">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <MapPin className="h-16 w-16 text-wa-green-600 mx-auto mb-6 group-hover:scale-110 group-hover:text-wa-green-700 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-wa-green-900 mb-4">Find Your Precinct</h3>
                    <p className="text-wa-green-700 mb-6 flex-grow">Locate your precinct and discover PCO vacancies</p>
                    <div className="flex items-center justify-center text-wa-green-600 group-hover:text-wa-green-800 transition-colors">
                      <span className="text-sm font-medium mr-1">Opens in new tab</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="/resources"
                target="_blank"
                className="group focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 rounded-lg"
                aria-label="Resources - opens in new tab"
              >
                <Card className="bg-white/95 border-wa-green-100 hover:border-wa-green-300 shadow-md hover:shadow-xl transition-all duration-300 h-full focus-within:ring-2 focus-within:ring-wa-green-500">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <BookOpen className="h-16 w-16 text-wa-green-600 mx-auto mb-6 group-hover:scale-110 group-hover:text-wa-green-700 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-wa-green-900 mb-4">Resources</h3>
                    <p className="text-wa-green-700 mb-6 flex-grow">Videos, documents, and comprehensive guides</p>
                    <div className="flex items-center justify-center text-wa-green-600 group-hover:text-wa-green-800 transition-colors">
                      <span className="text-sm font-medium mr-1">Opens in new tab</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="/resources#faq"
                target="_blank"
                className="group focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 rounded-lg"
                aria-label="FAQ - opens in new tab"
              >
                <Card className="bg-white/95 border-wa-green-100 hover:border-wa-green-300 shadow-md hover:shadow-xl transition-all duration-300 h-full focus-within:ring-2 focus-within:ring-wa-green-500">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <HelpCircle className="h-16 w-16 text-wa-green-600 mx-auto mb-6 group-hover:scale-110 group-hover:text-wa-green-700 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-wa-green-900 mb-4">FAQ</h3>
                    <p className="text-wa-green-700 mb-6 flex-grow">Get answers to common questions about PCOs</p>
                    <div className="flex items-center justify-center text-wa-green-600 group-hover:text-wa-green-800 transition-colors">
                      <span className="text-sm font-medium mr-1">Opens in new tab</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-wa-green-900 text-white py-16 relative z-10" role="contentinfo">
        <div className="container mx-auto px-4">
          <nav aria-label="Footer navigation" className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-wa-gold-400 mb-6">WA PCO Guide</h3>
              <p className="text-wa-green-100 leading-relaxed">
                Empowering young voters in Washington State to understand and engage with local politics through
                accessible education about Precinct Committee Officer roles.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                <Link
                  href="/what-is-pco"
                  className="block text-wa-green-200 hover:text-wa-gold-400 transition-colors duration-200"
                >
                  What is a PCO?
                </Link>
                <Link
                  href="/party-platforms"
                  className="block text-wa-green-200 hover:text-wa-gold-400 transition-colors duration-200"
                >
                  Party Platforms
                </Link>
                <Link
                  href="/become-pco"
                  className="block text-wa-green-200 hover:text-wa-gold-400 transition-colors duration-200"
                >
                  Become a PCO
                </Link>
                <Link
                  href="/find-precinct"
                  className="block text-wa-green-200 hover:text-wa-gold-400 transition-colors duration-200"
                >
                  Find Your Precinct
                </Link>
                <Link
                  href="/resources"
                  className="block text-wa-green-200 hover:text-wa-gold-400 transition-colors duration-200"
                >
                  Resources
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Official Party Sites</h4>
              <div className="space-y-3">
                <a
                  href="https://www.wa-democrats.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-wa-green-200 hover:text-wa-gold-400 transition-colors duration-200 group"
                >
                  WA State Democrats
                  <ExternalLink className="inline h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://www.wsrp.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-wa-green-200 hover:text-wa-gold-400 transition-colors duration-200 group"
                >
                  WA State Republicans
                  <ExternalLink className="inline h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </nav>
          <div className="border-t border-wa-green-700 mt-12 pt-8 text-center">
            <p className="text-wa-green-300">© 2024 WA PCO Guide. Educational resource for Washington State voters.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
