import { Box, Container, Grid, Typography } from "@mui/material";
import { Span } from "next/dist/trace";
import React from "react";
import Vector from "../../../../public/Vector.png";
import Image from "next/image";
import { Raleway } from "next/font/google";
import CircleIcon from "@mui/icons-material/Circle";

const raleway = Raleway({ subsets: ["latin"] });

const Section8 = () => {
  const items = [
    {
      primary: "Identity Proof",
      secondary:
        "Options include Voter ID Card, Passport, Driving License, Aadhaar Card, PAN Card, among others.",
    },
    {
      primary: "Residential Proo",
      secondary:
        "You may use your Voter ID Card, or utility bills such as electricity or water bills.",
    },
    {
      primary: "Income Proof",
      secondary:
        "For salaried individuals, a salary slip is needed. Self-employed individuals should provide audited financial records or bank account statements.",
    },
  ];
  return (
    <Box>
      <Container>
        <Box
          sx={{
            // width: "100vw",
            backgroundColor: "#F1F6FF",
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
              mt: "40px ",
              textAlign: "center",
              fontFamily: raleway.style.fontFamily,
            }}
          >
            Required Documents for Personal Loan
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                md: "15px",
              },
              fontWeight: 100,
              mt: {
                xs: "5px ",
                md: "10px ",
              },
              p: {
                xs: "0 10px",
              },
              textAlign: "center",
            }}
          >
            Prepare the following documents when applying for a personal loan:
          </Typography>
          <Box
            sx={{ padding: { xs: "20px 5px", md: "50px 100px 50px 100px" } }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "16px", md: "20px" },
                marginBottom: "10px",
              }}
            >
              {items.map((item, index) => (
                <Typography key={index} component="div">
                  <Box
                    sx={{
                      display: "flex",
                      mt: {
                        xs: "5px",
                        md: "0",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "4px",
                        mt: "12px",
                      }}
                    >
                      <CircleIcon fontSize="4px" />
                    </Box>
                    <Box
                      sx={{
                        ml: "10px",
                        mt: "2px",
                      }}
                    >
                      <Typography
                        component="span"
                        sx={{
                          fontWeight: 600,
                          fontSize: {
                            xs: "15px",
                            md: "17px",
                          },
                          fontFamily: raleway.style.fontFamily,
                        }}
                      >
                        {item.primary}: &nbsp;
                        <span
                          style={{
                            fontWeight: 400,
                          }}
                        >
                          {item.secondary}
                        </span>
                      </Typography>
                    </Box>
                  </Box>
                </Typography>
              ))}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Section8;
