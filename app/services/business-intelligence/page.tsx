"use client";

import {
  BarChart2,
  Database,
  Layers,
  LineChart,
  FileBarChart,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import biImage from "@/public/business-intelligence.png";
import DataAnalytics from "@/public/data-analytics.png"; // Replace with your actual image path
import Link from "next/link";

export default function BusinessIntelligencePage() {
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
                Business Intelligence Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary">
                Insights That Drive Smarter Decisions
              </h1>
              <p className="text-lg text-secondary/80">
                At VAC, our Business Intelligence services empower organizations
                to make data-driven decisions through advanced analytics,
                interactive dashboards, and real-time reporting.
              </p>
            </div>
            <div className="relative hidden md:block">
              <div className="h-[400px] bg-white rounded-xl shadow-xl flex items-center justify-center">
                <Image
                  src={biImage}
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

      {/* What We Offer */}
      <section className="container py-20" id="solutions">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            What We Offer in Business Intelligence
          </h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            From raw data to real insight—our BI services help you gain
            visibility, control, and clarity across your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Database,
              title: "Data Collection",
              desc: "Gathering data from various sources (e.g., databases, spreadsheets, cloud services, etc.).",
            },
            {
              icon: Layers,
              title: "Data Integration",
              desc: "Consolidating data from multiple sources into a centralized data warehouse or data lake.",
            },
            {
              icon: LineChart,
              title: "Data Analysis",
              desc: "Using tools and algorithms to discover patterns, trends, and relationships within the data.",
            },
            {
              icon: FileBarChart,
              title: "Reporting & Visualization",
              desc: "Creating dashboards, charts, graphs, and reports to communicate findings clearly.",
            },
            {
              icon: BarChart2,
              title: "Decision Support",
              desc: "Enabling managers and executives to make informed strategic, tactical, and operational decisions.",
            },
            {
              icon: SlidersHorizontal,
              title: "Performance Monitoring",
              desc: "Tracking KPIs and metrics to optimize operations and drive continuous improvement.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white p-6 border border-accent rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="h-12 w-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
                {title}
              </h3>
              <p className="text-secondary/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent/20 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Turn Your Data Into Direction
          </h2>
          <p className="text-secondary/70 mb-8">
            Let VAC transform your business with actionable intelligence and
            dynamic dashboards.
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
