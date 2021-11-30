import Icons from "./Icons";
import { motion } from "framer-motion";

function WeatherDay({ weatherData, tempType }) {
  const weatherDay1 = weatherData?.list?.slice(
    0,
    weatherData?.list?.length - 1
  );

  const getDayName = (value, locale) => {
    return new Date(value).toLocaleDateString(locale, {
      weekday: "long",
    });
  };

  const getDays = (input) => {
    const output = new Map();

    input?.forEach((item) => {
      const dayName = getDayName(item.dt * 1000, "en-US");
      output.set(dayName, (output.get(dayName) || []).concat(item));
    });

    return output;
  };

  const days = getDays(weatherDay1);

  const main = Array.from(days)?.["1"]?.["1"]?.["0"].weather?.["0"].main;

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 3,
        staggerChildren: 1,
      },
    },
  };

  const item = {
    hidden: { z: 10, opacity: 0, scale: 0 },
    visible: {
      z: 100,
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className=" w-full mt-14 grid grid-cols-2 gap-4 sm:grid-rows-1 transition-all md:mb-32 m-2 md:grid-cols-5"
    >
      <motion.div variants={item}>
        {Array.from(days)?.["0"]?.["0"] && (
          <motion.div
            variants={item}
            className="flex flex-col bg-white rounded-lg items-center"
          >
            <h1>{Array.from(days)?.["0"]?.["0"]}</h1>
            <Icons main={main} />
            <span>
              {tempType === "metric"
                ? Array.from(days)?.["1"]?.["1"]?.["0"].main.temp + "°C"
                : Array.from(days)?.["1"]?.["1"]?.["0"].main.temp + "°F"}
            </span>
            <p>{main}</p>
          </motion.div>
        )}
      </motion.div>
      <motion.div variants={item}>
        {Array.from(days)?.["1"]?.["0"] && (
          <motion.div
            variants={item}
            className="flex flex-col bg-white rounded-lg items-center"
          >
            <span>{Array.from(days)?.["1"]?.["0"]}</span>
            <Icons main={main} />
            <span>
              {tempType === "metric"
                ? Array.from(days)?.["2"]?.["1"]?.["0"].main.temp + "°C"
                : Array.from(days)?.["2"]?.["1"]?.["0"].main.temp + "°F"}
            </span>
            <p>{main}</p>
          </motion.div>
        )}
      </motion.div>
      <motion.div variants={item}>
        {Array.from(days)?.["2"]?.["0"] && (
          <motion.div
            variants={item}
            className="flex flex-col bg-white rounded-lg items-center"
          >
            <span>{Array.from(days)?.["2"]?.["0"]}</span>
            <Icons main={main} />
            <span>
              {tempType === "metric"
                ? Array.from(days)?.["3"]?.["1"]?.["0"].main.temp + "°C"
                : Array.from(days)?.["3"]?.["1"]?.["0"].main.temp + "°F"}
            </span>
            <p>{main}</p>
          </motion.div>
        )}
      </motion.div>
      <motion.div variants={item}>
        {Array.from(days)?.["3"]?.["0"] && (
          <motion.div
            variants={item}
            className="flex flex-col bg-white rounded-lg items-center"
          >
            <span>{Array.from(days)?.["3"]?.["0"]}</span>
            <Icons main={main} />
            <span>
              {tempType === "metric"
                ? Array.from(days)?.["4"]?.["1"]?.["0"].main.temp + "°C"
                : Array.from(days)?.["4"]?.["1"]?.["0"].main.temp + "°F"}
            </span>
            <p>{main}</p>
          </motion.div>
        )}
      </motion.div>
      <motion.div variants={item}>
        {Array.from(days)?.["4"]?.["0"] && (
          <motion.div
            variants={item}
            className="flex flex-col bg-white rounded-lg items-center"
          >
            <span>{Array.from(days)?.["4"]?.["0"]}</span>
            <Icons main={main} />
            <span>
              {tempType === "metric"
                ? Array.from(days)?.["5"]?.["1"]?.["0"].main.temp + "°C"
                : Array.from(days)?.["5"]?.["1"]?.["0"].main.temp + "°F"}
            </span>
            <p>{main}</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default WeatherDay;
