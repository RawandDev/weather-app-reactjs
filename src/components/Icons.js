import React from "react";
// import Cloud from "./assets/cloud/35.png";
// import Thunderstorm from "./assets/cloud/12.png";
// import Rain from "./assets/cloud/17.png";
// import Drizzle from "./assets/cloud/7.png";
// import Snow from "./assets/cloud/23.png";
// import Clear from "./assets/cloud/27.png";
// import Other from "./assets/cloud/26.png";

import Cloud from "./assets/cloud/cloud.svg";
import Thunderstorm from "./assets/cloud/stormSun.svg";
import Rain from "./assets/cloud/sunRain.svg";
import Drizzle from "./assets/cloud/sunRain.svg";
import Snow from "./assets/cloud/sunSnow.svg";
import Clear from "./assets/cloud/sun.svg";
import Other from "./assets/cloud/sun.svg";

function Icons({ main }) {
  console.log(main);

  const displayIcons =
    main === "Clouds"
      ? Cloud
      : main === "Thunderstorm"
      ? Thunderstorm
      : main === "Rain"
      ? Rain
      : main === "Drizzle"
      ? Drizzle
      : main === "Snow"
      ? Snow
      : main === "Clear"
      ? Clear
      : Other;

  return (
    <div>
      <img
        className="h-24 shadow-xl- rounded-lg md:h-28 transition-all container"
        src={displayIcons}
        alt={main}
      />
    </div>
  );
}

export default Icons;
