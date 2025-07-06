"use client";

import { Code, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import softwareImage from "@/public/software-engineering.png";

export default function SoftwareEngineeringPage() {
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
                Expert Software Engineering Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary">
                Build Scalable and Reliable Software Solutions
              </h1>
              <p className="text-lg text-secondary/80">
                Our software engineering team at VAC designs and builds robust,
                scalable, and secure software applications that drive
                operational efficiency and innovation. From system architecture
                to deployment, we bring your vision to life with code.
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
            <div className="relative hidden md:block">
              <div className="h-[400px] bg-white rounded-xl shadow-xl flex items-center justify-center">
                <Image
                  src={softwareImage}
                  alt="Software Engineering Illustration"
                  className="object-cover rounded-xl"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="container py-20" id="solutions">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-secondary">
            What We Offer in Software Engineering
          </h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            We provide end-to-end software engineering services, from concept to
            production-grade systems tailored to your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Custom Software Development */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Custom Software Development
            </h3>
            <p className="text-secondary/70">
              We build software that matches your exact needs from mobile apps
              to web platforms and complex backend systems.
            </p>
          </div>

          {/* System Integration */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              System Integration
            </h3>
            <p className="text-secondary/70">
              Seamlessly connect your systems and automate workflows with our
              integration services to improve operational efficiency.
            </p>
          </div>

          {/* Quality Assurance & DevOps */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              QA & DevOps
            </h3>
            <p className="text-secondary/70">
              From automated testing to CI/CD pipelines, we ensure your software
              is reliable, scalable, and continuously improving.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
