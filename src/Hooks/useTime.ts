import { useState, useEffect } from "react";

const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString([],{
    hour:'2-digit',
    minute:'2-digit',
    hour12:true
  });

   const actualTime = time.toLocaleTimeString([],{
    hour:'2-digit',
    minute:'2-digit',
    hour12:false
  });

  return { formattedTime , actualTime };
};

export default useTime;
