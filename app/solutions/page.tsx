"use client";

import Link from "next/link";
import {
  DatabaseZap,
  ChartNoAxesCombined,
  Code,
  BrainCircuit,
  CircleDollarSign,
  Rss,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Solutions Hero */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-secondary">
            Our Solutions
          </h1>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            We offer comprehensive data-driven solutions to help you solve real
            business challenges, improve performance, and achieve strategic
            goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Data Engineering */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md group">
            <Link href="/solutions/data-engineering">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <DatabaseZap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Data Engineering
              </h3>
              <p className="text-secondary/70 text-center">
                Build scalable pipelines and data platforms that power your
                analytics and AI initiatives.
              </p>
            </Link>
          </div>

          {/* Data Science */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md group">
            <Link href="/solutions/data-science">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ChartNoAxesCombined className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Data Science
              </h3>
              <p className="text-secondary/70 text-center">
                Uncover trends, predict outcomes, and drive smarter decisions
                with advanced analytics.
              </p>
            </Link>
          </div>

          {/* Software Engineering */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md group">
            <Link href="/solutions/software-engineering">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Software Engineering
              </h3>
              <p className="text-secondary/70 text-center">
                Custom software solutions built for performance, usability, and
                scale.
              </p>
            </Link>
          </div>

          {/* AI & Machine Learning */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md group">
            <Link href="/solutions/ai-machine-learning">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                AI & Machine Learning
              </h3>
              <p className="text-secondary/70 text-center">
                Leverage machine learning to automate, personalize, and predict
                at scale.
              </p>
            </Link>
          </div>

          {/* Market Research */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md group">
            <Link href="/solutions/market-research">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CircleDollarSign className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Market Research
              </h3>
              <p className="text-secondary/70 text-center">
                Understand your audience and refine your strategy with
                evidence-based insights.
              </p>
            </Link>
          </div>

          {/* Digital & Creative */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md group">
            <Link href="/solutions/digital-creative">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Rss className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary text-center group-hover:text-[#FF8C4B] transition-colors">
                Digital & Creative
              </h3>
              <p className="text-secondary/70 text-center">
                Combine data and creativity to design campaigns that resonate
                and convert.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent/20 py-20 mt-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-secondary">
              Let’s Build Your Next Solution
            </h2>
            <p className="text-secondary/70 mb-8">
              Whether it's AI, data engineering, or custom software, we help you
              design solutions that make a difference.
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
