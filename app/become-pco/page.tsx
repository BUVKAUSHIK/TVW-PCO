"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, XCircle, ExternalLink } from "lucide-react"
import { DarkModeToggle } from "@/components/dark-mode-toggle"

export default function BecomePCO() {
  const [age, setAge] = useState("")
  const [registered, setRegistered] = useState("")
  const [county, setCounty] = useState("")
  const [currentStep, setCurrentStep] = useState(1)
  const [activeTimelineStep, setActiveTimelineStep] = useState("item-1")
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: string | null }>({})
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const timelineSteps = [
    {
      step: "1",
      title: "Research & Prepare",
      timing: "Anytime",
      details: [
        "Find your precinct number and boundaries.",
        "Attend local party meetings to network.",
        "Learn the key issues in your community.",
        "Connect with current PCOs for advice.",
      ],
    },
    {
      step: "2",
      title: "Filing Period",
      timing: "May (Election Years)",
      details: [
        "Official filing week is typically in May of even-numbered years.",
        "File your candidacy with your county elections office.",
        "There is no fee to file for PCO.",
      ],
    },
    {
      step: "3",
      title: "Campaign (if needed)",
      timing: "Summer",
      details: [
        "Many PCO positions are uncontested.",
        "If another person files, you'll need to campaign.",
        "Talk to your neighbors and ask for their vote.",
      ],
    },
    {
      step: "4",
      title: "Election",
      timing: "August (Election Years)",
      details: [
        "Your name will appear on the Primary Election ballot.",
        "Only voters in your precinct can vote for you.",
        "The winner is decided in the August Primary.",
      ],
    },
    {
      step: "5",
      title: "Take Office",
      timing: "December 1st",
      details: [
        "If you win the election, you are officially certified.",
        "Your two-year term as a PCO begins on December 1st.",
        "You become a voting member of your local party organization.",
      ],
    },
  ]

  const mythFactQuiz = [
    {
      id: 1,
      statement: "You have to be 18 to be an Elected PCO.",
      isFact: true,
      answer: "FACT!",
      explanation: "To be an Elected PCO, you must be a registered voter, which requires you to be 18. However, anyone can be an Acting PCO regardless of age!",
      quote: "An elected PCO must be a registered voter in the precinct they wish to represent.",
    },
    {
      id: 2,
      statement: "You have to pay a fee to run for PCO.",
      isFact: false,
      answer: "MYTH!",
      explanation: "Filing to become a PCO is free because it is an unpaid, volunteer party position.",
      quote: "Because PCO positions are unpaid, there is no filing fee.",
    },
    {
      id: 3,
      statement: "Being a PCO takes up all your free time.",
      isFact: false,
      answer: "MYTH!",
      explanation: "The time commitment is flexible. The handbook suggests a few hours a month, but you can contribute as much or as little time as you have.",
      quote: "The PCO role is what you make of it... A PCO can be effective in as little as 4-5 hours per month.",
    },
    {
      id: 4,
      statement: "PCOs have to donate a lot of money.",
      isFact: false,
      answer: "MYTH!",
      explanation: "There is no requirement to donate. A PCO's main role is to organize and connect with voters, not to be a fundraiser.",
      quote: "There is no requirement that a PCO donate any money.",
    },
    {
      id: 5,
      statement: "You can only be an Elected PCO.",
      isFact: false,
      answer: "MYTH!",
      explanation: "Besides being Elected, you can also be an Appointed PCO (if a seat is vacant) or an Acting PCO (to help organize a vacant precinct).",
      quote: "There are three types of PCOs: Elected, Appointed, and Acting.",
    },
  ]

  const handleQuizAnswer = (id: number, answer: string) => {
    if (quizAnswers[id]) return // Prevent answering twice

    const question = mythFactQuiz.find(q => q.id === id)
    if (question) {
      const isCorrect = (question.isFact && answer === "fact") || (!question.isFact && answer === "myth")
      if (isCorrect) {
        setQuizScore(prev => prev + 1)
      }
    }
    setQuizAnswers(prev => ({ ...prev, [id]: answer }))
  }

  const handleNextQuestion = () => {
    if (currentQuizQuestion < mythFactQuiz.length - 1) {
      setCurrentQuizQuestion(prev => prev + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setQuizAnswers({})
    setCurrentQuizQuestion(0)
    setQuizScore(0)
    setQuizCompleted(false)
  }

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

        {/* Timeline Section */}
        <section className="mb-16" aria-labelledby="timeline-heading">
          <div className="max-w-4xl mx-auto">
            <h3
              id="timeline-heading"
              className="text-3xl font-bold text-center text-wa-green-900 dark:text-wa-gold-300 mb-12"
            >
              Timeline to Get Elected!
            </h3>
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
              value={activeTimelineStep}
              onValueChange={setActiveTimelineStep}
            >
              {timelineSteps.map((item, index) => (
                <AccordionItem
                  key={item.step}
                  value={`item-${index + 1}`}
                  className="border-2 border-wa-green-100 dark:border-wa-green-700/50 bg-white dark:bg-slate-800/80 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <AccordionTrigger className="p-6 text-left hover:no-underline">
                    <div className="flex items-center">
                      <div className="bg-wa-gold-400 text-wa-green-900 dark:bg-wa-gold-500 dark:text-wa-green-950 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <h4 className="text-xl font-semibold text-wa-green-900 dark:text-wa-gold-300">
                            {item.title}
                          </h4>
                          <span className="text-sm text-wa-gold-600 dark:text-wa-gold-400 font-medium mt-1 sm:mt-0">
                            {item.timing}
                          </span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0 pl-20">
                    <ul className="list-disc list-inside space-y-2 text-wa-green-700 dark:text-wa-green-200">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* PCO Myth vs. Fact Quiz */}
        <section className="mb-16" aria-labelledby="myth-fact-heading">
          <div className="max-w-4xl mx-auto">
            <h3 id="myth-fact-heading" className="text-3xl font-bold text-center text-wa-green-900 dark:text-wa-gold-300 mb-12">
              PCO Myth vs. Fact
            </h3>
            <Card className="bg-white dark:bg-slate-800/80 border-wa-green-100 dark:border-wa-green-700/50 shadow-lg overflow-hidden min-h-[350px]">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                {!quizCompleted ? (
                  <div>
                    <p className="text-center text-sm font-medium text-wa-green-600 dark:text-wa-green-400 mb-2">
                      Question {currentQuizQuestion + 1} of {mythFactQuiz.length}
                    </p>
                    <p className="text-xl font-semibold text-wa-green-800 dark:text-wa-green-200 mb-6 text-center min-h-[60px]">
                      {mythFactQuiz[currentQuizQuestion].statement}
                    </p>
                    {!quizAnswers[mythFactQuiz[currentQuizQuestion].id] ? (
                      <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Button
                          onClick={() => handleQuizAnswer(mythFactQuiz[currentQuizQuestion].id, "fact")}
                          className="flex-1 py-6 text-lg bg-wa-green-600 text-white hover:bg-wa-green-700"
                        >
                          Fact
                        </Button>
                        <Button
                          onClick={() => handleQuizAnswer(mythFactQuiz[currentQuizQuestion].id, "myth")}
                          className="flex-1 py-6 text-lg bg-wa-gold-500 text-wa-green-950 hover:bg-wa-gold-600"
                        >
                          Myth
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div
                          className={`p-4 rounded-lg border-2 ${
                            (mythFactQuiz[currentQuizQuestion].isFact && quizAnswers[mythFactQuiz[currentQuizQuestion].id] === "fact") ||
                            (!mythFactQuiz[currentQuizQuestion].isFact && quizAnswers[mythFactQuiz[currentQuizQuestion].id] === "myth")
                              ? "bg-green-50 dark:bg-green-900/50 border-green-200 dark:border-green-700"
                              : "bg-red-50 dark:bg-red-900/50 border-red-200 dark:border-red-700"
                          }`}
                        >
                          <h4
                            className={`text-xl font-bold ${
                              (mythFactQuiz[currentQuizQuestion].isFact && quizAnswers[mythFactQuiz[currentQuizQuestion].id] === "fact") ||
                              (!mythFactQuiz[currentQuizQuestion].isFact && quizAnswers[mythFactQuiz[currentQuizQuestion].id] === "myth")
                                ? "text-green-800 dark:text-green-300"
                                : "text-red-800 dark:text-red-300"
                            }`}
                          >
                            {quizAnswers[mythFactQuiz[currentQuizQuestion].id] === (mythFactQuiz[currentQuizQuestion].isFact ? "fact" : "myth") ? "Correct!" : "Incorrect."}{` `}
                            The answer is {mythFactQuiz[currentQuizQuestion].answer}
                          </h4>
                          <p className="mt-2 text-wa-green-700 dark:text-wa-green-300">{mythFactQuiz[currentQuizQuestion].explanation}</p>
                        </div>
                        <Button onClick={handleNextQuestion} className="mt-6">
                          {currentQuizQuestion < mythFactQuiz.length - 1 ? "Next Question" : "See Results"}
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <h4 className="text-3xl font-bold text-wa-green-900 dark:text-wa-gold-300">Quiz Complete!</h4>
                    <p className="text-xl text-wa-green-700 dark:text-wa-green-200 mt-4">
                      You scored {quizScore} out of {mythFactQuiz.length}!
                    </p>
                    <Button onClick={resetQuiz} className="mt-8">
                      Try Again
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
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
