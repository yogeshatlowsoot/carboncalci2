import { Box, Button, Typography, Link as Mlink, Card } from "@mui/material";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectioncontext } from "../context/Protectioncontext";
import CircularProgress from "@mui/material/CircularProgress";
import { Carbonbarchart } from "../components/Carbonbarchart";
import { timesoffpwithworld, timesoffpwithindia } from "../function/timesoffp";
import { getyearsandmonths } from "../function/getyearsandmonths";
import { warmduration } from "../function/warmdurationi";
import { Factcard } from "../components/Factcard";
import { noofburger } from "../function/noofburger";

export const Report = () => {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const [footprint, setFootprint] = useState(0);
  const { codeval } = useProtectioncontext();
  const totmonths = warmduration(footprint);
  const monthandyrs = getyearsandmonths(totmonths);
  const url = `https://lossoo.bleedblue.repl.co/getfootprintval/${codeval}`;
  useEffect(() => {
    setLoader(true);
    let controller = new AbortController();
    const signal = controller.signal;
    (async function () {
      try {
        const response = await axios.get(url, { signal: signal });
        const data = response.data.footprintvalue;
        setFootprint(data);
        setLoader(false);
      } catch (error) {
        setLoader(false);
        if (axios.isCancel(error)) {
          // console.log("Request canceled", error.message);
        } else {
          console.log(error);
        }
      }
    })();
    return () => {
      setLoader(false);
      controller.abort();
    };
  }, [url]);
  if (loader) {
    return (
      <center>
        <CircularProgress />
      </center>
    );
  }
  return (
    <div>
      <Box
        marginBottom={"5rem"}
        marginTop={"2rem"}
        maxWidth={"36.875rem"}
        marginX="auto"
        paddingX="2rem"
      >
        <Button onClick={() => navigate("/")}>
          <ArrowBackIcon /> Back to calculator
        </Button>
      </Box>
      <Box paddingX="2rem" maxWidth={"36.875rem"} marginX="auto">
        <img
          className="fullimagewidth"
          src="https://projectwren.imgix.net/trees.png?auto=format%2Ccompress&q=35"
          alt="sceneimage"
        />
      </Box>
      <Box paddingX="2rem" maxWidth={"36.875rem"} marginX="auto">
        <Typography
          variant="body1"
          textAlign="center"
          sx={{
            fontSize: { xs: "1.625rem" },
            lineHeight: "1.3",
            fontWeight: "600",
          }}
        >
          Your carbon footprint is {footprint.toFixed(1)} tons of CO₂e.
        </Typography>
        <Typography
          marginBottom={"0.5rem"}
          textAlign="center"
          variant="h2"
          sx={{
            display: { xs: "none", md: "block" },
            fontSize: { xs: "1.625rem" },
            lineHeight: "1.3",
            fontWeight: "600",
          }}
        >
          Here's what that means!
        </Typography>
        <Typography
          marginBottom={"2rem"}
          textAlign="center"
          fontWeight={600}
          sx={{ opacity: "0.6" }}
        >
          Erase your carbon footprint by contributing to green initiatives that
          suck CO2 from the atmosphere.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginY: "1.5rem",
          }}
        >
          <Mlink
            target="_blank"
            rel="noopener"
            href="https://www.instamojo.com/@lowsoot_official/l2f5fbdd27e464b7187fa06b6369a4370"
            underline="none"
          >
            <Button variant="contained">Take action</Button>
          </Mlink>
        </Box>
      </Box>
      <Box
        paddingX="2rem"
        maxWidth={"36.875rem"}
        marginX="auto"
        marginBottom="0.5rem"
      >
        <Typography
          fontSize={{ xs: "1rem", md: "1.3rem" }}
          lineHeight={{ xs: "0.8rem", md: "1.2rem" }}
          textAlign="center"
        >
          Your carbon footprint is {timesoffpwithworld(footprint)} the world
          average.
        </Typography>
      </Box>
      <Box sx={{ paddingRight: "3rem" }} maxWidth={"36.875rem"} marginX="auto">
        <Carbonbarchart footprintval={footprint} />
      </Box>
      <Box
        padding={"2rem"}
        maxWidth={"36rem"}
        marginX="auto"
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "repeat(2, 1fr)" },
          columnSpacing: { xs: 1, sm: 2, md: 3 },
          columnGap: "2rem",
          rowGap: "2rem",
        }}
      >
        <Factcard
          fact={`Your annual emissions are equivalent to ${noofburger(
            footprint
          )} burgers eaten.`}
          iconemoji={"🍔"}
        />
        <Factcard
          fact={`If everyone on planet starts to emit the same amount of carbon footprint as you, the world will warm by 1.5 degrees in just ${monthandyrs.years} years ${monthandyrs.months} months.`}
          iconemoji={"🌡️"}
        />
        <Factcard
          fact={`Your footprint is ${timesoffpwithindia(
            footprint
          )} times the Indian average.`}
          iconemoji={"🇮🇳"}
        />
        <Card
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            minHeight: { xs: "11rem", md: "auto" },
          }}
        >
          <Box>
            <Mlink
              target="_blank"
              rel="noopener"
              href="https://www.instamojo.com/@lowsoot_official/l2f5fbdd27e464b7187fa06b6369a4370"
              underline="none"
            >
              <Typography
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                Take action &nbsp;
                <ArrowForwardIcon />
              </Typography>
            </Mlink>
            <Typography
              textAlign="center"
              fontWeight={600}
              sx={{ opacity: "0.6" }}
            >
              Erase your carbon footprint by contributing to green initiatives
              that suck CO2 from the atmosphere.
            </Typography>
          </Box>
        </Card>
      </Box>
    </div>
  );
};
