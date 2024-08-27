import React from 'react'
import styles from './Header.module.css';
import Image from 'next/image';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.socialHeader}>
                <a href="#"><Image src='/images/social-media-top.png' alt='social-media' width={101} height={15.5} /></a>
            </div>
            <div className={styles.navbar}>
                <div className={styles.companyLogo}>
                <Image src='/images/Layer_1.svg' alt='companyLogo' width={370} height={54} />
                </div>
                <div>
                    <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
                    <label htmlFor="menu-toggle" className={styles.menuIcon}>
                        <Image src='/icons/hamburger.png' alt='menu icon' width={24} height={24} />
                    </label>
                </div>
                <nav className={styles.navElements}>
                    <label htmlFor="menu-toggle" className={styles.closeIcon}>X</label>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Offers</a></li>
                        <li><a href="#">Corporate</a></li>
                        <li><a href="#">Personal</a></li>
                        <li><a href="#">Locations</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><div className={styles.notification}>
                            <Image src='/icons/Notification.svg' alt='notification' width={24} height={24} />
                        </div></li>
                        <li><div className={styles.userName}>
                            <div className={styles.userNameIcon}>J</div>
                            <div className={styles.name}>John Deo</div>
                        </div></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.marquee}>
                <p>Sunday pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand sales Counters | All rates inclusive of VAT. T&C's apply | Follow us on social media for New offers</p>
            </div>

        </div>
    )
}

export default Header