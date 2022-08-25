import React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import profPic from "../assets/ProfilePic.png";
import Container from "@mui/material/Container";
import Image from "mui-image";
import Text from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import NavBar from "./NavBar";
import pink from "@mui/material/colors/pink";

const Profile = () => {
  return (
    <div>
      <Grid container spacing={2} columns={2}>
        <Grid item xs={1}>
          <Image src={profPic} />
        </Grid>
        <Grid item xs={1} sx={{ backgroundColor: "#8FA28C" }}>
          <Box
            sx={{
              my: 20,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <NavBar />
            <Text
              align="center"
              variant="h4"
              sx={{
                color: "white",
                fontFamily: "'Qwitcher Grypen', cursive;",
              }}
            >
              Hello. 你好. Guten Tag.안녕하세요.
            </Text>
            <Text
              align="center"
              variant="h1"
              sx={{ fontFamily: "Rozha One", color: "white" }}
            >
              I'm Krystal
            </Text>
            <br></br>
            <Text
              align="center"
              variant="h4"
              sx={{
                fontFamily: "Abril Fatface, cursive",
                color: "#F2B378",
              }}
            >
              a FULL-STACK WEB DEVELOPER
            </Text>
            <br></br>
            <br></br>
            <br></br>
            <Text align="center" variant="h6" sx={{ color: "white" }}>
              I love to learn new languages, draw and everything creative.
              <br></br>And to me, programming is all of the above combined.
            </Text>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
