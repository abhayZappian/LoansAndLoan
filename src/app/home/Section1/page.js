import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import GroupImg from "../../../../public/Group.png";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const Section1 = () => {
  return (
    <div>
      <Box
        sx={{
          mt: {
            xs: "130px",
            md: "130px",
            xl: "150px",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ width: "100%" }}>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    md: "105%",
                  },
                }}
              >
                <Image src={GroupImg} layout="responsive" alt="Group Image" />
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box sx={{ ml: { xs: 0, md: "90px" }, mt: "0px" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "27px", md: "48px" },
                    fontWeight: 700,
                    textAlign: { xs: "center", sm: "initial" },
                    lineHeight: { xs: "40px", sm: "55px" },
                    fontFamily: raleway.style.fontFamily,
                  }}
                >
                  Get the money you need to achieve your goals, big or small.
                </Typography>
                <Box
                  sx={{
                    // height: "40vh",
                    mt: "30px",
                    backgroundColor: "#F1F6FF",
                    borderRadius: "25px",
                    border: "5px solid #E8F0FF",
                    p: "22px 45px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    sx={{
                      borderRadius: "5px",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      md={12}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "12px", sm: "16px" },
                          fontWeight: "400",
                          fontFamily: raleway.style.fontFamily,
                          color: "black",
                          textAlign: "center",
                          mb: "12px",
                        }}
                      >
                        Enter your details to get started in seconds!
                      </Typography>
                      <Box>
                        <TextField
                          fullWidth
                          size="small"
                          name="amount"
                          placeholder="Mobile Number"
                          sx={{
                            backgroundColor: "white",
                            color: "grey",
                            borderRadius: "40px",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                border: "none",
                              },
                            },
                            p: "7px 20px",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          mt: "15px",
                        }}
                      >
                        <Checkbox defaultChecked />
                        <Typography sx={{ color: "#243771", fontSize: "9px" }}>
                          By continuing, you agree to our Privacy
                          Policy and Terms & Conditions . I grant permission to
                          Credmudra, its Lending Partners, and affiliated
                          entities to contact me for various communication via
                          Phone, SMS, E-mail, and WhatsApp for loans, credit
                          cards, or other relevant information or promotions. .
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignContent: "center",
                          mt: "15px",
                        }}
                      >
                        <Button
                          type="submit"
                          sx={{
                            textTransform: "none",
                            width: "216px",
                            bgcolor: "#FFCE31",
                            "&:hover": {
                              background: "#FFCE31",
                            },
                            borderRadius: "40px",
                            padding: "10px 50px",
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: "black",
                              fontSize: "18px",
                              fontWeight: "600",
                            }}
                          >
                            Send OTP
                          </Typography>
                        </Button>
                        {/* {openModal2 && <GetStartedWith2 onClose={handleCloseModal} />} */}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Section1;
