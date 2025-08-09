import FindPrecinctClient from "./find-precinct-client"
import CountyPCOPanel from "./CountyPCOPanel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Users, MapPin } from "lucide-react"
import { DarkModeToggle } from "@/components/dark-mode-toggle"

export default function FindPrecinctPage() {
  return (
    <>
      <DarkModeToggle />
      <FindPrecinctClient />
      <CountyPCOPanel />

      {/* Official Precinct Resources (moved to bottom) */}
      <section className="bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 py-10 md:py-12 border-t border-slate-200 dark:border-slate-800 mt-8 md:mt-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-wa-green-900 dark:text-wa-gold-300 mb-12">Official Precinct Resources</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white dark:bg-slate-800/80 rounded-xl shadow-md border border-slate-200 dark:border-slate-700/50 hover:shadow-lg hover:ring-1 hover:ring-wa-green-100 dark:hover:ring-1 dark:hover:ring-wa-gold-400/50 transition">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-wa-gold-500 dark:text-wa-gold-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-slate-800 dark:text-wa-gold-300 mb-4">Secretary of State</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Official voter information, precinct maps, and election details from Washington State.
                </p>
                <a href="https://www.sos.wa.gov/elections/" target="_blank" rel="noopener noreferrer" className="group">
                  <Button className="bg-wa-gold-500 text-wa-green-950 hover:bg-wa-gold-600 dark:bg-wa-gold-500 dark:hover:bg-wa-gold-400 dark:text-wa-green-950">
                    Visit SOS Elections <ExternalLink className="ml-2 h-4 w-4" />
                    <span className="sr-only">Opens in new tab</span>
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800/80 rounded-xl shadow-md border border-slate-200 dark:border-slate-700/50 hover:shadow-lg hover:ring-1 hover:ring-wa-green-100 dark:hover:ring-1 dark:hover:ring-wa-gold-400/50 transition">
              <CardContent className="p-8 text-center">
                <MapPin className="h-16 w-16 text-wa-gold-500 dark:text-wa-gold-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-slate-800 dark:text-wa-gold-300 mb-4">VoteWA.gov</h4>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Find your polling location, check registration status, and access your voter guide.
                </p>
                <a
                  href="https://voter.votewa.gov/WhereToVote.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button className="bg-wa-gold-500 text-wa-green-950 hover:bg-wa-gold-600 dark:bg-wa-gold-500 dark:hover:bg-wa-gold-400 dark:text-wa-green-950">
                    Visit VoteWA <ExternalLink className="ml-2 h-4 w-4" />
                    <span className="sr-only">Opens in new tab</span>
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
