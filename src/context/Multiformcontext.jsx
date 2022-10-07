import { createContext, useContext, useState } from "react";
import { Aptsize } from "../components/form/Aptsize";
import { Bustravel } from "../components/form/Bustravel";
import { Countryform } from "../components/form/Countryform";
import { Diet } from "../components/form/Diet";
import { Electricityconsumtion } from "../components/form/Electricityconsumtion";
import { Emailform } from "../components/form/Emailform";
import { Longflights } from "../components/form/Longflights";
import { Railtravel } from "../components/form/Railtravel";
import { Roadtravel } from "../components/form/Roadtravel";
import { Shortflights } from "../components/form/Shortflights";
const Multiformprov = createContext();
export function Multiformprovider({ children }) {
  const [state, setState] = useState(0);
  const gotoNext = () => {
    setState((prevstate) => prevstate + 1);
  };
  const gotoPrev = () => {
    setState((prevstate) => prevstate - 1);
  };
  const comps = {
    shortflights: Shortflights,
    longflights: Longflights,
    aptsize: Aptsize,
    roadtravel: Roadtravel,
    bustravel: Bustravel,
    railtravel: Railtravel,
    electricityconsumtion: Electricityconsumtion,
    diet: Diet,
    countryform: Countryform,
    emailform: Emailform,
  };
  const keys = Object.keys(comps);
  const lengthkeys = keys.length;
  const currentkey = keys[state];
  // const Currentcomp = comps?.[currentkey];
  const sideimagearray = [
    {
      id: "shortflights",
      imageurl:
        "https://projectwren.imgix.net/calculator-icons/cloud_plane.png?auto=format%2Ccompress&q=35",
      nameval: "short flights",
    },
    {
      id: "longflights",
      imageurl:
        "https://projectwren.imgix.net/calculator-icons/cloud_plane.png?auto=format%2Ccompress&q=35",
      nameval: "long flights",
    },
    {
      id: "aptsize",
      imageurl:
        "https://projectwren.imgix.net/calculator-icons/cloud_house.png?auto=format%2Ccompress&q=35",
      nameval: "apartment size",
    },
    {
      id: "roadtravel",
      imageurl:
        "https://projectwren.imgix.net/calculator-icons/cloud_car.png?auto=format%2Ccompress&q=35",
      nameval: "car travel",
    },
    {
      id: "bustravel",
      imageurl:
        "https://projectwren.imgix.net/calculator-icons/cloud_bus.png?auto=format%2Ccompress&q=35",
      nameval: "bus travel",
    },
    {
      id: "railtravel",
      imageurl:
        "https://projectwren.imgix.net/calculator-icons/cloud_rail.png?auto=format%2Ccompress&q=35",
      nameval: "rail travel",
    },
    {
      id: "electricityconsumtion",
      imageurl:
        "https://projectwren.imgix.net/calculator-icons/cloud_battery.png?auto=format%2Ccompress&q=35",
      nameval: "electricity",
    },
    {
      id: "diet",
      imageurl:
        "https://projectwren.imgix.net/calculator-icons/cloud_veggies.png?auto=format%2Ccompress&q=35",
      nameval: "diet",
    },
    {
      id: "countryform",
      imageurl:
        "https://projectwren.imgix.net/calculator-icons/cloud_earth.png?auto=format%2Ccompress&q=35",
      nameval: "country",
    },
    {
      id: "emailform",
      imageurl:
        "https://projectwren.imgix.net/calculator-icons/cloud_finish_flag.png?auto=format%2Ccompress&q=35",
      nameval: "finish",
    },
  ];
  const sidebararray = [...keys]
    .map((itm) => [...sideimagearray].find((imageitm) => imageitm.id === itm))
    .map((item, index) => {
      return { ...item, index };
    });
  return (
    <Multiformprov.Provider
      value={{
        setState,
        state,
        gotoPrev,
        gotoNext,
        comps,
        keys,
        lengthkeys,
        currentkey,
        sidebararray,
      }}
    >
      {children}
    </Multiformprov.Provider>
  );
}
export function useMultiformcontext() {
  return useContext(Multiformprov);
}
