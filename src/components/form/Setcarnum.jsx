import { Box, TextField } from "@mui/material";
import { useCars } from "../../context/Carcontext";
import { Questiontext, Questiontip } from "../Questiontext";

export function Setcarnum(params) {
  const { setCarnum, setcarsarray, carnum } = useCars();
  return (
    <div>
      <Box>
        <Questiontext>How many cars do you use?</Questiontext>
        <Questiontip>
          You'll be able to fill out a mileage and usage profile for each car.
        </Questiontip>
      </Box>
      <Box marginBottom="7rem" display="flex" flexDirection="column" gap="1rem">
        <TextField
          // drive each week
          label="Number of cars"
          value={carnum}
          onChange={(event) => {
            if (Number(event.target.value) < 0) {
              setCarnum(0);
              setcarsarray("0");
            } else {
              setCarnum(Number(event.target.value));
              setcarsarray(event.target.value);
            }
          }}
          min="0"
          type="number"
        />
      </Box>
      {/* <p>{JSON.stringify({ carnum, cars })}</p> */}
    </div>
  );
}
