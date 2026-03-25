"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./cargo.module.css";
import { 
  Search, Calculator, FileText, 
  CheckCircle2, ShieldCheck, Globe, Headset, 
  ChevronDown 
} from "lucide-react";
// import FloatingButtons from "../components/floatingButtons/FloatingButtons";

export default function Cargo() {
  const [activeTab, setActiveTab] = useState("air");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const faqs = [
    { q: "How can I track my shipment?", a: "You can track your shipment using the tracking number provided via email or on your receipt. Just enter it in our Track Shipment tool." },
    { q: "What documents do I need for international shipping?", a: "Typically, you'll need a commercial invoice, packing list, bill of lading or airway bill. Additional documents may be required depending on the destination." },
    { q: "How is shipping cost calculated?", a: "Shipping costs are calculated based on weight, dimensions, destination, and the chosen shipping method (air, sea, land)." }
  ];

  type TabKeys = keyof typeof tabsContent;
  const activeContent = tabsContent[activeTab as TabKeys];

  return (
    <>
     <div className={styles.cargoPage}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Global <span className={styles.highlight}>Cargo Services</span></h1>
          <p className={styles.subtitle}>
            Reliable, fast, and secure cargo shipping solutions worldwide. From air freight to 
            sea cargo, we handle your shipments with precision and care.
          </p>
        </div>

        {/* Top Cards */}
        <div className={styles.topCardsGrid}>
          <div className={styles.topCard}>
            <div className={`${styles.iconWrapper} ${styles.blueIcon}`}>
              <Search size={22} strokeWidth={2.5} />
            </div>
            <h3>Track Shipment</h3>
            <p>Real-time tracking for all your cargo shipments</p>
            <button className={`${styles.btnAction} ${styles.btnBlue}`}>Track Now</button>
          </div>
          <div className={styles.topCard}>
            <div className={`${styles.iconWrapper} ${styles.greenIcon}`}>
              <Calculator size={22} strokeWidth={2.5} />
            </div>
            <h3>Get Quote</h3>
            <p>Instant pricing for your shipping needs</p>
            <button className={`${styles.btnAction} ${styles.btnGreen}`}>Calculate</button>
          </div>
          <div className={styles.topCard}>
            <div className={`${styles.iconWrapper} ${styles.purpleIcon}`}>
              <FileText size={22} strokeWidth={2.5} />
            </div>
            <h3>Documentation</h3>
            <p>Complete shipping documentation support</p>
            <button className={`${styles.btnAction} ${styles.btnPurple}`}>Learn More</button>
          </div>
        </div>

        {/* Our Cargo Services */}
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
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.container}>
          {/* Why Choose Section */}
          <div className={styles.whyChooseSection}>
            <h2 className={styles.sectionTitle}>Why Choose Studyrange Cargo</h2>
            <p className={styles.sectionSubtitle}>Experience the difference with our premium cargo services</p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={`${styles.featureCircleIcon} ${styles.bgBlue}`}>
                  <ShieldCheck size={28} color="#fff" strokeWidth={2.5} />
                </div>
                <h4>Secure &amp; Insured</h4>
                <p>Full insurance coverage and secure handling for all shipments</p>
              </div>
              <div className={styles.featureCard}>
                <div className={`${styles.featureCircleIcon} ${styles.bgGreen}`}>
                  <Globe size={28} color="#fff" strokeWidth={2.5} />
                </div>
                <h4>Global Network</h4>
                <p>Worldwide coverage with trusted partners and agents</p>
              </div>
              <div className={styles.featureCard}>
                <div className={`${styles.featureCircleIcon} ${styles.bgPurple}`}>
                  <Headset size={28} color="#fff" strokeWidth={2.5} />
                </div>
                <h4>24/7 Support</h4>
                <p>Round-the-clock customer support for all your shipping needs</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>Get answers to common cargo shipping questions</p>

            <div className={styles.faqList}>
              {faqs.map((faq, i) => (
                <div className={styles.faqItem} key={i}>
                  <button 
                    className={styles.faqQuestion} 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {faq.q}
                    <ChevronDown size={20} className={`${styles.chevron} ${openFaq === i ? styles.rotated : ''}`} />
                  </button>
                  <div className={`${styles.faqAnswer} ${openFaq === i ? styles.open : ''}`}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.ready}>
      <div className={styles.readyInner}>
        <h2>Ready to Ship Your Cargo</h2>
        <p>Get a free quote today and experience our premium cargo services</p>

        <div className={styles.buttons}>
          <button className={styles.quoteBtn}>Get Instant Quote</button>
          <button className={styles.contactBtn}>Contact Expert</button>
        </div>
      </div>
    </div>
    </>
   
  );
}