import { Box, Button, ButtonGroup } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
export default function Twobuttons({ gotoNext, gotoPrev, state, lengthkeys }) {
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
            <Button
              sx={{ color: "primary.contrastText" }}
              disabled={state < lengthkeys - 1 ? false : true}
              onClick={gotoNext}
            >
              <ArrowDownwardIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </div>
    </div>
  );
}
