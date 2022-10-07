import { Box, TextField } from "@mui/material";
import { useGetQuestion } from "../../context/Questioncontext";
import { Questiontext, Questiontip } from "../Questiontext";

export function Railtravel() {
  const { questionstate, questiondispatch } = useGetQuestion();
  return (
    <div>
      <Box>
        <Box
          sx={{ display: { md: "none" }, width: { xs: "7rem", md: "10rem" } }}
        >
          <img
            className="fullimagewidth"
            src="https://projectwren.imgix.net/calculator-icons/cloud_rail.png?auto=format%2Ccompress&q=35"
            alt="logoimage"
          />
        </Box>
        <Questiontext>How much do you travel by rail each week?</Questiontext>
        <Questiontip>
          Rail is pretty efficient, so it's no big deal if your estimate is a
          little off (in kms).
        </Questiontip>
      </Box>
      <Box marginBottom="7rem" display="flex" flexDirection="column" gap="1rem">
        <TextField
          // drive each week
          label="Rail each week"
          type="number"
          min="0"
          value={questionstate.railwaytravel}
          onChange={(event) => {
            questiondispatch({
              type: "SET_RAIL_TRAVEL",
              payload: {
                railwaytravel:
                  event.target.value.length > 0 ? event.target.value : "0",
              },
            });
          }}
        />
      </Box>
      {/* <p>{JSON.stringify({ carnum, cars })}</p> */}
    </div>
  );
}
