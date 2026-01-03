"use client"

import { useState, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, MapPin, Globe, ArrowRight, ArrowLeft, User, Clock, Info, HelpCircle } from "lucide-react"

const events = [
  {
    id: 1,
    name: "Hackathon 360 – 3.0",
    date: "2026-01-31",
    displayDate: "31 Jan 2026",
    mode: "Online",
    description: "The ultimate 24-hour innovation sprint for tech enthusiasts. Build, hack, and win amazing prizes.",
    fullDescription:
      "Join hundreds of developers, designers, and innovators in our third annual Hackathon 360. This year, we're focusing on 'Sustainable Tech' - building solutions that address climate change, resource management, and ethical AI. Whether you're a seasoned pro or a first-timer, there's a place for you to create something impactful.",
    agenda: [
      { time: "09:00 AM", task: "Opening Ceremony & Theme Reveal" },
      { time: "10:30 AM", task: "Hacking Begins" },
      { time: "02:00 PM", task: "Workshop: Rapid Prototyping" },
      { time: "08:00 PM", task: "Progress Sync & Mentorship Sessions" },
    ],
    speakers: [
      {
        name: "Alex Chen",
        role: "Senior Engineer @ Vercel",
        bio: "Open source contributor and performance optimization expert.",
      },
      {
        name: "Sarah Miller",
        role: "Product Designer",
        bio: "Specializing in accessible UI/UX for emerging technologies.",
      },
    ],
    faqs: [
      {
        question: "Who can participate?",
        answer: "Any college student or recent graduate (within 1 year) can participate.",
      },
      {
        question: "Is there any registration fee?",
        answer: "No, Hackathon 360 is completely free for all participants.",
      },
    ],
  },
  {
    id: 2,
    name: "AI Research Workshop",
    date: "2026-02-12",
    displayDate: "12 Feb 2026",
    mode: "Offline",
    description: "Deep dive into the latest LLM architectures and research papers.",
    fullDescription:
      "An intensive day-long workshop focused on the practical implementation of Large Language Models. We will cover fine-tuning techniques, RAG architectures, and evaluation frameworks. Participants will have access to high-performance compute clusters for hands-on exercises.",
    agenda: [
      { time: "10:00 AM", task: "LLM Fundamentals & Transformers" },
      { time: "01:00 PM", task: "Lunch Break" },
      { time: "02:00 PM", task: "Fine-tuning Lab: Hands-on" },
      { time: "04:30 PM", task: "Future Trends in Generative AI" },
    ],
    speakers: [
      {
        name: "Dr. Elena Rossi",
        role: "AI Researcher",
        bio: "Leading expert in neural network architectures and model interpretability.",
      },
    ],
    faqs: [
      {
        question: "Will participants get a certificate?",
        answer: "Yes, a certificate of completion will be provided to all attendees.",
      },
      {
        question: "Is the event online or offline?",
        answer: "This is a strictly offline event held at the Main Auditorium.",
      },
    ],
  },
  {
    id: 3,
    name: "EdTech Innovation Summit",
    date: "2026-02-20",
    displayDate: "20 Feb 2026",
    mode: "Online",
    description: "Exploring the future of education through digital transformation.",
    fullDescription:
      "A global gathering of educators, technologists, and policymakers. We'll discuss how AI is personalizing learning, the role of VR in the classroom, and making quality education accessible to everyone, everywhere.",
    agenda: [
      { time: "04:00 PM", task: "Keynote: The Classroom of 2030" },
      { time: "05:30 PM", task: "Panel Discussion: AI in K-12" },
      { time: "07:00 PM", task: "Interactive Demo: Metaverse Learning" },
    ],
    speakers: [
      {
        name: "James Wilson",
        role: "EdTech Strategist",
        bio: "Former educator turned tech founder focusing on literacy apps.",
      },
      {
        name: "Maya Patel",
        role: "Policy Advisor",
        bio: "Expert in digital equity and educational resource distribution.",
      },
    ],
    faqs: [
      {
        question: "Is it recorded?",
        answer: "Yes, all sessions will be recorded and available for 30 days post-event.",
      },
    ],
  },
  {
    id: 4,
    name: "College Tech Fest",
    date: "2026-03-05",
    displayDate: "05 Mar 2026",
    mode: "Offline",
    description: "Annual celebration of engineering, creativity, and competition.",
    fullDescription:
      "Our biggest annual event featuring technical competitions, cultural performances, and networking opportunities with industry leaders. From robotics battles to coding challenges, there's something for every tech enthusiast.",
    agenda: [
      { time: "09:00 AM", task: "Inauguration" },
      { time: "11:00 AM", task: "Robo-Wars: Round 1" },
      { time: "02:00 PM", task: "Coding Challenge: Final Round" },
      { time: "06:00 PM", task: "Cultural Night & Awards" },
    ],
    speakers: [
      {
        name: "Siddharth Malhotra",
        role: "CTO, TechCorp",
        bio: "Alumni speaker sharing insights on scaling tech businesses.",
      },
    ],
    faqs: [
      {
        question: "Is outside food allowed?",
        answer: "Food stalls will be available at the venue; outside food is restricted.",
      },
    ],
  },
  {
    id: 5,
    name: "Design Systems Workshop",
    date: "2026-03-15",
    displayDate: "15 Mar 2026",
    mode: "Online",
    description: "Mastering the art of building scalable and accessible design systems.",
    fullDescription:
      "A deep dive into the architecture of modern design systems. We'll explore tokens, component patterns, and the documentation workflows that bridge the gap between design and development. Perfect for product designers and front-end engineers.",
    agenda: [
      { time: "10:00 AM", task: "Introduction to Design Tokens" },
      { time: "12:00 PM", task: "Scalable Component Architecture" },
      { time: "03:00 PM", task: "Documentation & Handoff Strategies" },
    ],
    speakers: [
      {
        name: "Emily Zhao",
        role: "Design Lead @ Figma",
        bio: "Specialist in systemic design and creative automation.",
      },
    ],
    faqs: [
      {
        question: "Do I need design software installed?",
        answer: "Having Figma installed is recommended but not mandatory as we will use browser-based tools.",
      },
    ],
  },
  {
    id: 6,
    name: "Web3 Developer Summit",
    date: "2026-04-02",
    displayDate: "02 Apr 2026",
    mode: "Offline",
    description: "Building the decentralized future with Ethereum and beyond.",
    fullDescription:
      "Join the core developers and pioneers of the Web3 ecosystem for a day of technical talks and networking. We'll discuss smart contract security, Layer 2 scaling solutions, and the latest in decentralized finance (DeFi) and identity.",
    agenda: [
      { time: "09:00 AM", task: "State of the Web3 Ecosystem" },
      { time: "11:30 AM", task: "Smart Contract Security Best Practices" },
      { time: "02:30 PM", task: "L2 Solutions & Zero Knowledge Proofs" },
      { time: "05:00 PM", task: "Networking Mixer" },
    ],
    speakers: [
      {
        name: "David Hoffmann",
        role: "Blockchain Architect",
        bio: "Expert in EVM-compatible protocols and distributed systems.",
      },
    ],
    faqs: [
      {
        question: "Is prior blockchain experience required?",
        answer:
          "A solid understanding of JavaScript is required; previous Web3 experience is helpful but not mandatory.",
      },
    ],
  },
]

