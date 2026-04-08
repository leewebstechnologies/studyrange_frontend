"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/images/footerLogo.png"
                  alt="Studyrange Consult"
                  width={48}
                  height={48}
                />
                <h3>STUDYRANGE CONSULT</h3>
              </Link>
              
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
              <i className="fa-solid fa-phone" style={{ fontSize: "16px" }}></i>
              +44 744 854 1193
            </p>

            <p className={styles.contactItem}>
              <i className="fa-solid fa-phone" style={{ fontSize: "16px" }}></i>
               +234 703 507 9333
            </p>

            <p className={styles.contactItem}>
              <i
                className="fa-solid fa-envelope"
                style={{ fontSize: "16px" }}
              ></i>
              <a
                className={styles.contactLink}
                href="mailto:info@studyrangeconsult.com"
              >
                <span>info@studyrangeconsult.com</span>
              </a>
            </p>

            <div className={styles.socials}>
              <Link
                className={styles.contactLink}
                href="https://www.facebook.com/studyrangeconsult"
                target="_blank"
              >
                <i
                  className="fa-brands fa-facebook"
                  style={{ fontSize: "18px" }}
                ></i>
              </Link>
              <Link
                className={styles.contactLink}
                href="https://x.com/studyrange"
                target="_blank"
              >
                <i
                  className="fa-brands fa-x-twitter"
                  style={{ fontSize: "18px" }}
                ></i>
              </Link>
              <Link
                className={styles.contactLink}
                href="https://www.instagram.com/studyrange_consult/profilecard/?igsh=MTNsbWpyemVrcGtoYQ%3D%3D"
                target="_blank"
              >
                <i
                  className="fa-brands fa-instagram"
                  style={{ fontSize: "18px" }}
                ></i>
              </Link>
              <Link
                className={styles.contactLink}
                href="https://www.linkedin.com/company/studyrange-consult/"
                target="_blank"
              >
                <i
                  className="fa-brands fa-linkedin"
                  style={{ fontSize: "18px" }}
                ></i>
              </Link>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider}></div>

        {/* BOTTOM BAR */}
        <div className={styles.bottom}>
          <p>© {year} Studyrange Consult. All rights reserved.</p>

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
