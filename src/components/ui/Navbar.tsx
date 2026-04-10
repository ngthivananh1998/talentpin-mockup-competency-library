"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/library", label: "Competency Library" },
  { href: "/library/jobs", label: "Job Profiles" },
  { href: "/assessment", label: "Assessment" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-[#7C3AED] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="white"/>
                <circle cx="12" cy="9" r="2.5" fill="#7C3AED"/>
              </svg>
            </div>
            <span className="font-semibold text-[#1E1B4B] text-lg tracking-tight">TalentPin</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "bg-[#EDE9FE] text-[#7C3AED]"
                      : "text-gray-600 hover:text-[#7C3AED] hover:bg-[#EDE9FE]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-gray-600 hover:text-[#7C3AED] font-medium transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="text-sm bg-[#7C3AED] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#6D28D9] transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
