import { useWeather } from "../Context/WeatherContext";
import WeatherIcon from "./WeatherIcon";
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { LuDroplets } from "react-icons/lu";

const WeatherCard = () => {
  const { regularData, hourlyTime } = useWeather();

  const currentWeather = regularData?.days[0]?.hours[parseInt(hourlyTime)];

  return (
    <section className="pt-10">
      <div className="flex flex-col justify-center items-center shadow-lg border dark:border-[#1f2d50]  rounded-xl lg:h-[300px]">
        <div className="flex justify-start items-center p-5 gap-10 max-lg:gap-20 max-sm:flex-col">
          <div className="flex items-center justify-between flex-col gap-10 ">
            <div className="flex">
              <h2 className="text-2xl font-bold dark:text-white">
                {regularData?.resolvedAddress}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-6xl font-bold dark:text-white">
                {parseInt(currentWeather?.temp)}°
              </h1>
              <div>
                <h2 className="text-base font-semibold text-gray-500 dark:text-gray-300">
                  Feels Like {currentWeather?.feelslike}°
                </h2>
                <div className="flex gap-2">
                  <p className="text-blue-400 flex items-center gap-1 font-bold">
                    <FaArrowDown className="h-3 w-3" />{" "}
                    {parseInt(regularData?.days[0]?.tempmin)}°
                  </p>
                  <p className="text-red-400 flex items-center gap-1 font-bold">
                    <FaArrowUp className="h-3 w-3" />{" "}
                    {parseInt(regularData?.days[0]?.tempmax)}°
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="flex items-center gap-3">
                <LuDroplets className="text-blue-400" />

                <div>
                  <h2 className="text-base font-bold dark:text-white">Humidity</h2>
                  <p className="text-base text-gray-500 dark:text-gray-300">
                    {currentWeather?.humidity}%
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaWind className="text-blue-400" />

                <div>
                  <h2 className="text-base font-bold dark:text-white">Wind Speed</h2>
                  <p className="text-base text-gray-500 dark:text-gray-300">
                    {currentWeather?.windspeed} km/s
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <WeatherIcon icon={currentWeather?.icon} size={180} />
            <p className="font-bold text-2xl dark:text-white">{currentWeather?.conditions}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherCard;
