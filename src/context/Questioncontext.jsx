import { createContext, useContext, useReducer } from "react";

const GetQuestionprov = createContext();

export function GetQuestioncontextprovider({ children }) {
  function questionreducer(state, action) {
    switch (action.type) {
      case "SET_SHORT_FLIGHT":
        return { ...state, shortflights: action.payload.shortflights };
      case "SET_LONG_FLIGHT":
        return { ...state, longflights: action.payload.longflights };
      case "SET_BUS_TRAVEL":
        return { ...state, bustravel: action.payload.bustravel };
      case "SET_RAIL_TRAVEL":
        return { ...state, railwaytravel: action.payload.railwaytravel };
      // case "SET_FURNITURE_COST":
      //   return { ...state, furniturecost: action.payload.furniturecost };
      // case "SET_CLOTHES_COST":
      //   return { ...state, clothescost: action.payload.clothescost };
      // case "SET_SUPPLIES_COST":
      //   return { ...state, suppliescost: action.payload.suppliescost };
      case "SET_APT_SIZE":
        return { ...state, aptsize: action.payload.aptsize };
      case "SET_ELECTRICITY_CONSUMPTION":
        return {
          ...state,
          electricityconsumtion: action.payload.electricityconsumtion,
        };
      case "SET_GAS_CONSUMPTION":
        return {
          ...state,
          gasconsumption: action.payload.gasconsumption,
        };

      case "SET_DIET":
        return {
          ...state,
          diet: action.payload.diet,
        };
      case "SET_COUNTRY":
        return {
          ...state,
          country: action.payload.country,
        };
      default:
        throw new Error();
    }
  }
  const [questionstate, questiondispatch] = useReducer(questionreducer, {
    shortflights: "0",
    longflights: "0",
    bustravel: "0",
    railwaytravel: "0",
    // furniturecost: "0",
    // clothescost: "0",
    // suppliescost: "0",
    aptsize: "0",
    electricityconsumtion: "0",
    gasconsumption: "0",
    diet: "veg",
    country: "IN",
  });
  return (
    <GetQuestionprov.Provider value={{ questionstate, questiondispatch }}>
      {children}
    </GetQuestionprov.Provider>
  );
}

export function useGetQuestion() {
  return useContext(GetQuestionprov);
}
