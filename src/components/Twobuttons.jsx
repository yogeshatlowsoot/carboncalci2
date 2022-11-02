import { Box, Button, ButtonGroup, CircularProgress } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useGetQuestion } from "../context/Questioncontext";
import { useProtectioncontext } from "../context/Protectioncontext";
import { useState } from "react";
import { useCars } from "../context/Carcontext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Twobuttons({ gotoNext, gotoPrev, state, lengthkeys }) {
  const { questionstate } = useGetQuestion();
  const { setcodeval } = useProtectioncontext();
  const [loader, setLoader] = useState(false);
  const { cars } = useCars();
  const navigate = useNavigate();
  async function submitFormvalues(params) {
    // console.log("loader isudhf sdoij");
    try {
      setLoader(true);
      /**
       *
       * cityname: action.payload.city,
       * emailvalue: action.payload.emailvalue,
       * phoneno: action.payload.phoneno,
       * nameval: action.payload.nameval,
       */
      const response = await axios.post(
        "https://lossoo.bleedblue.repl.co/injectvals",
        {
          countycode: questionstate.country,
          mail: questionstate.emailvalue,
          name: questionstate.nameval,
          phone: questionstate.phoneno,
          cars,
          cityname: questionstate.cityname,
          recordcode: Date.now(),
          ...questionstate,
        }
      );
      localStorage.setItem("clientcodeval", questionstate.emailvalue);
      if (response.status === 200) {
        setcodeval(questionstate.emailvalue);
        navigate("/report");
      }
    } catch (error) {
      toast.error("Please Try after some time!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoader(false);
    }
    // console.log({
    //   emailvalue: values.email,
    //   phoneno: values.phone,
    //   nameval: values.name,
    // });
  }
  function setDisability(state) {
    if (state === 0) {
      return true;
    } else if (state < lengthkeys - 1) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <div className="bottom_btnbar">
      <div className="bottom_btnbarcont">
        <Box paddingX={"2rem"} paddingY={"1rem"}>
          <ButtonGroup
            sx={{ display: "flex", gap: "0.2rem" }}
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button
              sx={{ color: "primary.contrastText" }}
              disabled={state < 1 ? true : false}
              onClick={gotoPrev}
            >
              <ArrowUpwardIcon />
            </Button>
            {state !== lengthkeys - 1 && (
              <Button
                sx={{ color: "primary.contrastText" }}
                disabled={setDisability(state)}
                onClick={gotoNext}
              >
                <ArrowDownwardIcon />
              </Button>
            )}
            {state === lengthkeys - 1 && (
              <Button
                sx={{ color: "primary.contrastText" }}
                onClick={submitFormvalues}
                disabled={state === lengthkeys - 1 ? false : true}
              >
                Submit {loader && <CircularProgress color="spinme" />}
              </Button>
            )}
          </ButtonGroup>
        </Box>
      </div>
    </div>
  );
}
