import React from "react";
import styles from "./resources.module.css";
import { Clock, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FloatingButtons from "../components/floatingButtons/FloatingButtons";
import { API_BASE_URL, IMAGE_BASE_URL, VIDEO_BASE_URL } from "@/config/config";
import VideoCard from "../components/videoCard/VideoCard";

type ResourceItem = {
  id: number;
  title: string;
  tag: string;
  tagColor: string;
  readTime: string;
  date: string;
  image: string;
};

type ResourcetutorialItem = {
  id: number;
  title: string;
  videoUrl: string;
  duration: string;
  views: string;
};

type GuideItem = {
  id: number;
  title: string;
  description: string;
  pages: string;
  downloads: string;
};

const getResource = async (): Promise<ResourceItem[]> => {
  const res = await fetch(`${API_BASE_URL}/resource`, {
    cache: "no-store",
  });

  return res.json();
};

const getResourcetutorial = async (): Promise<ResourcetutorialItem[]> => {
  const res = await fetch(`${API_BASE_URL}/resourcetutorial`, {
    cache: "no-store",
  });

  const data = await res.json();

  return data.map((item: ResourcetutorialItem) => {
    let finalVideoUrl = item.videoUrl;
    
    if (finalVideoUrl && !finalVideoUrl.startsWith('http')) {
      // Remove any leading slash so it appends cleanly to VIDEO_BASE_URL
      const cleanPath = finalVideoUrl.replace(/^\/?/, '');
      finalVideoUrl = `${VIDEO_BASE_URL}/${cleanPath}`;
    }

    return {
      id: item.id,
      title: item.title,
      duration: item.duration,
      views: item.views,
      videoUrl: finalVideoUrl,
    };
  });
};

const getGuides = async (): Promise<GuideItem[]> => {
  const res = await fetch(`${API_BASE_URL}/guide`, {
    cache: "no-store",
  });

  return res.json();
};

const Resources = async () => {
  const resource = await getResource();
  const resourcetutorial = await getResourcetutorial();
  const guides = await getGuides();

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>

        <div className={styles.contentWrapper}>
          <h1 className={styles.headerTitle}>Study Abroad Resources</h1>

          <p className={styles.headerSubtitle}>
            Everything you need to succeed in your UK university application
            journey
          </p>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        {/* Essential Articles Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Essential Articles</h2>

          <p className={styles.sectionSubtitle}>
            Expert insights and comprehensive guides
          </p>

          <div className={styles.articlesGrid}>
            {resource.map((article) => (
              <div key={article.id} className={styles.articleCard}>
                <Image
                  src={`${IMAGE_BASE_URL}/${article.image}`}
                  alt={article.title}
                  className={styles.articleImg}
                  width={600}
                  height={400}
                />

                <div className={styles.articleContent}>
                  <div className={styles.articleTagWrapper}>
                    <span
                      className={`${styles.articleTag} ${styles[article.tagColor]}`}
                    >
                      {article.tag}
                    </span>
                  </div>

                  <h3 className={styles.articleTitle}>{article.title}</h3>

                  <div className={styles.articleMeta}>
                    <div className={styles.articleReadTime}>
                      <Clock size={14} />
                      {article.readTime}
                    </div>

                    <Link
                      href={`/resources/resources-details?id=${article.id}`}
                      className={styles.readMoreLink}
                    >
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

          <p className={styles.sectionSubtitle}>
            Step-by-step guidance from experts
          </p>

          <div className={styles.videosGrid}>
            {resourcetutorial.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </section>

        {/* Downloadable Guides Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Downloadable Guides</h2>

          <p className={styles.sectionSubtitle}>
            Comprehensive resources for your journey
          </p>

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

                  <p className={styles.guideDesc}>{guide.description}</p>

                  <div className={styles.guideFooter}>
                    <span className={styles.guideMeta}>{guide.pages}</span>

                    <Link
                      href={`${IMAGE_BASE_URL}/${guide.downloads}`}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.downloadBtn}
                    >
                      Download PDF
                    </Link>
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
