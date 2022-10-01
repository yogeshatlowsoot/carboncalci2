import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useGetQuestion } from "../../context/Questioncontext";
import { Questiontext, Questiontip } from "../Questiontext";

export function Electricityconsumtion() {
  const [numeros, setNumeros] = useState(7);
  const { questionstate, questiondispatch } = useGetQuestion();
  const state = [
    { id: 1, text: "A little (23 kWh/month)", value: "23" },
    { id: 2, text: "Average (69 kWh/month)", value: "69" },
    { id: 3, text: "A lot (208 kWh/month)", value: "208" },
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
        <Questiontext>How much electricity do you use?</Questiontext>
        <Questiontip>
          Your electrical bill should tell you how many kWh you used.
        </Questiontip>
      </Box>
      <Box marginBottom="7rem" display="flex" flexDirection="column" gap="1rem">
        {state.map((item) => (
          <Box
            key={item.id}
            onClick={() => {
              setNumeros(item.value);
              questiondispatch({
                type: "SET_ELECTRICITY_CONSUMPTION",
                payload: { electricityconsumtion: item.value },
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
                Number(questionstate.electricityconsumtion) ===
                  Number(item.value) ||
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
              value={questionstate.electricityconsumtion}
              //   onChange={(event) => setNumeros(Number(event.target.value))}
              onChange={(event) =>
                questiondispatch({
                  type: "SET_ELECTRICITY_CONSUMPTION",
                  payload: {
                    electricityconsumtion:
                      event.target.value.length > 0 ? event.target.value : "0",
                  },
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
