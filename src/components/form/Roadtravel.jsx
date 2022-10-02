import { Box, TextField } from "@mui/material";
import { useGetQuestion } from "../../context/Questioncontext";
import { Questiontext, Questiontip } from "../Questiontext";

export function Roadtravel(params) {
  const { questionstate, questiondispatch } = useGetQuestion();
  return (
    <div>
      <Box>
        <Questiontext>How much do you travel by road each week?</Questiontext>
        <Questiontip>
          It includes your total distance travelled on road each week in kms.
        </Questiontip>
      </Box>
      <Box marginBottom="7rem" display="flex" flexDirection="column" gap="1rem">
        <TextField
          // drive each week
          label="road travel per week"
          type="number"
          min="0"
          value={questionstate.roadtravel}
          onChange={(event) => {
            questiondispatch({
              type: "SET_ROAD_TRAVEL",
              payload: {
                roadtravel:
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
