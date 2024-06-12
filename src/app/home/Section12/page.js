import { Box, Typography } from "@mui/material";
import React from "react";
import SwiperComponent from "./SwiperComponent";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const Section12 = () => {
  return (
    <div>
      <Box>
        <Box
          sx={{
            mt: "50px",
            paddingBottom: "5%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "#0E192C",
              display: "flex",
              fontSize: { xs: "24px", md: "30px" },
              letterSpacing: "0",
              margin: "auto",
              opacity: 1,
              textAlign: "center",
              fontWeight: 700,
              fontFamily: raleway.style.fontFamily,
            }}
          >
            When To Consider Taking A Personal Loan
          </Typography>
          <Typography
            sx={{
              color: "#0E192C",
              display: "flex",
              fontSize: { xs: "24px", md: "17px" },
              letterSpacing: "0",
              margin: "auto",
              opacity: 1,
              textAlign: "center",
              fontWeight: 400,
              fontFamily: raleway.style.fontFamily,
              mt: "10px",
            }}
          >
            Here are scenarios where a personal loan might be appropriate
          </Typography>
        </Box>
        <SwiperComponent />
      </Box>
    </div>
  );
};

export default Section12;
