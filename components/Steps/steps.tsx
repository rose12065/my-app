import Image from 'next/image';
import styles from './steps.module.css';

export default function RentSteps() {
    return (
        <div className={styles.rentSteps}>
            <p className={styles.rentHeading}>Rent/Lease In three easy steps</p>
            <div className={styles.steps}>
                <div className={styles.stepCategory}>
                    <p className={styles.stepNo}>01</p>
                    <div className={styles.stepDescription}>
                        <Image src="/icons/map-red.svg" alt="Location Icon" width={50} height={50} className={styles.redIcon}/>
                        <p className={styles.stepDes}>
                            Select the location. Browse through our available options and find the perfect car to suit your needs.
                        </p>
                    </div>
                </div>
                <div className={styles.stepCategory}>
                    <p className={styles.stepNo}>02</p>
                    <div className={styles.stepDescription}>
                        <Image src="/icons/red-calender.svg" alt="Calendar Icon" width={50} height={50} className={styles.redIcon}/>
                        <p className={styles.stepDes}>Choose your desired Pick-Up date and time.</p>
                    </div>
                </div>
                <div className={styles.stepCategory}>
                    <p className={styles.stepNo}>03</p>
                    <div className={styles.stepDescription}>
                        <Image src="/icons/car-icon-red.svg" alt="Car Icon" width={50} height={50} className={styles.redIcon}/>
                        <p className={styles.stepDes}>
                            Make payment and book the car. Select an option to either have the car delivered to your location or pick it up directly from us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
