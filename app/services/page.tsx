"use client";

import Link from "next/link";
import { BarChart2, LineChart, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <section className="container py-20 min-h-screen bg-white">
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
        {/* Service 1 */}
        <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md group">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
            <BarChart2 className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B]">
            Data Analytics
          </h3>
          <p className="text-secondary/70 mb-4">
            Transform raw data into actionable insights with our advanced
            analytics solutions.
          </p>
          <Link
            href="/services/data-analytics"
            className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md group">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
            <LineChart className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B]">
            Business Intelligence
          </h3>
          <p className="text-secondary/70 mb-4">
            Make informed decisions with our comprehensive business intelligence
            platforms.
          </p>
          <Link
            href="/services/business-intelligence"
            className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md group">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B]">
            Strategic Consulting
          </h3>
          <p className="text-secondary/70 mb-4">
            Expert guidance to help you navigate complex business challenges and
            opportunities.
          </p>
          <Link
            href="/services/strategic-consulting"
            className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      {/* CTA Section */}
      <section className="bg-accent/20 py-20 mt-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-secondary">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-secondary/70 mb-8">
              Let our expert team help you uncover insights, define your
              strategy, and build solutions that drive impact.
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
    </section>
  );
}
