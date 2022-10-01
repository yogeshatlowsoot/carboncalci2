import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export function Questiontext({ children }) {
  const matches = useMediaQuery("(min-width:768px)");
  const fontsize = matches ? "1.75rem" : "1.625rem";
  const lineHeight = matches ? "2.063rem" : "1.875rem";
  const stylesforques = {
    fontSize: fontsize,
    lineHeight: lineHeight,
  };
  return (
    <Typography
      fontSize={stylesforques.fontSize}
      variant="h5"
      lineHeight={stylesforques.lineHeight}
      fontWeight="600"
      gutterBottom
    >
      {children}
    </Typography>
  );
}
export function Questiontip({ children }) {
  const matches = useMediaQuery("(min-width:768px)");
  const fontsize = matches ? "1rem" : "0.938rem";
  const lineHeight = matches ? "1.4" : "1.4";
  const stylesforques = {
    fontSize: fontsize,
    lineHeight: lineHeight,
  };
  return (
    <Typography
      variant="body1"
      lineHeight={stylesforques.lineHeight}
      fontSize={stylesforques.fontSize}
      fontWeight="400"
      sx={{ opacity: 0.8 }}
      marginBottom="2rem"
    >
      {children}
    </Typography>
  );
}
