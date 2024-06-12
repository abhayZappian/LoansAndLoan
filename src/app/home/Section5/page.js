import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const Section5 = () => {
  return (
    <Box
      sx={{
        mt: "50px",
        mb: "0px",
      }}
    >
      <Container>
        <Typography
          sx={{
            fontWeight: 400,
            fontFamily: raleway.style.fontFamily,
          }}
        >
          Get a personal loan through LOAN AND LOAN with amounts ranging from as
          little as Rs. 5,000 to as much as Rs. 10 lakh! Experience easy
          borrowing with our seamless online process, competitive interest
          rates, and minimal paperwork. Simply sign up, connect with a lender,
          and quickly complete the necessary formalities for a hassle-free loan
          disbursal.
        </Typography>
      </Container>
    </Box>
  );
};

export default Section5;
