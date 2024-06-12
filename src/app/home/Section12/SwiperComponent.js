"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import "./slider.css";
import "../../../../node_modules/swiper/css/swiper.css";
import plImage from "../../../../public/pl1.png";
import plImage2 from "../../../../public/pl2.png";
import plImage3 from "../../../../public/pl3.png";
import plImage4 from "../../../../public/pl4.png";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const SwiperComponent = () => {
  useEffect(() => {
    const swiperInstance = new Swiper(".swiper", {
      direction: "horizontal",
      breakpoints: {
        1220: { slidesPerView: 4, spaceBetween: 200 },
        1100: { slidesPerView: 3.3, spaceBetween: 50 },
        1000: { slidesPerView: 3, spaceBetween: 0 },
        900: { slidesPerView: 2.7, spaceBetween: 0 },
        700: { slidesPerView: 2.1, spaceBetween: 0 },
        500: { slidesPerView: 1.5, spaceBetween: 0 },
        300: { slidesPerView: 1, spaceBetween: 20, dragSize: 100 },
      },
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });

    return () => {
      if (swiperInstance && swiperInstance.destroy) {
        swiperInstance.destroy(true, true);
      }
    };
  }, []);

  const cardData = [
    {
      title: "Medical Emergencies",
      description:
        "Access quick funds for urgent medical needs with a personal loan.",
      bgColor: "#FDF3EA",
      image: {
        src: plImage.src,
        height: "38px",
        width: "38px",
      },
    },
    {
      title: "Debt Consolidation",
      description:
        "Simplify payments and potentially reduce costs by consolidating debts into one loan.",
      bgColor: "#F1F6FF",
      image: {
        src: plImage2.src,
        height: "78px",
        width: "108px",
      },
    },
    {
      title: "Educational Expenses",
      description:
        "Use a personal loan to pay immediate tuition fees without delay.",
      bgColor: "#EEECFF",
      image: {
        src: plImage3.src,
        height: "38px",
        width: "68px",
      },
    },
    {
      title: "Family Festivals",
      description:
        "Finance significant family events like weddings with a personal .",
      bgColor: "#E0F8F2",
      image: {
        src: plImage4.src,
        height: "68px",
        width: "68px",
      },
    },
    {
      title: "Medical Emergencies",
      description:
        "Access quick funds for urgent medical needs with a personal loan.",
      bgColor: "#FDF3EA",
      image: {
        src: plImage.src,
        height: "38px",
        width: "38px",
      },
    },
  ];

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Container sx={{ width: "100%", overflow: "visible" }}>
        <Box className="swiper">
          <Box
            className="swiper-wrapper"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            {cardData.map((card, index) => (
              <Box key={index} className="swiper-slide" sx={{ width: "280px" }}>
                <Card
                  sx={{
                    maxWidth: 345,
                    width:"100%",
                    bgcolor: card.bgColor,
                    borderRadius: "20px",
                    paddingX: "30px",
                    height: "400px",
                    width:{
                      xs:"100%",
                      md: "312px"
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: "40%",
                      paddingTop: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: card.image.height,
                        width: card.image.width,
                      }}
                      image={card.image.src}
                      alt="Image Description"
                    />
                  </Box>
                  <CardContent sx={{ padding: 0, height: "60%" }}>
                    <Typography
                      sx={{
                        fontSize: "21px",
                        fontWeight: 600,
                        lineHeight: "1.2",
                        textAlign: "center",
                        fontFamily: raleway.style.fontFamily,
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        fontFamily: raleway.style.fontFamily,
                        paddingTop: "30px",
                        textAlign: "center",
                      }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              paddingTop: "20px",
              alignItems: "center",
            }}
          >
            <Box
              className="swiper-scrollbar"
              sx={{
                position: "initial",
                margin: "10px 0",
                width: "-webkit-fill-available",
                height: "7px",
                background: "#243771",
              }}
            ></Box>
            <Box sx={{ display: "flex" }}>
              <Box className="swiper-prev" sx={{ color: "#f6d549" }}>
                <KeyboardArrowLeftIcon fontSize="large" />
              </Box>
              <Box className="swiper-next" sx={{ color: "#f6d549" }}>
                <KeyboardArrowRightIcon fontSize="large" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SwiperComponent;
