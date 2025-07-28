"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, MapPin, Users, ExternalLink, AlertCircle } from "lucide-react"

export default function FindPrecinct() {
  const [address, setAddress] = useState("")
  const [searchResults, setSearchResults] = useState<any>(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async () => {
    if (!address.trim()) return

    setIsSearching(true)
    // Simulate API call
    setTimeout(() => {
      setSearchResults({
        precinct: "SEA 43-2847",
        county: "King County",
        address: address,
        pcoVacancies: {
          democratic: 1,
          republican: 2,
        },
        currentPCOs: {
          democratic: ["Sarah Johnson"],
          republican: [],
        },
      })
      setIsSearching(false)
    }, 1500)
  }

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
      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200/50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-slate-700 hover:text-slate-900 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">Find Your Precinct</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12" id="main-content">
        {/* Introduction */}
        <section className="text-center mb-16 bg-[url('/wa-mountains.svg')] bg-cover bg-center py-24">
          <h2 className="text-4xl md:text-6xl font-bold text-wa-green-900 mb-6">Locate Your Precinct</h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-8">
            Enter your address to find your precinct and see current PCO vacancies. This is your first step toward
            getting involved in local politics.
          </p>
        </section>

        {/* Address Search */}
        <section className="mb-16" aria-labelledby="search-heading">
          <Card className="bg-white shadow-md border border-slate-200 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle
                id="search-heading"
                className="text-2xl text-slate-800 text-center flex items-center justify-center"
              >
                <Search className="h-6 w-6 mr-2" aria-hidden="true" />
                Address Search
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSearch()
                }}
                role="search"
              >
                <div className="flex gap-4">
                  <label htmlFor="address-input" className="sr-only">
                    Enter your full address
                  </label>
                  <Input
                    id="address-input"
                    type="text"
                    placeholder="Enter your full address (e.g., 123 Main St, Seattle, WA 98101)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="flex-1 bg-white border-slate-200 text-slate-800 placeholder:text-slate-500 focus:ring-2 focus:ring-wa-green-500"
                    aria-describedby="search-help"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isSearching || !address.trim()}
                    className="bg-wa-gold text-wa-green hover:bg-wa-gold/90 focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2"
                    aria-describedby={isSearching ? "searching-status" : undefined}
                  >
                    {isSearching ? "Searching..." : "Search"}
                  </Button>
                </div>
                <p id="search-help" className="text-slate-500 text-sm mt-2">
                  We'll use this to find your precinct and show PCO vacancy information
                </p>
                {isSearching && (
                  <div id="searching-status" className="sr-only" aria-live="polite">
                    Searching for your precinct information
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Search Results */}
        {searchResults && (
          <section className="mb-16" aria-labelledby="results-heading" role="region" aria-live="polite">
            <Card className="bg-white shadow-md border border-slate-200 max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle
                  id="results-heading"
                  className="text-2xl text-slate-800 text-center flex items-center justify-center"
                >
                  <MapPin className="h-6 w-6 mr-2" aria-hidden="true" />
                  Your Precinct Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Precinct Details */}
                  <div>
                    <h3 className="text-xl font-semibold text-wa-green-700 mb-4">Precinct Details</h3>
                    <dl className="space-y-3">
                      <div className="flex justify-between">
                        <dt className="text-slate-700">Precinct:</dt>
                        <dd className="text-slate-900 font-medium">{searchResults.precinct}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-slate-700">County:</dt>
                        <dd className="text-slate-900 font-medium">{searchResults.county}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-slate-700">Address:</dt>
                        <dd className="text-slate-900 font-medium text-right">{searchResults.address}</dd>
                      </div>
                    </dl>
                  </div>

                  {/* PCO Status */}
                  <div>
                    <h3 className="text-xl font-semibold text-wa-green-700 mb-4">PCO Positions</h3>
                    <div className="space-y-4" role="list">
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100" role="listitem">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-blue-700 font-medium">Democratic PCOs</span>
                          <span
                            className="text-slate-800"
                            aria-label={`${searchResults.currentPCOs.democratic.length} of 2 positions filled`}
                          >
                            {searchResults.currentPCOs.democratic.length}/2 filled
                          </span>
                        </div>
                        {searchResults.pcoVacancies.democratic > 0 && (
                          <div className="flex items-center text-green-600 text-sm" role="status">
                            <AlertCircle className="h-4 w-4 mr-1" aria-hidden="true" />
                            {searchResults.pcoVacancies.democratic} vacancy available!
                          </div>
                        )}
                      </div>

                      <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-red-700 font-medium">Republican PCOs</span>
                          <span className="text-slate-800">{searchResults.currentPCOs.republican.length}/2 filled</span>
                        </div>
                        {searchResults.pcoVacancies.republican > 0 && (
                          <div className="flex items-center text-green-600 text-sm">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {searchResults.pcoVacancies.republican} vacancies available!
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 bg-wa-green/5 rounded-lg p-8 text-center border border-wa-green-200">
                  <MapPin className="h-16 w-16 text-wa-gold mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-slate-800 mb-2">Interactive Map</h4>
                  <p className="text-slate-600 mb-4">
                    Your precinct location and surrounding PCO vacancy information would be displayed here.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-wa-green-700">12</div>
                      <div className="text-slate-600 text-sm">Nearby Precincts</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-wa-green-700">8</div>
                      <div className="text-slate-600 text-sm">With Vacancies</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-wa-green-700">67%</div>
                      <div className="text-slate-600 text-sm">Vacancy Rate</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Official Resources */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center text-wa-green-900 mb-12">Official Precinct Resources</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-wa-gold mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-slate-800 mb-4">Secretary of State</h4>
                <p className="text-slate-600 mb-6">
                  Official voter information, precinct maps, and election details from Washington State.
                </p>
                <a href="https://www.sos.wa.gov/elections/" target="_blank" rel="noopener noreferrer" className="group">
                  <Button className="bg-wa-gold text-wa-green hover:bg-wa-gold/90">
                    Visit SOS Elections <ExternalLink className="ml-2 h-4 w-4" />
                    <span className="sr-only">Opens in new tab</span>
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <MapPin className="h-16 w-16 text-wa-gold mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-slate-800 mb-4">VoteWA.gov</h4>
                <p className="text-slate-600 mb-6">
                  Find your polling location, check registration status, and access your voter guide.
                </p>
                <a
                  href="https://voter.votewa.gov/WhereToVote.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button className="bg-wa-gold text-wa-green hover:bg-wa-gold/90">
                    Visit VoteWA <ExternalLink className="ml-2 h-4 w-4" />
                    <span className="sr-only">Opens in new tab</span>
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Next Steps */}
        {searchResults && (
          <section className="text-center">
            <Card className="bg-wa-green-50 shadow-md border border-wa-green-200 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-wa-green-900 mb-4">Found Vacancies? Here's What to Do Next</h3>
                <p className="text-slate-700 mb-6">
                  Great news! There are PCO vacancies in your area. You might be able to get appointed immediately or
                  run in the next election.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/become-pco" target="_blank" className="group">
                    <Button className="bg-wa-gold text-wa-green hover:bg-wa-gold/90">
                      Learn the Process <ExternalLink className="ml-2 h-4 w-4" />
                      <span className="sr-only">Opens in new tab</span>
                    </Button>
                  </Link>
                  <Link href="/resources" target="_blank" className="group">
                    <Button
                      variant="outline"
                      className="border-wa-gold text-wa-gold hover:bg-wa-gold hover:text-wa-green bg-transparent"
                    >
                      Get Resources <ExternalLink className="ml-2 h-4 w-4" />
                      <span className="sr-only">Opens in new tab</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </div>
  )
}
