import React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import profPic from "../assets/ProfilePic.png";
import Container from "@mui/material/Container";
import Image from "mui-image";
import Text from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Profile = () => {
  return (
    <div>
      <Grid container spacing={2} columns={2}>
        <Grid item xs={1}>
          <Image src={profPic} />
        </Grid>

        <Grid item xs={1} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text>
              <h1 align="center" mt={100}>
                HI THERE!
              </h1>
              <h2 align="left"> I'M KRYSTAL</h2>
            </Text>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
