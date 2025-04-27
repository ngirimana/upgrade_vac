"use client";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  Globe,
  LineChart,
  Users,
  Linkedin,
  Twitter,
  Mail,
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
  Brain,
  CircleDollarSign,
  Rss,
  ChartSpline,
  School,
  Cpu,
} from "lucide-react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Sending...");

    try {
      await emailjs.send(
        "service_q3d7muj",
        "template_bt6545b",
        {
          user_name: `${formData.firstName} ${formData.lastName}`,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "FeWbmuONxlqxKTvZw"
      );
      toast.success("Email sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send email.");
      console.error("Email send error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png" // Update this path to your actual logo image
              alt="Veritas Analytics Logo"
              className="h-16 w-16 rounded-full" // Adjust size as needed
            />
            <span className="text-xl font-bold text-secondary">
              Veritas Analytics
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#solutions"
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              Solutions
            </Link>
            <Link
              href="#team"
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              Our Team
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex bg-secondary hover:bg-secondary/90">
            Book a Consultation
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-secondary text-secondary"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

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
                <Button
                  size="lg"
                  className="gap-2 bg-primary hover:bg-primary/90"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary/10"
                >
                  Learn More
                </Button>
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
              href="#"
              className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
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
              href="#"
              className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
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
              href="#"
              className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
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
            </div>

            {/* Data Science */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ChartNoAxesCombined className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Data Science
              </h3>
              <p className="text-secondary/70 mb-6 text-center">
                Our team can help you find insightful patterns in your data—and
                leverage them for better outcomes for you, your supporters, and
                your customers.
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
            </div>

            {/* Software Engineering */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Software Engineering
              </h3>
              <p className="text-secondary/70 mb-6 text-center">
                We design and build robust, scalable software solutions tailored
                to your business needs, from web applications to enterprise
                systems.
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
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                AI & Machine Learning
              </h3>
              <p className="text-secondary/70 mb-6 text-center">
                We develop intelligent systems that learn from data to automate
                decisions, predict outcomes, and uncover hidden insights for
                your business.
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
            </div>

            {/* Market Research */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
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
                  Baseline Research and Audience Segmentation, Message Resonance
                  Testing, Tracking Polls, Brand Positioning and Customer
                  Surveys
                </p>
              </div>
            </div>

            {/* Market and Customer Segmentation */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
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
                precision audience segmentation and smart automation to maximize
                your results
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
            <Button
              variant="outline"
              className="bg-primary text-white hover:bg-primary/10 px-6 py-3"
            >
              Meet our team →
            </Button>
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
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              Schedule a Free Consultation <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white" id="contact">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-secondary">
              Contact Us
            </h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">
              Have questions or ready to start your data journey? Reach out to
              our team of experts.
            </p>
          </div>

          {/* Form & Info Section */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm space-y-8">
              <h3 className="text-xl font-bold text-secondary">
                Send Us a Message
              </h3>
              <form onSubmit={sendEmail} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-accent/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-accent/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-accent/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-accent/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-accent/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-md"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl border border-accent shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-secondary mb-6">
                  Contact Information
                </h3>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Phone</h4>
                    <p className="text-secondary/70">250-888-552-183</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Email</h4>
                    <p className="text-secondary/70">sales@vac.rw</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Office</h4>
                    <p className="text-secondary/70">
                      KN 7 Ave, Kigali, Rwanda
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaLinkedin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary/70 hover:underline"
                    >
                      Visit Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl border border-accent shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-secondary">
                  Office Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-secondary">Monday - Friday</span>
                    <span className="text-secondary/70">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Saturday</span>
                    <span className="text-secondary/70">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Sunday</span>
                    <span className="text-secondary/70">
                      10:00 AM - 2:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-secondary text-white">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-6 w-6 text-accent" />
                <span className="text-xl font-bold">Veritas Analytics</span>
              </div>
              <p className="text-white/70">
                Empowering businesses with data-driven insights since 2015.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-accent">
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-accent">
                    Business Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-accent">
                    Strategic Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-accent">
                    Data Visualization
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-accent">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#team"
                    className="text-white/70 hover:text-accent"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-accent">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-accent">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-white/70">hello@veritasanalytics.com</li>
                <li className="text-white/70">+1 (555) 123-4567</li>
                <li className="text-white/70">
                  123 Business Ave, Suite 100
                  <br />
                  San Francisco, CA 94107
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © 2025 Veritas Analytics. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white/70 hover:text-accent">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/70 hover:text-accent">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
