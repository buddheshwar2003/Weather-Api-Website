import { useState } from "react";
import { useWeather } from "../Context/WeatherContext";
import navIcon from "../assets/icons/navIcons.png";
import { LuSun, LuMoon } from "react-icons/lu";

const Navbar = () => {
  const [currentCity, setCurrentCity] = useState<string>("");
  const { setCity, handleTheme, theme } = useWeather();
  const handleClick = () => {
    if (currentCity.trim()) {
      setCity(currentCity.trim());
      setCurrentCity("");
    } else return;
    console.log(currentCity);
  };

  return (
    <header className="w-full shadow-md flex justify-center items-center bg-white dark:bg-gray-900">
      <nav className="max-container w-full flex flex-col gap-4 md:flex-row md:justify-between md:items-center p-5">
        {/* Top Row (Logo + Toggle) */}
        <div className="w-full flex max-md:flex-wrap items-center justify-between max-md:gap-5">
          {/* Logo */}
          <div>
            <img src={navIcon} alt="Icons" height={50} width={50} />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={handleTheme}
            className="rounded-full p-2 border-2 md:order-3 border-gray-400 dark:border-gray-800 bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-md transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme ? (
              <LuSun className="text-yellow-400 text-2xl" />
            ) : (
              <LuMoon className="text-gray-400 text-2xl" />
            )}
          </button>

          {/* Search Row */}
          <div className="flex items-center gap-2 order-2 justify-center w-full">
            <input
              type="text"
              value={currentCity}
              onChange={(e) => setCurrentCity(e.target.value)}
              className="h-10 px-3 py-2 w-full max-w-sm max-md:max-w-full text-base border rounded outline-none dark:bg-transparent dark:text-white"
              placeholder="Search City"
            />
            <button
              onClick={handleClick}
              className="h-10 px-4 text-base bg-blue-500 text-white rounded"
            >
              Search
            </button>
          </div>
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
