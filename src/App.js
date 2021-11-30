import { useState, useEffect } from "react";
import WeatherList from "./components/WeatherList";
import { API_URL, API_KEY } from "./constants";
import BounceLoader from "react-spinners/HashLoader";
import Navbar from "./components/Navbar";
import WeatherDay from "./components/WeatherDay";
import { currentDate as Date } from "./components/Date";
import { motion } from "framer-motion";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [countryImage, setCountryImage] = useState(null);
  const [tempType, setTempType] = useState("metric");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_URL}${query}&units=${tempType}&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeatherData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [query, tempType]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&client_id=XPsAtWYj8ajr7000ZtP8ULiQoNeOGcwOSPRPkeM3BYE`
        );
        const data = await response.json();
        setCountryImage(data.results[0].urls.full);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [query]);

  function onHandleSubmit(queryValue) {
    setQuery(queryValue);
  }

  console.log(weatherData);

  function onTempHandler(tempType) {
    if (tempType === "metric") {
      setTempType("standard");
    } else {
      setTempType("metric");
    }
  }

  console.log(`${API_URL}${query}&units=${tempType}&appid=${API_KEY}`);

  console.log(tempType);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="app__container"
    >
      {!isLoading ? (
        <WeatherList
          weatherData={weatherData}
          query={query}
          countryImage={countryImage}
          onHandleSubmit={onHandleSubmit}
          tempType={tempType}
        />
      ) : (
        <div className="spinner__container mx-auto">
          <BounceLoader color="#ffd500" loading={isLoading} size={50} />
        </div>
      )}
      <motion.div
        variants={item}
        className="bg-gray-200 w-full rounded-r-2xl flex items-center relative"
      >
        <Navbar tempType={tempType} onTempHandler={onTempHandler} />
        <WeatherDay
          weatherData={weatherData}
          date={Date()}
          isDayOne
          query={query}
          tempType={tempType}
        />
      </motion.div>
    </motion.div>
  );
}

export default App;
