import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useGetQuestion } from "../../context/Questioncontext";
import { Questiontext, Questiontip } from "../Questiontext";

export function Aptsize() {
  const [numeros, setNumeros] = useState(7);
  const { questionstate, questiondispatch } = useGetQuestion();
  /**
   * 
   * questiondispatch({
                type: "SET_APT_SIZE",
                payload: { aptsize: item.value },
              });
   */
  const state = [
    { id: 1, text: "Small apartment 32 square meters", value: "32" },
    { id: 2, text: "Average home  43 square meters", value: "43" },
    { id: 3, text: "Larger home  128 square meters", value: "128" },
    { id: 4, text: "custom", value: "1", isCustom: true },
  ];
  const finobjval = state[state.length - 1]?.isCustom
    ? ![...state]
        .slice(0, state.length - 1)
        .some((item) => Number(item.value) === numeros)
    : true;
  const [showcusti, setShowcusti] = useState(finobjval);
  return (
    <div>
      <Box>
        <Box
          sx={{
            width: { xs: "7rem", md: "10rem" },
          }}
        >
          <img
            className="fullimagewidth"
            src="https://projectwren.imgix.net/calculator-icons/cloud_house.png?auto=format%2Ccompress&q=35"
            alt="logoimage"
          />
        </Box>
        <Questiontext>How big is your living space?</Questiontext>
        <Questiontip>
          Count any flights shorter than 3 hours or around 1000km, like flying
          from San Francisco to Los Angeles.{JSON.stringify(showcusti)}
        </Questiontip>
      </Box>
      <Box marginBottom="7rem" display="flex" flexDirection="column" gap="1rem">
        {state.map((item) => (
          <Box
            key={item.id}
            onClick={() => {
              setNumeros(Number(item.value));
              questiondispatch({
                type: "SET_APT_SIZE",
                payload: { aptsize: item.value },
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
                Number(questionstate.aptsize) === Number(item.value) ||
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
              value={questionstate.aptsize}
              onChange={(event) =>
                questiondispatch({
                  type: "SET_APT_SIZE",
                  payload: { aptsize: event.target.value },
                })
              }
              fullWidth={true}
              label="Custom"
              variant="filled"
              type="number"
            />
          </Box>
        )}
      </Box>
    </div>
  );
}
