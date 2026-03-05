"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import styles from "./navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/study", label: "Study Match" },
  { href: "/university", label: "University" },
  { href: "/scholarship", label: "Scholarship" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      {/* Logo */}
      <Link href="/" className={styles.logoWrap}>
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={211}
          height={36}
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              styles.link,
              pathname === link.href && styles.active,
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop CTA */}
      <div className={styles.actions}>
        <Link
          href="https://studyrangeconsult.com"
          className={clsx(styles.link, styles.highlight)}
        >
          Cargo Services
        </Link>
        <Link href="/contact" className={clsx(styles.link, styles.highlight)}>
          Contact Us
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className={clsx(styles.hamburger, open && styles.open)}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Drawer */}
      <aside className={clsx(styles.drawer, open && styles.show)}>
        {[
          ...navLinks,
          { href: "/cargo", label: "Cargo Services" },
          { href: "/contact", label: "Contact Us" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={styles.drawerLink}
          >
            {link.label}
          </Link>
        ))}
      </aside>
    </header>
  );
}
