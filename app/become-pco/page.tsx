"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle, XCircle, ExternalLink } from "lucide-react"
import { DarkModeToggle } from "@/components/dark-mode-toggle"

export default function BecomePCO() {
  const [age, setAge] = useState("")
  const [registered, setRegistered] = useState("")
  const [county, setCounty] = useState("")
  const [currentStep, setCurrentStep] = useState(1)

  const counties = [
    "Adams",
    "Asotin",
    "Benton",
    "Chelan",
    "Clallam",
    "Clark",
    "Columbia",
    "Cowlitz",
    "Douglas",
    "Ferry",
    "Franklin",
    "Garfield",
    "Grant",
    "Grays Harbor",
    "Island",
    "Jefferson",
    "King",
    "Kitsap",
    "Kittitas",
    "Klickitat",
    "Lewis",
    "Lincoln",
    "Mason",
    "Okanogan",
    "Pacific",
    "Pend Oreille",
    "Pierce",
    "San Juan",
    "Skagit",
    "Skamania",
    "Snohomish",
    "Spokane",
    "Stevens",
    "Thurston",
    "Wahkiakum",
    "Walla Walla",
    "Whatcom",
    "Whitman",
    "Yakima",
  ]

  const isEligible = age === "18+" && registered === "yes"

  const flowchartSteps = [
    {
      id: 1,
      title: "Age Verification",
      question: "Are you 18 years or older?",
      options: [
        { value: "18+", label: "Yes, I'm 18 or older", icon: CheckCircle, color: "text-green-400" },
        { value: "under18", label: "No, I'm under 18", icon: XCircle, color: "text-red-400" },
      ],
      value: age,
      setValue: setAge,
    },
    {
      id: 2,
      title: "Voter Registration",
      question: "Are you registered to vote in Washington State?",
      options: [
        { value: "yes", label: "Yes, I'm registered", icon: CheckCircle, color: "text-green-400" },
        { value: "no", label: "No, I'm not registered", icon: XCircle, color: "text-red-400" },
      ],
      value: registered,
      setValue: setRegistered,
    },
  ]

  const nextStep = () => {
    if (currentStep < flowchartSteps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <DarkModeToggle />
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-wa-green-700 text-white dark:bg-wa-gold-400 dark:text-wa-green-900 px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      {/* Header */}
      <header className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm sticky top-0 z-20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-wa-green-700 dark:text-wa-green-300 hover:text-wa-green-900 dark:hover:text-wa-gold-300 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-md px-2 py-1"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-wa-green-900 dark:text-wa-gold-300 mr-16">Become a PCO</h1>
          </div>
        </div>
      </header>

      <main className="container py-16 max-w-6xl mx-auto" id="main-content">
        {/* Introduction */}
        <section className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-8 leading-tight">
              Your Path to Becoming a PCO
            </h2>
            <p className="text-xl lg:text-2xl text-wa-green-700 dark:text-wa-green-200 leading-relaxed">
              Follow this interactive guide to understand the requirements and process for becoming a Precinct Committee
              Officer in Washington State.
            </p>
          </div>
        </section>

        {/* Interactive Flowchart */}
        <section className="mb-16" aria-labelledby="eligibility-heading">
          <div className="max-w-2xl mx-auto">
            <h3 id="eligibility-heading" className="text-3xl font-bold text-center text-wa-green-900 dark:text-wa-gold-300 mb-12">
              Check Your Eligibility
            </h3>
            <Card className="bg-white dark:bg-slate-800/80 border-wa-green-100 dark:border-wa-green-700/50 shadow-lg">
              <CardContent className="p-8">
                {flowchartSteps.map(
                  (step, index) =>
                    currentStep >= step.id && (
                      <div key={step.id} className={`mb-8 ${currentStep > step.id ? "opacity-50 dark:opacity-40" : ""}`}>
                        <h4 className="text-xl font-semibold text-wa-green-900 dark:text-wa-gold-300 mb-4">{step.title}</h4>
                        <p className="text-wa-green-700 dark:text-wa-green-200 mb-4">{step.question}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {step.options.map(option => (
                            <Button
                              key={option.value}
                              variant={step.value === option.value ? "default" : "outline"}
                              onClick={() => {
                                step.setValue(option.value)
                                if (currentStep === step.id) {
                                  nextStep()
                                }
                              }}
                              className={`w-full h-auto py-4 px-6 text-left justify-start items-center transition-all duration-200 ${step.value === option.value ? "bg-wa-green-600 text-white dark:bg-wa-gold-500 dark:text-wa-green-950 ring-2 ring-wa-green-600 dark:ring-wa-gold-400" : "bg-wa-green-50 text-wa-green-800 hover:bg-wa-green-100 dark:bg-slate-700 dark:text-wa-green-200 dark:hover:bg-slate-600 dark:border-slate-600"}`}>
                              <option.icon className={`h-6 w-6 mr-3 ${option.color}`} />
                              <span className="flex-1">{option.label}</span>
                            </Button>
                          ))}
                        </div>
                      </div>
                    )
                )}

                {age && registered && (
                  <div className="mt-8 pt-8 border-t border-wa-green-100 dark:border-wa-green-700/50">
                    {isEligible ? (
                      <Card className="bg-green-50 dark:bg-green-900/50 border-2 border-green-200 dark:border-green-700">
                        <CardContent className="p-6">
                          <div className="flex items-center">
                            <CheckCircle className="h-10 w-10 text-green-500 dark:text-green-400 mr-4" />
                            <div>
                              <h4 className="text-xl font-bold text-green-800 dark:text-green-300">Congratulations! You're eligible.</h4>
                              <p className="text-green-700 dark:text-green-300">
                                You meet the basic requirements to become a PCO. See the timeline below.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card className="bg-red-50 dark:bg-red-900/50 border-2 border-red-200 dark:border-red-700">
                        <CardContent className="p-6">
                          <div className="flex items-center">
                            <XCircle className="h-10 w-10 text-red-500 dark:text-red-400 mr-4" />
                            <div>
                              <h4 className="text-xl font-bold text-red-800 dark:text-red-300">You may not be eligible yet.</h4>
                              <p className="text-red-700 dark:text-red-300">
                                {age === "under18"
                                  ? "You must be 18 or older to be a PCO. You can still volunteer!"
                                  : "You must be a registered voter to be a PCO. You can register online."}
                              </p>
                              {registered === "no" && (
                                <a
                                  href="https://www.sos.wa.gov/elections/register.aspx"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Button className="mt-4 bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500">
                                    Register to Vote <ExternalLink className="ml-2 h-4 w-4" />
                                  </Button>
                                </a>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Find Your Role - Branching Paths */}
        <section className="mb-16" aria-labelledby="role-heading">
          <div className="max-w-4xl mx-auto">
            <h3 id="role-heading" className="text-3xl font-bold text-center text-wa-green-900 dark:text-wa-gold-300 mb-12">
              Find Your Role
            </h3>
            {isEligible ? (
              <Card className="bg-white dark:bg-slate-800/80 border-wa-green-100 dark:border-wa-green-700/50 shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-semibold text-wa-green-900 dark:text-wa-gold-300 mb-3">Path A: The Elected PCO Track</h4>
                  <p className="text-wa-green-700 dark:text-wa-green-200 mb-4">
                    Awesome! You meet the requirements to be an <strong>Elected PCO</strong>, the most direct way to become a voting
                    member of the party.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-wa-green-700 dark:text-wa-green-200">
                    <li><strong>What it is:</strong> An Elected PCO is voted into office by neighbors during the primary and serves a two-year term as the official representative for the precinct.</li>
                    <li><strong>Your Power:</strong> Vote on party leadership, help endorse candidates, and participate in key party decisions.</li>
                  </ul>
                  <div className="mt-6">
                    <a href="#timeline-heading">
                      <Button className="bg-wa-gold-500 text-wa-green-950 hover:bg-wa-gold-600 dark:bg-wa-gold-500 dark:hover:bg-wa-gold-400">
                        Jump to Timeline to Get Elected
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white dark:bg-slate-800/80 border-wa-green-100 dark:border-wa-green-700/50 shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-semibold text-wa-green-900 dark:text-wa-gold-300 mb-3">Path B: The Acting PCO Track</h4>
                  <p className="text-wa-green-700 dark:text-wa-green-200 mb-4">
                    Great news! You can start right away as an <strong>Acting PCO</strong> — a fantastic way to gain real organizing experience.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-wa-green-700 dark:text-wa-green-200">
                    <li><strong>What it is:</strong> Appointed by local party leaders to organize a precinct without a current PCO.</li>
                    <li><strong>Your Mission:</strong> Connect with voters and help recruit a resident to become the official PCO.</li>
                    <li><strong>Open to Youth:</strong> You don’t need to be 18 or a registered voter to be appointed Acting PCO.</li>
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/resources" target="_blank">
                      <Button variant="outline" className="border-wa-gold-500 text-wa-gold-700 dark:text-wa-gold-300 hover:bg-wa-gold-500 dark:hover:bg-wa-gold-500 hover:text-white dark:hover:text-wa-green-900 bg-transparent">
                        How to Become an Acting PCO
                      </Button>
                    </Link>
                    <Link href="/find-precinct" target="_blank">
                      <Button className="bg-wa-green-600 text-white hover:bg-wa-green-700 dark:bg-wa-green-700 dark:hover:bg-wa-green-600">
                        Find Vacant Precincts
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Filing Information Section */}
        <section className={`mb-16 transition-opacity duration-500 ${isEligible ? "opacity-100" : "opacity-50 dark:opacity-40"}`}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-wa-green-900 dark:text-wa-gold-300 mb-12">Filing for Office</h3>
            <Card className="bg-white dark:bg-slate-800/80 border-wa-green-100 dark:border-wa-green-700/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-wa-green-900 dark:text-wa-gold-300">Select Your County</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-wa-green-700 dark:text-wa-green-200 mb-6">
                  Each county has its own elections office where you'll file your candidacy. Select your county to find
                  the official website.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Select onValueChange={setCounty} disabled={!isEligible}>
                    <SelectTrigger className="w-full sm:w-[280px] bg-white dark:bg-slate-700 border-wa-green-200 dark:border-slate-600 dark:text-white">
                      <SelectValue placeholder="Choose your county..." />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-slate-800 dark:border-slate-700">
                      {counties.map(c => (
                        <SelectItem key={c} value={c.toLowerCase().replace(" ", "-")} className="dark:text-white dark:focus:bg-slate-700">
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button disabled={!isEligible || !county} className="bg-wa-gold-500 text-wa-green-950 hover:bg-wa-gold-600 dark:bg-wa-gold-500 dark:text-wa-green-950 dark:hover:bg-wa-gold-400">
                    Go to County Site <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16" aria-labelledby="timeline-heading">
          <div className="max-w-4xl mx-auto">
            <h3 id="timeline-heading" className="text-3xl font-bold text-center text-wa-green-900 dark:text-wa-gold-300 mb-12">
              Timeline to Get Elected!
            </h3>
            <ol className="space-y-8 relative" role="list">
              <div
                className="absolute left-6 top-6 bottom-6 w-0.5 bg-wa-green-200 dark:bg-wa-green-700/50"
                aria-hidden="true"
              ></div>
              {[
                {
                  step: "1",
                  title: "Research & Prepare",
                  description: "Learn about your precinct, attend party meetings, and connect with current PCOs",
                  timing: "Anytime",
                },
                {
                  step: "2",
                  title: "Filing Period",
                  description:
                    "File your candidacy with the county elections office during the designated filing period",
                  timing: "May (Election Years)",
                },
                {
                  step: "3",
                  title: "Campaign (if needed)",
                  description: "If there's competition, campaign in your precinct. Many positions are uncontested",
                  timing: "Summer",
                },
                {
                  step: "4",
                  title: "Election",
                  description: "PCOs are elected during the primary election in August",
                  timing: "August (Election Years)",
                },
                {
                  step: "5",
                  title: "Take Office",
                  description: "Begin your two-year term as a PCO and start making a difference",
                  timing: "December",
                },
              ].map((item, index) => (
                <li key={index} role="listitem" className="pl-12">
                  <Card className="bg-white dark:bg-slate-800/80 border-wa-green-100 dark:border-wa-green-700/50 shadow-lg hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-wa-green-500 dark:focus-within:ring-wa-gold-400">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="bg-wa-gold-400 text-wa-green-900 dark:bg-wa-gold-500 dark:text-wa-green-950 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0 absolute -left-6">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h4 className="text-xl font-semibold text-wa-green-900 dark:text-wa-gold-300">{item.title}</h4>
                            <span className="text-wa-gold-600 dark:text-wa-gold-400 font-medium">{item.timing}</span>
                          </div>
                          <p className="text-wa-green-700 dark:text-wa-green-200">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-white dark:bg-slate-800/80 border-wa-green-100 dark:border-wa-gold-700/50 shadow-lg hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-4">Ready to Take the Next Step?</h3>
              <p className="text-wa-green-700 dark:text-wa-green-200 mb-6">
                Find your precinct and see if there are current PCO vacancies in your area. You might be able to get
                appointed before the next election!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/find-precinct" target="_blank">
                  <Button className="bg-wa-gold-500 text-wa-green-950 hover:bg-wa-gold-600 dark:hover:bg-wa-gold-400">
                    Find Your Precinct <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/resources" target="_blank">
                  <Button
                    variant="outline"
                    className="border-wa-gold-500 text-wa-gold-700 dark:text-wa-gold-300 hover:bg-wa-gold-500 dark:hover:bg-wa-gold-500 hover:text-white dark:hover:text-wa-green-900 bg-transparent"
                  >
                    Get Resources <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
