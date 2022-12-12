import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Tab, Tabs, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import linksArray from "../../utils/NavLinks";
import DrawerComp from "./DrawerComp";

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1F1841" }}>
      <Toolbar>
        {isMatch ? (
          <>
            <Typography>FUTGOL</Typography>
            <DrawerComp>{linksArray}</DrawerComp>
            { <DrawerComp >{linksArray}</DrawerComp> }
          </>
        ) : (
          <Grid sx={{ placeItems: "center" }} container >
            <Grid item xs={4}>
              <Typography>FUTGOL</Typography>
            </Grid>

            <Grid item xs={6}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              > <a href="#ubicacion"> </a>
                {linksArray.map((linksArray, index) => (
                  <Tab key={index} label={linksArray} />
                ))}
              </Tabs>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
