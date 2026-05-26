// "use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import { API_BASE_URL } from "@/config/config";

const getFooter = async () => {
  const res = await fetch(`${API_BASE_URL}/footer`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};

const getSocial = async () => {
  const res = await fetch(`${API_BASE_URL}/social`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};

const Footer = async () => {
  const year = new Date().getFullYear();
  const footer = await getFooter();
  const social = await getSocial();
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
                <h3>STUDYRANGE GLOBAL SERVICES & CONSULT LTD</h3>
              </Link>
            </div>

            <p style={{ marginLeft: "50px" }}>{footer.text}</p>
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
                <Link href="/university">University</Link>
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
                <Link href="/services">Admission Services</Link>
              </li>
              <li>
                <Link href="/services">Financial Advice</Link>
              </li>
              <li>
                <Link href="/services">Student Visa Guidance Service</Link>
              </li>
            </ul>
          </nav>

          {/* CONTACT */}
          <div className={styles.contact}>
            <h4>Contact</h4>

            <p className={styles.contactItem}>
              <i className="fa-solid fa-phone" style={{ fontSize: "16px" }}></i>
              {footer.phone_one}
            </p>

            <p className={styles.contactItem}>
              <i className="fa-solid fa-phone" style={{ fontSize: "16px" }}></i>
              {footer.phone_two}
            </p>

            <p className={styles.contactItem}>
              <i
                className="fa-solid fa-envelope"
                style={{ fontSize: "16px" }}
              ></i>
              <Link
                className={styles.contactLink}
                href="mailto:info@studyrangeconsult.com"
              >
                <span>{footer.email}</span>
              </Link>
            </p>

            <div className={styles.socials}>
              <Link
                className={styles.contactLink}
                href={`${social.facebook}`}
                target="_blank"
              >
                <i
                  className="fa-brands fa-facebook"
                  style={{ fontSize: "18px" }}
                ></i>
              </Link>
              <Link
                className={styles.contactLink}
                href={`${social.x}`}
                target="_blank"
              >
                <i
                  className="fa-brands fa-x-twitter"
                  style={{ fontSize: "18px" }}
                ></i>
              </Link>
              <Link
                className={styles.contactLink}
                href={`${social.instagram}`}
                target="_blank"
              >
                <i
                  className="fa-brands fa-instagram"
                  style={{ fontSize: "18px" }}
                ></i>
              </Link>
              <Link
                className={styles.contactLink}
                href={`${social.linkedin}`}
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
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
