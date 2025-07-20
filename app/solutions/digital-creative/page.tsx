"use client";

import { ArrowRight, Palette, LayoutDashboard, PenTool } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import digitalCreativeImage from "@/public/digital-creative.png"; // Adjust path

export default function DigitalCreativePage() {
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
                Expert Digital & Creative Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary">
                Creativity Meets Strategy
              </h1>
              <p className="text-lg text-secondary/80">
                At VAC, we blend creativity with strategy to help your brand
                stand out online. From eye-catching visuals to compelling
                content, our digital and creative services turn ideas into
                impact—built on insights, backed by data.
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
                  src={digitalCreativeImage}
                  alt="Digital and Creative Illustration"
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
            What We Offer in Digital & Creative
          </h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            From visual branding to intuitive design and standout content, we
            craft digital experiences that connect and convert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Branding & Visual Identity
            </h3>
            <p className="text-secondary/70">
              We design logos, colors, and visual systems that reflect your
              brand personality and leave a lasting impression.
            </p>
          </div>

          {/* Content Creation */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <PenTool className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Content Creation & Copywriting
            </h3>
            <p className="text-secondary/70">
              Whether it’s for websites, campaigns, or social media—we write and
              create content that engages and converts.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <LayoutDashboard className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              UI/UX & Web Design
            </h3>
            <p className="text-secondary/70">
              We design intuitive, user-friendly interfaces and responsive
              websites that work beautifully across all devices.
            </p>
          </div>

          {/* Social Media Graphics */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Social Media & Campaign Graphics
            </h3>
            <p className="text-secondary/70">
              From Instagram to LinkedIn, we design high-performing visuals that
              amplify your message and drive engagement.
            </p>
          </div>

          {/* Presentation Design */}
          <div className="bg-white p-8 rounded-xl border border-accent shadow-sm hover:shadow-md transition-all group">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-[#FF8C4B] transition-colors">
              Presentation & Report Design
            </h3>
            <p className="text-secondary/70">
              Turn complex ideas or data into elegant, easy-to-understand
              visuals that make a lasting impression.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent/20 py-20">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-secondary">
            Let Your Brand Speak Loud and Clear
          </h2>
          <p className="text-secondary/70 mb-8">
            Partner with our creative team to shape memorable digital
            experiences backed by insight and innovation.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
              Book a Creative Session <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
