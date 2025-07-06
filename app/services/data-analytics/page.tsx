import { ArrowRight, BarChart2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import DataAnalytics from "@/public/data-analytics.png";

export default function DataAnalyticsPage() {
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
                Expert Data Analytics Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary">
                Make Smarter Decisions with Data
              </h1>
              <p className="text-lg text-secondary/80">
                Our specialists support you with advanced and modern data
                analytics techniques, transforming your raw business data into
                actionable insights. We assist you in optimally planning,
                developing, and implementing a customized data strategy that
                aligns with your business objectives.
              </p>
            </div>
            <div className="relative hidden md:block">
              <div className="h-[400px] bg-white rounded-xl shadow-xl flex items-center justify-center">
                <Image
                  src={DataAnalytics}
                  alt="AI and Machine Learning"
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
      <section className="container py-20" id="services">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-secondary">
            What We Offer in Data Analytics
          </h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            Discover our range of analytics services tailored to help you
            harness the full power of your business data.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Data Strategy */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <BarChart2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Data Strategy Development
            </h3>
            <p className="text-secondary/70">
              We offer solutions for efficiently planning and implementing a
              customized data strategy that meets your business goals.
            </p>
          </div>

          {/* Tool Advisory */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <BarChart2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Analysis Tools Advisory
            </h3>
            <p className="text-secondary/70">
              We help you identify and implement the most effective tools and
              analytical approaches suited to your business and decision-making
              needs.
            </p>
          </div>

          {/* Technical and Business Expertise */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <BarChart2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Technical & Business Expertise
            </h3>
            <p className="text-secondary/70">
              Our experts master both technical and business aspects to deliver
              precise analysis and valuable insights.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent/20 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-secondary">
              Ready to Transform Your Business with Data?
            </h2>
            <p className="text-secondary/70 mb-8">
              Let us help you unlock the full potential of your data and drive
              better business outcomes.
            </p>
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
