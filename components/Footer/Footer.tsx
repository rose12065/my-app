import styles from './Footer.module.css';
import companyLogo from '/public/images/company-transperent-logo.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLeft}>
          <Image src={companyLogo} alt='company logo' className={styles.companyLogo} />
          <p>Member of the
            Al Habtoor Group</p>
        </div>
        <div className={styles.quickAccess}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Al Habtoor Companies</li>
          </ul>
          <ul>
            <li>Offers</li>
            <li>Locations</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Service Request</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styles.followUs}>
          <p>FOLLOW US ON</p>
          <Image src='/icons/Group 1261156306.png' alt='icons' width={138} height={16.59} />
          <div className={styles.secureLogo}>
            <Image src='images/image 270.svg' alt='secureLogo' width={67} height={38} />
            <Image src='images/image 273.svg' alt='lockLogo' width={64} height={24} />
          </div>
        </div>
      </div>
      <div className={styles.footerMiddle}>
        <ul>
          <li>Hospitality</li>
          <li>Real Estate</li>
          <li>Education</li>
          <li>Publishing</li>
          <li>Automotive</li>
          <li>Vehicle Leasing</li>
        </ul>
      </div>
      <div className={styles.footerLine}></div>
      <div className={styles.copyRight}>
        <p>© 2018 Diamondlease LLC - All Rights Reserved. </p>
      </div>
    </div>

  )
}

export default Footer