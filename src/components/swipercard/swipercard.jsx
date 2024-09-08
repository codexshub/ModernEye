import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import { cardSwiperImg1,cardSwiperImg2,cardSwiperImg4,cardSwiperImg3 } from '@/components/Image/image';
import styles from '@/components/swipercard/swipercard.module.css';

const Swipercard = () => {
    return (
        <>
            <section>
                <div className="container">
                <div className={styles.swiperCardSection}>
                    <div className={styles.swiperCardHeading}>
                        Discover more. <span>Good things are waiting for you !</span>
                    </div>
                    <div className={styles.swiperCardContainer}>
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={2.3}
                            spaceBetween={30}
                            loop={true}
                              autoplay={{ delay: 2000,
                              }}
                              breakpoints={{
                                350: {
                                 width: 380,
                                 slidesPerView: 1.2,
                                 spaceBetween: 20,
                                },
                                450: {
                                 width: 450,
                                 slidesPerView: 1.5,
                                 spaceBetween: 20,
                                },
                                1400: {
                                 width: 1300,
                                 slidesPerView: 2.3,
                                 spaceBetween: 30,
                                },
                                1200: {
                                 width: 1000,
                                 slidesPerView: 2.3,
                                 spaceBetween: 20,
                                },
                                992: {
                                 width: 992,
                                 slidesPerView: 2.3,
                                 spaceBetween: 20,
                                },
                                767: {
                                 width: 700,
                                 slidesPerView: 2,
                                 spaceBetween: 30,
                                },
                                577: {
                                 width: 560,
                                 slidesPerView: 2,
                                 spaceBetween: 10,
                                },
                               }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide className={styles.SwiperCotent}>
                                <div id={styles.swiperHead} className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                                    <div className={styles.cardsubHeading}>
                                        Explore new arrivals
                                    </div>
                                    <div className={styles.cardHeading}>
                                        Shop the latest form of top brands
                                    </div>
                                    <div className={styles.cardHeadBtn}>
                                        <Link href='/product'><button className={styles.cardBtn}>Show me all</button></Link>
                                    </div>
                                </div>
                                <div id={styles.swiperImg} className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                                    <Image src={cardSwiperImg1} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide id={styles.SwiperCotent2} className={styles.SwiperCotent}>
                                <div id={styles.swiperHead} className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                                    <div className={styles.cardsubHeading}>
                                        Digital gift cards
                                    </div>
                                    <div className={styles.cardHeading}>
                                        Give the gift of choice
                                    </div>
                                    <div className={styles.cardHeadBtn}>
                                        <Link href='/product'><button className={styles.cardBtn}>Show me all</button></Link>
                                    </div>
                                </div>
                                <div id={styles.swiperImg} className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                                    <Image src={cardSwiperImg2} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide id={styles.SwiperCotent3} className={styles.SwiperCotent}>
                                <div id={styles.swiperHead} className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                                    <div className={styles.cardsubHeading}>
                                        Sale collection
                                    </div>
                                    <div className={styles.cardHeading}>
                                        Upto 80% off shop now
                                    </div>
                                    <div className={styles.cardHeadBtn}>
                                        <Link href='/product'><button className={styles.cardBtn}>Show me all</button></Link>
                                    </div>
                                </div>
                                <div id={styles.swiperImg} className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                                    <Image src={cardSwiperImg3} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide id={styles.SwiperCotent4} className={styles.SwiperCotent}>
                                <div id={styles.swiperHead} className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                                    <div className={styles.cardsubHeading}>
                                        Modern fassion glasses
                                    </div>
                                    <div className={styles.cardHeading}>
                                        Style like a model & celibrity
                                    </div>
                                    <div className={styles.cardHeadBtn}>
                                        <Link href='/product'><button className={styles.cardBtn}>Show me all</button></Link>
                                    </div>
                                </div>
                                <div id={styles.swiperImg} className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                                    <Image src={cardSwiperImg4} />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
export default Swipercard
