import Error from "./Components/Error"
import HourlyForecast from "./Components/HourlyForecast"
import Loading from "./Components/Loading"
import Navbar from "./Components/Navbar"
import SevenDaysForecast from "./Components/SevenDaysForecast"
import WeatherCard from "./Components/WeatherCard"
import WeatherDetails from "./Components/WeatherDetails"
import { useWeather } from "./Context/WeatherContext"

const App = () => {
  const {loading , errorMessage}= useWeather();
  if(loading) return <Loading />;
  if(errorMessage) return <Error />
  return (
    <section className="h-fullmax-lg:h-full flex flex-col justify-start items-center bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <section className="grid w-full max-container grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        <WeatherCard />
        <HourlyForecast />
        <WeatherDetails />
        <SevenDaysForecast />
      </section>
    </section>
  )
}

export default App