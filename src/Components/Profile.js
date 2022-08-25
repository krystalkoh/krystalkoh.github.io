import React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import profPic from "../assets/ProfilePic.png";
import Container from "@mui/material/Container";
import Image from "mui-image";
import Text from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import NavBar from "./NavBar";

const Profile = () => {
  return (
    <div>
      <Grid container spacing={2} columns={2}>
        <Grid item xs={1}>
          <Image src={profPic} />
        </Grid>
        <Grid item xs={1} component={Paper} elevation={6}>
          <Box
            sx={{
              my: 20,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text align="center" variant="h4" sx={{ color: "##4B5563" }}>
              Hello. 你好. Guten Tag.안녕하세요.
            </Text>
            <Text
              align="center"
              variant="h1"
              sx={{ fontFamily: "Rozha One", color: "#5651E5" }}
            >
              I'm Krystal
            </Text>
            <Text align="center" variant="h4">
              a FULL-STACK WEB DEVELOPER
            </Text>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
