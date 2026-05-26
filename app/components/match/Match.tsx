"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./match.module.css";
import axios from "axios";
import Link from "next/link";

type SchoolDetails = {
  id: number;
  image?: string;
  location?: string;
  acceptRate?: string;
  tuition?: string;
};

type MatchedUniversity = {
  success: boolean;
  university: string;
  school_details?: SchoolDetails;
};

type FormDataType = {
  studyLevel: string;
  subjectArea: string;
  budgetRange: string;
  academicScore: string;
};

const Match = () => {
  const [formData, setFormData] = useState<FormDataType>({
    studyLevel: "",
    subjectArea: "",
    budgetRange: "",
    academicScore: "",
  });

  const [loading, setLoading] = useState(false);

  const [matchedUniversity, setMatchedUniversity] =
    useState<MatchedUniversity | null>(null);

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMatch = async () => {
    if (
      !formData.studyLevel ||
      !formData.subjectArea ||
      !formData.budgetRange ||
      !formData.academicScore
    ) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    setLoading(true);
    setMatchedUniversity(null);

    try {
      const response = await axios.post<MatchedUniversity>(
        "http://127.0.0.1:8000/api/match",
        formData,
      );

      if (response.data.success) {
        setMatchedUniversity(response.data);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.wrapper} aria-label="University match finder" id="match-section">
      <p className={styles.subtitle}>
        Our revolutionary AI engine analyzes 50+ factors to find your perfect
        university match in seconds
      </p>

      <div className={styles.card}>
        <div className={styles.layout}>
          {/* LEFT SIDE */}
          <div className={styles.left}>
            <div className={styles.topGrid}>
              <div className={styles.smallCard}>
                <label className={styles.label}>Study Level</label>

                <select
                  className={styles.select}
                  value={formData.studyLevel}
                  name="studyLevel"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>Diploma & Foundation</option>
                  <option>Undergraduate</option>
                  <option>Pre-Masters</option>
                   <option>Postgraduate</option>
                  <option>Masters of Research</option>              
                  <option>Masters of Philosophy</option>
                  <option>PhD</option>
                </select>
              </div>

              <div className={styles.smallCard}>
                <label className={styles.label}>Subject Area</label>

                <select
                  className={styles.select}
                  value={formData.subjectArea}
                  name="subjectArea"
                  onChange={handleChange}
                >
                 <option value="">Select</option>
                  <option>Accounting and Finance</option>
                  <option>Adult / Mental Health Nursing</option>
                  <option>Aerospace & Aeronautical Engineering</option>
                  <option>Architecture</option>
                  <option>Artificial Intelligence and Robotics</option>
                  <option>Biomedical Science</option>
                  <option>Business Administration (MBA)</option>
                  <option>Chemical and Biochemical Engineering</option>
                  <option>Chemistry</option>
                  <option>Computer Science</option>
                  <option>Cyber Security</option>
                  <option>Data Science & Analytics</option>
                  <option>Economics</option>
                  <option>English Literature & Creative Writing</option>
                  <option>Fashion Design & Marketing</option>
                  <option>Film Making & Media Production</option>
                  <option>Fine Art</option>
                  <option>Games Development</option>
                  <option>Graphic Design & Illustration</option>
                  <option>Health Care Management</option>                  
                  <option>Human Resource Management</option>
                  <option>Information Technology</option>
                  <option>Interior Design</option>
                  <option>International Business & Management</option>
                  <option>International Relations & Politics</option>
                  <option>Marketing & Digital Strategy</option>
                  <option>Law</option>
                  <option>Management</option>
                  <option>Mathematics & Statistics</option>
                  <option>Mechanical and Civil Engineering</option>
                  <option>Medicine (MBBS/MBChB)</option>
                  <option>Nursing</option>
                  <option>Pharmacology and Pharmacy</option>
                  <option>Physics and Astronomy</option>
                  <option>Project Management</option>
                  <option>Psychology</option>
                  <option>Software Engineering</option>
                  <option>Sociology & Criminology</option>
                  <option>Social Work</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            <div className={styles.largeCard}>
              <div className={styles.field}>
                <label className={styles.label}>Budget Range</label>

                <select
                  className={styles.select}
                  value={formData.budgetRange}
                  name="budgetRange"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>£10,000 – £20,000</option>
                  <option>£20,000 – £30,000</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Academic Score</label>

                <input
                  className={styles.input}
                  placeholder="e.g., 3.5 GPA"
                  name="academicScore"
                  value={formData.academicScore}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.right}>
            <button
              className={styles.button}
              onClick={handleMatch}
              disabled={loading}
            >
              <Image
                className={styles.buttonI}
                src="/images/match/i.png"
                alt="star"
                width={20}
                height={24}
              />

              {loading ? "Matching..." : "Find My Match"}
            </button>

            <span className={styles.secure}>
              <Image
                className={styles.secureI}
                src="/images/match/secure.png"
                alt="star"
                width={14}
                height={14}
              />
              100% Free & Secure
            </span>
          </div>
        </div>

        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>

      {/* RESULTS SECTION */}
      {(loading || matchedUniversity) && (
        <div className={styles.resultsWrapper}>
          {loading ? (
            <div className={styles.loaderContainer}>
              <div className={styles.loader}></div>
              <p>Our AI is analyzing your profile...</p>
            </div>
          ) : (
            <div className={styles.resultsContent}>
              <h2 className={styles.resultsTitle}>Your Perfect Match Found!</h2>

              <div className={styles.resultsGrid}>
                <div className={styles.resultCard}>
                  <div className={styles.resultImageWrapper}>
                    <Image
                      src={
                        matchedUniversity?.school_details?.image
                          ? `http://127.0.0.1:8000/${matchedUniversity.school_details.image}`
                          : "/images/match/default-uni.png"
                      }
                      alt={matchedUniversity?.university || "University"}
                      fill
                      className={styles.resultImage}
                    />
                  </div>

                  <div className={styles.resultInfo}>
                    <h3>{matchedUniversity?.university}</h3>

                    <p className={styles.resultLocation}>
                      {matchedUniversity?.school_details?.location ||
                        "United Kingdom"}
                    </p>

                    <div className={styles.resultMeta}>
                      <span>
                        Acceptance:{" "}
                        {matchedUniversity?.school_details?.acceptRate ||
                          "Varies"}
                      </span>

                      <span>
                        Tuition:{" "}
                        {matchedUniversity?.school_details?.tuition ||
                          "Contact for info"}
                      </span>
                    </div>

                    <Link
                      href={`/university/${
                        matchedUniversity?.school_details?.id || ""
                      }`}
                      className={styles.viewLink}
                    >
                      View University Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Match;
