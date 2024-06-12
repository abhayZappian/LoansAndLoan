import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CalculationImg from "../../../../public/Calculation.png";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const Section4 = () => {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            backgroundColor: "#F1F6FF",
            mt: "60px",
            border: "5px solid #D7E6FF",
            borderRadius: "25px",
            padding: {
              xs: "40px 0",
              md: "40px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "30px" },
              fontWeight: 700,
              fontFamily: raleway.style.fontFamily,
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Calculation for a personal loan
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <Box sx={{ width: "100%" }}>
                <Image
                  src={CalculationImg}
                  layout="responsive"
                  alt="Group Image"
                />
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box sx={{ padding: { xs: "15px", md: "50px 0" } }}>
                <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    Loan Amount:{" "}
                  </Typography>
                  <span>₹5,00,000</span>
                </Typography>
                <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    Interest Rate:{" "}
                  </Typography>
                  <span>11.50% per annum</span>
                </Typography>
                <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    Loan Tenure:{" "}
                  </Typography>
                  <span>5 years</span>
                </Typography>
                <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    Processing Fee:{" "}
                  </Typography>
                  <span>1.5% of the loan amount, equating to ₹7,500</span>
                </Typography>
                <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    APR:{" "}
                  </Typography>
                  <span>12.16%</span>
                </Typography>
                <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    Monthly EMI:{" "}
                  </Typography>
                  <span>₹10,996</span>
                </Typography>
                <Typography
                  sx={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    fontSize: { xs: "20px", md: "30px" },
                    fontWeight: 700,
                    lineHeight: { xs: "25px", md: "35px" },
                    fontFamily: raleway.style.fontFamily,
                  }}
                >
                  Breakdown of total payment over 5 years:
                </Typography>
                <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    Principal Amount:{" "}
                  </Typography>
                  <span>₹5,00,000</span>
                </Typography>{" "}
                <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    Interest Charges:{" "}
                  </Typography>
                  <span>₹1,59,778</span>
                </Typography>{" "}
                <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    Loan Processing Fees:{" "}
                  </Typography>
                  <span>₹7,500</span>
                </Typography>{" "}
                <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    Total Repaid after 5 Years:{" "}
                  </Typography>
                  <span>₹6,67,278</span>
                </Typography>
                <Typography
                  sx={{
                    fontFamily: raleway.style.fontFamily,
                    fontSize: "12px",
                    marginTop: "30px",
                  }}
                >
                  <i>
                    Please note, interest rates and processing fees may vary
                    based on the lender's policies and the specific loan product
                    you choose.
                  </i>
                </Typography>
                <Box
                  sx={{
                    display: { xs: "flex", md: "initial" },
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "#FFCE31",
                      borderRadius: "25px",
                      color: "black",
                      mt:"20px",
                      padding: { xs: "10px 50px", md: "15px 100px" },
                      "&:hover": { backgroundColor: "#FFCE31" },
                    }}
                  >
                    Get started Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Section4;
