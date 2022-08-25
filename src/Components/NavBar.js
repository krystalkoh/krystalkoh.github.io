import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Face2Icon from "@mui/icons-material/Face2";
import Avatar from "@mui/material/Avatar";
import { pink } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import prof from "../assets/prof.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ComputerIcon from "@mui/icons-material/Computer";
import { Computer, Face2TwoTone, RoundedCorner } from "@mui/icons-material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Navigate, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const drawerWidth = 620;
const drawerHeight = 90;

const NavBar = () => {
  const [value, setValue] = React.useState("");
  const handleChange = (event: React.SyntheticEvent, newValue: String) => {
    navigate("/" + newValue);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Grid container spacing={3} columns={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}>
          <Drawer
            sx={{
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                height: drawerHeight,
                boxSizing: "border-box",
                border: "none",
                my: 5,
                backgroundColor: "#8FA28C",
              },
            }}
            variant="permanent"
            anchor="right"
          >
            <Tabs value={value} onChange={handleChange}>
              <Tab
                sx={{
                  mr: 2,
                  color: "#D5E1DF",
                  "&:hover": {
                    borderBottom: "1px solid #D9D3DD",
                    color: "#D9D3DD",
                    // opacity: [0.9, 0.8, 0.8],
                  },
                }}
                label="Home"
                value="welcome"
                icon={<HomeIcon />}
              ></Tab>
              <Tab
                sx={{
                  color: "#D5E1DF",
                  mr: 2,
                  "&:hover": {
                    borderBottom: "1px solid #D9D3DD",
                    color: "#D9D3DD",
                  },
                }}
                label="About Me"
                value="about"
                icon={<Face2Icon />}
              ></Tab>
              <Tab
                sx={{
                  color: "#D5E1DF",
                  mr: 2,
                  "&:hover": {
                    borderBottom: "1px solid #D9D3DD",
                    color: "#D9D3DD",
                  },
                }}
                icon={<ComputerIcon />}
                value="skills"
                label="Skills"
              ></Tab>
              <Tab
                sx={{
                  color: "#D5E1DF",
                  mr: 2,
                  "&:hover": {
                    borderBottom: "1px solid #D9D3DD",
                    color: "#D9D3DD",
                  },
                }}
                icon={<LibraryBooksIcon />}
                value="projects"
                label="Projects"
              ></Tab>
              <Tab
                sx={{
                  color: "#D5E1DF",
                  mr: 2,
                  "&:hover": {
                    borderBottom: "1px solid #D9D3DD",
                    color: "#D9D3DD",
                  },
                }}
                icon={<ContactMailIcon />}
                value="contact"
                label="Contact"
              ></Tab>
            </Tabs>
          </Drawer>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;
