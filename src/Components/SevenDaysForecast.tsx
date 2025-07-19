import { LuDroplets } from "react-icons/lu";
import { useWeather } from "../Context/WeatherContext";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";

const SevenDaysForecast = () => {
  const { regularData } = useWeather();
  const days = regularData?.days.slice(1, 8); // next 7 days

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);

    const dayName = date.toLocaleDateString("en-US", { weekday: "short" }); // Friday
    const dayNumber = date.getDate(); // 18
    const monthName = date.toLocaleDateString("en-US", { month: "short"}); // July

    return `${dayName}, ${dayNumber} ${monthName}`;
  };
  

  return (
    <section className="w-full">
      <div className="shadow-lg border dark:border-[#1f2d50]  rounded-xl p-5 pb-10 overflow-hidden flex flex-col gap-5 justify-center items-center">
        <h1 className="text-2xl font-bold dark:text-white">7-Day Forecast</h1>
        {days && days?.map((day:any,index:any) => (
          <div key={index} className="flex justify-between items-center flex-wrap rounded-xl border dark:border-[#1f2d50]  p-3 w-full">
            <div className="flex justify-center flex-col items-start">
              <h2 className="font-bold dark:text-white">{formatDate(day?.datetime)}</h2>
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                {day?.conditions}
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex justify-center items-center gap-1">
                <FaArrowDown className="text-blue-500" />
                <span className="text-blue-500">{day?.tempmin}°</span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <FaArrowUp className="text-red-500" />
                <span className="text-red-500">{day?.tempmax}°</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex justify-center items-center gap-1">
                <LuDroplets className="text-blue-500" />
                <span className="dark:text-white">{day?.humidity}%</span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <FaWind className="text-blue-500" />
                <span className="dark:text-white">{day?.windspeed}km/s</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SevenDaysForecast;
