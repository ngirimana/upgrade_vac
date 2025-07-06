import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className=" bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png" // Update this path to your actual logo image
              alt="Veritas Analytics Logo"
              className="h-16 w-16 rounded-full" // Adjust size as needed
            />
            <span className="text-xl font-bold text-secondary">
              Veritas Analytics & Consultant
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#solutions"
              className="text-sm font-medium text-secondary hover:text-primary"
            >
              Solutions
            </Link>
            <Link
              href="#team"
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
          <Button className="hidden md:inline-flex bg-secondary hover:bg-secondary/90">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-secondary text-secondary"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
