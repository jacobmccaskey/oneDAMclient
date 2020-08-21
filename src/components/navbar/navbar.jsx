import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Geolocator from "./geolocator";
import AccountModal from "./AccountModals/AccountModal";
import { useStyles } from "./styles";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Popover from "@material-ui/core/Popover";
import ShopIcon from "@material-ui/icons/Shop";
import EcoIcon from "@material-ui/icons/Eco";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCart from "./shoppingCart";
import { User } from "../../Context";

export default function Navbar() {
  const context = useContext(User);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [accountModal, modalShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openPopover = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const popoverHandle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const popoverClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    context.logoutAccount();
    popoverClose();
  };

  const openModal = () => {
    modalShow(true);
  };
  const closeModal = () => {
    modalShow(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="sticky"
        className={classes.navbar}
        style={{ backgroundColor: "rgb(40,40,40)" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={handleDrawerOpen}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            oneDAM
          </Typography>
          <Geolocator />

          <Button aria-describedby={id} onClick={popoverHandle}>
            <AccountCircleIcon />
          </Button>
          <Popover
            id={id}
            open={openPopover}
            anchorEl={anchorEl}
            onClose={popoverClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            {!context.auth ? (
              <Button onClick={openModal}>Sign In</Button>
            ) : (
              <Button>My Account</Button>
            )}
            <br />
            <Button>Favorites</Button>
            <br />

            <Button>cart</Button>
            <br />
            {!context.auth ? (
              <Button>Create Profile</Button>
            ) : (
              <Button onClick={logout}>logout</Button>
            )}
          </Popover>

          <ShoppingCart />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon style={{ color: "rgb(232,232,232)" }} />
            ) : (
              <ChevronRightIcon style={{ color: "rgb(232,232,232)" }} />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/" className={classes.iconText}>
            <ListItem button key="Home">
              <ListItemIcon
                style={{
                  color: "rgb(232,232,232)",
                }}
              >
                <HomeIcon />
                <ListItemText primary="Home" />
              </ListItemIcon>
            </ListItem>
          </Link>

          <Link to="/shop" className={classes.iconText}>
            <ListItem button key="Shop">
              <ListItemIcon style={{ color: "rgb(232,232,232)" }}>
                <ShopIcon />
                <ListItemText primary="Shop" />
              </ListItemIcon>
            </ListItem>
          </Link>

          <Link to="/misson" className={classes.iconText}>
            <ListItem button key="misson">
              <ListItemIcon style={{ color: "rgb(232,232,232)" }}>
                <EcoIcon />
                <ListItemText primary="Misson" />
              </ListItemIcon>
            </ListItem>
          </Link>

          <Link to="/account" className={classes.iconText}>
            <ListItem button key="account">
              <ListItemIcon style={{ color: "rgb(232,232,232)" }}>
                <PeopleAltIcon />
                <ListItemText primary="Account" />
              </ListItemIcon>
            </ListItem>
          </Link>

          <Link to="/members" className={classes.iconText}>
            <ListItem button key="Members">
              <ListItemIcon style={{ color: "rgb(232,232,232)" }}>
                <NaturePeopleIcon />
                <ListItemText primary="Members" />
              </ListItemIcon>
            </ListItem>
          </Link>

          <Link to="/contact" className={classes.iconText}>
            <ListItem button key="Contact">
              <ListItemIcon style={{ color: "rgb(232,232,232)" }}>
                <PermContactCalendarIcon />
                <ListItemText primary="Contact Us" />
              </ListItemIcon>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <AccountModal
        accountModal={accountModal}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
}
