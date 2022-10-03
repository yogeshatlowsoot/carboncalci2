import { Box, Typography } from "@mui/material";
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function Carbonbarchart(params) {
  const { footprintval } = params;
  const data = [
    {
      id: 1,
      countryname: "US",
      carbonfootprint: 15.52,
      color: "#ffc18e",
      fill: "#ffc18e",
    },
    {
      id: 2,
      countryname: "China",
      carbonfootprint: 7.38,
      fill: "#ffc18e",
    },
    {
      id: 3,
      countryname: "India",
      carbonfootprint: 1.91,
      fill: "#ffc18e",
    },
    {
      id: 4,
      countryname: "You",
      carbonfootprint: footprintval,
      fill: "#9ebff7",
    },
    {
      id: 5,
      countryname: "World",
      carbonfootprint: 5,
      fill: "#90ee90",
    },
  ];
  return (
    <Box>
      <ResponsiveContainer height={250} width="100%">
        <BarChart data={data}>
          <XAxis dataKey="countryname" />
          <YAxis dataKey="carbonfootprint" />
          <Bar dataKey="carbonfootprint" />
        </BarChart>
      </ResponsiveContainer>
      <Typography textAlign="center">carbon footprints in tons</Typography>
    </Box>
  );
}
