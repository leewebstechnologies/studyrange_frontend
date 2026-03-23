"use client";

import React from 'react';
import styles from './resources.module.css';
import { 
  Check, 
  Clock, 
  Play, 
  FileText, 
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import FloatingButtons from '../components/floatingButtons/FloatingButtons';

const Resources = () => {
  const articles = [
    {
      id: 1,
      image: "/images/resources/application.png",
      tag: "Application",
      tagColor: "tagPink",
      title: "Complete UCAS Application Guide",
      readTime: "8 min read",
    },
    {
      id: 2,
      image: "/images/resources/visa.png",
      tag: "Visa",
      tagColor: "tagYellow",
      title: "Student Visa Requirements",
      readTime: "12 min read",
    }
  ];

  const videos = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
      duration: "10:45",
      title: "Application Process Walkthrough",
      views: "15k Views"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=80",
      duration: "12:20",
      title: "Interview Preparation Guide",
      views: "12k Views"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
      duration: "08:15",
      title: "Student Life in the UK",
      views: "15k Views"
    }
  ];

  const guides = [
    {
      id: 1,
      title: "Complete UK Study Guide",
      desc: "Everything you need to know about studying in the UK.",
      pages: "45 pages",
      downloads: "Downloaded 3,447 times"
    },
    {
      id: 2,
      title: "Scholarship Checklist",
      desc: "Step-by-step guide to finding and applying for scholarships.",
      pages: "12 pages",
      downloads: "Downloaded 12,504 times"
    },
    {
      id: 3,
      title: "Student Visa Guide",
      desc: "Complete visa application process and requirements.",
      pages: "24 pages",
      downloads: "Downloaded 8,198 times"
    },
    {
      id: 4,
      title: "Accommodation Guide",
      desc: "Finding the perfect place to live during your studies.",
      pages: "18 pages",
      downloads: "Downloaded 4,254 times"
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
        <div className={styles.contentWrapper}>
          <h1 className={styles.headerTitle}>Study Abroad Resources</h1>
          <p className={styles.headerSubtitle}>
            Everything you need to succeed in your UK university application journey
          </p>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        {/* Readiness Assessment Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Readiness Assessment</h2>
          <p className={styles.sectionSubtitle}>Test your knowledge and get personalized recommendations</p>
          
          <div className={styles.readinessCard}>
            <div className={styles.checkIconWrapper}>
              <Check size={28} strokeWidth={3} />
            </div>
            <h3 className={styles.quizTitle}>UK Study Readiness Quiz</h3>
            <p className={styles.quizDesc}>15 Questions to assess your preparation level</p>
            <button className={styles.quizBtn}>Start Quiz</button>
          </div>
        </section>

        {/* Essential Articles Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Essential Articles</h2>
          <p className={styles.sectionSubtitle}>Expert insights and comprehensive guides</p>
          
          <div className={styles.articlesGrid}>
            {articles.map((article) => (
              <div key={article.id} className={styles.articleCard}>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className={styles.articleImg}
                />
                <div className={styles.articleContent}>
                  <div className={styles.articleTagWrapper}>
                    <span className={`${styles.articleTag} ${styles[article.tagColor]}`}>
                      {article.tag}
                    </span>
                  </div>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <div className={styles.articleMeta}>
                    <div className={styles.articleReadTime}>
                      <Clock size={14} />
                      {article.readTime}
                    </div>
                    <Link href="#" className={styles.readMoreLink}>
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Tutorials Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Video Tutorials</h2>
          <p className={styles.sectionSubtitle}>Step-by-step guidance from experts</p>
          
          <div className={styles.videosGrid}>
            {videos.map((video) => (
              <div key={video.id} className={styles.videoCard}>
                <div className={styles.videoImgWrapper}>
                  <img src={video.image} alt={video.title} className={styles.videoImg} />
                  <div className={styles.videoImgOverlay}></div>
                  <span className={styles.videoDuration}>{video.duration}</span>
                  <div className={styles.playBtn}>
                    <Play size={20} fill="currentColor" />
                  </div>
                </div>
                <div className={styles.videoContent}>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                  <p className={styles.videoViews}>{video.views}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Downloadable Guides Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Downloadable Guides</h2>
          <p className={styles.sectionSubtitle}>Comprehensive resources for your journey</p>
          
          <div className={styles.guidesGrid}>
            {guides.map((guide) => (
              <div key={guide.id} className={styles.guideCard}>
                <div className={styles.guideIconWrapper}>
                  <FileText size={20} />
                </div>
                <div className={styles.guideContent}>
                  <div className={styles.guideHeader}>
                    <h3 className={styles.guideTitle}>{guide.title}</h3>
                  </div>
                  <p className={styles.guideDesc}>{guide.desc}</p>
                  <div className={styles.guideFooter}>
                    <span className={styles.guideMeta}>{guide.pages} • {guide.downloads}</span>
                    <button className={styles.downloadBtn}>Download PDF</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  );
};

export default Resources;