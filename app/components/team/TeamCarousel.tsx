"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/config/config";
import styles from "./team.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type TeamItem = {
  id: number;
  name: string;
  image: string;
  position: string;
  description: string;
};

interface TeamCarouselProps {
  team: TeamItem[];
}

const TeamCarousel = ({ team }: TeamCarouselProps) => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className={styles.mySwiper}
      >
        {team.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={`${IMAGE_BASE_URL}/${item.image}`}
                  alt={item.name}
                  width={128}
                  height={128}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.role}>{item.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamCarousel;
