"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WashingtonMapBackground } from "@/components/ui/washington-map-background"
import { Users, Vote, Megaphone, MapPin, ExternalLink } from 'lucide-react'
import { DarkModeToggle } from "@/components/dark-mode-toggle"

export default function WhatIsPCO() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-wa-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-wa-green-900 relative">
      <DarkModeToggle />
      {/* Washington State Map Background */}
      <WashingtonMapBackground />
      
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-wa-green-700 text-white dark:bg-wa-gold dark:text-wa-green-900 px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>



      <main id="main-content" role="main" className="relative z-10">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          {/* Introduction */}
          <section className="text-center mb-20 relative" aria-labelledby="pco-title">
            <div className="max-w-4xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg">
              <h1
                id="pco-title"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-8 leading-tight"
              >
                Precinct Committee Officer
              </h1>
              <p className="text-xl lg:text-2xl text-wa-green-700 dark:text-wa-green-200 leading-relaxed">
                PCOs are the grassroots foundation of political parties in Washington State. They're your neighbors who
                help shape local politics and connect communities to government.
              </p>
            </div>
          </section>

          {/* PCO Responsibilities Cards */}
          <section className="mb-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg" aria-labelledby="responsibilities-heading">
            <div className="text-center mb-16">
              <h2 id="responsibilities-heading" className="text-3xl lg:text-4xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-4">
                What Do PCOs Actually Do?
              </h2>
              <p className="text-xl text-wa-green-700 dark:text-wa-green-200 max-w-3xl mx-auto">
                PCOs wear many hats in their communities, from organizing events to advocating for important issues
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8" role="list">
              <Card
                className="bg-white/95 dark:bg-slate-800/95 border-wa-green-100 dark:border-wa-green-800 shadow-lg hover:shadow-xl transition-all duration-300 group h-full focus-within:ring-2 focus-within:ring-wa-green-500"
                role="listitem"
              >
                <CardHeader className="text-center pb-4">
                  <Users
                    className="h-20 w-20 text-wa-green-600 dark:text-wa-green-300 mx-auto mb-6 group-hover:scale-110 group-hover:text-wa-green-700 dark:group-hover:text-wa-gold-400 transition-all duration-300"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-2xl text-wa-green-900 dark:text-wa-gold-300">Community Outreach</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-wa-green-700 dark:text-wa-green-200 space-y-3 text-lg" role="list">
                    <li className="flex items-start" role="listitem">
                      <span className="text-wa-gold-500 dark:text-wa-gold-400 mr-3 mt-1" aria-hidden="true">
                        •
                      </span>
                      Connect with neighbors about local issues
                    </li>
                    <li className="flex items-start" role="listitem">
                      <span className="text-wa-gold-500 dark:text-wa-gold-400 mr-3 mt-1" aria-hidden="true">
                        •
                      </span>
                      Organize community events and meetings
                    </li>
                    <li className="flex items-start" role="listitem">
                      <span className="text-wa-gold-500 dark:text-wa-gold-400 mr-3 mt-1" aria-hidden="true">
                        •
                      </span>
                      Help register voters in your precinct
                    </li>
                    <li className="flex items-start" role="listitem">
                      <span className="text-wa-gold-500 dark:text-wa-gold-400 mr-3 mt-1" aria-hidden="true">
                        •
                      </span>
                      Share information about candidates and ballot measures
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="bg-white/95 dark:bg-slate-800/95 border-wa-green-100 dark:border-wa-green-800 shadow-lg hover:shadow-xl transition-all duration-300 group h-full focus-within:ring-2 focus-within:ring-wa-green-500"
                role="listitem"
              >
                <CardHeader className="text-center pb-4">
                  <Vote
                    className="h-20 w-20 text-wa-green-600 dark:text-wa-green-300 mx-auto mb-6 group-hover:scale-110 group-hover:text-wa-green-700 dark:group-hover:text-wa-gold-400 transition-all duration-300"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-2xl text-wa-green-900 dark:text-wa-gold-300">Party Leadership</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-wa-green-700 dark:text-wa-green-200 space-y-3 text-lg" role="list">
                    <li className="flex items-start" role="listitem">
                      <span className="text-wa-gold-500 dark:text-wa-gold-400 mr-3 mt-1" aria-hidden="true">
                        •
                      </span>
                      Vote on party endorsements and resolutions
                    </li>
                    <li className="flex items-start" role="listitem">
                      <span className="text-wa-gold-500 dark:text-wa-gold-400 mr-3 mt-1" aria-hidden="true">
                        •
                      </span>
                      Elect county party leadership
                    </li>
                    <li className="flex items-start" role="listitem">
                      <span className="text-wa-gold-500 dark:text-wa-gold-400 mr-3 mt-1" aria-hidden="true">
                        •
                      </span>
                      Participate in party conventions
                    </li>
                    <li className="flex items-start" role="listitem">
                      <span className="text-wa-gold-500 dark:text-wa-gold-400 mr-3 mt-1" aria-hidden="true">
                        •
                      </span>
                      Help select delegates to state conventions
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="bg-white/95 dark:bg-slate-800/95 border-wa-green-100 dark:border-wa-green-800 shadow-lg hover:shadow-xl transition-all duration-300 group h-full focus-within:ring-2 focus-within:ring-wa-green-500"
                role="listitem"
              >
                <CardHeader className="text-center pb-4">
                  <Megaphone
                    className="h-20 w-20 text-wa-green-600 dark:text-wa-green-300 mx-auto mb-6 group-hover:scale-110 group-hover:text-wa-green-700 dark:group-hover:text-wa-gold-400 transition-all duration-300"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-2xl text-wa-green-900 dark:text-wa-gold-300">Advocacy & Action</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="text-wa-green-700 dark:text-wa-green-200 space-y-3 text-lg" role="list">
                    <li className="flex items-start" role="listitem">
                      <span className="text-wa-gold-500 dark:text-wa-gold-400 mr-3 mt-1" aria-hidden="true">
                        •
                      </span>
                      Advocate for issues important to your community
                    </li>
                    <li className="flex items-start" role="listitem">
                      <span className="text-wa-gold-500 dark:text-wa-gold-400 mr-3 mt-1" aria-hidden="true">
                        •
                      </span>
                      Support candidates who share your values
                    </li>
                    <li className="flex items-start" role="listitem">
                      <span className="text-wa-gold-500 dark:text-wa-gold-400 mr-3 mt-1" aria-hidden="true">
                        •
                      </span>
                      Mobilize voters during election seasons
                    </li>
                    <li className="flex items-start" role="listitem">
                      <span className="text-wa-gold-500 dark:text-wa-gold-400 mr-3 mt-1" aria-hidden="true">
                        •
                      </span>
                      Bridge the gap between citizens and government
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Washington State Map Section */}
          <section className="mb-20" aria-labelledby="statistics-heading">
            <Card className="bg-white/95 dark:bg-slate-800/95 border-wa-green-200 dark:border-wa-green-800 shadow-xl backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <CardTitle id="statistics-heading" className="text-3xl lg:text-4xl text-wa-green-900 dark:text-wa-gold-300 mb-6">
                  Washington State's 7,500 Precincts
                </CardTitle>
                <p className="text-wa-green-700 dark:text-wa-green-200 text-xl max-w-3xl mx-auto">
                  Each precinct can have up to 2 PCOs per party - that's potentially 30,000 positions statewide!
                </p>
              </CardHeader>
              <CardContent className="p-8 lg:p-12">
                <div className="bg-gradient-to-br from-wa-green-50 to-wa-green-100 rounded-2xl p-8 lg:p-12 text-center">
                  <MapPin className="h-24 w-24 text-wa-green-600 dark:text-wa-green-300 mx-auto mb-8" />
                  <div className="grid md:grid-cols-3 gap-8 text-center mb-8" role="list">
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md" role="listitem">
                      <div
                        className="text-4xl lg:text-5xl font-bold text-wa-green-700 dark:text-wa-gold-300 mb-2"
                        aria-label="Seven thousand five hundred"
                      >
                        7,500
                      </div>
                      <div className="text-wa-green-600 dark:text-wa-green-200 font-medium text-lg">Precincts Statewide</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md" role="listitem">
                      <div className="text-4xl lg:text-5xl font-bold text-wa-green-700 dark:text-wa-gold-300 mb-2" aria-label="Thirty nine">
                        39
                      </div>
                      <div className="text-wa-green-600 dark:text-wa-green-200 font-medium text-lg">Counties</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md" role="listitem">
                      <div
                        className="text-4xl lg:text-5xl font-bold text-wa-gold-600 dark:text-wa-gold-400 mb-2"
                        aria-label="Approximately forty percent"
                      >
                        ~40%
                      </div>
                      <div className="text-wa-green-600 dark:text-wa-green-200 font-medium text-lg">PCO Positions Vacant</div>
                    </div>
                  </div>
                  <p className="text-wa-green-700 dark:text-wa-green-200 text-lg max-w-3xl mx-auto leading-relaxed">
                    Many precincts across Washington have vacant PCO positions, meaning your voice could have an even
                    bigger impact in shaping local politics and representing your community's interests.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-20">
            <Card className="bg-gradient-to-r from-wa-gold-50 to-wa-green-50 dark:from-wa-gold-900/20 dark:to-wa-green-900/20 border-wa-gold-200 dark:border-wa-gold-700/50 shadow-xl max-w-4xl mx-auto backdrop-blur-sm">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-3xl lg:text-4xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-6">Ready to Make a Difference?</h3>
                <p className="text-wa-green-700 dark:text-wa-green-200 text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                  Being a PCO is one of the most direct ways to influence politics at the grassroots level. It's a
                  volunteer position that requires just a few hours per month but can have lasting impact on your
                  community.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    href="/become-pco"
                    target="_blank"
                    className="group focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 rounded-lg"
                    aria-label="Learn how to become a PCO - opens in new tab"
                  >
                    <Button className="bg-wa-green-700 text-white hover:bg-wa-green-800 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none">
                      Learn How to Become a PCO
                      <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/find-precinct" target="_blank" className="group">
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
