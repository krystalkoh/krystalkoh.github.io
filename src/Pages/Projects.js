import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Text from "@mui/material/Typography";
import hh from "../assets/hh.jpeg";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import showtime from "../assets/showtime.png";
import kloset from "../assets/kloset.png";
import tutor from "../assets/tutor.png";

const Projects = () => {
  return (
    <div>
      <NavBar />
      <Text variant="h2" sx={{ my: 8, mr: 80, fontFamily: "Abril Fatface" }}>
        What I've Built
      </Text>
      <Card
        sx={{ maxWidth: 300, maxHeight: 500, mx: 2, display: "inline-block" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={hh}
            alt="help hermione"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Help Hermione
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Aim of the game: Help Hermione to find Ron by walking around the
              map. But beware, there are hidden beasts waiting to attack. Defeat
              the beasts and rescue Ron in this pokemon-style Harry Potter game!
            </Typography>
          </CardContent>
          <Typography variant="body2" color="text.primary">
            <b> Built with JavaScript and HTML Canvas</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Solo Project
          </Typography>
          <CardActions>
            <Button
              href="https://helphermione.netlify.app"
              target="blank"
              sx={{
                margin: "0 auto",

                "&:hover": {
                  color: "#a5b1e2",
                },
              }}
            >
              Deployed Website
            </Button>
            <Button
              href="https://github.com/krystalkoh/HelpHermione-"
              target="blank"
              sx={{
                margin: "0 auto",
                "&:hover": {
                  color: "#a5b1e2",
                },
              }}
            >
              GitHub
            </Button>
          </CardActions>
          <br /> <br /> <br />
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300, height: 500, mx: 2, display: "inline-block" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={showtime}
            alt="it's showtime"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Showtime!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Need more information about a tv show you're interested in? You've
              tuned in to the right app! This app gives you updated information
              on shows that are currently airing in the USA and UK. You can
              favourite and search for shows.
            </Typography>
          </CardContent>
          <Typography variant="body2" color="text.primary">
            <b> Built with React.js, Node.js, TailwindCSS </b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Solo Project
          </Typography>
          <CardActions>
            <Button
              href="https://itsshowtime.netlify.app"
              target="blank"
              sx={{
                margin: "0 auto",
                "&:hover": {
                  color: "#a5b1e2",
                },
              }}
            >
              Deployed Website
            </Button>
            <Button
              href="https://github.com/krystalkoh/showtime"
              target="blank"
              sx={{
                margin: "0 auto",
                "&:hover": {
                  color: "#a5b1e2",
                },
              }}
            >
              GitHub
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300, height: 500, mx: 2, display: "inline-block" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={tutor}
            alt="tutorealm"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              TutoRealm
            </Typography>
            <Typography variant="body2" color="text.secondary">
              An online platform designed with freelance tutors and parents in
              mind. Parents create jobs and post them for tutors to view and
              apply. Parents view all applicants and upon accepting, contact
              information will be available for viewing.
            </Typography>
          </CardContent>
          <Typography variant="body2" color="text.primary">
            <b>Built with MongoDB, Express, React.js, Node.js, Tailwind CSS </b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Group Project
          </Typography>
          <CardActions>
            <Button
              href="https://github.com/krystalkoh/tutorealm_frontend"
              target="blank"
              sx={{
                margin: "0 auto",
                "&:hover": {
                  color: "#a5b1e2",
                },
              }}
            >
              Frontend
            </Button>
            <Button
              href="https://github.com/krystalkoh/backendTutorealm"
              target="blank"
              sx={{
                margin: "0 auto",
                "&:hover": {
                  color: "#a5b1e2",
                },
              }}
            >
              Backend
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300, height: 500, mx: 2, display: "inline-block" }}>
        <CardActionArea>
          <CardMedia component="img" height="180" image={kloset} alt="kloset" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kloset
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A web application that allows users to upload pictures of clothes
              that they want to sell, browse one another's uploads and buy
              clothes from other users. The money earned from the clothes
              purchased will be credited into the seller's account as well.
            </Typography>
          </CardContent>
          <Typography variant="body2" color="text.primary">
            <b>
              Built with Django, PostgreSQL, React.js, Node.js and TailwindCSS{" "}
            </b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Solo Project
          </Typography>
          <CardActions>
            <Button
              href="https://fashionkloset.herokuapp.com/"
              target="blank"
              sx={{
                margin: "0 auto",
                "&:hover": {
                  color: "#a5b1e2",
                },
              }}
            >
              Deployed Website
            </Button>
            <Button
              href="https://github.com/krystalkoh/fashionkloset"
              target="blank"
              sx={{
                margin: "0 auto",
                "&:hover": {
                  color: "#a5b1e2",
                },
              }}
            >
              GitHub
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Projects;
