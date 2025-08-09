"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { DarkModeToggle } from "@/components/dark-mode-toggle"

export default function PartyPlatforms() {
  const platformComparison = [
    {
      topic: "Healthcare",
      democratic:
        "Support universal healthcare access, expand Medicaid, protect reproductive rights and women's healthcare choices",
      republican:
        "Market-based healthcare solutions, reduce government involvement, protect religious freedom and conscience rights",
    },
    {
      topic: "Economy & Jobs",
      democratic: "Raise minimum wage, support unions, invest in green jobs and sustainable infrastructure development",
      republican:
        "Lower taxes, reduce regulations, support small businesses and free market principles for economic growth",
    },
    {
      topic: "Education",
      democratic:
        "Increase public school funding, make college more affordable, support teachers and educational professionals",
      republican:
        "School choice and parental rights in education, reduce federal education mandates, support charter schools",
    },
    {
      topic: "Environment",
      democratic:
        "Combat climate change, transition to clean energy, protect natural resources and environmental justice",
      republican:
        "Balance environmental protection with economic growth, support energy independence and responsible development",
    },
    {
      topic: "Immigration",
      democratic:
        "Path to citizenship, protect DACA recipients, comprehensive immigration reform with humanitarian focus",
      republican:
        "Secure borders, enforce immigration laws, merit-based immigration system with national security priority",
    },
    {
      topic: "Criminal Justice",
      democratic:
        "Reform criminal justice system, address systemic inequalities, community policing and rehabilitation focus",
      republican: "Support law enforcement, tough on crime policies, victims' rights and public safety priority",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-wa-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-wa-green-900">
      <DarkModeToggle />
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-wa-green-700 text-white dark:bg-wa-gold-400 dark:text-wa-green-900 px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm sticky top-0 z-20" role="banner">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-wa-green-700 dark:text-wa-green-300 hover:text-wa-green-900 dark:hover:text-wa-gold-300 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-md px-2 py-1"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-wa-green-900 dark:text-wa-gold-300 mr-16">Party Platforms</h1>
          </div>
        </div>
      </header>

      <main id="main-content" role="main" className="relative z-10">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          {/* Introduction */}
          <section className="text-center mb-20" aria-labelledby="platforms-title">
            <div className="max-w-4xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg">
              <h1
                id="platforms-title"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-8 leading-tight"
              >
                Compare Party Positions
              </h1>
              <p className="text-xl lg:text-2xl text-wa-green-700 dark:text-wa-green-200 leading-relaxed">
                Understanding where the major parties stand on key issues helps you make informed decisions about which
                party aligns with your values as a PCO.
              </p>
            </div>
          </section>

          {/* Platform Comparison Table */}
          <section className="mb-20" aria-labelledby="comparison-heading">
            <div className="text-center mb-16">
              <h2 id="comparison-heading" className="text-3xl lg:text-4xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-4">
                Key Issue Comparison
              </h2>
              <p className="text-xl text-wa-green-700 dark:text-wa-green-200 max-w-3xl mx-auto">
                This table provides a high-level overview of the general positions of the Democratic and Republican
                parties on major topics.
              </p>
            </div>

            <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-wa-green-100 dark:border-wa-green-800 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left" aria-label="Party Platform Comparison">
                    <thead>
                      <tr className="border-b border-wa-green-200 dark:border-wa-green-700/50">
                        <th className="p-6 bg-slate-50 dark:bg-slate-900/80 text-wa-green-800 dark:text-wa-gold-300 font-bold text-lg w-1/4">Topic</th>
                        <th className="p-6 bg-blue-50 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 font-bold text-lg w-3/8">Democratic Position</th>
                        <th className="p-6 bg-red-50 dark:bg-red-900/40 text-red-800 dark:text-red-200 font-bold text-lg w-3/8">Republican Position</th>
                      </tr>
                    </thead>
                    <tbody>
                      {platformComparison.map((item, index) => (
                        <tr key={index} className="border-b border-wa-green-100 dark:border-wa-green-800 last:border-b-0">
                          <td className="p-6 align-top">
                            <h3 className="text-wa-green-900 dark:text-wa-gold-300 font-semibold text-xl">{item.topic}</h3>
                          </td>
                          <td className="p-6 align-top text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                            {item.democratic}
                          </td>
                          <td className="p-6 align-top text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                            {item.republican}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Official Party Websites */}
          <section className="mb-20" aria-labelledby="official-websites-heading">
            <div className="text-center mb-16">
              <h3 id="official-websites-heading" className="text-3xl lg:text-4xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-4">
                Official Party Websites
              </h3>
              <p className="text-xl text-wa-green-700 dark:text-wa-green-200 max-w-3xl mx-auto">
                For the most accurate and detailed information, visit the official state party websites.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-slate-900 border-blue-200 dark:border-blue-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 lg:p-10 text-center h-full flex flex-col">
                  <h4 className="text-2xl lg:text-3xl font-bold text-blue-700 dark:text-blue-300 mb-6">Washington State Democrats</h4>
                  <p className="text-blue-800 dark:text-blue-200 text-lg mb-8 flex-grow leading-relaxed">
                    Explore the Democratic platform, find local party organizations, and learn how to get involved in
                    your community.
                  </p>
                  <a
                    href="https://www.wa-democrats.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-lg"
                    aria-label="Visit Washington State Democrats website - opens in new tab"
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none">
                      Visit WA Democrats
                      <ExternalLink
                        className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </Button>
                  </a>
                  <p className="text-blue-600 dark:text-blue-400 text-sm mt-3 font-medium" aria-hidden="true">
                    Opens in new tab
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/50 dark:to-slate-900 border-red-200 dark:border-red-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 lg:p-10 text-center h-full flex flex-col">
                  <h4 className="text-2xl lg:text-3xl font-bold text-red-700 dark:text-red-300 mb-6">Washington State Republicans</h4>
                  <p className="text-red-800 dark:text-red-200 text-lg mb-8 flex-grow leading-relaxed">
                    Discover the Republican platform, connect with local organizations, get involved in your community,
                    and find leadership opportunities.
                  </p>
                  <a href="https://www.wsrp.org" target="_blank" rel="noopener noreferrer" className="group focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-lg">
                    <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                      Visit WA Republicans
                      <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <p className="text-red-600 dark:text-red-400 text-sm mt-3 font-medium">Opens in new tab</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-20">
            <Card className="bg-gradient-to-r from-wa-gold-50 to-wa-green-50 dark:from-wa-gold-900/20 dark:to-wa-green-900/20 border-wa-gold-200 dark:border-wa-gold-700/50 shadow-xl max-w-4xl mx-auto backdrop-blur-sm">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-6">Ready to Get Involved?</h3>
                <p className="text-wa-green-700 dark:text-wa-green-200 text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                  Now that you understand the party positions, learn how you can become a PCO and help shape your
                  party's future in your community.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/become-pco" target="_blank" className="group focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-lg">
                    <Button className="bg-wa-green-700 text-white hover:bg-wa-green-800 dark:bg-wa-green-600 dark:hover:bg-wa-green-500 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                      How to Become a PCO
                      <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/find-precinct" target="_blank" className="group focus:outline-none focus:ring-2 focus:ring-wa-gold-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-lg">
                    <Button
                      variant="outline"
                      className="border-2 border-wa-gold-500 text-wa-gold-700 hover:bg-wa-gold-500 hover:text-white bg-white dark:bg-transparent dark:text-wa-gold-300 dark:hover:bg-wa-gold-500 dark:hover:text-wa-green-900 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Find Your Precinct
                      <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}
