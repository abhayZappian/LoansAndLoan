import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CalculationImg from "../../../../public/Group 1321314567.png";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });
const Section11 = () => {
  const guidelines = [
    "If job security is uncertain, avoid new debts for manageable repayments.",
    "Improve your credit score before seeking a personal loan to reduce the risk of rejection.",
    "Avoid using personal loans for high-risk investments to ensure easier repayment.",
    "Utilize a personal loan for urgent medical expenses for quick access to funds.",
    "Consolidate debts into a single payment with a personal loan to simplify finances.",
    "Finance educational expenses with a personal loan for easier repayment.",
    "Fund significant family events with a personal loan.",
    "Keep your debt-to-income ratio below 36% by avoiding new loans if already in debt.",
  ];
  return (
    <Box>
      <Container>
        <Box
          sx={{
            width: "100%",
            marginTop: {
              xs: "40px",
              md: "100px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: {
                xs: "40px",
                md: "40px",
              },
              //   marginBottom: "50px",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "30px",
                },
                fontWeight: 700,
                fontFamily: raleway.style.fontFamily,
                textAlign: "center",
              }}
            >
              When To NOT Take A Personal Loan
            </Typography>
            <Box
              sx={{
                p: "0 300px",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    md: "16px",
                  },
                  fontWeight: 400,
                  mt: "20px",
                  textAlign: "center",
                  fontFamily: raleway.style.fontFamily,
                }}
              >
                For financial stability, consider avoiding a personal loan in
                these situations:
              </Typography>
            </Box>
          </Box>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                  },
                  padding: "0px 30px",
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
                    xs: "00px 0 0 0",
                    md: "70px 0 0 0",
                  },
                }}
              >
                {guidelines.map((guideline, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{
                      fontSize: {
                        xs: "15px",
                        md: "16px",
                      },
                      marginBottom: "10px",
                      fontWeight: 400,
                      fontFamily: raleway.style.fontFamily,
                    }}
                  >
                    {index + 1}. {guideline}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Section11;
