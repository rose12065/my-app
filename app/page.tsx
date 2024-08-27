import Banner from '@/components/Banner/Banner'
import Image from 'next/image'
import Carousel from '@/components/Carousel/Carousel';
import PopularCars from '@/components/PopularCar/PopularCar';
import Subscription from '@/components/Subscription/Subscription';
import RentSteps from '@/components/Steps/steps';
import FAQAccordion from '@/components/questions/questions';
// const images = [
//   { src: '/images/image1.jpg', alt: 'Image 1' },
//   { src: '/images/image2.jpg', alt: 'Image 2' },
//   { src: '/images/image3.jpg', alt: 'Image 3' },
// ];
export default function Home() {
  return (
    <main>
      <Banner/>
      <Carousel  />
      <PopularCars/>
      <Subscription/>
      <RentSteps/>
      <FAQAccordion/>
    </main>
  )
}
