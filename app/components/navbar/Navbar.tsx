"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Navbar = () => {
  const currentPath = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/images/logo.png"
          alt="logo"
          width={211}
          height={36}
        />
      </Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link
            className={clsx(styles.item, currentPath === "/" && styles.active)}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            className={clsx(
              styles.item,
              currentPath === "/about" && styles.active,
            )}
            href="/about"
          >
            About Us
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            className={clsx(
              styles.item,
              currentPath === "/services" && styles.active,
            )}
            href="/services"
          >
            Services
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            className={clsx(
              styles.item,
              currentPath === "/study" && styles.active,
            )}
            href="/study"
          >
            Study Match
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            className={clsx(
              styles.item,
              currentPath === "/university" && styles.active,
            )}
            href="/university"
          >
            University
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            className={clsx(
              styles.item,
              currentPath === "/scholarship" && styles.active,
            )}
            href="/scholarship"
          >
            Scholarship
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            className={clsx(
              styles.item,
              currentPath === "/resources" && styles.active,
            )}
            href="/resources"
          >
            Resources
          </Link>
        </li>

        <li className={styles.listItem}>
          <Link
            href="https://studyrangeconsult.com"
            className={clsx(
              styles.item,
              styles.highlight,
              currentPath === "/cargo" && styles.active,
            )}
          >
            Cargo Services
          </Link>
        </li>

        <li className={styles.listItem}>
          <Link
            href="/contact"
            className={clsx(
              styles.item,
              styles.highlight,
              currentPath === "/contact" && styles.active,
            )}
          >
            Contact Us
          </Link>
        </li>
      </ul>

      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className={styles.menu}
        style={{ right: open ? "0px" : "-50vw" }}
      >
        <li className={styles.menuItem}>
          <Link className={styles.item} href="/">
            Home
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.item} href="/about">
            About Us
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.item} href="/services">
            Services
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.item} href="/study">
            Study Match
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.item} href="/university">
            University
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.item} href="/scholarship">
            Scholarship
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.item} href="/cargo">
            Cargo Services
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link className={styles.item} href="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;