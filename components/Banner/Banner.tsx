'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Banner.module.css';

const Banner: React.FC = () => {
  // State for the first date-time picker
  const [selectedDatetime1, setSelectedDatetime1] = useState<string>('30/10/2023 09:00 AM');
  const [date1, setDate1] = useState<string>('');
  const [time1, setTime1] = useState<string>('');
  const [showDatetimePicker1, setShowDatetimePicker1] = useState<boolean>(false);

  // State for the second date-time picker
  const [selectedDatetime2, setSelectedDatetime2] = useState<string>('30/10/2023 09:00 AM');
  const [date2, setDate2] = useState<string>('');
  const [time2, setTime2] = useState<string>('');
  const [showDatetimePicker2, setShowDatetimePicker2] = useState<boolean>(false);

  const handleSetDatetime1 = () => {
    setSelectedDatetime1(`${date1} ${time1}`);
    setShowDatetimePicker1(false);
  };

  const handleSetDatetime2 = () => {
    setSelectedDatetime2(`${date2} ${time2}`);
    setShowDatetimePicker2(false);
  };

  return (
    <div className={styles.banner}>
      <div className={styles.quickBook}>
        <div className={styles.type}>
          <div className={styles.pickUp}>
            Same as pick-up
            <hr />
          </div>
          <div className={styles.dropOff}>Different Drop-Off</div>
          <div className={styles.vehicleType}>
            <select name="vehicle-type" id="vehicleType">
              <option>Select vehicle type</option>
              <option>Saab</option>
              <option>Mercedes</option>
              <option>Audi</option>
            </select>
          </div>
        </div>

        <div className={styles.booking}>
          <div className={styles.location}>
            <Image src="/icons/map.svg" alt="Map Icon" width={24} height={24} />
            <select name="location-dropdown" id="locationDropdown">
              <option>Al Quoz</option>
              <option>Al Quoz</option>
              <option>Al Quoz</option>
              <option>Al Quoz</option>
            </select>
          </div>

          {/* First Date-Time Selector */}
          <div className={styles.dateTime} onClick={() => setShowDatetimePicker1(prev => !prev)}>
            <Image src="/icons/calender.svg" alt="Calendar Icon" id="calendarIcon" width={24} height={24} />
            <span id="selectedDatetime1">{selectedDatetime1}</span>
          </div>
          <div className={`${styles.datetimeDropdown} ${showDatetimePicker1 ? styles.show : ''}`} id="datetimeDropdown1">
            <input
              type="date"
              id="dateInput1"
              value={date1}
              onChange={(e) => setDate1(e.target.value)}
            />
            <input
              type="time"
              id="timeInput1"
              value={time1}
              onChange={(e) => setTime1(e.target.value)}
            />
            <button id="setDatetime1" onClick={handleSetDatetime1}>Set</button>
          </div>

          {/* Second Date-Time Selector */}
          <div className={styles.dateTime} onClick={() => setShowDatetimePicker2(prev => !prev)}>
            <Image src="/icons/calender.svg" alt="Calendar Icon" id="calendarIcon2" width={24} height={24} />
            <span id="selectedDatetime2">{selectedDatetime2}</span>
          </div>
          <div className={`${styles.datetimeDropdown} ${showDatetimePicker2 ? styles.show : ''}`} id="datetimeDropdown2">
            <input
              type="date"
              id="dateInput2"
              value={date2}
              onChange={(e) => setDate2(e.target.value)}
            />
            <input
              type="time"
              id="timeInput2"
              value={time2}
              onChange={(e) => setTime2(e.target.value)}
            />
            <button id="setDatetime2" onClick={handleSetDatetime2}>Set</button>
          </div>

          <div className={styles.search}>
            <Image src="/icons/search.svg" alt="Search Icon" width={24} height={24} />
          </div>
          <hr className={styles.searchLine}/>
          <div className={styles.book}>Quick Book</div>
        </div>

        <div className={styles.quickBookBottom}>
          <div className={styles.message}>Download our App for easy accessibility anytime, anywhere!</div>
          <div className={styles.appImages}>
          <Image src="/images/appstore.svg" alt="App Store" width={109.87} height={32} />
          <Image src="/images/playstore.svg" alt="Play Store" width={109.87} height={32} />
          </div>
          
        </div>

        <div className={styles.carButton}>
          <button className={styles.bookCar}>Book a car</button>
          <button className={styles.quickBookCar}>Quick Book</button>
        </div>
      </div>

      <div className={styles.sideIcon}>
        <Image src="/icons/phn.svg" alt="Phone Icon" id="phoneIcon" width={24} height={24} />
        <Image src="/icons/24x7.svg" alt="24x7 Icon" id="timeIcon" width={24} height={24} />
      </div>
    </div>
  );
};

export default Banner;
