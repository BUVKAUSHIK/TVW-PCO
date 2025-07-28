"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-wa-green-50">
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-wa-green-700 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-wa-green-100 shadow-sm" role="banner">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-wa-green-700 hover:text-wa-green-900 transition-colors duration-200 group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-wa-green-900">Party Platforms</h1>
          </div>
        </div>
      </header>

      <main id="main-content" role="main">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          {/* Introduction */}
          <section className="text-center mb-20 bg-mountain-pattern" aria-labelledby="platforms-title">
            <div className="max-w-4xl mx-auto">
              <h1
                id="platforms-title"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-wa-green-900 mb-8 leading-tight"
              >
                Compare Party Positions
              </h1>
              <p className="text-xl lg:text-2xl text-wa-green-700 leading-relaxed">
                Understanding where the major parties stand on key issues helps you make informed decisions about which
                party aligns with your values as a PCO.
              </p>
            </div>
          </section>

          {/* Platform Comparison */}
          <section className="mb-20" aria-labelledby="comparison-heading">
            <h2 id="comparison-heading" className="sr-only">
              Party Platform Comparisons
            </h2>
            <div className="space-y-12" role="list">
              {platformComparison.map((item, index) => (
                <Card
                  key={index}
                  className="bg-white border-wa-green-100 shadow-lg hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-wa-green-500"
                  role="listitem"
                >
                  <CardHeader className="bg-gradient-to-r from-wa-green-50 to-wa-gold-50 border-b border-wa-green-100">
                    <CardTitle className="text-2xl lg:text-3xl text-wa-green-900 text-center font-bold">
                      {item.topic}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2" role="group" aria-labelledby={`topic-${index}`}>
                      <div className="p-8 lg:p-10 border-r border-wa-green-100">
                        <div className="bg-blue-50 rounded-xl p-6 h-full">
                          <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">Democratic Position</h3>
                          <p className="text-blue-800 leading-relaxed text-lg">{item.democratic}</p>
                        </div>
                      </div>
                      <div className="p-8 lg:p-10">
                        <div className="bg-red-50 rounded-xl p-6 h-full">
                          <h3 className="text-xl font-semibold text-red-700 mb-4 text-center">Republican Position</h3>
                          <p className="text-red-800 leading-relaxed text-lg">{item.republican}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Important Note */}
          <section className="mb-20">
            <Card className="bg-gradient-to-r from-wa-gold-50 to-wa-green-50 border-wa-gold-200 shadow-xl max-w-5xl mx-auto">
              <CardContent className="p-8 lg:p-12 text-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-wa-green-900 mb-6">
                  Remember: These are General Positions
                </h3>
                <div className="space-y-4 text-lg text-wa-green-700 max-w-3xl mx-auto leading-relaxed">
                  <p>
                    Individual candidates and local party organizations may have different views on specific issues. As
                    a PCO, you'll help shape your party's local priorities and candidate selections.
                  </p>
                  <p className="text-wa-gold-700 font-semibold text-xl">
                    Your voice matters in defining what your party stands for in your community.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Official Party Links */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl lg:text-4xl font-bold text-wa-green-900 mb-4">
                Learn More from Official Sources
              </h3>
              <p className="text-xl text-wa-green-700 max-w-3xl mx-auto">
                Get detailed information directly from the official party websites
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 lg:p-10 text-center h-full flex flex-col">
                  <h4 className="text-2xl lg:text-3xl font-bold text-blue-700 mb-6">Washington State Democrats</h4>
                  <p className="text-blue-800 text-lg mb-8 flex-grow leading-relaxed">
                    Explore the full Democratic platform, find local chapters, learn about volunteer opportunities, and
                    connect with party leadership.
                  </p>
                  <a
                    href="https://www.wa-democrats.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
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
                  <p className="text-blue-600 text-sm mt-3 font-medium" aria-hidden="true">
                    Opens in new tab
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 lg:p-10 text-center h-full flex flex-col">
                  <h4 className="text-2xl lg:text-3xl font-bold text-red-700 mb-6">Washington State Republicans</h4>
                  <p className="text-red-800 text-lg mb-8 flex-grow leading-relaxed">
                    Discover the Republican platform, connect with local organizations, get involved in your community,
                    and find leadership opportunities.
                  </p>
                  <a href="https://www.wsrp.org" target="_blank" rel="noopener noreferrer" className="group">
                    <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                      Visit WA Republicans
                      <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <p className="text-red-600 text-sm mt-3 font-medium">Opens in new tab</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-wa-gold-50 to-wa-green-50 border-wa-gold-200 shadow-xl max-w-4xl mx-auto">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-wa-green-900 mb-6">Ready to Get Involved?</h3>
                <p className="text-wa-green-700 text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                  Now that you understand the party positions, learn how you can become a PCO and help shape your
                  party's future in your community.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/become-pco" target="_blank" className="group">
                    <Button className="bg-wa-green-700 text-white hover:bg-wa-green-800 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                      How to Become a PCO
                      <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/find-precinct" target="_blank" className="group">
                    <Button
                      variant="outline"
                      className="border-2 border-wa-gold-500 text-wa-gold-700 hover:bg-wa-gold-500 hover:text-white bg-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
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
