import Link from "next/link";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-secondary text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Veritas Analytics Logo"
                className="h-16 w-16 rounded-full"
              />
              <span className="text-xl font-bold text-white">
                Veritas Analytics & Consulting
              </span>
            </div>
            <p className="text-white/70">
              Empowering businesses with data-driven insights.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/data-analytics"
                  className="text-white/70 hover:text-accent"
                >
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business-intelligence"
                  className="text-white/70 hover:text-accent"
                >
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/services/strategic-consulting"
                  className="text-white/70 hover:text-accent"
                >
                  Strategic Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-white/70 hover:text-accent"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/70 hover:text-accent"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/70 hover:text-accent">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70">info@vac.rw</li>
              <li className="text-white/70">+250 788 123 456</li>
              <li className="text-white/70">
                KN 7 Avenue, Kigali
                <br />
                Kigali, Rwanda
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col items-center justify-center text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Veritas Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
