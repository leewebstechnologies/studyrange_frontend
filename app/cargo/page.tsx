import Image from "next/image";
import styles from "./cargo.module.css";
import { 
  Search, Calculator, FileText, 
  ShieldCheck, Globe, Headset 
} from "lucide-react";
import Link from "next/link";
import { API_BASE_URL } from "@/config/config";
import Cargofaq from "../components/cargofaq/Cargofaq";
import CargoServicesTabs from "./CargoServicesTabs";

const getFloatingbutton = async () => {
  const res = await fetch(`${API_BASE_URL}/floatingbutton`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const getCargoFaq = async (): Promise<FaqItem[]> => {
  const res = await fetch(`${API_BASE_URL}/cargo_faq`, {
    cache: "no-store",
  });
  
  if (!res.ok) {
    return []; // Return empty array on error to prevent page crash
  }
  
  return res.json();
};

const Cargo = async () => {
  const faqs = await getCargoFaq();
  const floatingbutton = await getFloatingbutton();

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
        <CargoServicesTabs />
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
          <Cargofaq faqs={faqs} />
        </div>          
      </div>
      <Link href={`https://wa.me/${floatingbutton.whatsapp}`} className={styles.whatsapp}>
        <Image src="/images/about/whatsapp.png" alt="whatsapp" width={56} height={56} />         
      </Link>
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

export default Cargo;