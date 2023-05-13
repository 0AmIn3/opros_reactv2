import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Link } from "react-router-dom";
import { Cookies } from "react-cookie";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const HedAdmin = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const cookies = new Cookies();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          sx={{ borderRadius: "20px", background: "white" }}
          position="fixed"
          open={open}
        >
          <Toolbar>
            <IconButton
              color="red"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <div className="flex justify-between w-full items-center">
              <p className="font-extralight text-[black] text-[24px]">
                Good morning, {cookies.get("name")} 👋
              </p>
              <Link onClick={() => cookies.remove("name")} to={"/admin"}>
                <img src="/img/exit.svg" alt="" />
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <p className="text-[gray] text-[14px] font-bold ml-[20px]">
            MAIN MENU
          </p>
          <List>
            <ListItem sx={{ padding: "10px 0 0px 0px" }} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    width={20}
                    className="mr-[10px]"
                    src="/img/home.svg"
                    alt=""
                  />
                </ListItemIcon>
                <p>Dashboard</p>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: "0px 0  10px 0px" }} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    width={20}
                    className="mr-[10px]"
                    src="/img/order.svg"
                    alt=""
                  />
                </ListItemIcon>
                <p>Orders</p>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: "0px 0  10px 0px" }} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    width={20}
                    className="mr-[10px]"
                    src="/img/clients.svg"
                    alt=""
                  />
                </ListItemIcon>
                <p>Clients</p>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: "0px 0  10px 0px" }} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    width={20}
                    className="mr-[10px]"
                    src="/img/car.svg"
                    alt=""
                  />
                </ListItemIcon>
                <p>Car classes</p>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: "0px 0  10px 0px" }} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    width={20}
                    className="mr-[10px]"
                    src="/img/branch.svg"
                    alt=""
                  />
                </ListItemIcon>
                <p>Branches</p>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem sx={{ padding: "0px 0  10px 0px" }} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    width={20}
                    className="mr-[10px]"
                    src="/img/settings.svg"
                    alt=""
                  />
                </ListItemIcon>
                <p>Settings</p>
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Main open={open}></Main>
      </Box>
    </>
  );
};

export default HedAdmin;
