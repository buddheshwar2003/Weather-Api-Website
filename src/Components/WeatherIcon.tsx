// src/components/WeatherIcon.tsx
import type { JSX } from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloudy,
  WiRain,
  WiSnow,
  WiFog,
  WiThunderstorm
} from "react-icons/wi";

interface Props {
  icon: string;
  size?: number;
}

const WeatherIcon = ({ icon, size = 32 }: Props) => {
  const iconMap: Record<string, JSX.Element> = {
    "clear-day": <WiDaySunny size={size} className="text-gray-700 dark:text-gray-200" />,
    "clear-night": <WiNightClear size={size} className="text-gray-700 dark:text-gray-200"/>,
    "partly-cloudy-day": <WiDayCloudy size={size} className="text-gray-700 dark:text-gray-200"/>,
    "partly-cloudy-night": <WiNightAltCloudy size={size} className="text-gray-700 dark:text-gray-200" />,
    "cloudy": <WiCloudy size={size} className="text-gray-700 dark:text-gray-200"/>,
    "rain": <WiRain size={size} className="text-gray-700 dark:text-gray-200" />,
    "snow": <WiSnow size={size} className="text-gray-700 dark:text-gray-200"/>,
    "fog": <WiFog size={size} className="text-gray-700 dark:text-gray-200"/>,
    "thunderstorm": <WiThunderstorm size={size} className="text-gray-700 dark:text-gray-200"/>
  };

  return iconMap[icon] || <WiDaySunny size={size} />;
};

export default WeatherIcon;
