"use client";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  Globe,
  LineChart,
  Users,
  Phone,
  Banknote,
  Factory,
  HeartPulse,
  Plane,
  ShoppingBag,
  Code, // For Software Engineers
  Server, // For DevOps Engineers
  Bot, // For Machine Learning Engineers
  Database,
  Microscope,
  DatabaseZap,
  ChartNoAxesCombined,
  BrainCircuit,
  CircleDollarSign,
  Rss,
  ChartSpline,
  School,
  Cpu,
} from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 z-0" />
        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-accent bg-accent/20 px-4 py-1.5 text-sm font-medium text-secondary">
                <span className="flex h-2 w-2 rounded-full bg-secondary mr-2"></span>
                Transforming Data into Strategic Decisions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary">
                Unlock Business Growth Through Data Intelligence
              </h1>
              <p className="text-lg text-secondary/80">
                We help organizations harness the power of data analytics to
                drive innovation, optimize operations, and achieve sustainable
                competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button
                    size="lg"
                    className="gap-2 bg-primary hover:bg-primary/90"
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary/10"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9FDBF5]/30 to-[#D9EDF7]/50 flex items-center justify-center">
                  <div className="w-full h-full p-8 flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-square">
                      {/* Analytics Dashboard Mockup */}
                      <div className="absolute inset-0 bg-white rounded-xl shadow-lg p-4 transform rotate-3 scale-90 opacity-80"></div>
                      <div className="absolute inset-0 bg-white rounded-xl shadow-lg p-4 transform -rotate-2 scale-95 opacity-90"></div>
                      <div className="relative bg-white rounded-xl shadow-lg p-6 z-10">
                        <div className="flex justify-between items-center mb-6">
                          <div>
                            <h3 className="text-lg font-bold text-[#1E3A8A]">
                              Analytics Dashboard
                            </h3>
                            <p className="text-sm text-[#1E3A8A]/60">
                              Real-time data insights
                            </p>
                          </div>
                          <div className="flex gap-1">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="w-3/4 h-16 bg-[#9FDBF5]/30 rounded-md flex items-end p-2">
                              <div className="w-1/5 h-4 bg-[#FF8C4B] rounded-sm mx-0.5"></div>
                              <div className="w-1/5 h-8 bg-[#FF8C4B] rounded-sm mx-0.5"></div>
                              <div className="w-1/5 h-6 bg-[#FF8C4B] rounded-sm mx-0.5"></div>
                              <div className="w-1/5 h-10 bg-[#FF8C4B] rounded-sm mx-0.5"></div>
                              <div className="w-1/5 h-7 bg-[#FF8C4B] rounded-sm mx-0.5"></div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-100 p-3 rounded-lg">
                              <div className="text-xs text-[#1E3A8A]/60 mb-1">
                                Revenue
                              </div>
                              <div className="text-lg font-bold text-[#1E3A8A]">
                                $24.5K
                              </div>
                              <div className="text-xs text-green-500 flex items-center">
                                <ArrowRight className="h-3 w-3 rotate-45" />{" "}
                                +12.4%
                              </div>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-lg">
                              <div className="text-xs text-[#1E3A8A]/60 mb-1">
                                Customers
                              </div>
                              <div className="text-lg font-bold text-[#1E3A8A]">
                                1,429
                              </div>
                              <div className="text-xs text-green-500 flex items-center">
                                <ArrowRight className="h-3 w-3 rotate-45" />{" "}
                                +8.7%
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                            <div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
                            <div className="h-2 bg-gray-100 rounded-full w-1/2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#FF8C4B]/20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#9FDBF5]/30 rounded-full"></div>
              <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-24 bg-[#1E3A8A]/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20" id="services">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-secondary">
            Our Core Services
          </h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            We provide comprehensive data solutions tailored to your specific
            business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <Link href="/services/data-analytics">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <BarChart2 className="h-6 w-6 text-primary group-hover:scale-120 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
                Data Analytics
              </h3>
              <p className="text-secondary/70 mb-4">
                Transform raw data into actionable insights with our advanced
                analytics solutions.
              </p>
              <Link
                href="/services/data-analytics"
                className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <Link href="/services/business-intelligence">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <LineChart className="h-6 w-6 text-primary group-hover:scale-120 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
                Business Intelligence
              </h3>
              <p className="text-secondary/70 mb-4">
                Make informed decisions with our comprehensive business
                intelligence platforms.
              </p>
              <Link
                href="/services/business-intelligence"
                className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <Link href="/services/strategic-consulting">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-primary group-hover:scale-120 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
                Strategic Consulting
              </h3>
              <p className="text-secondary/70 mb-4">
                Expert guidance to help you navigate complex business challenges
                and opportunities.
              </p>
              <Link
                href="/services/strategic-consulting"
                className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </Link>
          </div>
        </div>
      </section>
      {/* Client Industries Section */}
      <section className="py-20 bg-white" id="industries">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-secondary">
              Client Industries
            </h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">
              We serve a diverse range of industries with tailored data
              solutions to meet their unique challenges and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Financial Services */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Banknote className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Financial Services
              </h3>
              <p className="text-secondary/70 text-center">
                We help financial institutions enhance customer engagement,
                improve risk management, and optimize financial products through
                data-driven insights and advanced analytics.
              </p>
            </div>

            {/* Healthcare */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <HeartPulse className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Healthcare
              </h3>
              <p className="text-secondary/70 text-center">
                Patient outcome analysis, operational efficiency, and predictive
                modeling for hospitals and providers.
              </p>
            </div>

            {/* Retail & E-commerce */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Retail & E-commerce
              </h3>
              <p className="text-secondary/70 text-center">
                Customer behavior analysis, inventory optimization, and
                personalized marketing solutions.
              </p>
            </div>

            {/* Manufacturing */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Manufacturing
              </h3>
              <p className="text-secondary/70 text-center">
                Predictive maintenance, supply chain optimization, and quality
                control analytics.
              </p>
            </div>

            {/* Energy, Environmental, and Climate Change */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Energy, Environmental, and Climate Change
              </h3>
              <p className="text-secondary/70 text-center">
                Leverage data for sustainability efforts, optimizing energy
                usage, and driving innovation in climate change mitigation.
              </p>
            </div>

            {/* Transport */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Transport
              </h3>
              <p className="text-secondary/70 text-center">
                Improve operational efficiency, streamline logistics, and
                enhance customer experience through data analytics.
              </p>
            </div>

            {/* Education */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <School className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Education
              </h3>
              <p className="text-secondary/70 text-center">
                Improve student outcomes, optimize resource allocation, and
                enhance teaching methodologies through learning analytics.
              </p>
            </div>

            {/* Technology */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Technology
              </h3>
              <p className="text-secondary/70 text-center">
                Improve product innovation, enhance performance, and drive
                competitive advantage in a rapidly evolving landscape.
              </p>
            </div>

            {/* Telecom Companies */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Telecom Companies
              </h3>
              <p className="text-secondary/70 text-center">
                Improve network efficiency, optimize customer service, and drive
                growth through data-driven strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50" id="solutions">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-secondary">
              Solutions
            </h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">
              We offer comprehensive data solutions designed to address your
              specific business challenges and help you achieve your strategic
              objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Data Engineering */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <Link href="/solutions/data-engineering">
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <DatabaseZap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                  Data Engineering
                </h3>
                <p className="text-secondary/70 mb-6 text-center">
                  We can help you use your data, like your customers' purchases,
                  email subscribers, and social media followers, to drive your
                  objectives and reach your goals.
                </p>
                <div className="border-t border-accent/30 pt-4">
                  <h4 className="font-medium text-secondary mb-2">
                    Products and Services Include:
                  </h4>
                  <p className="text-secondary/70 text-sm">
                    Data and Infrastructure Audits, Data Warehouse and Data Lake
                    Development, Data Enrichment
                  </p>
                </div>
              </Link>
            </div>

            {/* Data Science */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <Link href="/solutions/data-science">
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ChartNoAxesCombined className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                  Data Science
                </h3>
                <p className="text-secondary/70 mb-6 text-center">
                  Our team can help you find insightful patterns in your
                  data—and leverage them for better outcomes for you, your
                  supporters, and your customers.
                </p>
                <div className="border-t border-accent/30 pt-4">
                  <h4 className="font-medium text-secondary mb-2">
                    Products and Services Include:
                  </h4>
                  <p className="text-secondary/70 text-sm">
                    Advanced Analytics, Data Visualization and Dashboards,
                    Predictive Modeling, Data-Driven Decision-Making
                  </p>
                </div>
              </Link>
            </div>

            {/* Software Engineering */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <Link href="/solutions/software-engineering">
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                  Software Engineering
                </h3>
                <p className="text-secondary/70 mb-6 text-center">
                  We design and build robust, scalable software solutions
                  tailored to your business needs, from web applications to
                  enterprise systems.
                </p>
                <div className="border-t border-accent/30 pt-4">
                  <h4 className="font-medium text-secondary mb-2">
                    Products and Services Include:
                  </h4>
                  <p className="text-secondary/70 text-sm">
                    Custom Software Development, API Development, System
                    Architecture, Cloud-Native Applications, Maintenance and
                    Support
                  </p>
                </div>
              </Link>
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <Link href="/solutions/ai-machine-learning">
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BrainCircuit className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                  AI & Machine Learning
                </h3>
                <p className="text-secondary/70 mb-6 text-center">
                  We develop intelligent systems that learn from data to
                  automate decisions, predict outcomes, and uncover hidden
                  insights for your business.
                </p>
                <div className="border-t border-accent/30 pt-4">
                  <h4 className="font-medium text-secondary mb-2">
                    Products and Services Include:
                  </h4>
                  <p className="text-secondary/70 text-sm">
                    Predictive Analytics, Natural Language Processing, Computer
                    Vision, Recommendation Systems, AI Model Development
                  </p>
                </div>
              </Link>
            </div>

            {/* Market Research */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <Link href="/solutions/market-research">
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CircleDollarSign className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                  Market Research
                </h3>
                <p className="text-secondary/70 mb-6 text-center">
                  Our baseline research, polling, and message testing take the
                  guesswork out of campaign development and content delivery,
                  ensuring you always put your best foot forward.
                </p>
                <div className="border-t border-accent/30 pt-4">
                  <h4 className="font-medium text-secondary mb-2">
                    Products and Services Include:
                  </h4>
                  <p className="text-secondary/70 text-sm">
                    Baseline Research and Audience Segmentation, Message
                    Resonance Testing, Tracking Polls, Brand Positioning and
                    Customer Surveys
                  </p>
                </div>
              </Link>
            </div>

            {/* Market and Customer Segmentation */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <Link href="/solutions/digital-creative">
                <div className="flex justify-center mb-6">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Rss className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                  Digital and Creative
                </h3>
                <p className="text-secondary/70 mb-6 text-center">
                  We craft data-driven digital marketing campaigns powered by
                  precision audience segmentation and smart automation to
                  maximize your results
                </p>
                <div className="border-t border-accent/30 pt-4">
                  <h4 className="font-medium text-secondary mb-2">
                    Products and Services Include:
                  </h4>
                  <p className="text-secondary/70 text-sm">
                    Dynamic Creative Optimization (DCO), Programmatic Ad
                    Campaigns, Personalized Content Engines, AI-Generated
                    Marketing Assets, Cross-Channel Automation Workflows
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* Our Team Section */}
      <section className="py-20 bg-gray-50 text-gray-800" id="team">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-secondary">Our Team</h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">
              We are a diverse team of skilled professionals, including
              researchers, data scientists, data engineers, and experts from
              various fields who work together to deliver high-quality insights
              and solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Data Scientists */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ChartSpline className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Data Scientists
              </h3>
              <p className="text-secondary/70">
                Our data scientists leverage cutting-edge algorithms and machine
                learning models to uncover hidden patterns, predict trends, and
                help our clients make data-driven decisions.
              </p>
            </div>

            {/* Data Engineers */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Data Engineers
              </h3>
              <p className="text-secondary/70">
                Our data engineers build and maintain robust data
                infrastructures, ensuring seamless data flow, storage, and
                accessibility for advanced analytics and business intelligence.
              </p>
            </div>

            {/* Researchers */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Microscope className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Researchers
              </h3>
              <p className="text-secondary/70">
                Our researchers specialize in conducting thorough market
                research, public opinion polling, and competitive analysis to
                deliver actionable insights that drive strategy.
              </p>
            </div>

            {/* Software Engineers */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Software Engineers
              </h3>
              <p className="text-secondary/70">
                Our software engineers design and develop scalable applications,
                APIs, and platforms, ensuring high performance, security, and
                reliability for our clients.
              </p>
            </div>

            {/* DevOps Engineers */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Server className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                DevOps Engineers
              </h3>
              <p className="text-secondary/70">
                Our DevOps engineers streamline development workflows, automate
                processes, and manage cloud infrastructure to ensure continuous
                integration and delivery.
              </p>
            </div>

            {/* Machine Learning Engineers */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Bot className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Machine Learning Engineers
              </h3>
              <p className="text-secondary/70">
                Our machine learning engineers build and deploy AI-powered
                systems that solve real-world problems, leveraging deep learning
                and natural language processing techniques.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/team">
              <Button
                variant="outline"
                className="bg-primary text-white hover:bg-primary/10 px-6 py-3"
              >
                Meet our team →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent/20 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-secondary">
              Ready to Transform Your Business?
            </h2>
            <p className="text-secondary/70 mb-8">
              Join hundreds of organizations that have accelerated growth and
              improved operational efficiency with our data solutions.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90"
              >
                Schedule a Consultation <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
