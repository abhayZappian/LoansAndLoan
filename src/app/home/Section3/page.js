import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const Section3 = () => {
  return (
    <Box
      sx={{
        mt: "50px",
        mb: "80px",
      }}
    >
      <Container>
        <Typography
          sx={{
            fontWeight: 400,
            fontFamily: raleway.style.fontFamily,
          }}
        >
          LOAN AND LOAN acts as a mediator, not a lender, connecting borrowers
          with various lending partners. These partners offer personal loans
          with Annual Percentage Rates (APRs) typically between 11.29% and 35%.
          The final APR you receive depends on your financial situation and
          specific loan requirements.
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontFamily: raleway.style.fontFamily,
            mt: 4,
          }}
        >
          Loan durations vary, ranging from a few weeks up to a maximum of 60
          months (5 years), and these can differ among lenders. It's crucial for
          borrowers to thoroughly read and understand the loan agreement
          provided by the lender before accepting any terms. This document will
          detail the final APR, any fees, and the exact terms and conditions of
          the loan, clarifying your financial responsibilities.
        </Typography>
      </Container>
    </Box>
  );
};

export default Section3;
