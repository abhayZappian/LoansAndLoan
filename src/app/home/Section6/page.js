import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import AccountImg from "../../../../public/account.png";
import Image from "next/image";
import { Raleway } from "next/font/google";
import CircleIcon from "@mui/icons-material/Circle";

const raleway = Raleway({ subsets: ["latin"] });

const Section6 = () => {
  const items = [
    {
      primary: "Top Loan Matchmaking Service",
      secondary:
        "LOAN AND LOAN evaluates your profile and connects you with the best-suited lender, offering loan approvals in under three minutes.",
    },
    {
      primary: "Fast Loan Disbursement",
      secondary:
        "LOAN AND LOAN ensures same-day loan disbursal with a 98% rate, thanks to a rapid, straightforward application process.",
    },
    {
      primary: "Competitive Interest Rates",
      secondary:
        "With LOAN AND LOAN, secure the best market rates for lower interest costs and budget-friendly installments.",
    },
    {
      primary: "Purpose-Oriented Loan Options",
      secondary:
        "Choose from short-term or regular personal loans at LOAN AND LOAN, with instant approvals for existing customers.",
    },
    {
      primary: "Streamlined Online Application",
      secondary:
        "Apply online with LOAN AND LOAN to avoid branch visits and start your application with just a click.",
    },
    {
      primary: "Flexible Repayment Options",
      secondary:
        "Select from repayment terms up to 5 years with LOAN AND LOAN, ensuring manageable monthly installments.",
    },
    {
      primary: "Lenient Eligibility Requirements",
      secondary:
        "LOAN AND LOAN offers easy-to-meet criteria and a smooth online application process for quick loan qualification.",
    },
  ];

  return (
    <Box>
      <Container>
        <Box
          sx={{
            width: "100%",
            mt: "60px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: {
                xs: "30px",
                md: "70px",
              },
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: "20px",
                  md: "30px",
                },
                fontWeight: 700,
                fontFamily: raleway.style.fontFamily,
              }}
            >
              Why Opt for a Personal Loan Through LOAN AND LOAN?
            </Typography>
          </Box>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                  },
                }}
              >
                <Image src={AccountImg} layout="responsive" alt="Group Image" />
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box sx={{ padding: { xs: "20px 5px", md: "0px 50px" } }}>
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
                            sx={{ fontFamily: raleway.style.fontFamily }}
                          >
                            <Typography
                              component="span"
                              sx={{
                                fontWeight: 500,
                                fontSize: {
                                  xs: "17px",
                                  md: "14px",
                                },
                              }}
                            >
                              {item.primary}: &nbsp;
                            </Typography>
                            <span>{item.secondary}</span>
                          </Typography>
                        </Box>
                      </Box>
                    </Typography>
                  ))}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Section6;
