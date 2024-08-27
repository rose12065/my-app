import styles from './PopularCar.module.css';
import Image from 'next/image';

export default function PopularCars() {
  return (
    <div className={styles.popularCar}>
      <h1>Most Popular Cars</h1>
      <div className={styles.carTypes}>
        <div className={styles.carTypeBox}>
          <Image src="/images/bluecar.svg" alt="Blue Car" width={360} height={290} />
          <div className={styles.carTypeContent}>
            <p className={styles.carName}>Mitsubishi Eclipse</p>
            <p className={styles.carDescription}>
              Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology, and driving confidence.
            </p>
            <div className={styles.carSpecification}>
              <p><Image src="/icons/people.svg" alt="People" width={24} height={24} /> 6 People</p>
              <p><Image src="/icons/automatic.svg" alt="Automatic" width={24} height={24} /> Automatic</p>
              <p><Image src="/icons/door-icon.svg" alt="Doors" width={24} height={24} /> 5 Doors</p>
              <p><Image src="/icons/ac.svg" alt="AC" width={24} height={24} /> AC</p>
            </div>
            <div className={styles.carContentBottom}>
              <p>AED 2700/ Monthly</p>
              <button className={styles.bookNowButton}>Book Now</button>
            </div>
          </div>
        </div>

        <div className={styles.carTypeBox}>
          <Image src="/images/redcar.svg" alt="Red Car" width={360} height={290} />
          <div className={styles.carTypeContent}>
            <p className={styles.carName}>Jac J7</p>
            <p className={styles.carDescription}>
              S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.
            </p>
            <div className={styles.carSpecification}>
              <p><Image src="/icons/people.svg" alt="People" width={24} height={24} /> 6 People</p>
              <p><Image src="/icons/automatic.svg" alt="Automatic" width={24} height={24} /> Automatic</p>
              <p><Image src="/icons/door-icon.svg" alt="Doors" width={24} height={24} /> 5 Doors</p>
              <p><Image src="/icons/ac.svg" alt="AC" width={24} height={24} /> AC</p>
            </div>
            <div className={styles.carContentBottom}>
              <p>AED 2700/ Monthly</p>
              <button className={styles.bookNowButton}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
