'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { parsePCOExcelFile } from "@/lib/parse-pco-data"

interface PcoInfo {
  name: string
  contact: string
}

interface PrecinctResult {
  precinct: string
  county: string
  address: string
  pcoVacancies: {
    democratic: number
    republican: number
  }
  currentPCOs: {
    democratic: PcoInfo[]
    republican: PcoInfo[]
  }
}

interface SearchResult {
  county: string
  precincts: PrecinctResult[]
}

export default function FindPrecinctClient() {
  const [address, setAddress] = useState("")
  const [searchResults, setSearchResults] = useState<PrecinctResult | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [allPcoData, setAllPcoData] = useState<any[]>([])
  const [allCounties, setAllCounties] = useState<string[]>([])
  const [selectedCounty, setSelectedCounty] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await parsePCOExcelFile();
        setAllPcoData(data);

        const counties = [
          ...new Set(
            data
              .map((pco) => pco.county)
              .filter((county): county is string => typeof county === 'string' && county.trim() !== '')
              .map((county) => county.trim())
          ),
        ].sort();
        setAllCounties(counties);
      } catch (err) {
        console.error("Failed to fetch initial data:", err);
        setError("Failed to load PCO data. Please try again later.");
      }
    };
    fetchData();
  }, [])

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault()
    
    // If no county is selected, show an error
    if (!selectedCounty) {
      setError("Please select a county to search")
      return
    }

    setIsSearching(true)
    setError(null)

    try {
      // Get the data from the state (already loaded in useEffect)
      const data = allPcoData
      
      // Filter PCOs by the selected county
      const countyPCOs = data.filter(pco => 
        pco.county && pco.county.trim().toLowerCase() === selectedCounty.toLowerCase()
      )

      if (countyPCOs.length === 0) {
        setError(`No PCO data found for ${selectedCounty}`)
        return
      }

      // Group PCOs by precinct
      const precinctsMap = new Map()
      
      countyPCOs.forEach(pco => {
        if (!pco.precinct) return // Skip if no precinct
        
        if (!precinctsMap.has(pco.precinct)) {
          precinctsMap.set(pco.precinct, {
            precinct: pco.precinct,
            county: selectedCounty,
            pcoVacancies: {
              democratic: 0,
              republican: 0
            },
            currentPCOs: {
              democratic: [],
              republican: []
            }
          })
        }
        
        const precinct = precinctsMap.get(pco.precinct)
        
        // Determine party (default to 'unknown' if not specified)
        const party = pco.party ? pco.party.toLowerCase() : 'unknown'
        
        if (party.includes('democrat')) {
          if (pco.name) {
            precinct.currentPCOs.democratic.push({ name: pco.name, contact: pco.contact || '' })
          } else {
            precinct.pcoVacancies.democratic += 1
          }
        } else if (party.includes('republican')) {
          if (pco.name) {
            precinct.currentPCOs.republican.push({ name: pco.name, contact: pco.contact || '' })
          } else {
            precinct.pcoVacancies.republican += 1
          }
        }
      })
      
      // For this example, we'll just take the first precinct found for the county
      // A real implementation would likely list all precincts or let the user specify one
      const firstPrecinct = precinctsMap.values().next().value
      
      if (firstPrecinct) {
        setSearchResults(firstPrecinct)
      } else {
        setError(`No precinct data could be processed for ${selectedCounty}`)
      }

    } catch (err) {
      console.error("Search failed:", err)
      setError("Failed to search for precinct. Please try again.")
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-wa-green-700 text-white dark:bg-wa-gold-400 dark:text-wa-green-900 px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>




      <main className="container mx-auto px-4 py-6 md:py-8" id="main-content">
        {/* Introduction */}
        <section className="text-center mb-8 md:mb-10 bg-gradient-to-br from-wa-green-50 to-wa-gold-50 dark:from-wa-green-950 dark:to-slate-900 rounded-xl p-8 md:py-16 ring-1 ring-slate-200 dark:ring-slate-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-6">Locate Your Precinct</h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 mx-auto">
              This tool helps you find PCOs in your county. For official voter registration and precinct information, please use the official resources below.
            </p>
          </div>
        </section>

        {/* County Search removed per request (old dropdown & results) */}

        {/* Official Resources moved to page bottom */}

        {/* Next Steps */}
        {searchResults && (
          <section className="text-center">
            <Card className="bg-wa-green-50 dark:bg-slate-800/80 shadow-md border border-wa-green-200 dark:border-wa-green-700/50 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-4">Found Vacancies? Here's What to Do Next</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Great news! There are PCO vacancies in your area. You might be able to get appointed immediately or
                  run in the next election.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/become-pco" target="_blank" className="group">
                    <Button className="bg-wa-gold-500 text-wa-green-950 hover:bg-wa-gold-600 dark:hover:bg-wa-gold-400">
                      Learn the Process <ExternalLink className="ml-2 h-4 w-4" />
                      <span className="sr-only">Opens in new tab</span>
                    </Button>
                  </Link>
                  <Link href="/resources" target="_blank" className="group">
                    <Button
                      variant="outline"
                      className="border-wa-gold-500 text-wa-gold-700 dark:text-wa-gold-300 hover:bg-wa-gold-500 dark:hover:bg-wa-gold-500 hover:text-white dark:hover:text-wa-green-900 bg-transparent"
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
      </main>
    </div>
  )
}
