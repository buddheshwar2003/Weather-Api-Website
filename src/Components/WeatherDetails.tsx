import { useWeather } from "../Context/WeatherContext";
import { BiTachometer } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";

const WeatherDetails = () => {
  const { regularData } = useWeather();
  const todaysWeather = regularData?.days[0];

  const convertTo12Hour = (time24: string) => {
    if (!time24) return "--";
    const [hour, minute] = time24.split(":").map(Number);
    const suffix = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    return `${hour12}:${minute.toString().padStart(2, "0")} ${suffix}`;
  };

  return (
    <section>
      <div className="shadow-lg border dark:border-[#1f2d50]  rounded-xl flex flex-col justify-center items-center p-5 gap-5">
        <h1 className="text-2xl font-bold dark:text-white">Weather Details</h1>
        <div className="grid grid-cols-2 gap-5 w-full">
          <div className="flex justify-center items-center gap-5 shadow-lg border dark:border-[#1f2d50]  rounded-lg p-4">
            <FiSunrise className="text-3xl text-red-500" />
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-lg font-semibold dark:text-white">Sunrise</h2>
              <p className="text-gray-500 dark:text-gray-300">
                {convertTo12Hour(todaysWeather?.sunrise)}
              </p>
            </div>
          </div>

          {/* Sunset */}
          <div className="flex justify-center items-center gap-5 border dark:border-[#1f2d50]   rounded-lg shadow-lg p-4">
            <FiSunset className="text-3xl text-blue-500" />
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-lg font-semibold dark:text-white">Sunset</h2>
              <p className="text-gray-500 dark:text-gray-300">
                {convertTo12Hour(todaysWeather?.sunset)}
              </p>
            </div>
          </div>

          {/* Wind Direction */}
          <div className="flex justify-center items-center gap-5 border dark:border-[#1f2d50]  rounded-lg shadow-lg p-4">
            <FaRegCompass className="text-3xl text-red-500" />
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-lg font-semibold dark:text-white">
                Wind Direction
              </h2>
              <p className="text-gray-500 dark:text-gray-300">
                {todaysWeather?.winddir}°
              </p>
            </div>
          </div>

          {/* Pressure */}
          <div className="flex justify-center items-center gap-5 border dark:border-[#1f2d50]   rounded-lg shadow-lg p-4">
            <BiTachometer className="text-3xl text-blue-500" />
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-lg font-semibold dark:text-white">
                Pressure
              </h2>
              <p className="text-gray-500 dark:text-gray-300">
                {todaysWeather?.pressure} hPa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherDetails;
