import styles from '@/components/tab/tab.module.css';

const tab = () => {
  return (
    <>
     <section>
          <div className={styles.subNavbarSection}>
            <div className="container">
              <div className={styles.subNavbarHead}>
                <div className={styles.subNavbarHeading}>
                  Start exploring.
                </div>
                  <div className={styles.subNavbarContainer}>
                    <div id={styles.subNavbarMenuList} className='col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7'>
                      <div className={styles.subNavbarList} >
                        <Link className={isActive(links.path) ? 'active' : ""}  id={styles.subNavlink} href='#'>Mens</Link>
                      </div>
                      <div className={styles.subNavbarList}>
                        <Link className={isActive(links.path) ? 'active' : ""} id={styles.subNavlink} href='/product'>Womens</Link>
                      </div>
                      <div className={styles.subNavbarList}>
                        <Link className={isActive(links.path) ? 'active' : ""} id={styles.subNavlink} href='/product'>Trending</Link>
                      </div>
                      <div className={styles.subNavbarList}>
                        <Link className={isActive(links.path) ? 'active' : ""} id={styles.subNavlink} key={links.title} href='/'>Relavent</Link>
                      </div>
                      <div className={styles.subNavbarList}>
                        <Link className={isActive(links.path) ? 'active' : ""} id={styles.subNavlink} href='/product'>All Products</Link>
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

export default tab
