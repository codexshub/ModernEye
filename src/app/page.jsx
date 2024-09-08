'use client';
import styles from '@/app/home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import SwiperPage from '@/components/swiper/swiper';
import Swipercard from '@/components/swipercard/swipercard';
import Card from '@/components/card/card';
import Product from '@/components/product/product'
import  { HomeImgThree,clibmaster,wayfarer,Rectangle,MenAviator,Hexa,square,HomeImgOne, Trans, Round, Clubmaster, Cateye, HomeImgTwo, HomeImgFive, HomeImgFour } from '@/components/Image/image';

const page = () => {

  const links = [
    {
        title: "men",
        path:"/",
    },
  ]

  const pathname = usePathname();
  const isActive =(path) => path === pathname;
  return (
    <>

      <section>
        <div className={styles.glassCollectionSection}>
          <div className="container">
            <div className={styles.glassCollecContainer}>
                <Link href='/product'><Image src={MenAviator}/></Link>
                <Link href='/product'><Image src={Hexa}/></Link>
                <Link href='/product'><Image src={square}/></Link>
                <Link className={styles.getCollectionImg} href='/product'><Image src={clibmaster}/></Link>
                <Link className={styles.getCollectionImg} href='/product'><Image src={Rectangle}/></Link>
                <Link href='/product'><Image src={wayfarer}/></Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOME MAIN PAGE CONTENT START */}

      <section>
        <div className={styles.homeBanner}>
        </div>
      </section>
        <SwiperPage/>
        <Swipercard/>
        <Product/>

        <section>
        <div className={styles.pairBanner}>
          <div id={styles.pairBannercontent} className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
            <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <div className={styles.pairBannerTextContainer}>
                Find your Pair !
            </div>
            <div className={styles.pairBannerBtn}>
              <Link href='/product'><button className={styles.pairBtn}>Shop now</button></Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      <Card/>

      <section>
        <div className={styles.tryOnSection}>
            <div className={styles.tryOnBanner}>
              <div id={styles.tryOnHead} className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                <div >
                  <div className={styles.tryOnSubHeading}>
                    NOT SURE ABOUT THE
                  <div className={styles.tryOnHeading}>
                    SHAPE?
                  </div>
                  </div>
                  <div className={styles.tryOnPara}>
                    Find the perfect fit for<br/> your face shape.
                  </div>
                  <div className={styles.tryOnBtnContainer}>
                      <Link href='/product'><button className={styles.tryOnBtn}>Explore</button></Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section>
        <div className={styles.homeSection}>
          <div className={styles.homeCardTitle}>
            CHOOSE YOUR FIT FRAME
          </div>
          <div className={styles.homeCardContainer}>
            <div className={styles.productSubContainer}>
            <Link id={styles.fitFrameID} className={styles.productLink} href='/product'>
            <div className={styles.homeCard}>
              <div className={styles.homeCardImg}>
                <Image src={HomeImgOne}/>
              </div>
              <div className={styles.homeCardText}>
                Eyeglasses
              </div>
            </div>
            </Link>
            <Link className={styles.productLink} href='/product'>
            <div className={styles.homeCard}>
              <div className={styles.homeCardImg}>
                <Image src={HomeImgTwo}/>
              </div>
              <div className={styles.homeCardText}>
                Sunglasses
              </div>
            </div>
            </Link>
           
            <Link className={styles.productLink} href='/product'>
            <div className={styles.homeCard}>
              <div className={styles.homeCardImg}>
                <Image src={HomeImgThree}/>
              </div>
              <div className={styles.homeCardText}>
                Computer Glasses
              </div>
            </div>
            </Link>
            </div>
           <div className={styles.productSubContainer}>
           <Link className={styles.productLink} href='/product'>
            <div  className={styles.homeCard}>
              <div className={styles.homeCardImg}>
                <Image src={HomeImgFour}/>
              </div>
              <div className={styles.homeCardText}>
                Contect Lenses
              </div>
            </div>
            </Link>
            <Link  className={styles.productLink} href='/product'>
            <div className={styles.homeCard}>
              <div className={styles.homeCardImg}>
                <Image src={HomeImgFive}/>
              </div>
              <div className={styles.homeCardText}>
                Power Glasses
              </div>
            </div>
            </Link>
           </div>
            
          </div>
        </div>
      </section>

        <section>
          <div className={styles.modelBannerHead}>AS SEEN ON MOUNI ROY</div>
          <div className={styles.modelBannerSection}>
          </div>
        </section>
        <section>
          <div className={styles.modelBannerHead}>AS SEEN ON KARAN JOHAR</div>
          <div className={styles.karanBannerSection}>
          </div>
        </section>        
    </>
  )
}

export default page



