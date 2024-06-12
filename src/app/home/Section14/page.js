import { Box, Container, Grid, Typography } from "@mui/material";
import { Span } from "next/dist/trace";
import React from "react";
import Img1 from "../../../../public/Render.png";
import Img2 from "../../../../public/3d-render-hand-holding-money-dollar-banknotes.png";
import Img3 from "../../../../public/Group 1321314551.png";
import Img4 from "../../../../public/3d-illustration-hand-putting-tick-paper.png";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const Section14 = () => {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            width: "100%",
            mt: {
              xs: "0px",
              md: "60px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "32px",
                },
                fontWeight: 700,
                mt: "40px",
                mb: {
                  xs: "40px",
                  md: "100px",
                },
                textAlign: "center",
                fontFamily: raleway.style.fontFamily,
              }}
            >
              4 Tips to Get THE  Best Deal On A Personal Loan
            </Typography>
          </Box>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: {
                xs: "20px",
                md: "80px",
              },
            }}
          >
            <Grid
              item
              xs={12}
              md={3.5}
              sx={{
                backgroundColor: "#FDF3EA",
                borderRadius: "13px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                p: "40px 0 100px 0",
              }}
            >
              <Image src={Img3} />
              <Typography
                sx={{
                  mt: "45px",
                }}
              >
                Assess Your Credit Needs
              </Typography>
              <Typography
                sx={{
                  mt: "10px",
                  fontWeight: 100,
                  fontSize: "16px",
                  textAlign: "center",
                  mt: "30px",
                }}
              >
                Borrow only the necessary amount to minimize interest costs and
                simplify repayment
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3.5}
              sx={{
                backgroundColor: "#E0F8F2",
                borderRadius: "13px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                p: "40px 0 100px 0",
              }}
            >
              <Image src={Img3} />
              <Typography
                sx={{
                  mt: "45px",
                }}
              >
                Review Your Credit Report
              </Typography>
              <Typography
                sx={{
                  mt: "10px",
                  fontWeight: 100,
                  fontSize: "16px",
                  textAlign: "center",
                  mt: "30px",
                }}
              >
                Regularly check and correct your credit report to maintain
                accuracy and enhance creditworthiness
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: {
                xs: "20px",
                md: "80px",
              },
              mt: {
                xs: "20px",
                md: "80px",
              },
            }}
          >
            <Grid
              item
              xs={12}
              md={3.5}
              sx={{
                backgroundColor: "#D9F2F7",
                borderRadius: "13px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                p: "40px 0 100px 0",
              }}
            >
              <Image src={Img3} />
              <Typography
                sx={{
                  mt: "45px",
                }}
              >
                Compare Loan Offers
              </Typography>
              <Typography
                sx={{
                  mt: "10px",
                  fontWeight: 100,
                  fontSize: "16px",
                  textAlign: "center",
                  mt: "30px",
                  p: "0 40px",
                }}
              >
                Evaluate multiple loan offers from over 30 lenders via LOAN AND
                LOAN to find the one with the lowest costs.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3.5}
              sx={{
                backgroundColor: "#FAEDED",
                borderRadius: "13px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                p: "50px 0 110px 0",
              }}
            >
              <Image src={Img3} />
              <Typography
                sx={{
                  mt: "45px",
                }}
              >
                Select the Right Loan Term
              </Typography>
              <Typography
                sx={{
                  mt: "10px",
                  fontWeight: 100,
                  fontSize: "16px",
                  textAlign: "center",
                  mt: "30px",
                  p: "0 40px",
                }}
              >
                Choose a loan term that balances manageable monthly payments
                with minimal overall interest.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Section14;
