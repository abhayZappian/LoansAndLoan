import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Covered_By_Your_Grace } from "next/font/google";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const coveredByYourGrace = Covered_By_Your_Grace({
  weight: "400",
  subsets: ["latin"],
});

const Section10 = () => {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: {
              xs: "50px 0px 0 0px ",
              md: "70px 140px 0 140px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "20px",
                md: "30px",
              },
              fontWeight: {
                xs: 400,
                md: 700,
              },
              textAlign: "center",
              fontFamily: raleway.style.fontFamily,
            }}
          >
            The Step-By-Step Process For Applying For A Personal Loan Online
            Through LOAN AND LOAN
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            gap: {
              xs: "23px",
              md: "33px",
            },
            mt: {
              xs: "40px",
              md: "80px",
            },
            padding: {
              xs: "10px",
              md: "0px",
            },
          }}
        >
          <Grid item xs={12} md={3.7}>
            <Box
              sx={{ width: "100%", bgcolor: "#FDF3EA", borderRadius: "12px" }}
            >
              <Typography
                sx={{
                  p: "50px 0 50px 0",
                  textAlign: "center",
                  fontSize: "80px",
                  fontFamily: coveredByYourGrace.style.fontFamily,
                  color: "#FFCE31",
                  fontWeight: 400,
                }}
              >
                1
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  fontFamily: raleway.style.fontFamily,
                }}
              >
                Provide Mobile Number and OTP
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 100,
                  padding: "5px 20px 80px 20px",
                }}
              >
                Enter your mobile number and confirm it by entering the OTP you
                receive.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3.7}>
            <Box
              sx={{ width: "100%", bgcolor: "#F1F6FF", borderRadius: "12px" }}
            >
              <Typography
                sx={{
                  p: "50px 0 50px 0",
                  textAlign: "center",
                  fontSize: "80px",
                  fontFamily: coveredByYourGrace.style.fontFamily,
                  color: "#FFCE31",
                  fontWeight: 400,
                }}
              >
                2
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: raleway.style.fontFamily,
                  textAlign: "center",
                }}
              >
                State Your Loan Requirements
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 100,
                  padding: "5px 20px 80px 20px",
                }}
              >
                Specify the loan amount you need, choose a repayment period, and
                provide your PAN card and email ID.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3.7}>
            <Box
              sx={{ width: "100%", bgcolor: "#EEECFF", borderRadius: "12px" }}
            >
              <Typography
                sx={{
                  p: "50px 0 50px 0",
                  textAlign: "center",
                  fontSize: "80px",
                  fontFamily: coveredByYourGrace.style.fontFamily,
                  color: "#FFCE31",
                  fontWeight: 400,
                }}
              >
                3
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: raleway.style.fontFamily,
                  textAlign: "center",
                }}
              >
                Declare Employment Details
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 100,
                  padding: "5px 20px 80px 20px",
                }}
              >
                Choose your employment type and provide details related to your
                job.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            gap: "33px",
            mt: "33px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={3.7}>
            <Box
              sx={{ width: "100%", bgcolor: "#E0F8F2", borderRadius: "12px" }}
            >
              <Typography
                sx={{
                  p: "50px 0 50px 0",
                  textAlign: "center",
                  fontSize: "80px",
                  fontFamily: coveredByYourGrace.style.fontFamily,
                  color: "#FFCE31",
                  fontWeight: 400,
                }}
              >
                4
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: raleway.style.fontFamily,
                  textAlign: "center",
                }}
              >
                Enter Personal, Income, and Residential
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 100,
                  padding: "5px 20px 80px 20px",
                }}
              >
                Details Provide essential information such as your gross annual
                income, savings account details, name, date of birth, current
                address, and any existing debts
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3.7}>
            <Box
              sx={{ width: "100%", bgcolor: "#F1F1F1", borderRadius: "12px" }}
            >
              <Typography
                sx={{
                  p: "50px 0 50px 0",
                  textAlign: "center",
                  fontSize: "80px",
                  fontFamily: coveredByYourGrace.style.fontFamily,
                  color: "#FFCE31",
                  fontWeight: 400,
                }}
              >
                5
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontFamily: raleway.style.fontFamily,
                  textAlign: "center",
                }}
              >
                Submit Loan Request
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 100,
                  padding: "5px 20px 100px 20px",
                }}
              >
                Complete the application by clicking the 'Submit' button and
                checking the declaration box
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section10;
