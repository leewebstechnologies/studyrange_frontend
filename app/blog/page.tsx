"use client"

import React from "react";
import styles from "./blog.module.css";

const blogPosts = [
  {
    id: 1,
    title: "Mastering the Art of Deep Focus",
    excerpt: "In a world full of distractions, learning how to deeply focus is your greatest asset. Here's a practical guide.",
    category: "Productivity",
    date: "April 15, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "The Future of Web Development",
    excerpt: "Exploring the bleeding edge of UI/UX, frameworks like Next.js, and how AI is shaping the coding landscape.",
    category: "Technology",
    date: "April 10, 2026",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Designing for Humans",
    excerpt: "Why empathy is the most important skill in your design toolkit and how to practice it every day.",
    category: "Design",
    date: "April 5, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Building Scalable Architecture",
    excerpt: "When your side project suddenly gets thousands of hits. A post-mortem of growing pains.",
    category: "Engineering",
    date: "March 28, 2026",
    readTime: "10 min read",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Minimalism in UI",
    excerpt: "Less is definitely more. Creating breathing room in your interfaces for a frictionless experience.",
    category: "UI/UX",
    date: "March 20, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Remote Work Survival Guide",
    excerpt: "Strategies, rituals, and tools to maintain sanity and high productivity while working from your living room.",
    category: "Lifestyle",
    date: "March 15, 2026",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  }
];

const Blog = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroPill}>Our Blog</span>
          <h1 className={styles.heroTitle}>Stories & Insights</h1>
          <p className={styles.heroSubtitle}>
            Dive into our latest thoughts on technology, design, and building the future.
          </p>
          <div className={styles.searchWrapper}>
            <input 
              type="text" 
              placeholder="Search articles..." 
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className={styles.featuredSection}>
        <div className={styles.featuredCard}>
          <div className={styles.featuredImageWrapper}>
            {/* Using native img to avoid Next config domain issues for unsplash placeholders */}
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
              alt="Featured post" 
              className={styles.featuredImage}
            />
          </div>
          <div className={styles.featuredContent}>
            <div className={styles.metaData}>
              <span className={styles.categoryPill}>Featured</span>
              <span className={styles.date}>April 18, 2026</span>
            </div>
            <h2 className={styles.featuredTitle}>The Evolution of Next-Gen Education</h2>
            <p className={styles.featuredExcerpt}>
              How modern platforms are blending artificial intelligence with human-centric design to revolutionise the way we learn, study, and grow.
            </p>
            <a href="#" className={styles.readMoreBtn}>Read Article <span className={styles.arrow}>&rarr;</span></a>
          </div>
        </div>
      </section>

      {/* Grid of Posts */}
      <section className={styles.gridSection}>
        <div className={styles.headerRow}>
          <h3 className={styles.sectionTitle}>Latest Posts</h3>
          <div className={styles.filterGroup}>
            <button className={`${styles.filterBtn} ${styles.active}`}>All</button>
            <button className={styles.filterBtn}>Design</button>
            <button className={styles.filterBtn}>Technology</button>
            <button className={styles.filterBtn}>Productivity</button>
          </div>
        </div>

        <div className={styles.postGrid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.postCard}>
              <div className={styles.cardImageWrapper}>
                <img src={post.imageUrl} alt={post.title} className={styles.cardImage} />
                <span className={styles.cardCategory}>{post.category}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span>{post.date}</span>
                  <span className={styles.dot}>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h4 className={styles.cardTitle}>{post.title}</h4>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <a href="#" className={styles.cardLink}>Read More</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h2 className={styles.newsletterTitle}>Stay in the loop</h2>
          <p className={styles.newsletterSubtitle}>Get our latest articles delivered straight to your inbox.</p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className={styles.newsletterInput} required />
            <button type="submit" className={styles.newsletterSubmit}>Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;