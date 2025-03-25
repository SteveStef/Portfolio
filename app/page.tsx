"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import sponsorlab from "../SponsorLab.png";
import mainlinerealty from "../mainlinerealty.png";
import mainlinecleaner from "../mainlinecleaners.png";
import {
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Code,
  Server,
  Database,
  Coffee,
  Palette,
  FileCode,
  Leaf,
  Cloud,
  Box,
  GitBranch,
  Users,
  Target,
  Globe,
  Repeat,
  User,
  Briefcase,
  GraduationCap,
  Heart,
  Award,
  MapPin,
  Clock,
  BookOpen,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Phone,
  Calendar,
Layers,
} from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SectionHeading } from "@/components/section-heading"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { CareerNavItem } from "@/components/career-nav-item"
import { ExperienceCard } from "@/components/experience-card"
import { useScrollToSection } from "@/components/scroll-to-section"
import { SkillProficiencyCard } from "@/components/skill-proficiency-card"
import { SkillCategory } from "@/components/skill-category"
import { AnimatedStats } from "@/components/animated-stats"
import { TabContent } from "@/components/tab-content"
import { AnimatedText } from "@/components/animated-text"
import { InteractiveCard } from "@/components/interactive-card"

export default function Home() {
  const [activeExperience, setActiveExperience] = useState("amazon")
  useScrollToSection()


  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
<section className="relative py-20 md:py-32 overflow-hidden" id="home">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-[100px] z-0"></div>

      {/* Animated background shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 animate-pulse-slow z-0"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-primary/10 animate-bounce-slow z-0"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Left content column - takes 3/5 of the space */}
          <AnimateOnScroll animation="opacity-100 translate-x-0" className="-translate-x-8 md:col-span-3">
            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Stephen Stefanatos
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">Software Engineer & CTO</p>
              </div>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                I enjoy building fullstack applications in both startup and enterprise environments.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Link href="#contact">
                  <Button size="lg" className="gap-2 rounded-full group">
                    Get in Touch
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="#projects">
                  <Button variant="outline" size="lg" className="gap-2 rounded-full">
                    View Projects
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4 mt-2">
                <Link href="https://linkedin.com/in/stephenstef" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-10 w-10 transition-transform hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://github.com/SteveStef" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-10 w-10 transition-transform hover:scale-110"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="mailto:stevestef226@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-10 w-10 transition-transform hover:scale-110"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right visual element column - takes 2/5 of the space */}
          <AnimateOnScroll animation="opacity-100 translate-x-0" className="translate-x-8 md:col-span-2" delay={300}>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl bg-gradient-to-br from-background to-primary/10">
                {/* Tech stack icons with animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-8 p-6">
                    <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/80 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-transform">
                      <Code className="h-10 w-10 text-primary" />
                      <span className="font-medium">Frontend</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/80 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-transform">
                      <Server className="h-10 w-10 text-primary" />
                      <span className="font-medium">Backend</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/80 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-transform">
                      <Layers className="h-10 w-10 text-primary" />
                      <span className="font-medium">Architecture</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/80 backdrop-blur-sm shadow-lg transform hover:scale-105 transition-transform">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-spin-slow"></div>
                        <div className="relative bg-background rounded-full p-2">
                          <Code className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <span className="font-medium">Innovation</span>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/10 rounded-tr-2xl"></div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>

      {/* About Section - Revamped */}
      <section className="py-8 bg-background" id="about">
        <div className="container px-4 md:px-6">
          <SectionHeading badge="About Me" title="Who I Am" />

          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-12">
              {/* Left column - Profile */}
              <div className="md:col-span-5">
                <InteractiveCard>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <AnimatedText text="Stephen Stefanatos" className="text-2xl font-bold" />
                        <p className="text-muted-foreground">Software Engineer & CTO</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Location</h4>
                          <p className="text-muted-foreground">Villanova, PA</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Education</h4>
                          <p className="text-muted-foreground">B.S. Computer Science, Penn State University</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Current Role</h4>
                          <p className="text-muted-foreground">Co-founder & CTO at SponsorLab</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Cloud className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Upcoming</h4>
                          <p className="text-muted-foreground">SDE Intern at AWS</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Experience</h4>
                          <p className="text-muted-foreground">2+ years in software development</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="font-medium flex items-center gap-2 mb-3">
                        <Heart className="h-4 w-4 text-primary" />
                        Personal Interests
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Web Development",
                          "Cloud Computing",
                          "Entrepreneurship",
                          "Problem Solving",
                          "New Technologies",
                        ].map((interest) => (
                          <Badge key={interest} variant="secondary" className="bg-primary/5 hover:bg-primary/10">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </InteractiveCard>
              </div>

              {/* Right column - Bio and tabs */}
              <div className="md:col-span-7 space-y-8">
                <InteractiveCard>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-1 w-8 bg-primary"></div>
                      <h3 className="text-xl font-bold">My Journey</h3>
                    </div>

                    <AnimatedText
                      text="I started programming in 2020 and developed a strong interest in computer science and have built practical projects including freelance websites and startups."
                      className="text-lg text-card-foreground mb-4 leading-relaxed"
                      delay={200}
                    />

                    <AnimatedText
                      text="My technical experience spans full-stack development, with proficiency in Java, JavaScript, Golang, and Python. I've worked with modern frameworks and technologies including React, Express, Spring Boot, and cloud platforms like AWS and GCP."
                      className="text-lg text-card-foreground leading-relaxed"
                      delay={600}
                    />
                  </div>
                </InteractiveCard>

                <AnimatedStats
                  stats={[
                    { value: 2, label: "Years of Experience", suffix: "+" },
                    { value: 15, label: "Projects Completed", suffix: "+" },
                    { value: 10, label: "Technologies", suffix: "+" },
                    { value: 3.7, label: "GPA", suffix: "" },
                  ]}
                />

                <InteractiveCard>
                  <div className="p-6 md:p-8">
                    <TabContent
                      tabs={[
                        {
                          id: "skills",
                          label: "Skills",
                          icon: <Code className="h-4 w-4" />,
                          content: (
                            <div className="space-y-4">
                              <h4 className="font-medium text-lg">Core Technical Skills</h4>
                              <p className="text-muted-foreground">
                                I am comfortable on both frontend and backend, however I favor backend development.
                              </p>
                              <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                  <h5 className="font-medium mb-2">Frontend</h5>
                                  <ul className="space-y-1">
                                    <li className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                      <span>React & Next.js</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                      <span>JavaScript/TypeScript</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                      <span>HTML/CSS & Tailwind</span>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-medium mb-2">Backend</h5>
                                  <ul className="space-y-1">
                                    <li className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                      <span>Node.js & Express</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                      <span>Java & Spring Boot</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                      <span>SQL & NoSQL Databases</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ),
                        },
                        {
                          id: "education",
                          label: "Education",
                          icon: <BookOpen className="h-4 w-4" />,
                          content: (
                            <div className="space-y-4">
                              <h4 className="font-medium text-lg">Academic Background</h4>
                              <div className="bg-primary/5 p-4 rounded-lg">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h5 className="font-medium">Penn State University</h5>
                                    <p className="text-sm text-muted-foreground">B.S. in Computer Science</p>
                                  </div>
                                  <Badge>Expected: May 2026</Badge>
                                </div>
                              </div>
                              <div>
                                <h5 className="font-medium mb-2">Key Coursework</h5>
                                <div className="grid grid-cols-2 gap-2">
                                  <Badge variant="outline" className="justify-start">
                                    Data Structures & Algorithms
                                  </Badge>
                                  <Badge variant="outline" className="justify-start">
                                    Systems Design in C
                                  </Badge>
                                  <Badge variant="outline" className="justify-start">
                                    Theory of Computation
                                  </Badge>
                                  <Badge variant="outline" className="justify-start">
                                    Artificial Intelligence
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          ),
                        },
                        {
                          id: "achievements",
                          label: "Achievements",
                          icon: <Award className="h-4 w-4" />,
                          content: (
                            <div className="space-y-4">
                              <h4 className="font-medium text-lg">Awards & Accomplishments</h4>
                              <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                  <Award className="h-5 w-5 text-primary mt-0.5" />
                                  <div>
                                    <h5 className="font-medium">Penn State Provost Award</h5>
                                    <p className="text-sm text-muted-foreground">Recognition for academic excellence</p>
                                  </div>
                                </li>
                                <li className="flex items-start gap-3">
                                  <Award className="h-5 w-5 text-primary mt-0.5" />
                                  <div>
                                    <h5 className="font-medium">Dean's List</h5>
                                    <p className="text-sm text-muted-foreground">
                                      Achieved for 3 consecutive semesters
                                    </p>
                                  </div>
                                </li>
                                <li className="flex items-start gap-3">
                                  <Award className="h-5 w-5 text-primary mt-0.5" />
                                  <div>
                                    <h5 className="font-medium">Co-founded SponsorLab</h5>
                                    <p className="text-sm text-muted-foreground">
                                      Successfully launched a sponsorship marketplace platform
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          ),
                        },
                      ]}
                    />
                  </div>
                </InteractiveCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5" id="experience">
        <div className="container px-4 md:px-6">
          <SectionHeading badge="Experience" title="Work History" />

          <div className="grid gap-8 md:grid-cols-12 max-w-6xl mx-auto">
            <div className="md:col-span-4 lg:col-span-3 space-y-4">
              <div className="sticky top-24">
                <AnimateOnScroll animation="opacity-100 translate-x-0" className="-translate-x-4">
                  <div className="h-1 w-20 bg-primary mb-6"></div>
                  <h3 className="text-2xl font-bold mb-2">Career Path</h3>
                  <p className="text-muted-foreground mb-8">
                    My professional journey in software engineering and leadership.
                  </p>
                </AnimateOnScroll>

                <div className="space-y-4 mt-8 pr-4">
                  <CareerNavItem
                    company="Amazon (AWS)"
                    position="Software Engineer Intern"
                    active={activeExperience === "amazon"}
                    onClick={() => setActiveExperience("amazon")}
                    targetId="exp-amazon"
                  />
                  <CareerNavItem
                    company="SponsorLab"
                    position="Co-founder & CTO"
                    active={activeExperience === "sponsorlab"}
                    onClick={() => setActiveExperience("sponsorlab")}
                    targetId="exp-sponsorlab"
                  />
                  <CareerNavItem
                    company="CTFGuide"
                    position="Full Stack Engineer"
                    active={activeExperience === "ctfguide"}
                    onClick={() => setActiveExperience("ctfguide")}
                    targetId="exp-ctfguide"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-8 lg:col-span-9 space-y-12 relative">
              <div className="absolute top-0 bottom-0 left-0 w-px bg-border ml-6 md:ml-0"></div>

              <ExperienceCard
                id="exp-amazon"
                title="Software Engineer Intern"
                company="Amazon (AWS)"
                location="Arlington, VA"
                period="May 2025 - Aug 2025"
                description={["Upcoming internship for Summer 2025"]}
                badge="Upcoming"
                onInView={() => setActiveExperience("amazon")}
              />

              <ExperienceCard
                id="exp-sponsorlab"
                title="Co-founder & Chief Technology Officer"
                company="SponsorLab"
                location="Villanova, PA"
                period="Jan 2024 - Present"
                description={[
                  "Created SponsorLab, a sponsorship marketplace that helps creators and brands connect easily.",
                  "Built a backend web server with Nodejs, Postgres, and GCP, ensuring scalability and reliability.",
                  "Integrated Stripe API for secure payments, making transactions simple and automated for users.",
                  "Connected YouTube API so creators can share analytics, helping brands get accurate performance data.",
                ]}
                delay={200}
                onInView={() => setActiveExperience("sponsorlab")}
              />

              <ExperienceCard
                id="exp-ctfguide"
                title="Full Stack Software Engineer"
                company="CTFGuide"
                location="University Park, PA"
                period="Oct 2023 - Dec 2024"
                description={[
                  "Added JWT authentication and middleware to improve security and make user logins safer.",
                  "Designed and documented backend API endpoints in JavaScript to handle CRUD operations.",
                  "Improved database queries by fixing indexing and optimizing joins, cutting response times by 10%.",
                  "Implemented the Stripe API to enable secure payments, ensuring smooth transactions and simple subscription management.",
                ]}
                delay={400}
                onInView={() => setActiveExperience("ctfguide")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Redesigned */}
    <section className="py-20 bg-background" id="projects">
      <div className="container px-4 md:px-6">
        <SectionHeading badge="Projects" title="Featured Work" />

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12">
            {/* Project 1 - SponsorLab */}
            <AnimateOnScroll animation="opacity-100 scale-100" className="scale-95">
              <div className="group relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <div className="bg-card rounded-xl overflow-hidden">
                    <div className="flex flex-col">
                      {/* Project Image/Preview - Full width at top */}
                      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5">
                          <Image
                            src={sponsorlab}
                            alt="SponsorLab - Marketplace connecting content creators with brands"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            width={800}
                            height={450}
                            priority
                          />
                        </div>
                        <div className="absolute top-4 right-4 z-10">
                          <Badge className="bg-primary/80 hover:bg-primary text-white">Featured</Badge>
                        </div>
                      </div>

                      {/* Project Content - Below image */}
                      <div className="p-6 md:p-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">SponsorLab</h3>
                          <Badge variant="outline" className="text-primary border-primary">
                            Startup
                          </Badge>
                        </div>

                        {/* Project metadata */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>2024 - Present</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="h-4 w-4 text-primary" />
                            <span>Team of 4</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Target className="h-4 w-4 text-primary" />
                            <span>In Beta</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Globe className="h-4 w-4 text-primary" />
                            <span>Based in PA</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">
                          A comprehensive marketplace platform connecting content creators with brands for sponsorship
                          opportunities, featuring secure payments and analytics integration.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          {/* Key achievements */}
                          <div className="space-y-3">
                            <h4 className="font-medium text-sm">Key Features</h4>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                              <p>
                                Built a marketplace platform connecting content creators with brands for sponsorship
                                opportunities.
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                              <p>Developed with Node.js backend, PostgreSQL database, and React frontend.</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                              <p>
                                Implemented secure payment processing with Stripe and analytics integration with YouTube
                                API.
                              </p>
                            </div>
                          </div>

                          {/* Technical highlights */}
                          <div className="bg-muted/50 rounded-lg p-3">
                            <h4 className="font-medium text-sm flex items-center gap-1.5 mb-2">
                              <Layers className="h-4 w-4 text-primary" />
                              Technical Highlights
                            </h4>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                              <li>• Integrated Stripe connected accounts</li>
                              <li>• Real-time messaging system using WebSockets</li>
                              <li>• Advanced analytics dashboard with data visualization</li>
                              <li>• Multi-factor authentication and role-based access control</li>
                            </ul>
                            <br></br>
                            <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-[#68a063]/10 text-[#68a063] hover:bg-[#68a063]/20">Node.js</Badge>
                            <Badge className="bg-[#61dafb]/10 text-[#61dafb] hover:bg-[#61dafb]/20">React</Badge>
                            <Badge className="bg-[#336791]/10 text-[#336791] hover:bg-[#336791]/20">PostgreSQL</Badge>
                            <Badge className="bg-[#6772e5]/10 text-[#6772e5] hover:bg-[#6772e5]/20">Stripe API</Badge>
                            <Badge className="bg-[#ff0000]/10 text-[#ff0000] hover:bg-[#ff0000]/20">YouTube API</Badge>
                            </div>
                            </div>
                        </div>


                        <div className="flex gap-4">
                          <Link href="https://sponsorlab.co" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="gap-2 rounded-full">
                              <ExternalLink className="h-4 w-4" />
                              <span>Visit Project</span>
                            </Button>
                          </Link>

                          <Link
                            href="https://github.com/SteveStef/SponsorLab-Frontend"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="outline" size="sm" className="gap-2 rounded-full">
                              <Github className="h-4 w-4" />
                              <span>View Code</span>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Project 2 - Main Line Realty */}
            <AnimateOnScroll animation="opacity-100 scale-100" className="scale-95" delay={200}>
              <div className="group relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <div className="bg-card rounded-xl overflow-hidden">
                    <div className="flex flex-col">
                      {/* Project Image/Preview - Full width at top */}
                      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5">
                          <Image
                            src={mainlinerealty}
                            alt="Main Line Realty - Real estate website with advanced search capabilities"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            width={800}
                            height={450}
                          />
                        </div>
                      </div>

                      {/* Project Content - Below image */}
                      <div className="p-6 md:p-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            Main Line Realty
                          </h3>
                          <Badge variant="outline" className="text-primary border-primary">
                            Freelance
                          </Badge>
                        </div>

                        {/* Project metadata */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>Jan 2025 - Feb 2025</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="h-4 w-4 text-primary" />
                            <span>Solo Project</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Target className="h-4 w-4 text-primary" />
                            <span>Sold to Compass Agent</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Globe className="h-4 w-4 text-primary" />
                            <span>Philadelphia Area</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">
                          A real estate website with advanced search capabilities, AI-powered assistance, and
                          property data integration.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          {/* Key achievements */}
                          <div className="space-y-3">
                            <h4 className="font-medium text-sm">Key Features</h4>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                              <p>
                                Developed a custom real estate website tailored for an agent, providing advanced
                                search/filter features.
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                              <p>Integrated an AI-powered real estate assistant to enhance tailored searching.</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                              <p>Implemented the Zillow API and Google Maps for property data and location insights.</p>
                            </div>
                          </div>

                          {/* Client testimonial */}
                          <div className="bg-muted/50 rounded-lg p-3">
                            <h4 className="font-medium text-sm mb-2 italic">Client Testimonial</h4>
                            <p className="text-sm text-muted-foreground italic">
                              "The custom real estate platform developed for our agency has significantly improved our
                              online presence and lead generation. The AI-powered search features have been particularly
                              valuable for our clients."
                            </p>
                            <p className="text-sm font-medium mt-2">— Compass agent</p>
                          <br></br>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-[#0ea5e9]/10 text-[#0ea5e9] hover:bg-[#0ea5e9]/20">AI</Badge>
                          <Badge className="bg-[#1a73e8]/10 text-[#1a73e8] hover:bg-[#1a73e8]/20">Google Maps</Badge>
                          <Badge className="bg-[#006aff]/10 text-[#006aff] hover:bg-[#006aff]/20">Zillow API</Badge>
                          <Badge className="bg-[#61dafb]/10 text-[#61dafb] hover:bg-[#61dafb]/20">React</Badge>
                        </div>
                          </div>

                        </div>


                        <div className="flex gap-4">
                          <Link href="https://mainlinerealty.co" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="gap-2 rounded-full">
                              <ExternalLink className="h-4 w-4" />
                              <span>Visit Project</span>
                            </Button>
                          </Link>

                          <Link
                            href="https://github.com/SteveStef/MainLine-RealEstate"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="outline" size="sm" className="gap-2 rounded-full">
                              <Github className="h-4 w-4" />
                              <span>View Code</span>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Project 3 - Cleaning Solutions */}
            <AnimateOnScroll animation="opacity-100 scale-100" className="scale-95" delay={400}>
              <div className="group relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <div className="bg-card rounded-xl overflow-hidden">
                    <div className="flex flex-col">
                      {/* Project Image/Preview - Full width at top */}
                      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5">
                          <Image
                            src={mainlinecleaner}
                            alt="MainLine Cleaning - Booking platform for cleaning services"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            width={800}
                            height={450}
                          />
                        </div>
                      </div>

                      {/* Project Content - Below image */}
                      <div className="p-6 md:p-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            Main Line House Cleaning
                          </h3>
                          <Badge variant="outline" className="text-primary border-primary">
                            Freelance
                          </Badge>
                        </div>

                        {/* Project metadata */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>Feb 2025 - March 2025</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="h-4 w-4 text-primary" />
                            <span>Solo Project</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Target className="h-4 w-4 text-primary" />
                            <span>In progress</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Globe className="h-4 w-4 text-primary" />
                            <span>Local Business</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">
                          A comprehensive booking platform for cleaning services with user-friendly interfaces, feedback
                          systems, and secure deployment.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          {/* Key achievements */}
                          <div className="space-y-3">
                            <h4 className="font-medium text-sm">Key Features</h4>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                              <p>
                                Designed and developed a cleaning service website using Next.js, Spring Boot, and MySQL.
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                              <p>Implemented a user-friendly booking system for clients and feedback collection.</p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                              <p>
                                Configured and deployed the application on a DigitalOcean VPS, using NGINX as a reverse
                                proxy.
                              </p>
                            </div>
                          </div>

                          {/* Business impact */}
                          <div className="bg-muted/50 rounded-lg p-3">
                            <h4 className="font-medium text-sm flex items-center gap-1.5 mb-2">
                              <Layers className="h-4 w-4 text-primary" />
                              Technology Used
                            </h4>
                            <ul className="text-sm space-y-1 text-muted-foreground">
                              <li>• Utilizing MySQL database</li>
                              <li>• Backend built in Springboot with Maven</li>
                              <li>• Domains run through cloudflare for DDOS protection & SSL</li>
                            </ul>
                        <br></br>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className="bg-[#000000]/10 text-[#000000] dark:text-[#ffffff] hover:bg-[#000000]/20 dark:hover:bg-[#ffffff]/20">
                            Next.js
                          </Badge>
                          <Badge className="bg-[#6db33f]/10 text-[#6db33f] hover:bg-[#6db33f]/20">Spring Boot</Badge>
                          <Badge className="bg-[#4479a1]/10 text-[#4479a1] hover:bg-[#4479a1]/20">MySQL</Badge>
                          <Badge className="bg-[#0080ff]/10 text-[#0080ff] hover:bg-[#0080ff]/20">DigitalOcean</Badge>
                          <Badge className="bg-[#009639]/10 text-[#009639] hover:bg-[#009639]/20">NGINX</Badge>
                        </div>
                          </div>

                        </div>


                        <div className="flex gap-4">
                          <Link
                            href="https://github.com/SteveStef/MainLineCleaner"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="outline" size="sm" className="gap-2 rounded-full">
                              <Github className="h-4 w-4" />
                              <span>View Code</span>
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* More Projects Button */}
          <div className="flex justify-center mt-12">
            <Link href="https://github.com/SteveStef" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2 rounded-full group">
                <span>View More Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

      {/* Skills Section - Redesigned */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5" id="skills">
        <div className="container px-4 md:px-6">
          <SectionHeading badge="Skills" title="Technical Expertise" />

          <div className="max-w-6xl mx-auto space-y-8">
            <AnimateOnScroll animation="opacity-100 scale-100" className="scale-95">
              <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50 mb-8">
                <p className="text-center text-lg text-muted-foreground">
                  Full-stack developer with expertise in modern web technologies and cloud platforms. Passionate about
                  creating scalable, user-friendly applications with clean code.
                </p>
              </div>
            </AnimateOnScroll>

            <SkillCategory title="Programming Languages" icon={<Code className="h-5 w-5 text-primary" />}>

              <SkillProficiencyCard
                name="Java"
                icon={<Coffee className="h-5 w-5 text-red-500" />}
                level="Expert"
                category="Backend & Enterprise"
                delay={200}
              />
              <SkillProficiencyCard
                name="JavaScript"
                icon={<Code className="h-5 w-5 text-yellow-500" />}
                level="Expert"
                category="Web Development"
                delay={100}
              />
              <SkillProficiencyCard
                name="TypeScript"
                icon={<Code className="h-5 w-5 text-blue-500" />}
                level="Advanced"
                category="Type-safe JavaScript"
                delay={150}
              />
              <SkillProficiencyCard
                name="Python"
                icon={<Code className="h-5 w-5 text-green-500" />}
                level="Advanced"
                category="Scripting & Data Analysis"
                delay={250}
              />
              <SkillProficiencyCard
                name="Golang"
                icon={<Code className="h-5 w-5 text-blue-400" />}
                level="Advanced"
                category="Backend & Microservices"
                delay={300}
              />
              <SkillProficiencyCard
                name="SQL"
                icon={<Database className="h-5 w-5 text-orange-500" />}
                level="Advanced"
                category="Database Queries"
                delay={350}
              />
            </SkillCategory>

            <SkillCategory
              title="Frontend Technologies"
              icon={<Palette className="h-5 w-5 text-primary" />}
              delay={200}
            >
              <SkillProficiencyCard
                name="React"
                icon={<Code className="h-5 w-5 text-blue-400" />}
                level="Expert"
                category="UI Library"
                delay={400}
              />
              <SkillProficiencyCard
                name="Next.js"
                icon={<Code className="h-5 w-5 text-black dark:text-white" />}
                level="Advanced"
                category="React Framework"
                delay={450}
              />
              <SkillProficiencyCard
                name="HTML/CSS"
                icon={<FileCode className="h-5 w-5 text-orange-500" />}
                level="Expert"
                category="Web Markup & Styling"
                delay={500}
              />
            </SkillCategory>

            <SkillCategory title="Backend & DevOps" icon={<Server className="h-5 w-5 text-primary" />} delay={400}>
              <SkillProficiencyCard
                name="Node.js"
                icon={<Server className="h-5 w-5 text-green-500" />}
                level="Expert"
                category="JavaScript Runtime"
                delay={650}
              />
              <SkillProficiencyCard
                name="Express.js"
                icon={<Server className="h-5 w-5 text-gray-500" />}
                level="Advanced"
                category="Web Framework"
                delay={700}
              />
              <SkillProficiencyCard
                name="Spring Boot"
                icon={<Leaf className="h-5 w-5 text-green-500" />}
                level="Advanced"
                category="Java Framework"
                delay={750}
              />
              <SkillProficiencyCard
                name="PostgreSQL"
                icon={<Database className="h-5 w-5 text-blue-500" />}
                level="Advanced"
                category="Relational Database"
                delay={800}
              />
              <SkillProficiencyCard
                name="AWS"
                icon={<Cloud className="h-5 w-5 text-orange-500" />}
                level="Advanced"
                category="Cloud Platform"
                delay={850}
              />
              <SkillProficiencyCard
                name="Docker"
                icon={<Box className="h-5 w-5 text-blue-500" />}
                level="Advanced"
                category="Containerization"
                delay={900}
              />
              <SkillProficiencyCard
                name="GCP"
                icon={<Cloud className="h-5 w-5 text-red-400" />}
                level="Intermediate"
                category="Cloud Platform"
                delay={950}
              />
              <SkillProficiencyCard
                name="Git"
                icon={<GitBranch className="h-5 w-5 text-orange-500" />}
                level="Expert"
                category="Version Control"
                delay={1000}
              />
              <SkillProficiencyCard
                name="CI/CD"
                icon={<Repeat className="h-5 w-5 text-green-500" />}
                level="Advanced"
                category="DevOps"
                delay={1050}
              />
            </SkillCategory>

            {/* Additional Skills Cloud */}
            <AnimateOnScroll animation="opacity-100 scale-100" className="scale-95 mt-12" delay={600}>
              <div className="max-w-4xl mx-auto bg-card rounded-xl p-8 shadow-lg border border-border/50">
                <h3 className="text-xl font-bold mb-6 text-center">Additional Skills & Tools</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "REST API",
                    "GraphQL",
                    "JWT",
                    "MongoDB",
                    "MySQL",
                    "NGINX",
                    "Linux",
                    "Stripe API",
                    "YouTube API",
                    "Google Maps API",
                    "Agile",
                    "Scrum",
                    "UI/UX Design",
                    "Responsive Design",
                    "Performance Optimization",
                  ].map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="px-4 py-2 text-sm transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:scale-110"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-background" id="education">
        <div className="container px-4 md:px-6">
          <SectionHeading badge="Education" title="Academic Background" />

          <AnimateOnScroll animation="opacity-100 scale-100" className="scale-95">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden transition-all hover:shadow-xl border-2 hover:border-primary/30 duration-500">
                <div className="relative h-40 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-primary/40">Penn State University</h3>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full"></div>
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full"></div>
                </div>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl">The Pennsylvania State University</CardTitle>
                      <CardDescription className="text-lg">B.S. in Computer Science</CardDescription>
                    </div>
                    <Badge className="self-start md:self-center whitespace-nowrap">Expected: May 2026</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-8">
                    <AnimateOnScroll animation="opacity-100 translate-y-0" className="translate-y-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-lg flex items-center">
                          <div className="w-6 h-0.5 bg-primary mr-2"></div>
                          GPA
                        </h4>
                        <p className="text-2xl font-bold text-primary">3.70</p>
                      </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="opacity-100 translate-y-0" className="translate-y-4" delay={200}>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg flex items-center">
                          <div className="w-6 h-0.5 bg-primary mr-2"></div>
                          Awards & Honors
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 group">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                            <span className="group-hover:text-primary transition-colors">Penn State Provost Award</span>
                          </li>
                          <li className="flex items-center gap-2 group">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                            <span className="group-hover:text-primary transition-colors">
                              Dean's List (3 Semesters)
                            </span>
                          </li>
                        </ul>
                      </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="opacity-100 translate-y-0" className="translate-y-4" delay={400}>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg flex items-center">
                          <div className="w-6 h-0.5 bg-primary mr-2"></div>
                          Relevant Coursework
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 group">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                            <span className="group-hover:text-primary transition-colors">Systems Design in C</span>
                          </li>
                          <li className="flex items-center gap-2 group">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                            <span className="group-hover:text-primary transition-colors">
                              Data Structures & Algorithms
                            </span>
                          </li>
                          <li className="flex items-center gap-2 group">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                            <span className="group-hover:text-primary transition-colors">Theory of Computation</span>
                          </li>
                          <li className="flex items-center gap-2 group">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                            <span className="group-hover:text-primary transition-colors">Artificial Intelligence</span>
                          </li>
                        </ul>
                      </div>
                    </AnimateOnScroll>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Section - Redesigned */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5" id="contact">
        <div className="container px-4 md:px-6">
          <SectionHeading badge="Contact" title="Get In Touch" />

          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll animation="opacity-100 scale-100" className="scale-95">
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[200px] -z-0"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-tr-[100px] -z-0"></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left column */}
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <div className="w-6 h-1 bg-primary"></div>
                        Let's Connect
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        I'm currently open to new opportunities and collaborations. Feel free to reach out through any
                        of these channels!
                      </p>

                      <div className="space-y-6 mt-8">
                        <Link
                          href="mailto:stevestef226@gmail.com"
                          className="flex items-center gap-4 group p-3 rounded-lg transition-all hover:bg-primary/5"
                        >
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="text-lg font-medium group-hover:text-primary transition-colors">
                              stevestef226@gmail.com
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="https://linkedin.com/in/stephenstef"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 group p-3 rounded-lg transition-all hover:bg-primary/5"
                        >
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Linkedin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">LinkedIn</p>
                            <p className="text-lg font-medium group-hover:text-primary transition-colors">
                              linkedin.com/in/stephenstef
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="https://github.com/SteveStef"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 group p-3 rounded-lg transition-all hover:bg-primary/5"
                        >
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Github className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">GitHub</p>
                            <p className="text-lg font-medium group-hover:text-primary transition-colors">
                              github.com/SteveStef
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Right column */}
                    <div className="md:w-1/2 md:border-l md:pl-8 mt-8 md:mt-0">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <div className="w-6 h-1 bg-primary"></div>
                        Contact Details
                      </h3>

                      <div className="space-y-8 mt-6">
                        <div className="flex items-start gap-4 group p-3 rounded-lg transition-all hover:bg-primary/5">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Location</p>
                            <p className="text-lg font-medium group-hover:text-primary transition-colors">
                              Villanova, PA
                            </p>
                          </div>
                        </div>

                        <a
                          href="tel:+16105173410"
                          className="flex items-start gap-4 group p-3 rounded-lg transition-all hover:bg-primary/5"
                        >
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Phone</p>
                            <p className="text-lg font-medium group-hover:text-primary transition-colors">
                              +1 (610) 517-3410
                            </p>
                          </div>
                        </a>

                        <div className="flex items-start gap-4 group p-3 rounded-lg transition-all hover:bg-primary/5">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Calendar className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Availability</p>
                            <p className="text-lg font-medium group-hover:text-primary transition-colors">
                              Open to opportunities
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-border/50">
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link href="mailto:stevestef226@gmail.com">
                        <Button variant="outline" size="lg" className="gap-2 rounded-full group">
                          <Mail className="h-4 w-4 text-primary" />
                          <span>Email Me</span>
                        </Button>
                      </Link>
                      <Link href="https://linkedin.com/in/stephenstef" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="gap-2 rounded-full group">
                          <Linkedin className="h-4 w-4 text-primary" />
                          <span>Connect on LinkedIn</span>
                        </Button>
                      </Link>
                      <Link href="https://github.com/SteveStef" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="gap-2 rounded-full group">
                          <Github className="h-4 w-4 text-primary" />
                          <span>Follow on GitHub</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm text-muted-foreground">Stephen Stefanatos | Software Engineer</span>
            </div>
            <div className="flex gap-4">
              <Link href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

