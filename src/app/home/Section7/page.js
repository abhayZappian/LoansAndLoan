import { Box, Container, Grid, Typography } from "@mui/material";
import { Span } from "next/dist/trace";
import React from "react";
import Img1 from "../../../../public/Render.png";
import Img2 from "../../../../public/3d-render-hand-holding-money-dollar-banknotes.png";
import Img3 from "../../../../public/Group 1321314551.png";
import Img4 from "../../../../public/3d-illustration-hand-putting-tick-paper.png";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

import Image from "next/image";

const Section7 = () => {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            backgroundColor: "#FDFBF3",
            mt: "60px",
            border: "5px solid #F3F1E8",
            borderRadius: "25px",
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
                  xs: "18px",
                  md: "35px",
                },
                fontWeight: 700,
                mt: "40px",
                textAlign: "center",
                fontFamily: raleway.style.fontFamily,
              }}
            >
              Why Choose a Personal Loan?
            </Typography>
            <Typography
              sx={{
                mt: "20px",
                fontWeight: 400,
                textAlign: "center",
                p: {
                  xs: "0 20px",
                  md: " 0 0",
                },
                fontFamily: raleway.style.fontFamily,
              }}
            >
              Why might a personal loan be the better option compared to other
              types of credit? Here are some compelling reasons:
            </Typography>
          </Box>
          <Grid
            container
            sx={{
              padding: {
                xs: "0px 0px 50px 0",
                md: "50px 100px",
              },
            }}
          >
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: {
                  xs: "flex",
                  md: "initial",
                },
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                mt: {
                  xs: "60px",
                  md: "0",
                },
              }}
            >
              <Image src={Img1} />
              <Typography
                sx={{
                  mt: "25px",
                }}
              >
                Flexibility in Use
              </Typography>
              <Typography
                sx={{
                  mt: "10px",
                  fontWeight: 100,
                  fontSize: "12px",
                  padding: {
                    xs: "0 40px",
                    md: "0 50px 0 0",
                  },
                  textAlign: {
                    xs: "center",
                    md: "initial",
                  },
                }}
              >
                Personal loans offer complete freedom in how you use the funds,
                with no restrictions on their end-use.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: {
                  xs: "flex",
                  md: "initial",
                },
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                mt: {
                  xs: "60px",
                  md: "0",
                },
              }}
            >
              <Image src={Img2} />
              <Typography
                sx={{
                  mt: "20px",
                }}
              >
                Quick Financial Support
              </Typography>
              <Typography
                sx={{
                  mt: "10px",
                  fontWeight: 100,
                  fontSize: "12px",
                  padding: {
                    xs: "0 40px",
                    md: "0 50px 0 0",
                  },
                  textAlign: {
                    xs: "center",
                    md: "initial",
                  },
                }}
              >
                Personal loans have short processing times and often receive
                rapid approval if eligibility requirements are met.
              </Typography>
            </Grid>{" "}
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: {
                  xs: "flex",
                  md: "initial",
                },
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                mt: {
                  xs: "60px",
                  md: "20px",
                },
              }}
            >
              <Image src={Img3} />
              <Typography
                sx={{
                  mt: "30px",
                }}
              >
                No Collateral Required
              </Typography>
              <Typography
                sx={{
                  mt: "10px",
                  fontWeight: 100,
                  fontSize: "12px",
                  padding: {
                    xs: "0 40px",
                    md: "0 50px 0 0",
                  },
                  textAlign: {
                    xs: "center",
                    md: "initial",
                  },
                }}
              >
                Personal loans are unsecured, eliminating the need for
                collateral and speeding up the approval process.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: {
                  xs: "flex",
                  md: "initial",
                },
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                mt: {
                  xs: "60px",
                  md: "0",
                },
              }}
            >
              <Image src={Img4} />
              <Typography
                sx={{
                  mt: "25px",
                }}
              >
                Simple Documentation
              </Typography>
              <Typography
                sx={{
                  mt: "10px",
                  fontWeight: 100,
                  fontSize: "12px",
                  padding: {
                    xs: "0 40px",
                    md: "0 50px 0 0",
                  },
                  textAlign: {
                    xs: "center",
                    md: "initial",
                  },
                }}
              >
                Applying for a personal loan involves minimal paperwork,
                requiring only basic documents like KYC forms and income proof.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Section7;
