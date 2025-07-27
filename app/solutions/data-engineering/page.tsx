"use client";

import { ArrowRight, Database, Server } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import dataEngineeringImage from "@/public/data-engineering.png"; // Adjust path as needed
import Link from "next/link";

export default function DataEngineeringPage() {
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
                Expert Data Engineering Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary">
                Data Infrastructure That Drives Impact
              </h1>
              <p className="text-lg text-secondary/80">
                At VAC, we build the data infrastructure that powers your
                insights. Our data engineering services ensure your data is
                clean, organized, and accessible. So your team can focus on
                analysis, automation, and better decision-making.
              </p>
            </div>
            <div className="relative hidden md:block">
              <div className="h-[400px] bg-white rounded-xl shadow-xl flex items-center justify-center">
                <Image
                  src={dataEngineeringImage}
                  alt="Data Engineering Illustration"
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
            What We Offer in Data Engineering
          </h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            From pipelines to performance tuning, we ensure your data is ready
            to support innovation and insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Data Pipeline Design */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Data Pipeline Design & Automation
            </h3>
            <p className="text-secondary/70">
              We build automated, scalable systems to move and transform your
              data across platforms, enabling seamless operations.
            </p>
          </div>

          {/* Data Cleaning */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Data Cleaning & Integration
            </h3>
            <p className="text-secondary/70">
              We remove duplicates, correct inconsistencies, and merge sources
              to give you a reliable and unified data foundation.
            </p>
          </div>

          {/* Database Design */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Database Design & Optimization
            </h3>
            <p className="text-secondary/70">
              We architect secure, fast, and scalable databases, whether you're
              handling megabytes or petabytes.
            </p>
          </div>

          {/* Cloud & On-Prem */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Cloud & On-Prem Solutions
            </h3>
            <p className="text-secondary/70">
              We manage and migrate data across AWS, Azure, GCP, or on-prem
              systems, ensuring speed, security, and compliance.
            </p>
          </div>

          {/* Documentation */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Documentation & Maintenance
            </h3>
            <p className="text-secondary/70">
              We keep your systems documented and maintained, so your data stays
              usable and trusted by everyone on your team.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent/20 py-20">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-secondary">
            Let VAC Build Your Data Backbone
          </h2>
          <p className="text-secondary/70 mb-8">
            Partner with us to unlock the full potential of your data through
            engineering excellence.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              Talk to Our Team <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
