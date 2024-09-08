import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from '@/components/card/card.module.css'
import Link from 'next/link';
import 'swiper/css';

const card = () => {
    return (
        <>
            <section>
                <div className={styles.cardSection}>
                    <div className='container'>
                        <div className={styles.cardHeading}>
                            Find Your Product !
                        </div>
                        <div className={styles.swiperCardSection}>
                            <Swiper
                                  modules={[Autoplay]}
                                slidesPerView={4}
                                spaceBetween={10}
                                loop={true}
                                  autoplay={{ delay: 2000,
                                  }}
                                  breakpoints={{
                                      350: {
                                        width: 380,
                                        slidesPerView: 2,
                                        spaceBetween: 0,
                                      },
                                      420: {
                                        width: 420,
                                        slidesPerView: 2,
                                        spaceBetween: -50,
                                      },
                                    576: {
                                      width: 600,
                                      slidesPerView: 3,
                                      spaceBetween: -150,
                                    },
                                    1400: {
                                      width: 1300,
                                      slidesPerView: 4,
                                      spaceBetween: 0,
                                    },
                                    992: {
                                      width: 1000,
                                      slidesPerView: 4,
                                      spaceBetween: 0,
                                    },
                                    1200: {
                                      width: 1200,
                                      slidesPerView: 4,
                                      spaceBetween: 0,
                                    },
                                    768: {
                                      width: 800,
                                      slidesPerView: 3,
                                      spaceBetween: -150,
                                    },
                                   
                                  }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <Link className={styles.cardLink} href='/product'>
                                    <div className={styles.swiperCardContainer}>
                                        <div className={styles.wishlistIcon}>
                                            <span id={styles.wishlistCard} class="material-symbols-outlined">
                                                favorite
                                            </span>
                                        </div>
                                        <div className={styles.cardSwiperImg}>

                                        </div>
                                        <div className={styles.cradSwiperHead}>
                                            <div className={styles.cardBrandName}>
                                                Fastrack
                                            </div>
                                            <div className={styles.cardTitle}>
                                                Black Men Sunglasses
                                            </div>
                                            <div className={styles.cardSize}>
                                                Size: Medium
                                            </div>
                                            <div className={styles.cardPrice}>
                                                ₹899/-
                                            </div>
                                            <div className={styles.cardTax}>
                                                Inclusive of all taxes
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <Link className={styles.cardLink} href='/product'>
                                    <div className={styles.swiperCardContainer}>
                                        <div id={styles.wishlistCard} className={styles.wishlistIcon}>
                                            <span id={styles.wishlistCard} class="material-symbols-outlined">
                                                favorite
                                            </span>
                                        </div>
                                        <div className={styles.cardSwiperImg2}>
                                        </div>
                                        <div className={styles.cradSwiperHead}>
                                            <div className={styles.cardBrandName}>
                                                Ray-Ban
                                            </div>
                                            <div className={styles.cardTitle}>
                                                Transparent Glasses for Men
                                            </div>
                                            <div className={styles.cardSize}>
                                                Size: Larg
                                            </div>
                                            <div className={styles.cardPrice}>
                                                ₹2999/-
                                            </div>
                                            <div className={styles.cardTax}>
                                                Inclusive of all taxes
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <Link className={styles.cardLink} href='/product'>
                                    <div className={styles.swiperCardContainer}>
                                        <div className={styles.wishlistIcon}>
                                            <span id={styles.wishlistCard} class="material-symbols-outlined">
                                                favorite
                                            </span>
                                        </div>
                                        <div className={styles.cardSwiperImg3}>
                                        </div>
                                        <div className={styles.cradSwiperHead}>
                                            <div className={styles.cardBrandName}>
                                                Gucci
                                            </div>
                                            <div className={styles.cardTitle}>
                                            Computer Glasses for Men
                                            </div>
                                            <div className={styles.cardSize}>
                                                Size: Medium
                                            </div>
                                            <div className={styles.cardPrice}>
                                                ₹9999/-
                                            </div>
                                            <div className={styles.cardTax}>
                                                Inclusive of all taxes
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <Link className={styles.cardLink} href='/product'>
                                    <div className={styles.swiperCardContainer}>
                                        <div className={styles.wishlistIcon}>
                                            <span id={styles.wishlistCard} class="material-symbols-outlined">
                                                favorite
                                            </span>
                                        </div>
                                        <div className={styles.cardSwiperImg4}>
                                        </div>
                                        <div className={styles.cradSwiperHead}>
                                            <div className={styles.cardBrandName}>
                                            Calvin Klein
                                            </div>
                                            <div className={styles.cardTitle}>
                                            Sunglasses for Men
                                            </div>
                                            <div className={styles.cardSize}>
                                                Size: Medium
                                            </div>
                                            <div className={styles.cardPrice}>
                                                ₹1999/-
                                            </div>
                                            <div className={styles.cardTax}>
                                                Inclusive of all taxes
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <Link className={styles.cardLink} href='/product'>
                                    <div className={styles.swiperCardContainer}>
                                        <div className={styles.wishlistIcon}>
                                            <span id={styles.wishlistCard} class="material-symbols-outlined">
                                                favorite
                                            </span>
                                        </div>
                                        <div className={styles.cardSwiperImg5}>
                                        </div>
                                        <div className={styles.cradSwiperHead}>
                                            <div className={styles.cardBrandName}>
                                                Prada
                                            </div>
                                            <div className={styles.cardTitle}>
                                                Clubmaster for Men
                                            </div>
                                            <div className={styles.cardSize}>
                                                Size: Medium
                                            </div>
                                            <div className={styles.cardPrice}>
                                                ₹15999/-
                                            </div>
                                            <div className={styles.cardTax}>
                                                Inclusive of all taxes
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className={styles.swiperCardSection}>
                            <Swiper
                                  modules={[Autoplay]}
                                slidesPerView={4}
                                spaceBetween={10}
                                loop={true}
                                  autoplay={{ delay: 2000,
                                  }}
                                  breakpoints={{
                                    350: {
                                        width: 380,
                                        slidesPerView: 2,
                                        spaceBetween: 0,
                                      },
                                    420: {
                                      width: 420,
                                      slidesPerView: 2,
                                      spaceBetween: -50,
                                    },
                                    576: {
                                      width: 600,
                                      slidesPerView: 3,
                                      spaceBetween: -150,
                                    },
                                    1400: {
                                        width: 1300,
                                        slidesPerView: 4,
                                        spaceBetween: 0,
                                      },
                                    992: {
                                        width: 1000,
                                        slidesPerView: 4,
                                        spaceBetween: 0,
                                      },
                                    768: {
                                        width: 800,
                                        slidesPerView: 3,
                                        spaceBetween: -150,
                                      },
                                      1200: {
                                        width: 1200,
                                        slidesPerView: 4,
                                        spaceBetween: 0,
                                      },
                                  }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <Link className={styles.cardLink} href='/product'>
                                    <div className={styles.swiperCardContainer}>
                                        <div className={styles.wishlistIcon}>
                                            <span id={styles.wishlistCard} class="material-symbols-outlined">
                                                favorite
                                            </span>
                                        </div>
                                        <div className={styles.cardSwiperImg5}>
                                        </div>
                                        <div className={styles.cradSwiperHead}>
                                            <div className={styles.cardBrandName}>
                                                Fastrack
                                            </div>
                                            <div className={styles.cardTitle}>
                                                Black Men Sunglasses
                                            </div>
                                            <div className={styles.cardSize}>
                                                Size: Medium
                                            </div>
                                            <div className={styles.cardPrice}>
                                                ₹899/-
                                            </div>
                                            <div className={styles.cardTax}>
                                                Inclusive of all taxes
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <Link className={styles.cardLink} href='/product'>
                                    <div className={styles.swiperCardContainer}>
                                        <div className={styles.wishlistIcon}>
                                            <span id={styles.wishlistCard} class="material-symbols-outlined">
                                                favorite
                                            </span>
                                        </div>
                                        <div className={styles.cardSwiperImg}>
                                        </div>
                                        <div className={styles.cradSwiperHead}>
                                            <div className={styles.cardBrandName}>
                                                Fastrack
                                            </div>
                                            <div className={styles.cardTitle}>
                                                Black Men Sunglasses
                                            </div>
                                            <div className={styles.cardSize}>
                                                Size: Medium
                                            </div>
                                            <div className={styles.cardPrice}>
                                                ₹899/-
                                            </div>
                                            <div className={styles.cardTax}>
                                                Inclusive of all taxes
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <Link className={styles.cardLink} href='/product'>
                                    <div className={styles.swiperCardContainer}>
                                        <div className={styles.wishlistIcon}>
                                            <span id={styles.wishlistCard} class="material-symbols-outlined">
                                                favorite
                                            </span>
                                        </div>
                                        <div className={styles.cardSwiperImg3}>
                                        </div>
                                        <div className={styles.cradSwiperHead}>
                                            <div className={styles.cardBrandName}>
                                                Fastrack
                                            </div>
                                            <div className={styles.cardTitle}>
                                                Black Men Sunglasses
                                            </div>
                                            <div className={styles.cardSize}>
                                                Size: Medium
                                            </div>
                                            <div className={styles.cardPrice}>
                                                ₹899/-
                                            </div>
                                            <div className={styles.cardTax}>
                                                Inclusive of all taxes
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <Link className={styles.cardLink} href='/product'>
                                    <div className={styles.swiperCardContainer}>
                                        <div className={styles.wishlistIcon}>
                                            <span id={styles.wishlistCard} class="material-symbols-outlined">
                                                favorite
                                            </span>
                                        </div>
                                        <div className={styles.cardSwiperImg4}>
                                        </div>
                                        <div className={styles.cradSwiperHead}>
                                            <div className={styles.cardBrandName}>
                                                Fastrack
                                            </div>
                                            <div className={styles.cardTitle}>
                                                Black Men Sunglasses
                                            </div>
                                            <div className={styles.cardSize}>
                                                Size: Medium
                                            </div>
                                            <div className={styles.cardPrice}>
                                                ₹899/-
                                            </div>
                                            <div className={styles.cardTax}>
                                                Inclusive of all taxes
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className={styles.SwiperCotent}>
                                    <Link className={styles.cardLink} href='/product'>
                                    <div className={styles.swiperCardContainer}>
                                        <div id={styles.wishlistCard} className={styles.wishlistIcon}>
                                            <span id={styles.wishlistCard} class="material-symbols-outlined">
                                                favorite
                                            </span>
                                        </div>
                                        <div className={styles.cardSwiperImg2}>
                                        </div>
                                        <div className={styles.cradSwiperHead}>
                                            <div className={styles.cardBrandName}>
                                                Fastrack
                                            </div>
                                            <div className={styles.cardTitle}>
                                                Black Men Sunglasses
                                            </div>
                                            <div className={styles.cardSize}>
                                                Size: Medium
                                            </div>
                                            <div className={styles.cardPrice}>
                                                ₹899/-
                                            </div>
                                            <div className={styles.cardTax}>
                                                Inclusive of all taxes
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default card
