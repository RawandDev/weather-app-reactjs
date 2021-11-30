import React from "react";
import Input from "./Input";
import { currentDate as Date } from "./Date";
import Icons from "./Icons";

function WeatherList({
  weatherData,
  query,
  onHandleSubmit,
  countryImage,
  tempType,
}) {
  const mainWeather = weatherData?.list?.["0"].weather?.["0"].main;

  const mainTemp = weatherData?.list?.["0"].main.temp;

  return (
    <div className="weather__data__container">
      <Input query={query} onHandleSubmit={onHandleSubmit} />

      <div>{query && <Icons main={mainWeather} />}</div>

      <p className="weather__main">{weatherData.weather?.["0"].main}</p>
      <p className="weather__temp text-center">
        {mainTemp && tempType === "standard"
          ? mainTemp + "°F"
          : mainTemp && tempType === "metric"
          ? mainTemp + "°C"
          : ""}
      </p>
      <p>{weatherData.main && Date()}</p>
      <div className="h-40 shadow-2xl rounded-2xl object-cover object-center relative">
        <span className="absolute top-2/4 bottom-2/4 z-10 transform translate-x-2/4 translate-y-2/4">
          {weatherData && weatherData?.city?.name
            ? `${weatherData?.city?.name}, ${weatherData?.city?.country}`
            : ""}
        </span>
        <img
          className="image h-40 shadow-2xl rounded-2xl object-cover object-center filter brightness-50"
          src={countryImage}
          alt=""
        />
      </div>
    </div>
  );
}

export default WeatherList;
