import styles from '@/components/footer/footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import  { Logo,LinkedIn,Facebook,Insta,Twitter } from '@/components/Image/image';


const footer = () => {
  return (
    <>
     <section>
        <div className={styles.footerSection}>
          <div className="container">
              <div id={styles.footerpage} className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                  <div id={styles.footerHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <div>
                    <div className={styles.footerLogo}>
                      <Image src={Logo}/>
                      </div>
                      <div className={styles.slogan}>
                        We Care Your Eye!
                      </div>
                      <div id={styles.socialMedia} >
                        <div className={styles.socialMediaHeading}>
                            Connect With Us. 
                        </div>
                        <div className={styles.IconMedia}>
                          <Image src={Facebook}/>
                          <Image src={Insta}/>
                          <Image src={Twitter}/>
                          <Image src={LinkedIn}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id={styles.footerHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <div>
                    <div className={styles.footerHeading}>
                        PRODUCTS
                    </div>
                      <div className={styles.footerListContainer}>
                        <div className={styles.footerListContent}>
                        <Link href='/product' className={styles.footerList}>
                           Sunglsses
                        </Link>
                        </div>
                        <div className={styles.footerListContent}>
                        <Link href='/product' className={styles.footerList}>
                           CatEye Glasses
                        </Link>
                        </div>
                        <div className={styles.footerListContent}>
                        <Link href='/product' className={styles.footerList}>
                           Blue Ray GLasses
                        </Link>
                        </div>
                        <div className={styles.footerListContent}>
                        <Link href='/product' className={styles.footerList}>
                           Computer Glasses
                        </Link>
                        </div>
                        <div className={styles.footerListContent}>
                        <Link href='/product' className={styles.footerList}>
                           Power Lenses
                        </Link>
                        </div>
                      
                    </div>
                    </div>
                  </div>
                  <div id={styles.footerHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <div>
                  <div className={styles.footerHeading}>
                      CATEGORIES
                  </div>
                      <div className={styles.footerListContainer}>
                      <div className={styles.footerListContent}>
                      <Link href='/product' className={styles.footerList}>
                           Ray-Ban
                           </Link>
                      </div>
                      <div className={styles.footerListContent}>
                      <Link href='/product' className={styles.footerList}>
                           Tommy Hillfigure
                           </Link>
                      </div>
                      <div className={styles.footerListContent}>
                      <Link href='/product' className={styles.footerList}>
                           Gucci
                           </Link>
                      </div>
                     <div className={styles.footerListContent}>
                     <Link href='/product' className={styles.footerList}>
                           Prada
                           </Link>
                     </div>
                      <div className={styles.footerListContent}>
                      <Link href='/product' className={styles.footerList}>
                           Fastrack
                           </Link>
                      </div>
                      <div className={styles.footerListContent}>
                      <Link href='/product' className={styles.footerList}>
                           Luis-Vitton
                           </Link>
                      </div>
                      </div>
                  </div>
                    
                  </div>
                  <div id={styles.footerHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                 <div>
                 <div className={styles.footerHeading}>
                    SUPPORT
                  </div>
                      <div className={styles.footerListContainer}>
                      <div className={styles.footerListContent}>
                      <Link href='/product' className={styles.footerList}>
                           Contact Us
                           </Link>
                      </div>
                      <div className={styles.footerListContent}>
                      <Link href='/product' className={styles.footerList}>
                           F&Q
                           </Link>
                      </div>
                      <div className={styles.footerListContent}>
                      <Link href='/product' className={styles.footerList}>
                           Help?
                           </Link>
                      </div>
                      </div>
                 </div>
                    
                  </div>
              </div>
          </div>
        </div>
     </section>
    </>
  )
}

export default footer
