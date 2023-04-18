import React, { useEffect, useState } from 'react'

type Props = {}

const CountDown = (props: Props) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    // Remenber: this date should be in the future!
    let countDownDate = new Date("June 10, 2023 12:20:15").getTime();

    let x = setInterval(() => {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

      if (distance < 0) {
        clearInterval(x);
        setTime("COUNTDOWN FINISHED");
      }
    }, 1000);
  }, []);

  return (
      <div className='flex justify-center items-center w-72 h-10 
                      border-4 border-solid border-black rounded-lg
                      bg-slate-400'>
        <p className='text-2xl font-extrabold text-blue-700'>{time}</p>
      </div>
  )
};

export default CountDown;