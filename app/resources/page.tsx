"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, Play, FileText, ExternalLink, Video, Download } from "lucide-react"
import { DarkModeToggle } from "@/components/dark-mode-toggle"

export default function Resources() {
  const videoResources = [
    {
      title: "What is a PCO? - Introduction Video",
      description: "A 5-minute overview of the PCO role and responsibilities",
      duration: "5:23",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "How to Run for PCO",
      description: "Step-by-step guide to filing and campaigning for PCO",
      duration: "8:15",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "PCO Success Stories",
      description: "Young PCOs share their experiences and impact",
      duration: "12:45",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ]

  const documentResources = [
    {
      title: "PCO Handbook 2024",
      description: "Complete guide to PCO duties, rights, and responsibilities",
      type: "PDF",
      size: "2.3 MB",
    },
    {
      title: "Filing Requirements Checklist",
      description: "Everything you need to file as a PCO candidate",
      type: "PDF",
      size: "450 KB",
    },
    {
      title: "County Contact Directory",
      description: "Contact information for all 39 county party organizations",
      type: "PDF",
      size: "1.1 MB",
    },
    {
      title: "Sample Campaign Materials",
      description: "Templates for flyers, door hangers, and social media posts",
      type: "ZIP",
      size: "5.7 MB",
    },
  ]

  const faqItems = [
    {
      question: "How much time does being a PCO require?",
      answer:
        "Most PCOs spend 2-5 hours per month on their duties. This includes attending monthly party meetings, occasional community events, and staying informed about local issues. During election seasons, you might spend a bit more time helping with campaigns or voter outreach.",
    },
    {
      question: "Do I need political experience to be a PCO?",
      answer:
        "No! Many successful PCOs start with no political experience. The role is designed to be accessible to everyday citizens. Your passion for your community and willingness to learn are more important than prior experience.",
    },
    {
      question: "What if I disagree with some party positions?",
      answer:
        "It's normal to not agree with every party position. As a PCO, you help shape the party's direction at the local level. Your voice and perspective can influence party priorities and candidate selections in your area.",
    },
    {
      question: "Can I be a PCO if I'm in college or move frequently?",
      answer:
        "You need to be a resident of your precinct to serve as PCO. If you're in college locally, you can serve. If you move, you'd need to step down and could potentially run in your new precinct. Some students wait until they're more settled to run.",
    },
    {
      question: "What happens if no one runs against me?",
      answer:
        "Many PCO positions are uncontested! If you're the only candidate, you'll automatically win. This is actually very common - about 40% of PCO positions in Washington are vacant.",
    },
    {
      question: "How do I connect with other young PCOs?",
      answer:
        "Both major parties have young professional groups and social media communities. Your county party can connect you with other PCOs in your area. Many counties also have mentorship programs for new PCOs.",
    },
    {
      question: "What if I want to switch parties later?",
      answer:
        "You can only serve as a PCO for one party at a time. If you want to switch parties, you'd need to resign your current position and could potentially run for the other party in the next election cycle.",
    },
    {
      question: "Are there any costs involved in being a PCO?",
      answer:
        "Being a PCO is a volunteer position, so there are no fees to run or serve. Some PCOs choose to spend a small amount on campaign materials like flyers, but this is not required. Many local parties offer resources to help with these costs.",
    },
  ]

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
            <h1 className="text-2xl font-bold text-wa-green-900 dark:text-wa-gold-300 mr-16">Resources & FAQ</h1>
          </div>
        </div>
      </header>

      <main id="main-content" className="container mx-auto px-4 py-12">
        {/* Video Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-8 text-center">Video Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white dark:bg-slate-800 shadow-md border border-wa-green-100 dark:border-wa-green-800 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/3UtOorj4RJ8"
                    title="What is a PCO?"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </CardContent>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-wa-green-900 dark:text-wa-gold-300">What is a PCO?</h3>
              </div>
            </Card>

            <Card className="bg-white dark:bg-slate-800 shadow-md border border-wa-green-100 dark:border-wa-green-800 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/SNcMl8hlyow"
                    title="How to Become a PCO"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </CardContent>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-wa-green-900 dark:text-wa-gold-300">How to Become a PCO</h3>
              </div>
            </Card>
          </div>
        </section>

        {/* Document Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-8 text-center">Documents & Downloads</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentResources.map((doc, index) => (
              <Card key={index} className="bg-white dark:bg-slate-800 shadow-md border border-wa-green-100 dark:border-wa-green-800 text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col items-center justify-center h-full">
                  <FileText className="h-16 w-16 text-wa-green-500 dark:text-wa-green-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-lg font-semibold text-wa-green-900 dark:text-wa-gold-300 mb-2 flex-grow">{doc.title}</h3>
                  <p className="text-wa-green-700 dark:text-wa-green-200 text-sm mb-4">{doc.description}</p>
                  <Button className="bg-wa-green-600 text-white hover:bg-wa-green-700 dark:bg-wa-green-700 dark:hover:bg-wa-green-600 w-full mt-auto">
                    <Download className="mr-2 h-4 w-4" />
                    {doc.type} ({doc.size})
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-8 text-center">Frequently Asked Questions</h2>
          <Card className="bg-white dark:bg-slate-800 shadow-md border border-wa-green-100 dark:border-wa-green-800 max-w-4xl mx-auto">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b-wa-green-100 dark:border-b-wa-green-700/50">
                    <AccordionTrigger className="text-lg font-semibold text-wa-green-800 dark:text-wa-green-200 hover:text-wa-green-600 dark:hover:text-wa-gold-300 text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-wa-green-700 dark:text-wa-green-300 text-base leading-relaxed pt-2">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* External Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-8 text-center">Official External Links</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-slate-800 shadow-md border border-wa-green-100 dark:border-wa-green-800 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <FileText className="h-16 w-16 text-wa-green-500 dark:text-wa-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-wa-green-900 dark:text-wa-gold-300 mb-4">WA Secretary of State</h4>
                <p className="text-wa-green-700 dark:text-wa-green-200 mb-6">
                  Official election information, candidate filing, and voter resources.
                </p>
                <a href="https://www.sos.wa.gov/elections/" target="_blank" rel="noopener noreferrer" className="group">
                  <Button className="bg-wa-green-600 text-white hover:bg-wa-green-700 dark:bg-wa-green-700 dark:hover:bg-wa-green-600">
                    Visit SOS <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <span className="sr-only">Opens in new tab</span>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 shadow-md border border-wa-green-100 dark:border-wa-green-800 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <FileText className="h-16 w-16 text-blue-500 dark:text-blue-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-4">WA State Democrats</h4>
                <p className="text-wa-green-700 dark:text-wa-green-200 mb-6">
                  Democratic party resources, training materials, and local contacts.
                </p>
                <a href="https://www.wa-democrats.org" target="_blank" rel="noopener noreferrer" className="group">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Visit Democrats <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <span className="sr-only">Opens in new tab</span>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 shadow-md border border-wa-green-100 dark:border-wa-green-800 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <FileText className="h-16 w-16 text-red-500 dark:text-red-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-4">WA State Republicans</h4>
                <p className="text-wa-green-700 dark:text-wa-green-200 mb-6">
                  Republican party resources, training programs, and county contacts.
                </p>
                <a href="https://www.wsrp.org" target="_blank" rel="noopener noreferrer" className="group">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Visit Republicans <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <span className="sr-only">Opens in new tab</span>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-white dark:bg-slate-800 shadow-xl border border-wa-gold-200 dark:border-wa-gold-700/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-wa-green-900 dark:text-wa-gold-300 mb-4">Still Have Questions?</h3>
              <p className="text-wa-green-700 dark:text-wa-green-200 mb-6">
                The best way to learn more is to get involved! Attend a local party meeting, talk to current PCOs, and
                see democracy in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/find-precinct" target="_blank" className="group">
                  <Button className="bg-wa-green-600 text-white hover:bg-wa-green-700 dark:bg-wa-green-700 dark:hover:bg-wa-green-600">
                    Find Your Precinct <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <span className="sr-only">Opens in new tab</span>
                </Link>
                <Link href="/become-pco" target="_blank" className="group">
                  <Button
                    variant="outline"
                    className="border-wa-gold-500 text-wa-gold-700 dark:text-wa-gold-300 hover:bg-wa-gold-500 dark:hover:bg-wa-gold-500 hover:text-white dark:hover:text-wa-green-900 bg-transparent"
                  >
                    Start Your Journey <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <span className="sr-only">Opens in new tab</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
