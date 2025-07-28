"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle, XCircle, ExternalLink } from "lucide-react"

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
    <div className="bg-gradient-to-br from-slate-50 via-white to-wa-green-50">
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-wa-green-700 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-wa-green-100 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-wa-green-700 hover:text-wa-green-900 transition-colors duration-200 group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-wa-green-900">Become a PCO</h1>
          </div>
        </div>
      </header>

      <div className="container py-16 max-w-6xl mx-auto" id="main-content">
        {/* Introduction */}
        <section className="text-center mb-20 bg-mountain-pattern">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wa-green-900 mb-8 leading-tight">
              Your Path to Becoming a PCO
            </h2>
            <p className="text-xl lg:text-2xl text-wa-green-700 leading-relaxed">
              Follow this interactive guide to understand the requirements and process for becoming a Precinct Committee
              Officer in Washington State.
            </p>
          </div>
        </section>

        {/* Interactive Flowchart */}
        <section className="mb-16" aria-labelledby="eligibility-heading">
          <Card className="bg-white border-wa-green-100 shadow-lg hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle id="eligibility-heading" className="text-3xl text-wa-green-900 text-center">
                Eligibility Check
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form role="form" aria-labelledby="eligibility-heading">
                {flowchartSteps.map((step, index) => (
                  <fieldset
                    key={step.id}
                    className={`mb-8 ${currentStep < step.id ? "opacity-50" : ""}`}
                    disabled={currentStep < step.id}
                  >
                    <legend className="flex items-center mb-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                          currentStep >= step.id ? "bg-wa-gold text-wa-green" : "bg-gray-600 text-white"
                        }`}
                        aria-hidden="true"
                      >
                        {step.id}
                      </div>
                      <h3 className="text-xl font-semibold text-wa-green-900">{step.title}</h3>
                    </legend>

                    <div className="ml-12">
                      <p className="text-wa-green-700 mb-4">{step.question}</p>
                      <div className="grid gap-3" role="radiogroup" aria-labelledby={`step-${step.id}-title`}>
                        {step.options.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            role="radio"
                            aria-checked={step.value === option.value}
                            onClick={() => {
                              step.setValue(option.value)
                              if (currentStep === step.id) {
                                setTimeout(nextStep, 500)
                              }
                            }}
                            className={`flex items-center p-4 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 ${
                              step.value === option.value
                                ? "bg-wa-gold/20 border-wa-gold text-wa-green-900"
                                : "bg-white/5 border-white/20 text-wa-green-700 hover:bg-white/10"
                            }`}
                            disabled={currentStep < step.id}
                            aria-describedby={step.value === option.value ? `${option.value}-description` : undefined}
                          >
                            <option.icon
                              className={`h-5 w-5 mr-3 ${step.value === option.value ? option.color : "text-gray-400"}`}
                              aria-hidden="true"
                            />
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </fieldset>
                ))}
              </form>

              {/* Results */}
              {age && registered && (
                <div className="mt-8 p-6 rounded-lg border-2 border-wa-gold/50" role="alert" aria-live="polite">
                  {isEligible ? (
                    <div className="text-center">
                      <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" aria-hidden="true" />
                      <h3 className="text-2xl font-bold text-wa-green-900 mb-4">
                        Great! You're Eligible to Become a PCO
                      </h3>
                      <p className="text-wa-green-700 mb-6">
                        You meet the basic requirements. Now let's help you find your county information.
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <XCircle className="h-16 w-16 text-red-400 mx-auto mb-4" aria-hidden="true" />
                      <h3 className="text-2xl font-bold text-wa-green-900 mb-4">
                        {age === "under18" ? "Not Yet Eligible" : "Registration Required"}
                      </h3>
                      <p className="text-wa-green-700 mb-6">
                        {age === "under18"
                          ? "You must be 18 or older to serve as a PCO. Keep this in mind for the future!"
                          : "You need to register to vote in Washington State first."}
                      </p>
                      {registered === "no" && (
                        <a href="https://voter.votewa.gov/WhereToVote.aspx" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-wa-gold text-wa-green hover:bg-wa-gold/90">
                            Register to Vote <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* County Selector */}
        {isEligible && (
          <section className="mb-16" aria-labelledby="county-heading">
            <Card className="bg-white border-wa-green-100 shadow-lg hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle id="county-heading" className="text-2xl text-wa-green-900 text-center">
                  Select Your County
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <label htmlFor="county-select" className="sr-only">
                  Choose your county
                </label>
                <Select value={county} onValueChange={setCounty}>
                  <SelectTrigger
                    id="county-select"
                    className="w-full bg-white/10 border-wa-gold/30 text-wa-green-900 focus:ring-2 focus:ring-wa-green-500"
                  >
                    <SelectValue placeholder="Choose your county" />
                  </SelectTrigger>
                  <SelectContent>
                    {counties.map((countyName) => (
                      <SelectItem key={countyName} value={countyName}>
                        {countyName} County
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {county && (
                  <div className="mt-6 p-4 bg-wa-gold/10 rounded-lg">
                    <h4 className="text-lg font-semibold text-wa-green-900 mb-2">Next Steps for {county} County:</h4>
                    <ul className="text-wa-green-700 space-y-2">
                      <li>• Contact your county party organization</li>
                      <li>• Check for current PCO vacancies in your precinct</li>
                      <li>• Attend a local party meeting</li>
                      <li>• File your candidacy during the filing period</li>
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        )}

        {/* Process Timeline */}
        <section className="mb-16" aria-labelledby="timeline-heading">
          <h2 id="timeline-heading" className="text-3xl font-bold text-center text-wa-green-900 mb-12">
            The PCO Process Timeline
          </h2>
          <div className="max-w-4xl mx-auto">
            <ol className="space-y-6" role="list">
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
                  description: "Begin your 4-year term as a PCO and start making a difference",
                  timing: "December",
                },
              ].map((item, index) => (
                <li key={index} role="listitem">
                  <Card className="bg-white border-wa-green-100 shadow-lg hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-wa-green-500">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="bg-wa-gold text-wa-green w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h4 className="text-xl font-semibold text-wa-green-900">{item.title}</h4>
                            <span className="text-wa-gold font-medium">{item.timing}</span>
                          </div>
                          <p className="text-wa-green-700">{item.description}</p>
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
          <Card className="bg-white border-wa-green-100 shadow-lg hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-wa-green-900 mb-4">Ready to Take the Next Step?</h3>
              <p className="text-wa-green-700 mb-6">
                Find your precinct and see if there are current PCO vacancies in your area. You might be able to get
                appointed before the next election!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/find-precinct" target="_blank">
                  <Button className="bg-wa-gold text-wa-green hover:bg-wa-gold/90">
                    Find Your Precinct <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/resources" target="_blank">
                  <Button
                    variant="outline"
                    className="border-wa-gold text-wa-gold hover:bg-wa-gold hover:text-wa-green bg-transparent"
                  >
                    Get Resources <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
