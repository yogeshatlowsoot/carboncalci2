import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { useGetQuestion } from "../../context/Questioncontext";
import { Questiontext, Questiontip } from "../Questiontext";

export function Naturalgas() {
  const { questionstate, questiondispatch } = useGetQuestion();

  const [numeros, setNumeros] = useState(Number(questionstate.gasconsumption));
  //   const [state, setState] = useState([
  //     { id: 1, text: "None", value: "0" },
  //     { id: 2, text: "4 roundtrips (8 one ways)", value: "8" },
  //     { id: 3, text: "12 roundtrips (24 one ways)", value: "24" },
  //     { id: 4, text: "custom", value: "1", isCustom: true },
  //   ]);
  const state = [
    { id: 1, text: "None (0 m^3)", value: "0" },
    { id: 2, text: "Average (7 m^3)", value: "7" },
    { id: 3, text: "A lot (20 m^3)", value: "20" },
    {
      id: 4,
      text: "custom",
      value: "10",
      isCustom: true,
    },
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
            src="https://projectwren.imgix.net/calculator-icons/cloud_natural_gas.png?auto=format%2Ccompress&q=35"
            alt="logoimage"
          />
        </Box>
        <Questiontext>How much natural gas do you use?</Questiontext>
        <Questiontip>
          Most bills for natural gas should include the amount you used that
          month. You can divide the total by the number of people who share that
          bill.
        </Questiontip>
      </Box>
      <Box marginBottom="7rem" display="flex" flexDirection="column" gap="1rem">
        {state.map((item) => (
          <Box
            key={item.id}
            onClick={() => {
              setNumeros(Number(item.value));
              questiondispatch({
                type: "SET_GAS_CONSUMPTION",
                payload: { gasconsumption: item.value },
              });
              /**
               * 
              setSelected(Number(item.value));
               * onClick={() => {
              questiondispatch({
                type: "SET_GAS_CONSUMPTION",
                payload: { gasconsumption: item.value },
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
                Number(questionstate.gasconsumption) === Number(item.value) ||
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
              value={questionstate.gasconsumption}
              // onChange={(event) => setNumeros(Number(event.target.value))}
              onChange={(event) =>
                questiondispatch({
                  type: "SET_GAS_CONSUMPTION",
                  payload: {
                    gasconsumption:
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
    </div>
  );
}
