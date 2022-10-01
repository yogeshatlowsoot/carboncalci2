import { useContext, useState } from "react";
import { createContext } from "react";
function createnumbersarray(num) {
  if (num === 0) {
    return [];
  } else {
    return [...Array(num).keys()]
      .map((item) => item + 1)
      .map((item) => {
        return {
          carnumber: item,
          cartype: "gasoline",
          driveeachweek: "0",
          kilometersperliter: "1",
        };
      });
  }
}

const Carcontext = createContext();
export function Carprovider({ children }) {
  const [carnum, setCarnum] = useState(0);
  const [cars, setCars] = useState([]);
  function setcarsarray(numeros) {
    if (Number(numeros) < 1) {
      setCars([]);
    } else {
      const numarray = createnumbersarray(Number(numeros));
      setCars(numarray);
    }
  }
  return (
    <Carcontext.Provider
      value={{ carnum, setcarsarray, setCarnum, cars, setCars }}
    >
      {children}
    </Carcontext.Provider>
  );
}
export const useCars = () => useContext(Carcontext);
