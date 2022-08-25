import React from "react";
import NavBar from "../Components/NavBar";
import Text from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Image from "mui-image";
import qrcode from "../assets/resume.png";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { RoundedCorner } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#7f5bd3",
    },
  },
});
const Contact = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Grid container columns={2} spacing={2}>
        <Grid item xs={1} sx={{ mt: 5, display: "inline-block" }}>
          <Text variant="h2">Let's Connect!</Text>
          <Grid item xs={4} sx={{ mt: 5 }}>
            <Card
              sx={{
                width: 350,
                height: 430,
                mx: 4,
                my: 5,
                display: "inline-block",
              }}
              elevation={8}
            >
              <CardContent>
                <Text variant="h5">Resume </Text>
                <img src={qrcode} width="300px" height="300px" />
              </CardContent>
              <CardActions>
                <Button
                  href="https://www.canva.com/design/DAFHVcfnyOM/71ijmlBI7dD7oCkHRDtFNQ/view?utm_content=DAFHVcfnyOM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  target="blank"
                  sx={{
                    margin: "0 auto",
                    "&:hover": {
                      color: "#a5b1e2",
                    },
                  }}
                >
                  View on screen
                </Button>
              </CardActions>
            </Card>
            <Grid item xs={1} sx={{ display: "inline-block" }}>
              <Card></Card>
              <Button
                href="https://www.linkedin.com/in/krystal-k-71019285/"
                target="blank"
                sx={{ mb: 70, mx: 5 }}
              >
                <LinkedInIcon fontSize="large"></LinkedInIcon>
                <Text>LinkedIn</Text>
              </Button>
              <Button
                href="https://github.com/krystalkoh"
                target="blank"
                sx={{ mb: 70, mx: 5 }}
              >
                <ThemeProvider theme={theme}>
                  <GitHubIcon fontSize="large" color="primary"></GitHubIcon>
                  <Text color="primary">GitHub</Text>
                </ThemeProvider>
              </Button>
              <Button
                href="mailto:krystalkoh@gmail.com"
                target="blank"
                sx={{ mb: 70, mx: 5 }}
              >
                {" "}
                <ThemeProvider theme={theme}>
                  <EmailIcon fontSize="large" color="secondary"></EmailIcon>
                  <Text color="secondary">Email</Text>
                </ThemeProvider>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
