"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Navigation */}
      <header className="static top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-20 items-center justify-between">
          {!isMobileMenuOpen ? (
            <Link href="/">
              <div className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Veritas Analytics Logo"
                  className="h-16 w-16 rounded-full"
                />
                <span className="text-xl font-bold text-secondary">
                  Veritas Analytics & Consultant
                </span>
              </div>
            </Link>
          ) : (
            <Link href="/">
              <div className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="Veritas Analytics Logo"
                  className="h-10 w-10 md:h-16 md:w-16 rounded-full"
                />
                <span className="text-base md:text-xl font-bold text-secondary">
                  Veritas Analytics & Consultant
                </span>
              </div>
            </Link>
          )}

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              Solutions
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              Our Team
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA
          <Button className="hidden md:inline-flex bg-secondary hover:bg-secondary/90">
            <Link href="/contact">Book a Consultation</Link>
          </Button> */}

          {/* Mobile Menu Toggle */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-secondary text-secondary"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </Button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-base font-medium text-secondary hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-base font-medium text-secondary hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="/solutions"
                className="text-base font-medium text-secondary hover:text-primary"
              >
                Solutions
              </Link>
              <Link
                href="/team"
                className="text-base font-medium text-secondary hover:text-primary"
              >
                Our Team
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-secondary hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
