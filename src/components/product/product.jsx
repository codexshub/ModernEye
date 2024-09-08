import styles from '@/components/product/product.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Trans,Airflix,Clubmaster6,Clubmaster3,Clubmaster2,Clubmaster4,Clipon,Blend,Aviator, Round, Clubmaster, Cateye } from '@/components/Image/image';
import 'swiper/css';

const product = () => {

    return (
        <>
            <section>
                <div className={styles.productSection}>
                    <div className="container">
                        <div className={styles.productHeading}>
                            PREMIUM EYEWEAR CALLECTION
                        </div>
                        <div  id={styles.productCartContainer}>
                            <Swiper
                               
                                slidesPerView={4}
                                spaceBetween={0}
                                loop={true}
                             
                                breakpoints={{
                                   576: {
                                    width: 600,
                                    slidesPerView: 3,
                                    spaceBetween: -130,
                                  },
                                  350: {
                                    width: 400,
                                    slidesPerView: 2,
                                    spaceBetween: -50,
                                  },                                
                                  400: {
                                    width: 410,
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                  },                                 
                                  768: {
                                      width: 800,
                                      slidesPerView: 4,
                                      spaceBetween: -150,
                                    },
                                  992: {
                                      width: 1000,
                                      slidesPerView: 4,
                                      spaceBetween: 0,
                                    },
                                  1200: {
                                      width: 1000,
                                      slidesPerView: 4,
                                      spaceBetween: 0,
                                    },
                                    1400: {
                                        width: 1300,
                                        slidesPerView: 5,
                                        spaceBetween: 0,
                                      },
                                   
                                  }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <div className={styles.productCardContainer}>
                                        <div className={styles.productImg}>
                                            <Image src={Round} />
                                        </div>
                                        <div className={styles.productHead}>
                                            Round Glasses
                                        </div>
                                        <div className={styles.productBtnContainer}>
                                            <Link href='/product'>     <button className={styles.productBtn}>Explore</button></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <div className={styles.productCardContainer}>
                                        <div className={styles.productImg}>
                                            <Image src={Aviator} />
                                        </div>
                                        <div className={styles.productHead}>
                                        Aviator Glasses
                                        </div>
                                        <div className={styles.productBtnContainer}>
                                            <Link href='/product'>     <button className={styles.productBtn}>Explore</button></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <div className={styles.productCardContainer}>
                                        <div className={styles.productImg}>
                                            <Image src={Clubmaster} />
                                        </div>
                                        <div className={styles.productHead}>
                                            ClubMaster
                                        </div>
                                        <div className={styles.productBtnContainer}>
                                            <Link href='/product'>     <button className={styles.productBtn}>Explore</button></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <div className={styles.productCardContainer}>
                                        <div className={styles.productImg}>
                                            <Image src={Trans} />
                                        </div>
                                        <div className={styles.productHead}>
                                            Transparent Glasses
                                        </div>
                                        <div className={styles.productBtnContainer}>
                                            <Link href='/product'>     <button className={styles.productBtn}>Explore</button></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <div className={styles.productCardContainer}>
                                        <div className={styles.productImg}>
                                            <Image src={Cateye} />
                                        </div>
                                        <div className={styles.productHead}>
                                            CatEye Glasses
                                        </div>
                                        <div className={styles.productBtnContainer}>
                                            <Link href='/product'>     <button className={styles.productBtn}>Explore</button></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <div className={styles.productCardContainer}>
                                        <div className={styles.productImg}>
                                            <Image src={Clipon} />
                                        </div>
                                        <div className={styles.productHead}>
                                        Clipon Glasses
                                        </div>
                                        <div className={styles.productBtnContainer}>
                                            <Link href='/product'>     <button className={styles.productBtn}>Explore</button></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>


                        <div  id={styles.productCartContainerTwo}>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={0}
                                loop={true}
                                breakpoints={{
                                    576: {
                                      width: 600,
                                      slidesPerView: 3,
                                      spaceBetween: -130,
                                    },
                                    350: {
                                      width: 400,
                                      slidesPerView: 2,
                                      spaceBetween: -50,
                                    },
                                    400: {
                                        width: 410,
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                      },                                    
                                    768: {
                                        width: 800,
                                        slidesPerView: 4,
                                        spaceBetween: -150,
                                      },
                                    992: {
                                        width: 1000,
                                        slidesPerView: 4,
                                        spaceBetween: 0,
                                      },
                                    1200: {
                                        width: 1000,
                                        slidesPerView: 4,
                                        spaceBetween: 0,
                                      },
                                    1200: {
                                        width: 1000,
                                        slidesPerView: 4,
                                        spaceBetween: 0,
                                      },
                                      1400: {
                                        width: 1300,
                                        slidesPerView: 5,
                                        spaceBetween: 0,
                                      },
                                   
                                  }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <div className={styles.productCardContainer}>
                                        <div className={styles.productImg}>
                                            <Image src={Clubmaster6} />
                                        </div>
                                        <div className={styles.productHead}>
                                            Specs Glasses
                                        </div>
                                        <div className={styles.productBtnContainer}>
                                            <Link href='/product'>     <button className={styles.productBtn}>Explore</button></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <div className={styles.productCardContainer}>
                                        <div className={styles.productImg}>
                                            <Image src={Clubmaster4} />
                                        </div>
                                        <div className={styles.productHead}>
                                        Computer Glasses
                                        </div>
                                        <div className={styles.productBtnContainer}>
                                            <Link href='/product'>     <button className={styles.productBtn}>Explore</button></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <div className={styles.productCardContainer}>
                                        <div className={styles.productImg}>
                                            <Image src={Clubmaster2} />
                                        </div>
                                        <div className={styles.productHead}>
                                            Sunglasses
                                        </div>
                                        <div className={styles.productBtnContainer}>
                                            <Link href='/product'>     <button className={styles.productBtn}>Explore</button></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <div className={styles.productCardContainer}>
                                        <div className={styles.productImg}>
                                            <Image src={Clubmaster3} />
                                        </div>
                                        <div className={styles.productHead}>
                                            BlueRay Glasses
                                        </div>
                                        <div className={styles.productBtnContainer}>
                                            <Link href='/product'>     <button className={styles.productBtn}>Explore</button></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <div className={styles.productCardContainer}>
                                        <div className={styles.productImg}>
                                            <Image src={Blend} />
                                        </div>
                                        <div className={styles.productHead}>
                                            CatEye Glasses
                                        </div>
                                        <div className={styles.productBtnContainer}>
                                            <Link href='/product'>     <button className={styles.productBtn}>Explore</button></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <div className={styles.productCardContainer}>
                                        <div className={styles.productImg}>
                                            <Image src={Airflix} />
                                        </div>
                                        <div className={styles.productHead}>
                                        Clipon Glasses
                                        </div>
                                        <div className={styles.productBtnContainer}>
                                            <Link href='/product'>     <button className={styles.productBtn}>Explore</button></Link>
                                        </div>
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

export default product
