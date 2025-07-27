"use client";

import {
  Briefcase,
  TrendingUp,
  Building2,
  Settings,
  ShieldCheck,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import consultingImage from "@/public/strategic-consulting.png";
import Link from "next/link";

export default function StrategicConsultingPage() {
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
                Strategic Consulting Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary">
                Guiding Growth with Insightful Strategy
              </h1>
              <p className="text-lg text-secondary/80">
                At VAC, we empower organizations to make informed,
                forward-looking decisions that drive sustainable growth and
                transformation. From market entry to operational efficiency, our
                consulting delivers lasting impact.
              </p>
            </div>
            <div className="relative hidden md:block">
              <div className="h-[400px] bg-white rounded-xl shadow-xl flex items-center justify-center">
                <Image
                  src={consultingImage}
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
            What We Offer in Strategic Consulting
          </h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            We provide tailored, actionable strategies that align with your
            vision and ensure sustainable success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Briefcase,
              title: "Business Strategy Development",
              desc: "Helping companies define or refine their vision, mission, and long-term direction.",
            },
            {
              icon: Search,
              title: "Market Analysis & Positioning",
              desc: "Assessing the competitive landscape to identify opportunities or threats.",
            },
            {
              icon: Building2,
              title: "Organizational Transformation",
              desc: "Advising on restructuring, leadership development, or cultural change.",
            },
            {
              icon: Settings,
              title: "Operational Efficiency",
              desc: "Improving processes and resource use for better productivity.",
            },
            {
              icon: TrendingUp,
              title: "Growth Strategy",
              desc: "Identifying new markets, products, or partnerships for expansion.",
            },
            {
              icon: ShieldCheck,
              title: "Risk Management",
              desc: "Helping foresee and prepare for risks—financial, operational, and regulatory.",
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
            Ready to Transform Your Strategy?
          </h2>
          <p className="text-secondary/70 mb-8">
            Let VAC help you navigate uncertainty and move forward with
            confidence.
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
