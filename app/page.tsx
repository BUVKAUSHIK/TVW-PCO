"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WashingtonMapBackground } from "@/components/ui/washington-map-background"
import { Header } from "@/components/header"
import { ExternalLink, Vote, MapPin, BookOpen, HelpCircle } from 'lucide-react'

export default function HomePage() {
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-wa-green-50 dark:from-wa-green-950 dark:via-wa-green-900 dark:to-wa-green-800 relative">
      {/* Washington State Map Background */}
      <WashingtonMapBackground />

      {/* Header component can be added here if needed, assuming it handles its own dark mode */}

      {/* Hero Section */}
      <main id="main-content" role="main" className="relative z-10">
        <section className="py-20 lg:py-32 px-4 relative" aria-labelledby="hero-heading">
          <div className="container mx-auto text-center max-w-5xl">
            <div className="mb-12 animate-fade-in">
              <h1
                id="hero-heading"
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-wa-green-900 dark:text-white mb-6 leading-tight"
              >
                <span aria-live="polite" aria-atomic="true">
                  {currentText}
                  {isTyping && (
                    <span className="animate-pulse text-wa-gold-500 dark:text-wa-gold-400" aria-hidden="true">
                      |
                    </span>
                  )}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-wa-green-700 dark:text-wa-green-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                You're not alone. Most young voters don't know about this crucial role in local democracy.
              </p>
            </div>

            {/* Statistic Card */}
            <Card
              className="bg-white/90 dark:bg-wa-green-900/80 backdrop-blur-sm border-wa-green-200 dark:border-wa-green-700 shadow-xl mb-16 max-w-2xl mx-auto hover:shadow-2xl transition-all duration-300 relative"
              role="region"
              aria-labelledby="voter-statistic"
            >
              <CardContent className="p-8 lg:p-12">
                <div className="text-5xl lg:text-6xl font-bold text-wa-gold-600 dark:text-wa-gold-400 mb-4" aria-label="16 percent">
                  16%
                </div>
                <p id="voter-statistic" className="text-xl lg:text-2xl text-wa-green-800 dark:text-white font-medium mb-2">
                  Only 16% of 18-24 year olds voted in the last local election
                </p>
                <p className="text-wa-green-600 dark:text-wa-green-300 text-lg">Your voice matters more than you think</p>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/what-is-pco" target="_blank" aria-label="Learn what is a PCO - opens in new tab">
                <Button
                  size="lg"
                  className="bg-wa-green-700 text-white hover:bg-wa-green-800 dark:bg-wa-gold-500 dark:text-wa-green-950 dark:hover:bg-wa-gold-400 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-wa-green-500 dark:focus:ring-wa-gold-400 focus:ring-offset-2 dark:focus:ring-offset-wa-green-900"
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
                  className="border-wa-green-700 text-wa-green-700 hover:bg-wa-green-700 hover:text-white dark:border-wa-gold-400 dark:text-wa-gold-300 dark:hover:bg-wa-gold-400 dark:hover:text-wa-green-950 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-wa-green-500 dark:focus:ring-wa-gold-400 focus:ring-offset-2 dark:focus:ring-offset-wa-green-900"
                >
                  Become a PCO
                  <ExternalLink
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Navigation Cards */}
        <section className="py-20 px-4 relative z-10 bg-white/80 dark:bg-wa-green-950/80 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-wa-green-900 dark:text-white mb-4">Explore Your Civic Power</h2>
              <p className="text-lg text-wa-green-600 dark:text-wa-green-200 max-w-3xl mx-auto">
                Discover how you can make a real difference in your community through local political engagement
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* What is a PCO? Card */}
              <Link
                href="/what-is-pco"
                className="group focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 rounded-lg"
                aria-label="What is a PCO? - opens in new tab"
              >
                <Card className="bg-white/95 dark:bg-wa-green-900/95 border-wa-green-100 dark:border-wa-green-800 hover:border-wa-green-300 dark:hover:border-wa-gold-400 shadow-md hover:shadow-xl transition-all duration-300 h-full focus-within:ring-2 focus-within:ring-wa-green-500">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <HelpCircle className="h-16 w-16 text-wa-green-600 dark:text-wa-green-300 mx-auto mb-6 group-hover:scale-110 group-hover:text-wa-green-700 dark:group-hover:text-wa-gold-400 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-wa-green-900 dark:text-wa-gold-300 mb-4">What is a PCO?</h3>
                    <p className="text-wa-green-700 dark:text-wa-green-200 mb-6 flex-grow">
                      Learn the what, why, and how of this powerful local role
                    </p>
                    <div className="flex items-center justify-center text-wa-green-600 dark:text-wa-green-300 group-hover:text-wa-green-800 dark:group-hover:text-wa-gold-400 transition-colors">
                      <span className="text-sm font-medium mr-1">Learn More</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Party Platforms Card */}
              <Link
                href="/party-platforms"
                target="_blank"
                rel="noopener noreferrer"
                className="group focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 rounded-lg"
                aria-label="Party Platforms - opens in new tab"
              >
                <Card className="bg-white/95 dark:bg-wa-green-900/95 border-wa-green-100 dark:border-wa-green-800 hover:border-wa-green-300 dark:hover:border-wa-gold-400 shadow-md hover:shadow-xl transition-all duration-300 h-full focus-within:ring-2 focus-within:ring-wa-green-500">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <Vote className="h-16 w-16 text-wa-green-600 dark:text-wa-green-300 mx-auto mb-6 group-hover:scale-110 group-hover:text-wa-green-700 dark:group-hover:text-wa-gold-400 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-wa-green-900 dark:text-wa-gold-300 mb-4">Party Platforms</h3>
                    <p className="text-wa-green-700 dark:text-wa-green-200 mb-6 flex-grow">
                      Compare Democratic and Republican positions on key issues
                    </p>
                    <div className="flex items-center justify-center text-wa-green-600 dark:text-wa-green-300 group-hover:text-wa-green-800 dark:group-hover:text-wa-gold-400 transition-colors">
                      <span className="text-sm font-medium mr-1">Opens in new tab</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Find Your Precinct Card */}
              <Link
                href="/find-precinct"
                target="_blank"
                rel="noopener noreferrer"
                className="group focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 rounded-lg"
                aria-label="Find Your Precinct - opens in new tab"
              >
                <Card className="bg-white/95 dark:bg-wa-green-900/95 border-wa-green-100 dark:border-wa-green-800 hover:border-wa-green-300 dark:hover:border-wa-gold-400 shadow-md hover:shadow-xl transition-all duration-300 h-full focus-within:ring-2 focus-within:ring-wa-green-500">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <MapPin className="h-16 w-16 text-wa-green-600 dark:text-wa-green-300 mx-auto mb-6 group-hover:scale-110 group-hover:text-wa-green-700 dark:group-hover:text-wa-gold-400 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-wa-green-900 dark:text-wa-gold-300 mb-4">Find Your Precinct</h3>
                    <p className="text-wa-green-700 dark:text-wa-green-200 mb-6 flex-grow">Locate your precinct and discover PCO vacancies</p>
                    <div className="flex items-center justify-center text-wa-green-600 dark:text-wa-green-300 group-hover:text-wa-green-800 dark:group-hover:text-wa-gold-400 transition-colors">
                      <span className="text-sm font-medium mr-1">Opens in new tab</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Resources Card */}
              <Link
                href="/resources"
                target="_blank"
                rel="noopener noreferrer"
                className="group focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 rounded-lg"
                aria-label="Resources - opens in new tab"
              >
                <Card className="bg-white/95 dark:bg-wa-green-900/95 border-wa-green-100 dark:border-wa-green-800 hover:border-wa-green-300 dark:hover:border-wa-gold-400 shadow-md hover:shadow-xl transition-all duration-300 h-full focus-within:ring-2 focus-within:ring-wa-green-500">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <BookOpen className="h-16 w-16 text-wa-green-600 dark:text-wa-green-300 mx-auto mb-6 group-hover:scale-110 group-hover:text-wa-green-700 dark:group-hover:text-wa-gold-400 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-wa-green-900 dark:text-wa-gold-300 mb-4">Resources</h3>
                    <p className="text-wa-green-700 dark:text-wa-green-200 mb-6 flex-grow">Videos, documents, and comprehensive guides</p>
                    <div className="flex items-center justify-center text-wa-green-600 dark:text-wa-green-300 group-hover:text-wa-green-800 dark:group-hover:text-wa-gold-400 transition-colors">
                      <span className="text-sm font-medium mr-1">Opens in new tab</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* FAQ Card */}
              <Link
                href="/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="group focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 rounded-lg"
                aria-label="FAQ - opens in new tab"
              >
                <Card className="bg-white/95 dark:bg-wa-green-900/95 border-wa-green-100 dark:border-wa-green-800 hover:border-wa-green-300 dark:hover:border-wa-gold-400 shadow-md hover:shadow-xl transition-all duration-300 h-full focus-within:ring-2 focus-within:ring-wa-green-500">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <HelpCircle className="h-16 w-16 text-wa-green-600 dark:text-wa-green-300 mx-auto mb-6 group-hover:scale-110 group-hover:text-wa-green-700 dark:group-hover:text-wa-gold-400 transition-all duration-300" />
                    <h3 className="text-xl font-semibold text-wa-green-900 dark:text-wa-gold-300 mb-4">FAQ</h3>
                    <p className="text-wa-green-700 dark:text-wa-green-200 mb-6 flex-grow">Get answers to common questions about PCOs</p>
                    <div className="flex items-center justify-center text-wa-green-600 dark:text-wa-green-300 group-hover:text-wa-green-800 dark:group-hover:text-wa-gold-400 transition-colors">
                      <span className="text-sm font-medium mr-1">Opens in new tab</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation Cards Section */}
        <section className="py-20 lg:py-24 px-4 bg-white/70 dark:bg-wa-green-900/70 backdrop-blur-sm" aria-labelledby="explore-heading">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 id="explore-heading" className="text-3xl lg:text-4xl font-bold text-wa-green-900 dark:text-white">
                Explore the Guide
              </h2>
              <p className="text-xl text-wa-green-700 dark:text-wa-green-200 mt-4 max-w-2xl mx-auto">
                Find your precinct, compare party platforms, and get the resources you need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* Card 1: Find Your Precinct */}
              <Link href="/find-precinct" className="group block">
                <Card className="h-full bg-white dark:bg-slate-800/80 dark:backdrop-blur-sm border-wa-green-100 dark:border-wa-green-700/50 shadow-lg hover:shadow-xl dark:hover:shadow-wa-gold-900/20 hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <MapPin className="h-16 w-16 text-wa-green-600 dark:text-wa-green-300 mx-auto mb-6 transition-colors duration-300 group-hover:text-wa-green-700 dark:group-hover:text-wa-gold-400" />
                    <h3 className="text-2xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-3">Find Your Precinct</h3>
                    <p className="text-wa-green-700 dark:text-wa-green-200 mb-6">
                      Enter your address to find your precinct and see who represents you.
                    </p>
                    <div className="flex items-center justify-center text-wa-green-600 dark:text-wa-green-300 group-hover:text-wa-green-800 dark:group-hover:text-wa-gold-400 transition-colors">
                      <span className="text-sm font-medium mr-1">Opens in new tab</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Card 2: Party Platforms */}
              <Link href="/party-platforms" className="group block">
                <Card className="h-full bg-white dark:bg-slate-800/80 dark:backdrop-blur-sm border-wa-green-100 dark:border-wa-green-700/50 shadow-lg hover:shadow-xl dark:hover:shadow-wa-gold-900/20 hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <Vote className="h-16 w-16 text-wa-green-600 dark:text-wa-green-300 mx-auto mb-6 transition-colors duration-300 group-hover:text-wa-green-700 dark:group-hover:text-wa-gold-400" />
                    <h3 className="text-2xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-3">Party Platforms</h3>
                    <p className="text-wa-green-700 dark:text-wa-green-200 mb-6">
                      Compare the official platforms of the major parties in Washington State.
                    </p>
                    <div className="flex items-center justify-center text-wa-green-600 dark:text-wa-green-300 group-hover:text-wa-green-800 dark:group-hover:text-wa-gold-400 transition-colors">
                      <span className="text-sm font-medium mr-1">Opens in new tab</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Card 3: Resources */}
              <Link href="/resources" className="group block">
                <Card className="h-full bg-white dark:bg-slate-800/80 dark:backdrop-blur-sm border-wa-green-100 dark:border-wa-green-700/50 shadow-lg hover:shadow-xl dark:hover:shadow-wa-gold-900/20 hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <BookOpen className="h-16 w-16 text-wa-green-600 dark:text-wa-green-300 mx-auto mb-6 transition-colors duration-300 group-hover:text-wa-green-700 dark:group-hover:text-wa-gold-400" />
                    <h3 className="text-2xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-3">Resources</h3>
                    <p className="text-wa-green-700 dark:text-wa-green-200 mb-6">
                      Access handbooks, guides, and official documents for PCOs.
                    </p>
                    <div className="flex items-center justify-center text-wa-green-600 dark:text-wa-green-300 group-hover:text-wa-green-800 dark:group-hover:text-wa-gold-400 transition-colors">
                      <span className="text-sm font-medium mr-1">Opens in new tab</span>
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Card 4: FAQ */}
              <Link href="/resources#faq" className="group block">
                <Card className="h-full bg-white dark:bg-slate-800/80 dark:backdrop-blur-sm border-wa-green-100 dark:border-wa-green-700/50 shadow-lg hover:shadow-xl dark:hover:shadow-wa-gold-900/20 hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <HelpCircle className="h-16 w-16 text-wa-green-600 dark:text-wa-green-300 mx-auto mb-6 transition-colors duration-300 group-hover:text-wa-green-700 dark:group-hover:text-wa-gold-400" />
                    <h3 className="text-2xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-3">FAQ</h3>
                    <p className="text-wa-green-700 dark:text-wa-green-200 mb-6">
                      Get answers to the most common questions about being a PCO.
                    </p>
                    <div className="flex items-center justify-center text-wa-green-600 dark:text-wa-green-300 group-hover:text-wa-green-800 dark:group-hover:text-wa-gold-400 transition-colors">
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
      <footer className="bg-wa-green-900 dark:bg-wa-green-950 text-white py-16 relative z-10" role="contentinfo">
        <div className="container mx-auto px-4">
          <nav aria-label="Footer navigation" className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-wa-gold-400 dark:text-wa-gold-300 mb-6">WA PCO Guide</h3>
              <p className="text-wa-green-100 dark:text-wa-green-200 leading-relaxed">
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
            <p className="text-wa-green-300 dark:text-wa-green-400">© 2024 WA PCO Guide. Educational resource for Washington State voters.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
