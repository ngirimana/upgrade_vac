"use client";

import { ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DataScienceImage from "@/public/data-science.png"; // Update this path to your actual image
import Link from "next/link";

export default function DataSciencePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-primary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 z-0" />
        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-accent bg-accent/20 px-4 py-1.5 text-sm font-medium text-secondary">
                <span className="flex h-2 w-2 rounded-full bg-secondary mr-2"></span>
                Expert Data Science Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary">
                Turn Complex Data Into Clear Insights
              </h1>
              <p className="text-lg text-secondary/80">
                Our data science team at VAC leverages the power of data to
                solve complex business challenges. We build models that uncover
                patterns, forecast outcomes, and empower decision makers to act
                with confidence.
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
              <div className="h-[400px] bg-white rounded-xl shadow-xl flex items-center justify-center overflow-hidden px-8">
                <Image
                  src={DataScienceImage}
                  alt="Data Science Illustration"
                  className="object-contain rounded-xl"
                  width={500}
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
            What We Offer in Data Science
          </h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            Unlock smarter decisions with tailored data science services built
            for clarity, foresight, and real-world results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Data Exploration & Preparation */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Data Exploration & Preparation
            </h3>
            <p className="text-secondary/70">
              We clean, organize, and transform raw data into formats ready for
              advanced analysis and model building.
            </p>
          </div>

          {/* Predictive Analytics */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Predictive Analytics
            </h3>
            <p className="text-secondary/70">
              We build models that use past data to predict future outcomes,
              helping teams plan and respond effectively.
            </p>
          </div>

          {/* Model Deployment & Monitoring */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Model Deployment & Monitoring
            </h3>
            <p className="text-secondary/70">
              We help you implement machine learning models into real-world
              systems and make sure they stay accurate over time.
            </p>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-accent/20 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Use Data to Drive Smart Decisions
          </h2>
          <p className="text-secondary/70 mb-8">
            Work with VAC to uncover patterns, forecast outcomes, and build
            intelligent models that move your business forward.
          </p>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90" size="lg">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
