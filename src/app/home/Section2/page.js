import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Vector from "../../../../public/Vector.png";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const benefits = [
  "Use for any purpose",
  "Borrow as high as Rs. 40 lakh*",
  "Variable Repayment Period",
  "Simple Documentation",
  "Fast Funding",
  "Special Offers",
];

const eligibility = [
  "Age: Must be between 18 and 60 years old.",
  "Income: At least Rs 9,000 per month for salaried individuals.",
  "Credit Score: A score of 750 or higher is ideal as it increases the likelihood of loan approval at favorable interest rates.",
  "Payment Method: Must receive salary through a bank account.",
];

const textStyle = {
  fontSize: "15px",
  display: "flex",
  gap: "20px",
  marginTop: "20px",
  fontWeight: 700,
  fontFamily: raleway.style.fontFamily,
};

const Section2 = () => {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            backgroundColor: "#F1F6FF",
            mt: {
              xs: "60px",
              md: "60px",
              xl: "100px",
            },
            border: "5px solid #D7E6FF",
            borderRadius: "25px",
          }}
        >
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box sx={{ padding: { xs: "0", md: "25px 30px 25px 70px" } }}>
                <Box
                  sx={{
                    borderRight: {
                      xs: "0px solid #A8A8A8",
                      md: "1px solid #A8A8A8",
                    },
                    borderBottom: {
                      xs: "1px solid #A8A8A8",
                      md: "0px solid #A8A8A8",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", md: "30px" },
                      padding: { xs: "50px 40px 0 40px", md: "0" },
                      textAlign: { xs: "center", md: "initial" },
                      fontWeight: 700,
                      fontFamily: raleway.style.fontFamily,
                    }}
                  >
                    Benefits of Personal Loans
                  </Typography>
                  <Box
                    sx={{
                      ml: { xs: "20px", md: "0" },
                      mb: { xs: "30px", md: "0px" },
                    }}
                  >
                    {benefits.map((benefit, index) => (
                      <Typography key={index} sx={textStyle}>
                        <Image src={Vector} alt="Vector icon" />
                        {benefit}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box sx={{ padding: { xs: "10px", md: "30px" } }}>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "30px" },
                    padding: { xs: "20px 0px 0 0px", md: "0" },
                    textAlign: { xs: "center", md: "initial" },
                    fontWeight: 700,
                    fontFamily: raleway.style.fontFamily,
                  }}
                >
                  Eligibility Criteria for Personal Loans
                </Typography>
                <Box
                  sx={{
                    ml: { xs: "10px", md: "0" },
                    mb: { xs: "30px", md: "0px" },
                  }}
                >
                  {eligibility.map((criteria, index) => (
                    <Typography key={index} sx={textStyle}>
                      <Image src={Vector} alt="Vector icon" />
                      {criteria}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Section2;
