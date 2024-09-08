import Image from 'next/image';
import styles from '@/components/navbar/navbar.module.css';
import { Logo, adminLogo, offerImgOne, offerImgTwo, offerImgThree } from '@/components/Image/image';
import Link from 'next/link';

const navbar = () => {
  return (
    <>
      <section className={styles.NavbarMainSection}>
        <div className={styles.navSection}>
          <div className="container">
            <div id={styles.navbarContainer} className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div id={styles.navHead} className='col-5 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                <div className={styles.Logo}>
                  <Link href='/'><Image src={Logo} /></Link>
                </div>
                <div className={styles.contactNum}>
                  <span class="material-symbols-outlined">
                    call
                  </span> 1800-882-7057
                </div>
                <div className={styles.navInput}>
                  <input type="text" placeholder='What are you looking for?' />
                </div>
              </div>
              <div id={styles.navHeadAdmin} className='col-7 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                <div id={styles.navHeadAdminID} className='col-11 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
                  <div className={styles.Lists}>
                    <Link className={styles.links} href='/track'>Track Order</Link>
                    <Link className={styles.links} href='/register'>Register</Link>
                    <Link className={styles.links} href='/wishlist'><span id={styles.adminIcon} class="material-symbols-outlined">
                      favorite
                    </span> Wishlist</Link>
                    <Link id={styles.hamburgerId} className={styles.links} href='/cart'><span id={styles.adminIcon} class="material-symbols-outlined">
                      shopping_cart
                    </span> Cart</Link>
                    <div className={styles.responsiveAdminContainer}>
                      <div className={styles.responsiveAdminLogo}>
                        <Link className={styles.responsiveLogo} href='/wishlist'><span id={styles.adminIcon} class="material-symbols-outlined">
                          call
                        </span></Link>
                        <Link className={styles.responsiveLogo} href='/wishlist'><span id={styles.adminIcon} class="material-symbols-outlined">
                          favorite
                        </span></Link>
                        <Link className={styles.responsiveLogo} href='/wishlist'><span id={styles.adminIcon} class="material-symbols-outlined">
                          shopping_cart
                        </span></Link>
                        <div className={styles.responsiveLogo} href='/wishlist'><span id={styles.adminIcon} class="material-symbols-outlined">
                          menu
                        </span>

                          <div className={styles.hamburgerSection}>
                            <div className={styles.hamburgerContainer}>
                              <div className={styles.hamburgerHead}>
                                <div>
                                  <div className={styles.hamburgerHeadContainer}>
                                    <div className={styles.adminLogo}>
                                      <Image src={adminLogo} />
                                    </div>
                                    <div className={styles.adminHeadTitle}>
                                      <div className={styles.adminTitleHeading}>
                                        Hi Spaicy!
                                      </div>
                                      <div className={styles.adminTitlePara}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rerum itaque Debitis?
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.adminHeadBtnHead}>
                                    <Link href='/login'><button className={styles.adminHeadBtn}>Login/Signup</button></Link>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.hamburgerMenuContainer}>
                                <div className={styles.hamburgerListMenu}>
                                  <Link className={styles.hamburgerList} href='/product'>EYEGLASSES</Link>
                                </div>
                                <div className={styles.hamburgerListMenu}>
                                  <Link className={styles.hamburgerList} href='/product'>Computer Glasses</Link>
                                </div>
                                <div className={styles.hamburgerListMenu}>
                                  <Link className={styles.hamburgerList} href='/product'>KIDS GLASSES</Link>
                                </div>
                                <div className={styles.hamburgerListMenu}>
                                  <Link className={styles.hamburgerList} href='/product'>CONTACT LENSES</Link>
                                </div>
                                <div className={styles.hamburgerListMenu}>
                                  <Link className={styles.hamburgerList} href='/product'>SUNGLASSES</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND NAVBAR SECTION START FROM HERE */}

        <section>
          <div className={styles.navMenuSection}>
            <div className="container">
              <div id={styles.navbarContainer} className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div id={styles.navMenuLists} className='col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9'>
                  <div id={styles.menuListContainer} className='col-11 col-sm-11 col-md-11 col-lg-11 col-xl-12'>
                    <div id={styles.NavListContent}>
                      <Link id={styles.computerHoverId} className={styles.menuList} href='/product'>EYEGLASSES</Link>

                      <div className={styles.HoverSection}>
                        <div id={styles.HoverContainer} >
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Brands
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Gucci</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Prada</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Fastrack</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Ray-Ban</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Burberry</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Categories
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Prism Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Bifocal Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Single Vision</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Progressive Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Toric Lenses</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Frames
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Aviator Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Square Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Rectangle Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Clubmaster Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Wayfarer Glasses</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Other Products
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Contact Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Eye Drops</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Eye Checkup</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Home Checkup</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id={styles.NavListContent}>
                      <Link className={styles.menuList} href='/product'>COMPUTER GLASSES</Link>
                      <div className={styles.HoverSection2}>
                        <div id={styles.HoverContainer} >
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Brands
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Gucci</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Prada</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Fastrack</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Ray-Ban</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Burberry</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Categories
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Prism Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Bifocal Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Single Vision</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Progressive Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Toric Lenses</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Frames
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Aviator Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Square Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Rectangle Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Clubmaster Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Wayfarer Glasses</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Other Products
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Contact Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Eye Drops</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Eye Checkup</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Home Checkup</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id={styles.NavListContent}>
                      <Link className={styles.menuList} href='/product'>KIDS GLASSES</Link>
                      <div className={styles.HoverSection3}>
                        <div id={styles.HoverContainer} >
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Brands
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Gucci</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Prada</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Fastrack</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Ray-Ban</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Burberry</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Categories
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Prism Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Bifocal Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Single Vision</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Progressive Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Toric Lenses</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Frames
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Aviator Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Square Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Rectangle Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Clubmaster Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Wayfarer Glasses</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Other Products
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Contact Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Eye Drops</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Eye Checkup</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Home Checkup</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id={styles.NavListContent}>
                      <Link className={styles.menuList} href='/product'>CONTACT LENSES</Link>
                      <div className={styles.HoverSection4}>
                        <div id={styles.HoverContainer} >
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Brands
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Gucci</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Prada</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Fastrack</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Ray-Ban</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Burberry</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Categories
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Prism Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Bifocal Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Single Vision</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Progressive Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Toric Lenses</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Frames
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Aviator Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Square Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Rectangle Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Clubmaster Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Wayfarer Glasses</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Other Products
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Contact Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Eye Drops</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Eye Checkup</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Home Checkup</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id={styles.NavListContent}>
                      <Link id={styles.menuListID} className={styles.menuList} href='/product'>SUNGLASSES</Link>
                      <div className={styles.HoverSection5}>
                        <div id={styles.HoverContainer} >
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Brands
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Gucci</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Prada</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Fastrack</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Ray-Ban</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Burberry</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Categories
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Prism Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Bifocal Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Single Vision</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Progressive Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Toric Lenses</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Frames
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Aviator Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Square Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Rectangle Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Clubmaster Glasses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Wayfarer Glasses</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id={styles.HoverContentHead} className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                            <div>
                              <div className={styles.HoverContentHeading}>
                                Other Products
                              </div>
                              <div className={styles.HoverContentListMenu}>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Contact Lenses</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Eye Drops</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Eye Checkup</Link>
                                </div>
                                <div className={styles.HoverContentList}>
                                  <Link className={styles.HoverList} href='/product'>Home Checkup</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id={styles.NavListContent}><Link id={styles.menuListID} className={styles.menuList} href='/product'>STORE LOCATOR</Link></div>
                  </div>
                </div>
                <div id={styles.navHeadAdmin2} className='col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                  <div id={styles.navOfferConatiner} className='col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
                    <Link href='/product'><Image src={offerImgOne} /></Link>
                    <Link href='/product'><Image src={offerImgTwo} /></Link>
                    <Link href='/product'><Image src={offerImgThree} /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
export default navbar
