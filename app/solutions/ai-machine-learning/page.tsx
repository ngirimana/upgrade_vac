"use client";

import { ArrowRight, Bot } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import aiImage from "@/public/ai.png";

// Adjust the path as necessary
export default function AiMachineLearningPage() {
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
                Expert AI & Machine Learning Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary">
                Smarter Decisions through Intelligence
              </h1>
              <p className="text-lg text-secondary/80">
                VAC experts are at the forefront of artificial intelligence,
                machine learning, and data mining. We develop intelligent
                systems that learn from data to automate decisions, predict
                outcomes, and uncover hidden insights to support your future
                business growth.
              </p>
            </div>
            <div className="relative hidden md:block">
              <div className="h-[400px] bg-white rounded-xl shadow-xl flex items-center justify-center">
                <Image
                  src={aiImage}
                  alt="AI and Machine Learning"
                  className="object-cover rounded-xl"
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
            What We Offer in AI & Machine Learning
          </h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            Explore how our intelligent systems can empower your business with
            predictive accuracy and personalized experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Predictive Analytics */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Predictive Analytics
            </h3>
            <p className="text-secondary/70">
              We use historical and real-time data to build models that forecast
              future trends and patterns to enable proactive business decisions
              and risk mitigation.
            </p>
          </div>

          {/* Recommendation Systems */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Recommendation Systems
            </h3>
            <p className="text-secondary/70">
              Our team designs intelligent systems that personalize user
              experiences by suggesting relevant products, services, or actions
              based on behavioral patterns.
            </p>
          </div>

          {/* AI Model Development */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              AI Model Development
            </h3>
            <p className="text-secondary/70">
              We help you to develop, train, and deploy custom AI models
              tailored to your business needs, whether for automation,
              classification, or intelligent decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent/20 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-secondary">
              Ready to Elevate Your Business with AI?
            </h2>
            <p className="text-secondary/70 mb-8">
              Let us partner with you to develop powerful, intelligent solutions
              that scale with your business.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90"
              >
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
