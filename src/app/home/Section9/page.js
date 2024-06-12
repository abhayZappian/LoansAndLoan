import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CalculationImg from "../../../../public/Group 1321314552q.png";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const Section9 = () => {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            width: "100%",
            mt: {
              xs: "70px",
              md: "100px",
            },
          }}
        >
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                  },
                  padding: "0",
                }}
              >
                <Image
                  src={CalculationImg}
                  layout="responsive"
                  alt="Group Image"
                />
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  padding: {
                    xs: "0px 0",
                    md: "20px 30px",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "20px",
                      md: "30px",
                    },
                    fontWeight: 700,
                    lineHeight: "35px",
                    textAlign: {
                      xs: "center",
                      md: "initial",
                    },
                    fontFamily: raleway.style.fontFamily,
                  }}
                >
                  Fees And Charges On Personal Loan
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "15px",
                    marginTop: {
                      xs: "10px",
                      md: "60px",
                    },
                    textAlign: {
                      xs: "center",
                      md: "initial",
                    },
                    fontFamily: raleway.style.fontFamily,
                  }}
                >
                  Here are the various fees associated with a personal loan:
                </Typography>
                <Box
                  sx={{
                    padding: {
                      xs: "0 10px",
                      md: "0 0",
                    },
                    mt: {
                      xs: "30px",
                      md: "",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      marginTop: "10px",
                      fontWeight: 600,
                      fontFamily: raleway.style.fontFamily,
                    }}
                  >
                    1. Processing Fee
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: raleway.style.fontFamily,
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    2. Verification Charge
                  </Typography>{" "}
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: raleway.style.fontFamily,
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    3. Goods and Services Tax (GST)
                  </Typography>{" "}
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: raleway.style.fontFamily,
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    4. Penal Interest
                  </Typography>{" "}
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: raleway.style.fontFamily,
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    5. Part-prepayment and Foreclosure Charge
                  </Typography>{" "}
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: raleway.style.fontFamily,
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    6. Documentation Charge
                  </Typography>{" "}
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: raleway.style.fontFamily,
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    7. Stamp Duty
                  </Typography>{" "}
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: raleway.style.fontFamily,
                      fontSize: "15px",
                      marginTop: "10px",
                    }}
                  >
                    8. Credit Administration Free
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: raleway.style.fontFamily,
                    fontSize: "13px",
                    marginTop: {
                      xs: "10px",
                      md: "30px",
                    },
                  }}
                >
                  <i>
                    Note: The charges for a personal loan can differ among our
                    lenders. It is advisable to carefully review these fees
                    before accepting any personal loan offer.
                  </i>
                </Typography>
                <Box
                  sx={{
                    display: {
                      xs: "flex",
                      md: "initial",
                    },
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      marginTop: "30px",
                      backgroundColor: "#FFCE31",
                      borderRadius: "25px",
                      color: "black",
                      padding: {
                        xs: "15px 60px",
                        md: "15px 100px",
                      },
                      "&:hover": {
                        backgroundColor: "#FFCE31", // Background color on hover
                      },
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

export default Section9;
