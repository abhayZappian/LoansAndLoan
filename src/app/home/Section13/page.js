import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const Section13 = () => {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            // width: "100%",
            backgroundColor: "#FDFBF3",
            mt: "60px",
            border: "5px solid #D7E6FF",
            borderRadius: "25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "20px",
                md: "30px",
              },
              fontWeight: 700,
              mt: "60px ",
              textAlign: "center",
              fontFamily: raleway.style.fontFamily,

            }}
          >
            How Do Lenders Disburse Personal Loan Amounts?
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: 400,
              mt: {
                xs: "20px ",
                md: "60px ",
              },
              mb: "60px ",
              padding: {
                xs: "0px 10px 0 10px",
                md: "0px 100px 0 100px",
              },
              textAlign: "center",
              fontFamily: raleway.style.fontFamily,

            }}
          >
            Lenders deposit the personal loan amount directly into the
            borrower's bank account, allowing them to use the funds as needed.
            The turnaround time for disbursal is typically very short. You can
            receive the money in your account within seconds or minutes after
            your documents have been verified and your loan application has been
            approved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Section13;
