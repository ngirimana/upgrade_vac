import Link from "next/link";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
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
                <Link href="#team" className="text-white/70 hover:text-accent">
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
  );
}
