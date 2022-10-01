import { Box } from "@mui/system";
import { useGetQuestion } from "../../context/Questioncontext";
import { Questiontext, Questiontip } from "../Questiontext";

export function Diet() {
  const { questionstate, questiondispatch } = useGetQuestion();
  const state = [
    { id: 1, text: "Vegetarian", value: "veg" },
    { id: 2, text: "Vegan", value: "vegan" },
    { id: 3, text: "Non-Vegetarian", value: "nonveg" },
  ];
  return (
    <div>
      <Box>
        <Questiontext>What is your diet like?</Questiontext>
        <Questiontip>
          Even the food you eat has a carbon footprint, but plants have smaller
          ones.
        </Questiontip>
      </Box>
      <Box marginBottom="7rem" display="flex" flexDirection="column" gap="1rem">
        {state.map((item) => (
          <Box
            key={item.id}
            onClick={() => {
              questiondispatch({
                type: "SET_DIET",
                payload: { diet: item.value },
              });
            }}
            sx={{
              paddingX: { xs: "1rem", md: "2rem" },
              paddingY: { xs: "0.5rem", md: "1rem" },
              border: 1,
              cursor: "pointer",
              borderColor: "#000",
              backgroundColor:
                questionstate.diet === item.value ? "#ffc18e" : "inherit",
            }}
          >
            {item.text}
          </Box>
        ))}
      </Box>
    </div>
  );
}
