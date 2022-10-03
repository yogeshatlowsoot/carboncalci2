import { Box, Button, Typography, Link as Mlink } from "@mui/material";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectioncontext } from "../context/Protectioncontext";
import CircularProgress from "@mui/material/CircularProgress";

export const Report = () => {
  const [loader, setLoader] = useState();
  const navigate = useNavigate();
  const [footprint, setFootprint] = useState(0);
  const { codeval } = useProtectioncontext();
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
          Your carbon footprint is {footprint.toFixed(1)} tons of CO₂.
        </Typography>
        <Typography
          marginBottom={"2rem"}
          textAlign="center"
          variant="body1"
          sx={{
            fontSize: { xs: "1.625rem" },
            lineHeight: "1.3",
            fontWeight: "600",
          }}
        >
          Here's what you can do with this information.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Mlink
            target="_blank"
            rel="noopener"
            href="https://www.google.com"
            underline="none"
          >
            <Button variant="contained">Take action</Button>
          </Mlink>
        </Box>
      </Box>
    </div>
  );
};