export default function EventPlatform() {
  const [filter, setFilter] = useState("All")
  const [isSorted, setIsSorted] = useState(false)
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null)

  const processedEvents = useMemo(() => {
    const result = [...events].filter((event) => (filter === "All" ? true : event.mode === filter))
    if (isSorted) {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    }
    return result
  }, [filter, isSorted])

  const selectedEvent = events.find((e) => e.id === selectedEventId)

  if (selectedEvent) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <nav className="border-b border-border/40 sticky top-0 bg-background/80 backdrop-blur-md z-50">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedEventId(null)}
              className="uppercase tracking-widest text-[10px] font-bold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Events
            </Button>
            <div className="text-xl font-bold tracking-tighter uppercase italic">EventHub</div>
            <div className="w-24 md:block hidden" />
          </div>
        </nav>

        <main className="container mx-auto px-6 py-12 max-w-4xl">
          <Badge
            variant="outline"
            className={`rounded-none px-3 py-1 text-[10px] uppercase tracking-widest font-bold mb-6 ${selectedEvent.mode === "Online" ? "text-blue-500 border-blue-500/30" : "text-orange-500 border-orange-500/30"}`}
          >
            {selectedEvent.mode === "Online" ? <Globe className="w-3 h-3 mr-2" /> : <MapPin className="w-3 h-3 mr-2" />}
            {selectedEvent.mode}
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-none">{selectedEvent.name}</h1>
          <div className="flex items-center text-sm font-mono opacity-60 mb-12">
            <Calendar className="w-4 h-4 mr-2" /> {selectedEvent.displayDate}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4 flex items-center">
                  <Info className="w-3 h-3 mr-2" /> About Event
                </h2>
                <p className="text-lg leading-relaxed">{selectedEvent.fullDescription}</p>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6 flex items-center">
                  <Clock className="w-3 h-3 mr-2" /> Agenda
                </h2>
                <div className="space-y-4 border-l border-border pl-6 ml-2">
                  {selectedEvent.agenda.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-foreground" />
                      <div className="font-mono text-[10px] opacity-50 uppercase tracking-widest mb-1">{item.time}</div>
                      <div className="font-bold">{item.task}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6 flex items-center">
                  <HelpCircle className="w-3 h-3 mr-2" /> FAQs
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {selectedEvent.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
                      <AccordionTrigger className="text-sm font-bold uppercase tracking-widest py-6 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>

            <aside className="space-y-12">
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6 flex items-center">
                  <User className="w-3 h-3 mr-2" /> Speakers
                </h2>
                <div className="space-y-6">
                  {selectedEvent.speakers.map((speaker, idx) => (
                    <div key={idx} className="border border-border p-6 group hover:bg-secondary/50 transition-colors">
                      <div className="font-bold text-lg mb-1">{speaker.name}</div>
                      <div className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-3">
                        {speaker.role}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{speaker.bio}</p>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-border/40 sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter uppercase italic">EventHub</div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsSorted(!isSorted)}
              className={`uppercase tracking-widest text-[10px] font-bold rounded-none ${isSorted ? "bg-foreground text-background" : ""}`}
            >
              {isSorted ? "Earliest First" : "Schedule View"}
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 md:py-24">
        <section className="mb-20">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-balance">
            Upcoming <span className="text-muted-foreground">Events</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-t border-border pt-8">
            <Tabs defaultValue="All" className="w-full md:w-auto" onValueChange={setFilter}>
              <TabsList className="bg-transparent border border-border h-auto p-1 gap-1">
                {["All", "Online", "Offline"].map((m) => (
                  <TabsTrigger
                    key={m}
                    value={m}
                    className="px-6 py-2 uppercase tracking-widest text-[10px] font-bold data-[state=active]:bg-foreground data-[state=active]:text-background rounded-none transition-all"
                  >
                    {m} Events
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            <div className="text-xs font-mono opacity-50 uppercase tracking-[0.2em]">
              {processedEvents.length} events found
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border-x border-y border-border">
          {processedEvents.map((event) => (
            <Card
              key={event.id}
              onClick={() => setSelectedEventId(event.id)}
              className="bg-background border-none rounded-none hover:bg-secondary/30 transition-colors group cursor-pointer h-full"
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <Badge
                    variant="outline"
                    className={`rounded-none px-3 py-1 text-[10px] uppercase tracking-widest font-bold border-border ${event.mode === "Online" ? "text-blue-500 border-blue-500/30" : "text-orange-500 border-orange-500/30"}`}
                  >
                    {event.mode}
                  </Badge>
                  <div className="text-[10px] font-mono opacity-40">#{event.id}</div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 tracking-tight leading-none group-hover:text-primary transition-colors">
                    {event.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-6 leading-relaxed">{event.description}</p>
                </div>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-border/50">
                  <div className="flex items-center text-[10px] font-bold uppercase tracking-widest">
                    <Calendar className="w-3 h-3 mr-2 opacity-50" />
                    {event.displayDate}
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}
