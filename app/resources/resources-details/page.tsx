import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import styles from './resources-details.module.css';
import FloatingButtons from '../../components/floatingButtons/FloatingButtons';



import { API_BASE_URL, IMAGE_BASE_URL } from '@/config/config';

type ResourceDetailItem = {
  id: number;
  image: string;
  tag: string;
  tagColor: string;
  title: string;
  readTime: string;
  author: string;
  role: string;
  date: string;
  content: string;
};

    // id: 1,
    // image: "/images/resources/application.png",
    // tag: "Application",
    // tagColor: "tagPink",
    // title: "Complete UCAS Application Guide",
    // readTime: "8 min read",
    // author: "Dr. Sarah Jenkins",
    // authorRole: "Senior Admissions Consultant",
    // date: "Oct 15, 2024",
    // content: ``

// {
//   id: 2,
//   image: "/images/resources/visa.png",
//   tag: "Visa",
//   tagColor: "tagYellow",
//   title: "Student Visa Requirements",
//   readTime: "7 min read",
//   author: "Michael Brown",
//   authorRole: "Immigration Advisor",
//   date: "Oct 18, 2024",
//   content: `
//     <p>Applying for a UK student visa is a crucial step for international students planning to study abroad. Understanding the requirements early will help ensure a smooth application process.</p>

//     <h3>Basic Requirements</h3>
//     <ul>
//       <li>A valid passport or travel document</li>
//       <li>Confirmation of Acceptance for Studies (CAS) from a UK institution</li>
//       <li>Proof of sufficient funds to cover tuition and living expenses</li>
//       <li>Proof of English language proficiency (IELTS or equivalent)</li>
//     </ul>

//     <h3>Financial Requirements</h3>
//     <p>You must show evidence that you can support yourself during your studies. This includes tuition fees and monthly living costs as specified by UK visa guidelines.</p>

//     <h3>Application Process</h3>
//     <ul>
//       <li>Complete the online visa application form</li>
//       <li>Pay the visa application fee</li>
//       <li>Book and attend a biometric appointment</li>
//       <li>Submit required documents</li>
//     </ul>

//     <h3>Processing Time</h3>
//     <p>Visa processing typically takes 3–4 weeks. It is recommended to apply as early as possible to avoid delays.</p>

//     <p>Ensure all documents are accurate and up to date to increase your chances of approval.</p>
//   `
// }

// Server-side fetching function
const getArticleDetails = async (id: string): Promise<ResourceDetailItem | null> => {
  try {
    // 1. Find the resource title by ID
    const resourceRes = await fetch(`${API_BASE_URL}/resource`, { cache: 'no-store' });
    if (!resourceRes.ok) return null;
    const resourceData = await resourceRes.json();
    const resource = resourceData.find((r: { id: number; title: string }) => r.id.toString() === id);
    
    if (!resource) return null;

    // 2. Fetch all resourcedetails
    const detailRes = await fetch(`${API_BASE_URL}/resourcedetail`, { cache: 'no-store' });
    if (!detailRes.ok) return null;
    const detailData: ResourceDetailItem[] = await detailRes.json();

    // 3. Match by title (safest), fallback to matching by ID
    const article = detailData.find((a) => a.title === resource.title) || detailData.find((a) => a.id.toString() === id);
    
    return article || null;
  } catch (error) {
    console.error("Error fetching article details:", error);
    return null;
  }
};

// Ensure Next.js treats this as a dynamic route that can accept searchParams at runtime if needed
export const dynamic = 'force-dynamic';

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const ResourcesDetails = async ({ searchParams }: PageProps) => {
  const params = await searchParams;
  const id = params?.id as string;
  
  if (!id) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h2>Article not found</h2>
          <p>Please select an article from the resources page.</p>
          <Link href="/resources" className={styles.backBtn}>Back to Resources</Link>
        </div>
      </div>
    );
  }

  const article = await getArticleDetails(id);

  if (!article) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h2>Article not found</h2>
          <p>The article you are looking for does not exist.</p>
          <Link href="/resources" className={styles.backBtn}>Back to Resources</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>

        <div className={styles.headerContent}>
          <Link href="/resources" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Resources
          </Link>

          <div className={styles.tagWrapper}>
            <span className={styles.tag + " " + styles[article.tagColor]}>
              {article.tag}
            </span>
          </div>

          <h1 className={styles.title}>{article.title}</h1>

          <div className={styles.metaInfo}>
            <div className={styles.metaItem}>
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
            <div className={styles.metaItem}>
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
            <div className={styles.metaItem}>
              <User size={16} />
              <span>{article.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.imageWrapper}>
          <Image
            src={`${IMAGE_BASE_URL}/${article.image}`}
            alt={article.title}
            width={800}
            height={400}
            className={styles.articleImage}
          />
        </div>

        <div className={styles.articleBody}>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />

          {/* Footer of the article */}
          <div className={styles.footerSection}>
            <div className={styles.authorInfo}>
              <div className={styles.authorAvatar}>
                {article.author.charAt(0)}
              </div>
              <div className={styles.authorDetails}>
                <h4>{article.author}</h4>
                <p>{article.role}</p>
              </div>
            </div>

            {/* <div className={styles.shareSection}>
              <span className={styles.shareText}>Share this article:</span>
              <div className={styles.socialIcons}>
                <div className={styles.socialIcon}>
                  <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                </div>
                <div className={styles.socialIcon}>
                  <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
                </div>
                <div className={styles.socialIcon}>
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                </div>
                <div className={styles.socialIcon}>
                  <Share2 size={16} />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <FloatingButtons />
    </div>
  );
};

export default ResourcesDetails;