import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const Accordions = () => {
  return (
    <Box
      sx={{
        mt: {
          xs: "80px",
          md: "150px",
        },
      }}
    >
      <Container>
        <Box
          sx={{
            width: { sm: "90%", xl: "100%" },
          }}
        >
          <Typography
            sx={{
              textAlign: { sm: "left" },
              fontSize: { xs: "24px", sm: "32px", lg: "34px" },
              fontWeight: "400",
              lineHeight: "1.1",
              margin: {
                xs: "0 0 5px",
                md: "0 0 18px",
              },
              fontFamily: raleway.style.fontFamily,
            }}
          >
            Questions.
          </Typography>
          <Typography
            sx={{
              textAlign: { sm: "left" },
              color: "#9B9B8C",
              fontSize: { xs: "24px", sm: "32px", lg: "34px" },
              fontWeight: "400",
              lineHeight: "1.1",
              margin: "0 0 18px",
              fontFamily: raleway.style.fontFamily,
            }}
          >
            Answered.
          </Typography>
          <Accordion
            elevation={0}
            sx={{
              backgroundColor: "transparent",
              marginTop: "20px",
              padding: {
                xs: "0px 0",
                md: "20px 0",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={{ padding: 0 }}
            >
              <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                How Can I Calculate My Personal Loan Installment?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                With us, the TAT of borrowing a business loan is reduced to meet
                your financial requirements without wasting time. We promise to
                sanction and disburse the loan amount the same day.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            elevation={0}
            sx={{
              backgroundColor: "transparent",
              padding: {
                xs: "0px 0",
                md: "20px 0",
              },
            }}
          >
            <AccordionSummary
              sx={{ display: "flex", alignItems: "center", padding: 0 }}
              expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                What Should I Do If My Personal Loan Application Is Rejected?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                Just apply for the loan, submit necessary papers and relax. We
                will do the rest. Finding the right lending partner that matches
                your requirements is what we do. And we do it best.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            elevation={0}
            sx={{
              backgroundColor: "transparent",
              padding: {
                xs: "0px 0",
                md: "20px 0",
              },
            }}
          >
            <AccordionSummary
              sx={{ display: "flex", alignItems: "center", padding: 0 }}
              expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                Are There Any Tax Benefits on Personal Loans?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                Our application process is user-friendly and seamless. You only
                need to furnish your mobile phone number, required details and
                mention your loan requirements.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            elevation={0}
            sx={{
              backgroundColor: "transparent",
              padding: {
                xs: "0px 0",
                md: "20px 0",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
              aria-controls="panel4d-content"
              id="panel4d-header"
              sx={{ display: "flex", alignItems: "center", padding: 0 }}
            >
              <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                Can I Foreclose My Personal Loan Early?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: raleway.style.fontFamily }}>
                Choose the loan tenure per your convenience. Just ensure the
                chosen EMI is within your repayment capacity.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
};

export default Accordions;
