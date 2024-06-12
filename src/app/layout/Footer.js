import { Box, Container, Typography } from "@mui/material";
import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: "100px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          padding: { md: "0.3% 6.5%", xs: "0 6%" },
        }}
      >
        <Box
          sx={{
            borderTop: "1px solid black",
            padding: "30px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Box>
            <Image src={logo} />
          </Box>
          <Typography
            sx={{
              fontSize: "11px",
            }}
          >
            © 2024 Loan and Loan, We love our users!
          </Typography>
          <Typography
            sx={{
              fontSize: "11px",
            }}
          >
            Terms & Conditions , Privacy Policy , Sitemap{" "}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
