import React from "react";
import NavBar from "../Components/NavBar";
import Text from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "mui-image";
import Grid from "@mui/material/Unstable_Grid2";
import prof from "../assets/prof.png";
import { RoundedCorner } from "@mui/icons-material";
import CardMedia from "@mui/material/CardMedia";

const About = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              my: 10,
              mx: 10,
              alignItems: "center",
            }}
          >
            <Grid container spacing={3} columns={2}>
              <Grid item xs={1} sx={{ width: "250px" }}>
                <Image
                  src={prof}
                  width="200px"
                  height="200px"
                  sx={{ borderRadius: "50%" }}
                ></Image>
              </Grid>
              <Grid item xs={1} sx={{ width: "300px" }}>
                <Text
                  variant="h2"
                  sx={{
                    fontFamily: "Abril Fatface",
                    my: 3,
                    fontSize: 50,
                  }}
                >
                  About Me
                </Text>
                <Text>
                  I'm <b>Krystal </b>from Singapore and I’m an aspiring &nbsp;
                  <b>Full-Stack Web Developer</b>.<br />
                </Text>
              </Grid>
            </Grid>
            <br></br>
            <Text>
              {" "}
              <h3> Why the change in career?</h3>I used to be a teacher. Due to
              the onset of the pandemic, I found myself using technology to
              teach on a daily basis. Creating innovative technology-enabled
              lessons brought me back to my teenage days where I customised
              blogskins by editing its HTML and CSS. I decided to take up a
              basic coding course while I was teaching and the feeling of
              accomplishment from creating a website from scratch was
              incredible, and I knew that was going to be the career that I
              truly wanted to pursue. <br />I decided to enroll in the full-time
              <b>Software Engineering Immersive </b>programme with General
              Assembly and it has been the best decision I’ve made yet.
            </Text>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ backgroundColor: "#9bad98" }}>
          <Box
            sx={{
              my: 20,
              height: "100%",
              width: "90%",
              mx: 5,
            }}
          >
            <Text sx={{ color: "#5C3C3D" }}>
              <h3> Why hire me?</h3>I am an enthusiastic, adaptable individual
              who believes in active learning. My science background and my
              creative side puts me in good stead to excel if given an
              opportunity to do so. Through my various leadership roles and
              collaboration with various stakeholders, it has honed me to be a
              good teammate and leader. I'm a keen learner who is always ready
              to take on a challenge.
            </Text>{" "}
            <br></br>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
