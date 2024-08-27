import Image from 'next/image';
import styles from './Carousel.module.css';

const Carousel: React.FC = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>
        <div className={styles.carouselItem}>
          <Image src="/images/summerpromotion.svg" alt="Image 1" width={300} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
