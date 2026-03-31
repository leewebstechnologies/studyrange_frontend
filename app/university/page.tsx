import React from 'react';
import Image from 'next/image';
import { Search, ChevronDown } from 'lucide-react';
import styles from './university.module.css';
import Link from 'next/link';

const universities = [
  {
    name: 'University of Oxford',
    image: '/images/university/oxford.png',
    description: 'World-renowned institution with centuries of academic excellence and groundbreaking research.',
    tags: ['Research Excellence', 'Historic Legacy', 'Global Recognition'],
    location: 'Oxford',
    tuition: '£9,250',
    students: '24,515',
    acceptRate: '17.5%',
  },
  {
    name: 'University of Cambridge',
    image: '/images/university/cambridge.png',
    description: 'Leading institution in science, technology, and humanities with exceptional research output.',
    tags: ['Scientific Innovation', 'Nobel Laureates', 'World Class'],
    location: 'Cambridge',
    tuition: '£9,250',
    students: '23,247',
    acceptRate: '21%',
  },
  {
    name: 'Imperial College London',
    image: '/images/university/imperial.png',
    description: 'Premier institution for science, engineering, medicine and business with global impact.',
    tags: ['STEM Excellence', 'Innovation Hub', 'Research Intensive'],
    location: 'London',
    tuition: '£9,250',
    students: '17,565',
    acceptRate: '14.3%',
  },
  {
    name: 'University College London',
    image: '/images/university/ucl.png',
    description: "London's leading multidisciplinary university with pioneering research and teaching.",
    tags: ['Multidisciplinary', 'Global University', 'Research Leader'],
    location: 'London',
    tuition: '£9,250',
    students: '42,000',
    acceptRate: '63%',
  }
];

export default function UniversityPage() {
  return (
    <div className={styles.universityPage}>
      {/* Search Header */}
      <div className={styles.searchContainer}>
        <div className={styles.searchInputWrapper}>
          <Search className={styles.searchIcon} size={18} />
          <input
            type="text"
            placeholder="Search universities..."
            className={styles.searchInput}
          />
        </div>
        <div className={styles.dropdowns}>
          <div className={styles.dropdown}>
            <select className={styles.selectDropdown} defaultValue="">
              <option value="" disabled hidden>
                All Courses
              </option>
              <option value="computer-science">Computer Science</option>
              <option value="business">Business</option>
              <option value="engineering">Engineering</option>
              <option value="medicine">Medicine</option>
              <option value="law">Law</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>
          <div className={styles.dropdown}>
            <select className={styles.selectDropdown} defaultValue="">
              <option value="" disabled hidden>
                All Tuition
              </option>
              <option value="under-10k">Under £10,000</option>
              <option value="10k-20k">£10,000 - £20,000</option>
              <option value="20k-30k">£20,000 - £30,000</option>
              <option value="over-30k">Over £30,000</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>
          <div className={styles.dropdown}>
            <select className={styles.selectDropdown} defaultValue="">
              <option value="" disabled hidden>
                All Rankings
              </option>
              <option value="top-10">Top 10</option>
              <option value="top-50">Top 50</option>
              <option value="top-100">Top 100</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>
        </div>
      </div>

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
              <div className={styles.statCard}>
                <h3>100+</h3>
                <p>Universities</p>
              </div>
              <div className={styles.statCard}>
                <h3>1000+</h3>
                <p>Courses</p>
              </div>
              <div className={styles.statCard}>
                <h3>2500+</h3>
                <p>Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.featuredSection}>
        <h2 className={styles.featuredTitle}>Featured Universities</h2>
        <div className={styles.grid}>
          {universities.map((uni, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.uniName}>{uni.name}</h3>
                <div className={styles.imageContainer}>
                  <Image
                    src={uni.image}
                    alt={uni.name}
                    width={140}
                    height={90}
                    className={styles.uniImage}
                    unoptimized
                  />
                </div>
              </div>
              <p className={styles.description}>{uni.description}</p>
              <div className={styles.tags}>
                {uni.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    {tag}
                  </span>
                ))}
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
                  <span className={styles.metricLabel}>Accept Rate</span>
                </div>
              </div>
              <button className={styles.viewBtn}>View Details</button>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Buttons */}
      <div className={styles.floatingButtons}>
        <Link href="https://wa.me/+2347035079333">
          <button className={styles.floatingBtnWhatsapp}>
            <Image
              src="/images/about/whatsapp.png"
              width={56}
              height={56}
              alt="whatsapp"
              className={styles.whatsapp}
            />
          </button>
        </Link>
        <Link href="/contact">
          <button className={styles.floatingBtnConsult}>
            <Image
              src="/images/about/consult.png"
              width={60}
              height={58}
              alt="consult"
              className={styles.consult}
            />
          </button>
        </Link>
      </div>
    </div>
  );
}