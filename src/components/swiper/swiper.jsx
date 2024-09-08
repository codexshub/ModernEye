import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from '@/components/swiper/swiper.module.css'
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import {SwiperImgOne,Banner,secondBanner2,secondBanner,SwiperImgSix,SwiperImgThree,SwiperImgFour,SwiperImgFive,SwiperImgTwo} from '@/components/Image/image';


const swiper = () => {
  return (
    <>
     <section>
        <div className={styles.swiperSection}>
            <div className={styles.swiperContainer}>
            <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2000,
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={styles.SwiperCotent}>
        <Image src={SwiperImgOne} alt="SwiperImgOne" />
      </SwiperSlide>
      <SwiperSlide className={styles.SwiperCotent}>
        <Image src={secondBanner2} alt="SwiperImgOne" />
      </SwiperSlide>
      <SwiperSlide className={styles.SwiperCotent}>
        <Image src={secondBanner} alt="SwiperImgOne" />
      </SwiperSlide>
      <SwiperSlide className={styles.SwiperCotent}>
        <Image src={SwiperImgFour} alt="SwiperImgOne" />
      </SwiperSlide>
      <SwiperSlide className={styles.SwiperCotent}>
        <Image src={SwiperImgFive} alt="SwiperImgOne" />
      </SwiperSlide>
      <SwiperSlide className={styles.SwiperCotent}>
        <Image src={SwiperImgSix} alt="SwiperImgOne" />
      </SwiperSlide>
    </Swiper>
            </div>
        </div>
      </section>

      <section>
        <div className={styles.secondPageSection}>
          <div className={styles.secondPageBanner}>
              <div className={styles.secondPageBtnContainer}>
                <Link href='/product'><button className={styles.secondPageBtn}>Discover</button></Link>
              </div>
          </div>
        </div>
      </section> 
    </>
  )
}
export default swiper
