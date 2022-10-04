import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Box, IconButton } from "@mui/material";
import { useState } from "react";
import { Link as Mlink } from "@mui/material";

const Navbar = () => {
  const [state, setState] = useState(false);
  return (
    <AppBar position="sticky">
      <Box
        bgcolor="white"
        display="flex"
        justifyContent={"space-between"}
        paddingX={{ xs: "1.25rem", md: "10rem" }}
        paddingY={"1.25rem"}
        alignItems={"center"}
      >
        <Box>
          <Mlink target="_blank" rel="noopener" href="https://www.lowsoot.com">
            <Box width={{ xs: "4.9rem" }} className="logoimg">
              {/* 4.9rem */}
              <img
                style={{ width: "100%" }}
                src="https://uploads-ssl.webflow.com/62cf0b5a8d12de59c1f48004/62ffc9af53bbb839ac4e3c26_Logo%20Black.svg"
                alt="lowsootoisdfj"
              />
            </Box>
          </Mlink>
        </Box>
        <div className="c_links">
          <Box display="flex" gap={"0.5rem"}>
            <Mlink
              underline="none"
              fontSize="1.125rem"
              target="_blank"
              rel="noopener"
              sx={{ color: "black" }}
              href="https://www.lowsoot.com/about"
            >
              About
            </Mlink>
            <Mlink
              underline="none"
              fontSize="1.125rem"
              target="_blank"
              rel="noopener"
              sx={{ color: "black" }}
              href="https://www.lowsoot.com/blog"
            >
              Blog
            </Mlink>
            <Mlink
              underline="none"
              fontSize="1.125rem"
              target="_blank"
              rel="noopener"
              sx={{ color: "black" }}
              href="https://www.lowsoot.com/business-carbon-neutrality-as-a-service"
            >
              Product
            </Mlink>
          </Box>
        </div>
        <div className="c_navtoggle">
          <Box
            onClick={() => setState((curr) => !curr)}
            display="flex"
            gap={"0.5rem"}
          >
            {/* sx={{ color: "primary" }} */}A
            <IconButton color="primary">
              {state ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </div>
      </Box>
      {state && (
        <Box
          display={"flex"}
          flexDirection={"column"}
          paddingX={"2rem"}
          width={"100%"}
          gap={"0.5rem"}
          paddingBottom={"1rem"}
          justifyContent={"center"}
          bgcolor="white"
        >
          <Mlink
            underline="none"
            fontSize="1.125rem"
            target="_blank"
            rel="noopener"
            sx={{ color: "black" }}
            href="https://www.lowsoot.com/about"
          >
            About
          </Mlink>
          <Mlink
            underline="none"
            fontSize="1.125rem"
            target="_blank"
            rel="noopener"
            sx={{ color: "black" }}
            href="https://www.lowsoot.com/blog"
          >
            Blog
          </Mlink>
          <Mlink
            underline="none"
            fontSize="1.125rem"
            target="_blank"
            rel="noopener"
            sx={{ color: "black" }}
            href="https://www.lowsoot.com/business-carbon-neutrality-as-a-service"
          >
            Product
          </Mlink>
        </Box>
      )}
    </AppBar>
  );
};

export default Navbar;
