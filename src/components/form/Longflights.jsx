import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { useGetQuestion } from "../../context/Questioncontext";
import { Questiontext, Questiontip } from "../Questiontext";

export function Longflights() {
  const { questionstate, questiondispatch } = useGetQuestion();
  const [numeros, setNumeros] = useState(Number(questionstate.longflights));
  const state = [
    { id: 1, text: "None", value: "0" },
    { id: 2, text: "2 roundtrips  (4 one ways)", value: "4" },
    { id: 3, text: "4 roundtrips (8 one ways)", value: "8" },
    { id: 4, text: "custom", value: "1", isCustom: true },
  ];
  const finobjval = state[state.length - 1]?.isCustom
    ? ![...state]
        .slice(0, state.length - 1)
        .some((item) => Number(item.value) === numeros)
    : true;
  const [showcusti, setShowcusti] = useState(finobjval);
  return (
    <>
      <Box>
        <Box
          sx={{
            display: { md: "none" },
            width: { xs: "7rem", md: "10rem" },
          }}
        >
          <img
            className="fullimagewidth"
            src="https://projectwren.imgix.net/calculator-icons/cloud_plane.png?auto=format%2Ccompress&q=35"
            alt="logoimage"
          />
        </Box>
        <Questiontext>
          How many long flights do you take each year?
        </Questiontext>
        <Questiontip>
          Count any flights longer than 3 hours or much greater than 1000km,
          like flying from Los Angeles to New York.
        </Questiontip>
      </Box>
      <Box marginBottom="7rem" display="flex" flexDirection="column" gap="1rem">
        {state.map((item) => (
          <Box
            key={item.id}
            onClick={() => {
              setNumeros(Number(item.value));
              questiondispatch({
                type: "SET_LONG_FLIGHT",
                payload: { longflights: item.value },
              });
              /**
               * 
              setSelected(Number(item.value));
               * onClick={() => {
              questiondispatch({
                type: "SET_LONG_FLIGHT",
                payload: { longflights: item.value },
              });
              */
              if (item?.isCustom) {
                setShowcusti(true);
              } else {
                setShowcusti(false);
              }
            }}
            sx={{
              paddingX: { xs: "1rem", md: "2rem" },
              paddingY: { xs: "0.5rem", md: "1rem" },
              border: 1,
              cursor: "pointer",
              borderColor: "#000",
              backgroundColor:
                Number(questionstate.longflights) === Number(item.value) ||
                (item?.isCustom && showcusti)
                  ? "#ffc18e"
                  : "inherit",
            }}
          >
            {item.text}
          </Box>
        ))}
        {showcusti && (
          <Box>
            <TextField
              // value={numeros}
              value={questionstate.longflights}
              // onChange={(event) => setNumeros(Number(event.target.value))}
              onChange={(event) =>
                questiondispatch({
                  type: "SET_LONG_FLIGHT",
                  payload: {
                    longflights:
                      event.target.value.length > 0 ? event.target.value : "0",
                  },
                })
              }
              fullWidth={true}
              label="Custom"
              variant="filled"
              type="number"
              min={0}
            />
          </Box>
        )}
      </Box>
    </>
  );
}
/**
 * <Box
            key={item.id}
            onClick={() => {
              setNumeros(Number(item.value));
              questiondispatch({
                type: "SET_LONG_FLIGHT",
                payload: { longflights: item.value },
              });
              if (item?.isCustom) {
                setShowcusti(true);
              } else {
                setShowcusti(false);
              }
            }}
            sx={{
              paddingX: { xs: "1rem", md: "2rem" },
              paddingY: { xs: "0.5rem", md: "1rem" },
              border: 1,
              cursor: "pointer",
              borderColor: "#000",
              backgroundColor:
                Number(questionstate.longflights) === Number(item.value) ||
                (item?.isCustom && showcusti)
                  ? "#ffc18e"
                  : "inherit",
            }}
          >
            {item.text}
          </Box>
*/
