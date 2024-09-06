import React from 'react';
import { useState,useEffect } from 'react';

export default function SecondHome() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getDay()];
  const [currentTime, setCurrentTime] = useState(currentDate.toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);
  return (
    <div className='d-flex flex-column justify-content-between p-2 height ' style={{ height: '100%' }}>
      <h3 className='text-light'>
        {currentDay}
      </h3>
      <div className="mt-auto">
        <h3 className='text-light'>{currentDate.toLocaleDateString()}</h3>
        <p className='float-end text-light mt-auto'>{currentTime}</p>
      </div>
    </div>
  );
}
