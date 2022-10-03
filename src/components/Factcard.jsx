import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Factcard = ({ fact, iconemoji }) => {
  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { md: "center" },
        justifyContent: { xs: "center", md: "flex-start" },
        padding: "1rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography
            component="div"
            variant="h5"
            fontSize={{ xs: "2rem", md: "2rem" }}
            textAlign="center"
          >
            {iconemoji}
          </Typography>
        </CardContent>
      </Box>
      <Box textAlign="center" fontWeight={600} sx={{ opacity: "0.6" }}>
        {fact}
      </Box>
    </Card>
  );
};
