import React, { useEffect, useState } from "react";
import css from "./EgyptMap.module.css";

import Map from "../Map/Map.jsx";
import Data from "../../data/data.json";

const EgyptMap = () => {
  const [Height, setHeight] = useState(0);
  const [mapSize, setMapSize] = useState(600);
  const [data, setData] = useState(Data);

  useEffect(() => {
    setData(Data);
  }, [data]);

  window.addEventListener("resize", () => {
    setMapSize(
      window.getComputedStyle(document.querySelector("#Map_egypt_map__AUKNF"))
        .width
    );
    setHeight(window.innerHeight);

    console.log(mapSize);
  });

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
    <section
      className={css.container}
      style={{height: Height < mapSize ? `${Height - 10}px` : `${Height}px` }}
    >
      <Map map_size={mapSize} sectionHeight={Height} governorates={data.Governorates} />
    </section>
  );
};

export default EgyptMap;
