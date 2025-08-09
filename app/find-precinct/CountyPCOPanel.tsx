"use client"

import { useEffect, useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PARTY_STYLES, normalizeParty, type PartyKey } from "@/lib/party"
import type { PCO } from "@/lib/types"
import { Search } from "lucide-react"

type CountySummary = { county: string; count: number }

export default function CountyPCOPanel() {
  const [counties, setCounties] = useState<CountySummary[]>([])
  const [selectedCounty, setSelectedCounty] = useState<string>("")
  const [pcos, setPcos] = useState<PCO[]>([])
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load counties on mount
  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch("/api/counties")
        if (!res.ok) throw new Error(`Failed to load counties: ${res.status}`)
        const data: CountySummary[] = await res.json()
        setCounties(data)
        if (data.length > 0) setSelectedCounty(data[0].county)
      } catch (e: any) {
        setError(e?.message ?? "Failed to load counties")
      }
    }
    run()
  }, [])

  // Load PCOs when county changes
  useEffect(() => {
    const run = async () => {
      if (!selectedCounty) return
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`/api/counties/${encodeURIComponent(selectedCounty)}`)
        if (!res.ok) throw new Error(`Failed to load PCOs: ${res.status}`)
        const rows: PCO[] = await res.json()
        // Ensure party is normalized to PartyKey for styling safeguard
        const cleaned = rows.map((r) => ({ ...r, party: normalizeParty(r.party ?? null) as PartyKey }))
        setPcos(cleaned)
      } catch (e: any) {
        setError(e?.message ?? "Failed to load PCOs")
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [selectedCounty])

  // Client-side search filter
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return pcos
    return pcos.filter((r) => {
      const hay = [r.name, r.precinct, r.email, r.address, r.phone]
        .filter(Boolean)
        .join(" \u2022 ")
        .toLowerCase()
      return hay.includes(q)
    })
  }, [pcos, query])

  return (
    <section className="container mx-auto px-4 py-8 md:py-10">
      <Card className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <CardHeader className="border-b border-slate-100 dark:border-slate-700/50 pb-4">
          <CardTitle className="flex items-center gap-3 text-slate-800 dark:text-wa-gold-300 text-xl md:text-2xl font-semibold">
            <Search className="h-6 w-6 text-wa-green-700 dark:text-wa-gold-400" />
            County PCO Directory
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-1">
              <label className="sr-only" htmlFor="county-select">County</label>
              <Select value={selectedCounty} onValueChange={(v) => setSelectedCounty(v)}>
                <SelectTrigger id="county-select" aria-label="Select county" className="h-11 bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white shadow-sm">
                  <SelectValue placeholder="Select a county" />
                </SelectTrigger>
                <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
                  {counties.map((c) => (
                    <SelectItem key={c.county} value={c.county} className="dark:text-white dark:focus:bg-slate-700">
                      {c.county} ({c.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <label className="sr-only" htmlFor="pco-search">Search PCOs</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" aria-hidden="true" />
                <Input
                  id="pco-search"
                  placeholder="Search by name, precinct, email, address..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="h-11 pl-9 bg-white dark:bg-slate-700 dark:border-slate-600 shadow-sm"
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 dark:border-red-500/30 dark:bg-red-900/20 p-3 text-red-800 dark:text-red-200">
              {error}
            </div>
          )}

          {!error && selectedCounty && (
            <div className="space-y-2">
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Showing {filtered.length} of {pcos.length} PCOs in <span className="font-medium text-slate-800 dark:text-slate-200">{selectedCounty}</span>
              </div>
              {loading ? (
                <div className="text-slate-600 dark:text-slate-400 py-4">Loading PCOs…</div>
              ) : filtered.length === 0 ? (
                <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-4 text-slate-700 dark:text-slate-300">No PCOs match your search.</div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((pco, idx) => {
                    const party = (pco.party as PartyKey) || "Other"
                    const styles = PARTY_STYLES[party]
                    return (
                      <div key={idx} className={`rounded-xl border p-4 ${styles.border} bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow`}> 
                        <div className="flex items-start justify-between">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 pr-2">{pco.name}</h4>
                          <span className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${styles.badge}`}>
                            {party}
                          </span>
                        </div>
                        <div className="mt-3 space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                          {pco.precinct && (
                            <div><span className="text-slate-500 dark:text-slate-400">Precinct:</span> {pco.precinct}</div>
                          )}
                          {pco.email && (
                            <div>
                              <span className="text-slate-500 dark:text-slate-400">Email:</span> <a className="text-wa-green-700 dark:text-wa-green-400 hover:underline" href={`mailto:${pco.email}`}>{pco.email}</a>
                            </div>
                          )}
                          {pco.phone && (
                            <div>
                              <span className="text-slate-500 dark:text-slate-400">Phone:</span> <a className="text-wa-green-700 dark:text-wa-green-400 hover:underline" href={`tel:${pco.phone}`}>{pco.phone}</a>
                            </div>
                          )}
                          {pco.address && (
                            <div><span className="text-slate-500 dark:text-slate-400">Address:</span> {pco.address}</div>
                          )}
                        </div>
                      </div>
                    )}
                  )}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
