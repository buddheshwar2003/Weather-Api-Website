import { useMemo } from "react";
import { useWeather } from "../Context/WeatherContext";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { format } from "date-fns";

const HourlyForecast = () => {
  const { regularData } = useWeather();
  const hourlyWeather = regularData?.days?.[0]?.hours;
  
  const hourlyTemperature = useMemo(() => {
    const filtered = hourlyWeather?.filter(
      (_: any, index: number) => index % 3 === 0
    );
    return filtered?.map((item: any) => ({
      time: format(new Date(item.datetimeEpoch * 1000), "ha"),
      temp: Math.round(item.temp),
      feelslike: Math.round(item.feelslike),
    }));
  }, [hourlyWeather]);

  return (
    <section className="w-full pt-10">
      <div className="h-[300px] shadow-lg border dark:border-[#1f2d50]  rounded-xl p-5 pb-10 overflow-hidden">
        <h1 className="text-2xl font-bold pb-2 dark:text-white text-center">Todays Tempreture</h1>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={hourlyTemperature}>
            <XAxis
              dataKey="time"
              stroke="#888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              dataKey="feelslike"
              stroke="#888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}°`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg shadow-sm border p-2">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-gray-500 dark:text-gray-300">
                            Tempreture
                          </span>
                          <span className="font-bold dark:text-white">{payload[0].value}°</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-gray-500 dark:text-gray-300">
                            Feels Like
                          </span>
                          <span className="font-bold dark:text-white">{payload[1].value}°</span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#8884d8"
              strokeWidth={2}
              isAnimationActive={false}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="feelslike"
              stroke="#64748b"
              strokeWidth={2}
              isAnimationActive={false}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default HourlyForecast;
