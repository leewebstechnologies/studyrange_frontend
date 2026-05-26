"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import styles from "./cargo.module.css";

const tabsContent = {
  air: {
    title: "Air Freight Services",
    desc: "Fast and reliable air cargo solutions for time-sensitive shipments worldwide.",
    features: [
      { title: "Express Delivery", desc: "1-3 days worldwide delivery" },
      { title: "Temperature Control", desc: "Specialized handling for sensitive goods" },
      { title: "Real-time Tracking", desc: "Monitor your shipment 24/7" }
    ],
    btnText: "Get Air Freight Quote",
    transit: [
      { region: "Europe", time: "1-2 days" },
      { region: "North America", time: "2-3 days" },
      { region: "Asia Pacific", time: "1-3 days" },
      { region: "Middle East", time: "1-2 days" }
    ]
  },
  sea: {
    title: "Sea Freight Services",
    desc: "Cost-effective sea cargo solutions for large volume and heavy shipments.",
    features: [
      { title: "FCL / LCL Options", desc: "Flexible container loading choices" },
      { title: "Port-to-Port", desc: "Efficient port-to-port logistics" },
      { title: "Customs Clearance", desc: "Seamless border transition supported" }
    ],
    btnText: "Get Sea Freight Quote",
    transit: [
      { region: "Europe", time: "20-25 days" },
      { region: "North America", time: "15-30 days" },
      { region: "Asia Pacific", time: "10-20 days" },
      { region: "Middle East", time: "15-20 days" }
    ]
  },
  express: {
    title: "Express Services",
    desc: "Dedicated express services for urgent packages and documents.",
    features: [
      { title: "Same-Day Dispatch", desc: "Immediate processing of goods" },
      { title: "Door-to-Door", desc: "Direct delivery to destination" },
      { title: "Priority Handling", desc: "First-class priority boarding" }
    ],
    btnText: "Get Express Quote",
    transit: [
      { region: "Europe", time: "Next day" },
      { region: "North America", time: "1-2 days" },
      { region: "Asia Pacific", time: "1-2 days" },
      { region: "Middle East", time: "Next day" }
    ]
  },
  land: {
    title: "Land Freight Services",
    desc: "Efficient ground transportation networks for domestic and cross-border delivery.",
    features: [
      { title: "Full Truckload", desc: "Dedicated truck for your goods" },
      { title: "Less than Truckload", desc: "Cost-sharing for smaller loads" },
      { title: "Route Optimization", desc: "Fastest possible ground routes" }
    ],
    btnText: "Get Land Freight Quote",
    transit: [
      { region: "Local", time: "Same day" },
      { region: "Cross-border", time: "2-5 days" },
      { region: "Regional", time: "3-7 days" },
      { region: "Continental", time: "7-14 days" }
    ]
  }
};

const CargoServicesTabs = () => {
  const [activeTab, setActiveTab] = useState("air");

  type TabKeys = keyof typeof tabsContent;
  const activeContent = tabsContent[activeTab as TabKeys];

  return (
    <div className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Our Cargo Services</h2>
      <p className={styles.sectionSubtitle}>Choose the perfect shipping solution for your needs</p>

      <div className={styles.servicesContainer}>
        <div className={styles.tabsHeader}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'air' ? styles.activeTab : ''}`} 
            onClick={() => setActiveTab('air')}
          >
            <Image src="/images/cargo/air-freight.png" alt="Air Freight" width={20} height={20} /> Air Freight
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'sea' ? styles.activeTab : ''}`} 
            onClick={() => setActiveTab('sea')}
          >
            <Image src="/images/cargo/sea-freight.png" alt="Sea Freight" width={20} height={20} /> Sea Freight
          </button> 
          <button 
            className={`${styles.tabBtn} ${activeTab === 'express' ? styles.activeTab : ''}`} 
            onClick={() => setActiveTab('express')}
          >
            <Image src="/images/cargo/express.png" alt="Express" width={20} height={20} /> Express
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'land' ? styles.activeTab : ''}`} 
            onClick={() => setActiveTab('land')}
          >
            <Image src="/images/cargo/land.png" alt="Land Freight" width={20} height={20} /> Land Freight
          </button>
        </div>

        <div className={styles.tabContent}>
          <div className={styles.tabContentLeft}>
            <h3 className={styles.tabContentTitle}>{activeContent.title}</h3>
            <p className={styles.tabContentDesc}>{activeContent.desc}</p>
            <ul className={styles.featureList}>
              {activeContent.features.map((f, i) => (
                <li key={i}>
                  <div className={styles.checkIconWrapper}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div className={styles.featureText}>
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button className={styles.quoteBtn}>{activeContent.btnText}</button>
          </div>
          <div className={styles.tabContentRight}>
            <h4 className={styles.transitTitle}>Transit Times &amp; Pricing</h4>
            <ul className={styles.transitList}>
              {activeContent.transit.map((t, i) => (
                <li key={i}>
                  <span className={styles.transitRegion}>{t.region}</span>
                  <strong className={styles.transitTime}>{t.time}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CargoServicesTabs;
