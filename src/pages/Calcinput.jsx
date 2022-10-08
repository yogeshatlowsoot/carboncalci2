import Twobuttons from "../components/Twobuttons";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { useMultiformcontext } from "../context/Multiformcontext";
import { Sidebar } from "../components/Sidebar";

export function Calcinput() {
  const { state, gotoPrev, gotoNext, comps, lengthkeys, currentkey } =
    useMultiformcontext();
  const Currentcomp = comps?.[currentkey];
  return (
    <>
      <Container>
        <Box
          sx={{
            display: { xs: "block", md: "grid" },
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          <Sidebar />
          <Box
            marginTop="5rem"
            marginBottom="5rem"
            maxWidth="27.5rem"
            marginX="auto"
            paddingX="2rem"
          >
            <Currentcomp />
          </Box>
          <Box />
        </Box>
      </Container>
      <Twobuttons
        gotoNext={gotoNext}
        gotoPrev={gotoPrev}
        state={state}
        lengthkeys={lengthkeys}
      />
    </>
  );
}
