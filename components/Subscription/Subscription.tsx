import styles from './Subscription.module.css';

const Subscription = () => {
  return (
    <div className={styles.subscription}>
      <div className={styles.subscribeContent}>
        <p className={styles.subscribeOffer}>
          Subscribe here for exclusive offers and updates!
        </p>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <p className={styles.subscriptionMessageMobile}>
          Please select the ways you would like to hear from Diamondlease, and confirm that you’re happy for us to store your data in line with our Privacy Policy.
        </p>
        <p className={styles.subscriptionMessage}>
          Don't miss out! Enter your email and your name, then hit subscribe to unlock a world of special offers and details.
        </p>
        <button className={styles.subscribeButton}>Subscribe</button>
      </div>

      <div className={styles.mobileApp}>
        <img src="/images/mobileapp.svg" alt="Mobile App" className={styles.mobileAppImg} />

        <div className={styles.appContent}>
          <p className={styles.dwldMagDesk}>
            Enter your number and receive a direct link to download the app
          </p>
          <input type="text" name="phn" id="phn" placeholder="Enter Phone Number" className={styles.phn} />
          <button className={styles.getlinkButton}>Get the link</button>
          <div className={styles.appStore}>
            <p>Get it on</p>
            <div className={styles.applicationImg}>
              <img src="/images/Layer_1 (1).svg" alt="App Store" />
              <img src="/images/whiteplaysote.svg" alt="Play Store" />
            </div>
          </div>
        </div>

        <div className={styles.appContentMobile}>
          <div className={styles.appStore}>
            <p className={styles.getInOn}>Get it on</p>
            <div className={styles.applicationImg}>
              <img src="/images/Layer_1 (1).svg" alt="App Store" />
              <img src="/images/whiteplaysote.svg" alt="Play Store" />
            </div>
            <p className={styles.dwldMsg}>
              Enter your number and receive a direct link to download the app
            </p>
          </div>
          <input type="text" name="phn" id="phn" placeholder="Enter Phone Number" />
          <button className={styles.getlinkButton}>Get the link</button>
        </div>
      </div>

      
    </div>
  );
};

export default Subscription;
