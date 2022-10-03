import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// CircularProgress
import { useCars } from "../../context/Carcontext";
import CircularProgress from "@mui/material/CircularProgress";
import { useGetQuestion } from "../../context/Questioncontext";
import { Questiontext, Questiontip } from "../Questiontext";
import { useNavigate } from "react-router-dom";
import { useProtectioncontext } from "../../context/Protectioncontext";

export function Emailform() {
  const { questionstate } = useGetQuestion();
  const { setcodeval } = useProtectioncontext();
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const { cars } = useCars();
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      // console.log("sending reques");
      setLoader(true);
      const response = await axios.post(
        "https://lossoo.bleedblue.repl.co/injectvals",
        {
          ...questionstate,
          mail: email,
          countycode: questionstate.country,
          cars,
          recordcode: Date.now(),
        }
      );
      // console.log("got response");
      // console.log({
      //   ...questionstate,
      //   email,
      //   cars,
      //   countycode: questionstate.country,
      //   recordcode: Date.now(),
      // });
      // console.log(response);
      localStorage.setItem("clientcodeval", email);
      if (response.status === 200) {
        setcodeval(email);
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
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box>
          <Questiontext>
            Enter your email to save and view your results?
          </Questiontext>
          <Questiontip>
            Your results include your carbon footprint, and a detailed report on
            how you can go carbon neutral.
          </Questiontip>
        </Box>
        <Box
          marginBottom="7rem"
          display="flex"
          flexDirection="column"
          gap="1rem"
        >
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            label="email"
            type="email"
            required
          />
        </Box>
        <Button type="submit" variant="contained">
          Get Results {loader && <CircularProgress color="spinme" />}
        </Button>
      </form>
      {/* <p>{JSON.stringify({ carnum, cars })}</p> */}
    </div>
  );
}
