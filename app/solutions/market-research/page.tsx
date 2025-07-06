"use client";

import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import marketImage from "@/public/market-research.png"; // Add your own image

export default function MarketResearchPage() {
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
                Comprehensive Market Research Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary">
                Understand Your Market with Clarity
              </h1>
              <p className="text-lg text-secondary/80">
                At VAC, we use data to help you understand your market,
                audience, and competition. Our market research services provide
                clear insights that support smart planning, new ideas, and
                stronger results no matter your industry.
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
              <div className="h-[400px] bg-white rounded-xl shadow-xl overflow-hidden">
                <Image
                  src={marketImage}
                  alt="Market Research Illustration"
                  width={800}
                  height={400}
                  className="object-cover w-full h-full"
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
            What We Offer in Market Research
          </h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            Gain a competitive advantage with our strategic and data-driven
            insights tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Customer Segmentation */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Customer & Market Segmentation
            </h3>
            <p className="text-secondary/70">
              Analyze data to group your audience based on behavior, location,
              or needs—helping you target with precision.
            </p>
          </div>

          {/* Competitor Analysis */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Competitor Analysis
            </h3>
            <p className="text-secondary/70">
              Understand how you compare and identify gaps or opportunities in
              your competitive landscape.
            </p>
          </div>

          {/* Industry Trends */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Trend & Industry Analysis
            </h3>
            <p className="text-secondary/70">
              Track market changes and uncover opportunities using real-time
              data and insights.
            </p>
          </div>

          {/* Market Entry Studies */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Feasibility & Market Entry
            </h3>
            <p className="text-secondary/70">
              Launching something new? We assess demand, risks, and readiness to
              support your market entry.
            </p>
          </div>

          {/* Reports and Dashboards */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition duration-300 hover:translate-y-[-5px] group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Clear Reports & Dashboards
            </h3>
            <p className="text-secondary/70">
              We visualize findings in intuitive formats—dashboards and reports
              that make decision-making easy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
