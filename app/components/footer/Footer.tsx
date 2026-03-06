"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* TOP GRID */}
        <div className={styles.grid}>
          {/* BRAND */}
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <Image
                src="/images/footerLogo.png"
                alt="Studyrange Consult"
                width={48}
                height={48}
              />
              <h3>STUDYRANGE CONSULT</h3>
            </div>

            <p>
              Your trusted partner for UK education since 2019. Transforming
              dreams into degrees.
            </p>
          </div>

          {/* QUICK LINKS */}
          <nav className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/universities">Universities</Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
            </ul>
          </nav>

          {/* SERVICES */}
          <nav className={styles.links}>
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link href="#">Study Abroad Advisory</Link>
              </li>
              <li>
                <Link href="#">Visa Support</Link>
              </li>
              <li>
                <Link href="#">Accommodation</Link>
              </li>
              <li>
                <Link href="#">Scholarships</Link>
              </li>
            </ul>
          </nav>

          {/* CONTACT */}
          <div className={styles.contact}>
            <h4>Contact</h4>

            <p className={styles.contactItem}>
              <Phone size={16} />
              +44 744 854 1193
            </p>

            <p className={styles.contactItem}>
              <Phone size={16} />
             <span>+234 809 999 1995</span> 
            </p>

            <p className={styles.contactItem}>
              <Mail size={16} />
              <span>info@studyrangeconsult.com</span> 
            </p>

            <div className={styles.socials}>
              <Facebook size={18} />
              <Twitter size={18} />
              <Instagram size={18} />
              <Linkedin size={18} />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider}></div>

        {/* BOTTOM BAR */}
        <div className={styles.bottom}>
          <p>© 2026 Studyrange Consult. All rights reserved.</p>

          <div className={styles.legal}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
