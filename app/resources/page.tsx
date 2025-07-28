"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, Play, FileText, ExternalLink, Video, Download } from "lucide-react"

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
        "There's no filing fee to run for PCO. The main costs might be minimal campaign materials if you choose to campaign actively. Many PCOs spend less than $50 total, and some spend nothing at all.",
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
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Resources</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="text-center mb-16 bg-[url('/mountain.svg')] bg-cover bg-center py-24">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Resources & Support</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Everything you need to understand PCOs, get involved, and make a difference in your community. From videos
            to documents to answers to common questions.
          </p>
        </section>

        {/* Video Resources */}
        <section className="mb-16" aria-labelledby="videos-heading">
          <h2 id="videos-heading" className="text-3xl font-bold text-center text-gray-900 mb-12">
            Educational Videos
          </h2>
          <div className="grid md:grid-cols-3 gap-8" role="list">
            {videoResources.map((video, index) => (
              <Card
                key={index}
                className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-wa-green-500"
                role="listitem"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={`Thumbnail for ${video.title}`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <button
                      className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/60 transition-colors duration-200 rounded-t-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/40"
                      aria-label={`Play video: ${video.title}`}
                    >
                      <Play
                        className="h-12 w-12 text-white hover:scale-110 transition-transform duration-200"
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm"
                      aria-label={`Duration: ${video.duration}`}
                    >
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-700 text-sm">{video.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Document Resources */}
        <section className="mb-16" aria-labelledby="documents-heading">
          <h2 id="documents-heading" className="text-3xl font-bold text-center text-gray-900 mb-12">
            Documents & Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" role="list">
            {documentResources.map((doc, index) => (
              <Card
                key={index}
                className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-wa-green-500"
                role="listitem"
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <FileText className="h-10 w-10 text-wa-green-500 mr-4 flex-shrink-0" aria-hidden="true" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                      <p className="text-gray-700 text-sm mb-3">{doc.description}</p>
                      <div className="flex items-center justify-between">
                        <span
                          className="text-gray-600 text-sm"
                          aria-label={`File type: ${doc.type}, Size: ${doc.size}`}
                        >
                          {doc.type} • {doc.size}
                        </span>
                        <Button
                          size="sm"
                          className="bg-wa-green-500 text-white hover:bg-wa-green-600 focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2"
                          aria-label={`Download ${doc.title}`}
                        >
                          <Download className="h-4 w-4 mr-1" aria-hidden="true" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <Card className="bg-white shadow-md border border-gray-200 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger
                      className="text-gray-900 hover:text-wa-green-500 text-left py-3 font-medium focus:outline-none focus:ring-2 focus:ring-wa-green-500 focus:ring-offset-2 rounded-md"
                      aria-expanded={false}
                    >
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 py-3" role="region">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* External Resources */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Official Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <Video className="h-16 w-16 text-wa-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-4">WA Secretary of State</h4>
                <p className="text-gray-700 mb-6">
                  Official election information, candidate filing, and voter resources.
                </p>
                <a href="https://www.sos.wa.gov/elections/" target="_blank" rel="noopener noreferrer" className="group">
                  <Button className="bg-wa-green-500 text-white hover:bg-wa-green-600">
                    Visit SOS <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <span className="sr-only">Opens in new tab</span>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <FileText className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-4">WA State Democrats</h4>
                <p className="text-gray-700 mb-6">
                  Democratic party resources, training materials, and local contacts.
                </p>
                <a href="https://www.wa-democrats.org" target="_blank" rel="noopener noreferrer" className="group">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    Visit Democrats <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <span className="sr-only">Opens in new tab</span>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <FileText className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-4">WA State Republicans</h4>
                <p className="text-gray-700 mb-6">
                  Republican party resources, training programs, and county contacts.
                </p>
                <a href="https://www.wsrp.org" target="_blank" rel="noopener noreferrer" className="group">
                  <Button className="bg-red-500 hover:bg-red-600 text-white">
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
          <Card className="bg-white shadow-md border border-gray-200 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-gray-700 mb-6">
                The best way to learn more is to get involved! Attend a local party meeting, talk to current PCOs, and
                see democracy in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/find-precinct" target="_blank" className="group">
                  <Button className="bg-wa-green-500 text-white hover:bg-wa-green-600">
                    Find Your Precinct <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <span className="sr-only">Opens in new tab</span>
                </Link>
                <Link href="/become-pco" target="_blank" className="group">
                  <Button
                    variant="outline"
                    className="border-wa-green-500 text-wa-green-500 hover:bg-wa-green-500 hover:text-white bg-transparent"
                  >
                    Start Your Journey <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <span className="sr-only">Opens in new tab</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
