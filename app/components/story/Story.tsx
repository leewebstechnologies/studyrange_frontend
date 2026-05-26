// "use client";
import Link from "next/link";
import styles from "./story.module.css";
import Image from "next/image";
import { API_BASE_URL, IMAGE_BASE_URL } from "@/config/config";

const getAbout_rating = async () => {
  const res = await fetch(`${API_BASE_URL}/about_rating`, {
    cache: "no-store", // ensures fresh data every time
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};

const getStory = async () => {
  const res = await fetch(`${API_BASE_URL}/about`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.length > 0 ? data[0] : {};
};

const Story = async () => {
  const about_rating = await getAbout_rating();
  const about = await getStory();
  return (
    <section className={styles.story}>
      {/* LEFT */}
      <div className={styles.storyLeft}>
        <h2 className={styles.title}>Our Story</h2>

        <div
          className={styles.paragraph}
          dangerouslySetInnerHTML={{ __html: about.story }}
        />
      </div>

      {/* RIGHT */}
      <div className={styles.storyRight}>
        <div className={styles.frame}>
          <Image
            src={`${IMAGE_BASE_URL}/${about.image}`}
            width={500}
            height={500}
            alt="graduates"
            className={styles.image}
          />
        </div>

        <div className={styles.storyRightBottom}>
          <div className={styles.rating}>
            <div className={styles.ratingItems}>
              <Image
                src="/images/about/star.png"
                alt="rating"
                width={48}
                height={48}
              />
              <div className={styles.ratingText}>
                <span className={styles.ratingNumber}>
                  {about_rating.rating}
                </span>
                <p>{about_rating.description}</p>
              </div>
            </div>
          </div>
          <Link href="/contact">
            <Image
              src="/images/about/consult.png"
              width={60}
              height={58}
              alt="consult"
              className={styles.consult}
            />
          </Link>

          <Link href={`https://wa.me/${about_rating.phone}`}>
            <Image
              src="/images/about/whatsapp.png"
              width={56}
              height={56}
              alt="whatsapp"
              className={styles.whatsapp}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Story;
