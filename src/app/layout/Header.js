"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import logo from "../../../public/logo.png";
import {
  AppBar,
  Box,
  Container,
  Link,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const Header = () => {
  const [state, setState] = useState({
    isVisible: true,
    menuBox: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setState((prevState) => ({ ...prevState, isVisible: false }));
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = useCallback(() => {
    setState((prevState) => ({ ...prevState, menuBox: false }));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenuBox = () => {
    setState((prevState) => ({ ...prevState, menuBox: !prevState.menuBox }));
  };

  const styles = useMemo(
    () => ({
      appBar: {
        boxShadow: "none",
        backgroundColor: "white",
        padding: { lg: "2px 100px", xs: "10px 0" },
      },
      container: {
        padding: { md: "0.3% 3%", xs: "0 6%" },
        borderBottom: "1px solid grey",
      },
      logoBox: { width: { xs: 180, sm: 150, md: 200, lg: 250 } },
      menuIconBox: {
        display: { xs: "flex", md: "none" },
        height: { xs: "33px", sm: "36px" },
        width: { xs: "38px", sm: "42px" },
        borderRadius: "2px",
        justifyContent: "center",
        alignItems: "center",
      },
      mobileMenuBox: {
        position: "fixed",
        zIndex: 90,
        width: "100%",
        height: "auto",
        marginTop: { xs: "60px", sm: "56px" },
        display: { xs: "flex", md: "none" },
        maxHeight: "calc(100vh - 64px)",
        overflowY: "auto",
      },
      listItem: { paddingY: "0px", marginTop: "40px" },
      link: {
        color: "black",
        textDecoration: "none",
        cursor: "pointer",
        textTransform: "capitalize",
      },
      linkText: { fontSize: "32px" },
    }),
    []
  );

  return (
    <>
      <Box>
        <AppBar sx={styles.appBar}>
          <Container maxWidth="xl" sx={styles.container}>
            <Toolbar sx={{ paddingX: { xs: 0 } }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                paddingX={{ xs: "0px", sm: "24px", md: "0px" }}
              >
                <Box sx={styles.logoBox}>
                  <Image src={logo} alt="logo" layout="responsive" />
                </Box>
                <Stack
                  direction="row"
                  spacing={6}
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex" },
                    cursor: "pointer",
                  }}
                >
                  {["Service", "Blog", "About Us", "Contact"].map((text) => (
                    <Link
                      key={text}
                      underline="none"
                      color="black"
                      fontFamily="Inter, sans-serif"
                    >
                      {text}
                    </Link>
                  ))}
                </Stack>
                <Box sx={styles.menuIconBox}>
                  <MenuIcon
                    fontSize="large"
                    sx={{ color: "black" }}
                    onClick={toggleMenuBox}
                  />
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      {state.menuBox && (
        <Box sx={styles.mobileMenuBox}>
          <List sx={{ width: "100%" }}>
            {[
              "About Us",
              "Contact Us",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((text) => (
              <ListItem key={text} sx={styles.listItem}>
                <Link style={styles.link}>
                  <Typography sx={styles.linkText}>{text}</Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </>
  );
};

export default Header;
