import { Aptsize } from "../components/form/Aptsize";
import { Shortflights } from "../components/form/Shortflights";
import Twobuttons from "../components/Twobuttons";
import { Box } from "@mui/system";
import { useState } from "react";
import { Setcarnum } from "../components/form/Setcarnum";
import { Carmodifier } from "../components/Carmodifier";
import { Longflights } from "../components/form/Longflights";
import { Bustravel } from "../components/form/Bustravel";
import { Railtravel } from "../components/form/Railtravel";
import { Naturalgas } from "../components/form/Naturalgas";
import { Electricityconsumtion } from "../components/form/Electricityconsumtion";
import { Diet } from "../components/form/Diet";
import { Countryform } from "../components/form/Countryform";
import { Emailform } from "../components/form/Emailform";
import { Container } from "@mui/material";

export function Calcinput() {
  const [state, setState] = useState(0);
  const comps = {
    shortflights: Shortflights,
    longflights: Longflights,
    aptsize: Aptsize,
    setcarnum: Setcarnum,
    carmodifier: Carmodifier,
    bustravel: Bustravel,
    railtravel: Railtravel,
    naturalgas: Naturalgas,
    electricityconsumtion: Electricityconsumtion,
    diet: Diet,
    countryform: Countryform,
    emailform: Emailform,
  };
  const keys = Object.keys(comps);
  const lengthkeys = keys.length;
  const currentkey = keys[state];
  const Currentcomp = comps?.[currentkey];
  const gotoNext = () => {
    setState((prevstate) => prevstate + 1);
  };
  const gotoPrev = () => {
    setState((prevstate) => prevstate - 1);
  };

  return (
    <>
      <Container>
        <Box
          marginTop="5rem"
          marginBottom="5rem"
          maxWidth="27.5rem"
          marginX="auto"
          paddingX="2rem"
        >
          <Currentcomp />
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
