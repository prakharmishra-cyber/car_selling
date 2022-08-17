import React, { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import carImage from "./images/car_image.webp";
import bgImage from "./images/bg_image.jpeg";
import { Typography } from "@mui/material";

const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.currentUser === null) {
      return navigate("/login");
    }
  }, []);

  console.log(auth);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        padding: 3,
        margin: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:{bgImage}
      }}
    >
      <Box
        sx={{
          width: {
            md: "40%",
            xs: "100%",
            display: "flex",
            alignItems: "center",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: "50px",
            color: "text.secondary",
          }}
        >
          Chose your ride now
        </Typography>
      </Box>
      <Box sx={{ width: { md: "40%", xs: "100%" } }}>
        <img
          src={carImage}
          alt="car_image"
          style={{
            width: "100%",
            height: "70%",
            padding: 1,
            backgroundImage: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
