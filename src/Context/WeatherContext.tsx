import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import useTime from "../Hooks/useTime";

interface ContextType {
  city: string;
  setCity: (city: string) => void;
  regularData: any;
  loading: boolean;
  errorMessage: string | null;
  currentTime: string;
  hourlyTime: string;
  handleTheme:()=>void;
  theme:boolean;
}

const WeatherContext = createContext<ContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const [city, setCity] = useState<string>("Delhi");
  const [url, setUrl] = useState<string>("");
  const [theme, setTheme] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const handleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme);
  }, [theme]);

  useEffect(() => {
    const savedCity = localStorage.getItem("city");
    if (savedCity) setCity(savedCity);
  }, []);
  useEffect(() => {
    localStorage.setItem("city", city);
    setUrl(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&include=days,hours`
    );
  }, [city]);
  const { data: regularData, loading, errorMessage } = useFetch(url);
  const { formattedTime: currentTime, actualTime: hourlyTime } = useTime();

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        regularData,
        loading,
        errorMessage,
        currentTime,
        hourlyTime,
        handleTheme,
        theme
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context)
    throw new Error("useWeather must be used within WeatherProvider");
  return context;
};
