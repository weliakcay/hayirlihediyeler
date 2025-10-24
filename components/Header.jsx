import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ShoppingBag, Globe, X } from "lucide-react";

const navLinks = [
  { href: "/collections/tum-urunler", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/collections/hediye-setleri", label: "Collections" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-700/40 bg-deep-green/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gold-500/60 bg-emerald-900">
            <Image
              src="/logo.svg"
              alt="Hayırlı Hediyeler Logo"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden text-lg font-semibold tracking-widest text-gold-400 sm:inline-flex">
            Hayırlı Hediyeler
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.2em] text-cream/90 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-gold-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-cream">
          <button
            aria-label="Search"
            className="rounded-full border border-gold-500/40 bg-emerald-900/60 p-2 transition hover:border-gold-400 hover:text-gold-300"
          >
            <Search size={18} />
          </button>
          <button
            aria-label="Language selector"
            className="hidden items-center gap-1 rounded-full border border-gold-500/40 bg-emerald-900/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-gold-400 hover:text-gold-300 md:flex"
          >
            <Globe size={16} />
            TR / EN
          </button>
          <button
            aria-label="Cart"
            className="rounded-full border border-gold-500/40 bg-emerald-900/60 p-2 transition hover:border-gold-400 hover:text-gold-300"
          >
            <ShoppingBag size={18} />
          </button>
          <button
            className="lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`border-t border-emerald-800 bg-deep-green px-6 transition-all duration-300 ease-out lg:hidden ${
          isMenuOpen ? "max-h-[420px] py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 overflow-hidden text-sm font-semibold uppercase tracking-[0.2em] text-cream">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md border border-transparent bg-emerald-900/60 px-4 py-3 text-center transition hover:border-gold-400 hover:text-gold-300"
            >
              {link.label}
            </Link>
          ))}
          <button className="rounded-md border border-gold-400 bg-emerald-900/50 px-4 py-3 text-center text-xs uppercase tracking-[0.3em] text-gold-300">
            TR / EN
          </button>
        </nav>
      </div>
    </header>
  );
}
