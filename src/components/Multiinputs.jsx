import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

export function Multiinputs(params) {
  const { carno, setCars, mainitem } = params;
  function setdriveEachweek(carno, driveeachweekno) {
    const driveeachweeknum = driveeachweekno.length > 0 ? driveeachweekno : "0";
    setCars((prevstate) => {
      const newstaete = [...prevstate].map((item) => {
        if (item.carnumber === carno) {
          return { ...item, driveeachweek: driveeachweeknum };
        }
        return item;
      });
      return newstaete;
    });
  }
  function setcarType(carno, carstring) {
    setCars((prevstate) => {
      const newstaete = [...prevstate].map((item) => {
        if (item.carnumber === carno) {
          return { ...item, cartype: carstring };
        }
        return item;
      });
      return newstaete;
    });
  }
  function kilometersperliter(carno, kmsperliter) {
    const kmsperltr = kmsperliter.length > 0 ? kmsperliter : "0";
    setCars((prevstate) => {
      const newstaete = [...prevstate].map((item) => {
        if (item.carnumber === carno) {
          return { ...item, kilometersperliter: kmsperltr };
        }
        return item;
      });
      return newstaete;
    });
  }
  //   btn__option--select
  return (
    <>
      <Box marginBottom="2rem">
        {/* <p>--{JSON.stringify(cars)}--</p> */}
        <Box marginBottom="1rem">
          <Typography variant="h6" fontWeight={500} gutterBottom>
            What type of car is car{carno}?
          </Typography>
        </Box>
        <Box marginBottom="1rem">
          <Button
            variant={mainitem.cartype === "gasoline" ? "contained" : "text"}
            onClick={() => setcarType(carno, "gasoline")}
          >
            Gasoline
          </Button>
          <Button
            variant={mainitem.cartype === "hybrid" ? "contained" : "text"}
            onClick={() => setcarType(carno, "hybrid")}
          >
            Hybrid
          </Button>
          <Button
            //   variant={mainitem.cartype === "electric" ? "contained" : "text"}
            variant={mainitem.cartype === "electric" ? "contained" : "text"}
            onClick={() => setcarType(carno, "electric")}
          >
            Electric
          </Button>
        </Box>
        <Box marginBottom="1rem">
          <Typography marginBottom="1rem" variant="h6" fontWeight={500}>
            How many km do you drive each week in Car {carno}?
          </Typography>
          <TextField
            label="kilometers per week"
            value={mainitem.driveeachweek}
            onChange={(event) => setdriveEachweek(carno, event.target.value)}
            type="number"
            min="0"
          />
        </Box>
        <Box>
          {mainitem.cartype !== "electric" && (
            <>
              <Typography marginBottom="1rem" variant="h6" fontWeight={500}>
                How many kilometers per liter does Car {carno} get?
              </Typography>
              <TextField
                label="kilometers per liter "
                value={mainitem.kilometersperliter}
                type="number"
                min="1"
                onChange={(event) =>
                  kilometersperliter(carno, event.target.value)
                }
              />
            </>
          )}
        </Box>
      </Box>
    </>
  );
}
