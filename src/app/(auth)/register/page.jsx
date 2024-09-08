import styles from '@/app/(auth)/register/register.module.css';

const registerpage = () => {
  return (
    <>
      <section>
        <div className={styles.registerPageSection}>
          <div className={styles.registerPageContaienr}>
            <div className={styles.registerContent}>
              <div className={styles.registerHeading}>
                Create An Account !
              </div>
              <div className={styles.registerHead}>
                <input type="text" placeholder='Full Name' />
                <input type="text" placeholder='Last Name' />
                <div className={styles.numberInput}>
                  +91 <input type="text" placeholder='Mobile' />
                </div>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <div className={styles.updatewhatsapp}>
                  <input type="checkbox" />
                  Get update on Whatsapp !
                </div>
                <div className={styles.signupBtn}>
                  <button>Create An Account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default registerpage


