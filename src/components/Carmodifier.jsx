import { Box } from "@mui/material";
import { useCars } from "../context/Carcontext";
import { Multiinputs } from "./Multiinputs";

export function Carmodifier(params) {
  const { cars, setCars } = useCars();
  if (cars.length === 0) {
    return <h1>You have no cars. Please go ahead.</h1>;
  }
  return (
    <>
      <Box>
        {/* <h1>sdf</h1> */}
        {/* <p>{JSON.stringify({ cars })}</p> */}
        {cars.map((item) => (
          <Multiinputs
            key={item.carnumber}
            mainitem={item}
            carno={item.carnumber}
            setCars={setCars}
            cars={cars}
          />
        ))}
      </Box>
      {cars.length > 2 && <Box height={"5rem"} />}
    </>
  );
}
