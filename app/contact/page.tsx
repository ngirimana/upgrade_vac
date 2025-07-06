"use client";
import Link from "next/link";
import { BarChart2, Globe } from "lucide-react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Sending...");

    try {
      await emailjs.send(
        "service_q3d7muj",
        "template_bt6545b",
        {
          user_name: `${formData.firstName} ${formData.lastName}`,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "FeWbmuONxlqxKTvZw"
      );
      toast.success("Email sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send email.");
      console.error("Email send error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-white" id="contact">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-secondary">
              Contact Us
            </h2>
            <p className="text-secondary/70 max-w-2xl mx-auto">
              Have questions or ready to start your data journey? Reach out to
              our team of experts.
            </p>
          </div>

          {/* Form & Info Section */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl border border-accent shadow-sm space-y-8">
              <h3 className="text-xl font-bold text-secondary">
                Send Us a Message
              </h3>
              <form onSubmit={sendEmail} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-accent/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-accent/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-accent/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-accent/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-accent/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-md"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl border border-accent shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-secondary mb-6">
                  Contact Information
                </h3>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Phone</h4>
                    <p className="text-secondary/70">250-888-552-183</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Email</h4>
                    <p className="text-secondary/70">sales@vac.rw</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Office</h4>
                    <p className="text-secondary/70">
                      KN 7 Ave, Kigali, Rwanda
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FaLinkedin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary/70 hover:underline"
                    >
                      Visit Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl border border-accent shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-secondary">
                  Office Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-secondary">Monday - Friday</span>
                    <span className="text-secondary/70">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Saturday</span>
                    <span className="text-secondary/70">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Sunday</span>
                    <span className="text-secondary/70">
                      10:00 AM - 2:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

      {/* Footer */}
      <footer className="border-t bg-secondary text-white">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-6 w-6 text-accent" />
                <span className="text-xl font-bold">Veritas Analytics</span>
              </div>
              <p className="text-white/70">
                Empowering businesses with data-driven insights since 2015.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-accent">
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-accent">
                    Business Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-accent">
                    Strategic Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-accent">
                    Data Visualization
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-accent">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#team"
                    className="text-white/70 hover:text-accent"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-accent">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-accent">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-white/70">hello@veritasanalytics.com</li>
                <li className="text-white/70">+1 (555) 123-4567</li>
                <li className="text-white/70">
                  123 Business Ave, Suite 100
                  <br />
                  San Francisco, CA 94107
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © 2025 Veritas Analytics. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-white/70 hover:text-accent">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/70 hover:text-accent">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
