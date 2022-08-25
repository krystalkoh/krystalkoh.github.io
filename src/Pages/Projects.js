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

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Projects = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <NavBar />
      <Text variant="h2" sx={{ my: 8, mr: 80, fontFamily: "Abril Fatface" }}>
        What I've Built
      </Text>
      <Card
        sx={{ maxWidth: 300, maxHeight: 450, mx: 2, display: "inline-block" }}
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
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </CardActions>
        </CardActionArea>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="text.primary">
              Built with JavaScript and HTML Canvas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Solo Project
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 300, height: 450, mx: 2, display: "inline-block" }}>
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
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </CardActions>
        </CardActionArea>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="text.primary">
              Built with React.js and styled with TailwindCSS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Solo Project
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 300, height: 450, mx: 2, display: "inline-block" }}>
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
          <CardActions>
            <Button
              href="https://github.com/krystalkoh/tutorealm_frontend_parent"
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
              href="https://github.com/krystalkoh/tutorealm_backend/tree/ma"
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
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </CardActions>
        </CardActionArea>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="text.primary">
              Built with MongoDB, Express, React.js, Node.js and Tailwind CSS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Group Project
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 300, height: 450, mx: 2, display: "inline-block" }}>
        <CardActionArea>
          <CardMedia component="img" height="180" image={kloset} alt="kloset" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Kloset
            </Typography>
            <Typography variant="body2" color="text.secondary">
              An online platform designed with freelance tutors and parents in
              mind. Parents create jobs and post them for tutors to view and
              apply. Parents view all applicants and upon accepting, contact
              information will be available for viewing.
            </Typography>
          </CardContent>
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
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </CardActions>
        </CardActionArea>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="text.primary">
              Built with Django, PostgreSQL, React.js, Node.js and styled with
              TailwindCSS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Solo Project
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Projects;
