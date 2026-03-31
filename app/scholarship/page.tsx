"use client";
import Link from "next/link";
import React from 'react';
import styles from './scholarship.module.css';
import { 
  Award, 
  PoundSterling, 
  TrendingUp, 
  Heart,
  Search,
  Filter,
  ChevronDown,
  CheckCircle2,
  Landmark,
  Eye,
  Briefcase,
  CalendarDays,
  Zap,
  Ticket
} from 'lucide-react';
import FloatingButtons from '../components/floatingButtons/FloatingButtons';

type StatCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
  colorClass: string;
};

const StatCard = ({ icon, value, label, colorClass }: StatCardProps) => (
  <div className={styles.statCard}>
    <div className={`${styles.statIconWrapper} ${styles[colorClass]}`}>
      {icon}
    </div>
    <div>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  </div>
);

type HighlightBoxProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  colorClass: string;
};

const HighlightBox = ({ icon, label, value, colorClass }: HighlightBoxProps) => (
  <div className={`${styles.highlightBox} ${styles[colorClass]}`}>
    <div className={styles.highlightIcon}>{icon}</div>
    <div className={styles.highlightLabel}>{label}</div>
    <div className={styles.highlightValue}>{value}</div>
  </div>
);

type ScholarshipCardProps = {
  title: string;
  difficulty: number;
  amount: string;
  deadline: string;
  score: string;
  criteria: string[];
  benefits: string[];
};

const ScholarshipCard = ({ 
  title, 
  difficulty, 
  amount, 
  deadline, 
  score, 
  criteria, 
  benefits 
}: ScholarshipCardProps) => (
  <div className={styles.scholarshipCard}>
    <div className={styles.cardHeader}>
      <div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.difficultyBadge}>
          <Award size={14} /> Difficulty: {difficulty}
        </div>
      </div>
      <button className={styles.saveBtn} aria-label="Save Scholarship">
        <Heart size={20} />
      </button>
    </div>

    <div className={styles.highlightGrid}>
      <HighlightBox 
        icon={<Ticket size={20} className="text-blue-500" />} 
        label="Award Amount" 
        value={amount} 
        colorClass="blue" 
      />
      <HighlightBox 
        icon={<CalendarDays size={20} className="text-orange-500" />} 
        label="Deadline" 
        value={deadline} 
        colorClass="yellow" 
      />
      <HighlightBox 
        icon={<Zap size={20} className="text-red-500" />} 
        label="Score" 
        value={score} 
        colorClass="red" 
      />
    </div>

    <div className={styles.sectionTitle}>
      <CheckCircle2 size={18} className={styles.checkIcon} /> Eligibility Criteria
    </div>
    <ul className={styles.criteriaList}>
      {criteria.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <div className={styles.sectionTitle}>
      <Landmark size={18} className={styles.buildingIcon} /> Benefits
    </div>
    <div className={styles.benefitsList}>
      {benefits.map((benefit, index) => (
        <span key={index} className={styles.benefitChip}>
          {benefit}
        </span>
      ))}
    </div>

    <div className={styles.cardActions}>
     
        <Link href="/scholarship-details" className={styles.btnPrimary}>
          <Eye size={18} /> View Details
        </Link>
    
        <Link href="/contact" className={styles.btnSecondary}>
          <Briefcase size={18} /> Get Help
        </Link>
    </div>
  </div>
);

const Scholarship = () => {
  const scholarshipsData = [
    {
      title: "Chevening Scholarship",
      difficulty: 95,
      amount: "£30,000+",
      deadline: "Nov 2024",
      score: "95/100",
      criteria: [
        "UK work visa required",
        "2+ year's work experience",
        "Leadership potential",
        "Return to home country"
      ],
      benefits: ["Full Tuition", "Living Costs", "Travel", "Networking"]
    },
    {
      title: "Commonwealth Scholarship",
      difficulty: 90,
      amount: "£25,000+",
      deadline: "Dec 2024",
      score: "90/100",
      criteria: [
        "Commonwealth citizen",
        "Master's/PhD study",
        "Academic excellence",
        "Development impact"
      ],
      benefits: ["Full Tuition", "Stipend", "Airfare", "Thesis Grant"]
    },
    {
      title: "Gates Cambridge Scholarship",
      difficulty: 98,
      amount: "£45,000+",
      deadline: "Oct 2024",
      score: "96/100",
      criteria: [
        "Outstanding academics",
        "Leadership qualities",
        "Social commitment",
        "Cambridge admission"
      ],
      benefits: ["Full Cost", "Maintenance", "Flights", "Family Allowance"]
    },
    {
      title: "Rhodes Scholarship",
      difficulty: 99,
      amount: "£50,000+",
      deadline: "Sep 2024",
      score: "99/100",
      criteria: [
        "Exceptional intellect",
        "Character & leadership",
        "Service commitment",
        "Oxford acceptance"
      ],
      benefits: ["Full Cost", "Maintenance", "Flights", "Extra Stipend"]
    }
  ];

  return (
    <div className={styles.container}>
      {/* Background Shapes */}
      <div className={styles.bgCircle1}></div>
      <div className={styles.bgCircle2}></div>
      <div className={styles.bgCircle3}></div>

      <div className={styles.contentWrapper}>
        {/* Top Stats */}
        <div className={styles.statsGrid}>
          <StatCard 
            icon={<Award size={24} strokeWidth={2.5} />} 
            value="500+" 
            label="Scholarships" 
            colorClass="blue" 
          />
          <StatCard 
            icon={<PoundSterling size={24} strokeWidth={2.5} />} 
            value="£50M+" 
            label="Total Funding" 
            colorClass="green" 
          />
          <StatCard 
            icon={<TrendingUp size={24} strokeWidth={2.5} />} 
            value="68%" 
            label="Success Rate" 
            colorClass="purple" 
          />
          <StatCard 
            icon={<Heart size={24} fill="currentColor" strokeWidth={0} />} 
            value="0" 
            label="Saved Scholarships" 
            colorClass="red" 
          />
        </div>

        {/* Filters */}
        <div className={styles.filterSection}>
          <div className={styles.filterRow}>
            <div className={styles.inputGroup}>
              <Search className={styles.inputIcon} size={20} />
              <input type="text" placeholder="Search scholarships..." />
            </div>
            <div className={styles.inputGroup}>
              <Filter className={styles.inputIcon} size={20} />
              <input type="text" placeholder="Filter by keywords..." />
            </div>
          </div>
          <div className={styles.filterRow}>
            <div className={styles.selectGroup}>
              <select defaultValue="">
                <option value="" disabled hidden>All Categories</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="phd">PhD</option>
              </select>
              <ChevronDown className={styles.selectIcon} size={20} />
            </div>
            <div className={styles.selectGroup}>
              <select defaultValue="">
                <option value="" disabled hidden>Award Amount</option>
                <option value="5k">Up to £5,000</option>
                <option value="10k">£5,000 - £10,000</option>
                <option value="plus10k">£10,000+</option>
              </select>
              <ChevronDown className={styles.selectIcon} size={20} />
            </div>
          </div>
        </div>

        {/* Scholarships List */}
        <div className={styles.scholarshipGrid}>
          {scholarshipsData.map((scholarship, index) => (
            <ScholarshipCard key={index} {...scholarship} />
          ))}
        </div>
      </div>

      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  );
};

export default Scholarship;