import React from 'react';
import Image from 'next/image';
import styles from './university.module.css';
import { API_BASE_URL, IMAGE_BASE_URL } from '@/config/config';
import FloatingButtons from '../components/floatingButtons/FloatingButtons';

type platformstatItem = {
  id: number;
  title: string;
  description: string;
}


const getPlatformstat = async (): Promise<platformstatItem[]> => {
  const res = await fetch(`${API_BASE_URL}/platformstat`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data;
};

type SchoolItem = {
  id: number;
  name: string;
  image: string;
  description: string;
  tagone: string;
  tagtwo: string;
  tagthree: string;
  location: string;
  tuition: string;
  students: string;
  acceptRate: string;
  school: string;
};

const getSchool = async (): Promise<SchoolItem[]> => {
  const res = await fetch(`${API_BASE_URL}/school`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data;
};

const University = async () => {
  const platformstat = await getPlatformstat();
  const school = await getSchool();
  return (
    <div className={styles.universityPage}>

      <div className={styles.topLeftCircle}></div>

      <div className={styles.mainContent}>
        <div className={styles.topRightCircle}></div>

        <div className={styles.topSection}>
          <div className={styles.mapSection}>
            <div className={styles.mapContainer}>
              {/* Title INSIDE image */}
              <h2 className={styles.mapTitle}>University Locations</h2>

              <Image
                src="/images/university/university.jpg"
                alt="Map View"
                fill
                className={styles.mapImage}
              />

              <div className={styles.mapOverlay}></div>

              {/* Pins */}
              <div className={styles.pin} style={{ top: "30%", left: "20%" }}>
                <div className={styles.pinDot}></div>
              </div>
            </div>
          </div>

          <div className={styles.statsSection}>
            <h2 className={styles.sectionTitle}>Platform Stats</h2>
            <div className={styles.statsContainer}>
              {platformstat.map((item) => (
                <div key={item.id} className={styles.statCard}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.featuredSection}>
        <h2 className={styles.featuredTitle}>Some of our universities</h2>
        <div className={styles.grid}>
          {school.map((uni, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.uniName}>{uni.name}</h3>
                <div className={styles.imageContainer}>
                  <Image
                    src={`${IMAGE_BASE_URL}/${uni.image}`}
                    alt={uni.name}
                    width={140}
                    height={90}
                    className={styles.uniImage}
                  />
                </div>
              </div>
              <p className={styles.description}>{uni.description}</p>
              <div className={styles.tags}>
                {uni.tagone && <span className={styles.tag}>{uni.tagone}</span>}
                {uni.tagtwo && <span className={styles.tag}>{uni.tagtwo}</span>}
                {uni.tagthree && (
                  <span className={styles.tag}>{uni.tagthree}</span>
                )}
              </div>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>{uni.location}</span>
                  <span className={styles.metricLabel}>Location</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>{uni.tuition}</span>
                  <span className={styles.metricLabel}>Tuition</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>{uni.students}</span>
                  <span className={styles.metricLabel}>Students</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>{uni.acceptRate}</span>
                  <span className={styles.metricLabel}>Acceptance Rate</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FloatingButtons />
    </div>
  );
}

export default University;