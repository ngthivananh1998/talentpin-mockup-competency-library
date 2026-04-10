"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/library", label: "Competency Library" },
  { href: "/library/jobs", label: "Job Profiles" },
  { href: "/assessment", label: "Assessment" },
];
// Note: /signup and /login show "Under Development" pages

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileOpen(false)}>
            <div className="w-8 h-8 rounded-lg bg-[#7C3AED] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="white"/>
                <circle cx="12" cy="9" r="2.5" fill="#7C3AED"/>
              </svg>
            </div>
            <span className="font-semibold text-[#1E1B4B] text-lg tracking-tight">TalentPin</span>
          </Link>

          {/* Nav Links — desktop */}
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

          {/* CTA — desktop */}
          <div className="hidden md:flex items-center gap-3">
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

          {/* Hamburger — mobile */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4">
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
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
          <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center text-sm text-gray-600 border border-gray-200 py-2.5 rounded-lg font-medium hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center text-sm bg-[#7C3AED] text-white py-2.5 rounded-lg font-medium hover:bg-[#6D28D9] transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
