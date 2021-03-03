import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Popover,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NestedMenuItem from "material-ui-nested-menu-item"; //Nested Menu Item

import { render } from "react-dom";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import "./AppBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    // color: "green",
  },
  backgroundColor: {
    backgroundColor: "green",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuPosition, setMenuPosition] = useState(null);

  //anchors menu tab
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // closes tab on click
  const handleClose = () => {
    setAnchorEl(null);
  };

  // opens nested tabs
  const handleRightClick = (event: React.MouseEvent) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  // closes nested tabs
  const closeAllTabs = () => {
    handleItemClick();
    handleClose();
  };

  // scrolls to bottom of page and closes tab
  const scrollToBottomClose = () => {
    scroll.scrollToBottom();
    handleClose();
  };

  const handleItemClick = (event: React.MouseEvent) => {
    setMenuPosition(null);
  };

  const componentMounted = () => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  };

  const componentUnmounted = () => {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  };

  useEffect(() => {
    document.addEventListener("click", componentMounted);

    return function cleanup() {
      document.removeEventListener("unclick", componentUnmounted);
    };
  }, []);

  return (
    <AppBar
      position="static"
      color={classes.backgroundColor}
      className="appBar"
    >
      <Toolbar>
        <div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Link
                activeClass="active"
                className="test1"
                to="test1"
                spy={true}
                smooth={true}
                isDynamic={true}
                duration={500}
                onClick={handleClose}
              >
                About Us
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              Videos (Under Construction)
            </MenuItem>

            <MenuItem>
              <Link
                activeClass="active"
                className="test2"
                to="test2"
                spy={true}
                smooth={true}
                isDynamic={true}
                duration={500}
                onClick={handleClose}
              >
                Gallery
              </Link>
            </MenuItem>

            <MenuItem>
              <Link isDynamic={true} onClick={scrollToBottomClose}>
                Wind Map
              </Link>
            </MenuItem>

            <NestedMenuItem
              label="Services (Under Construction)"
              parentMenuOpen={!!menuPosition}
              onClick={handleRightClick}
            >
              <MenuItem onClick={closeAllTabs}>
                Residential/ Commercial Real Estate
              </MenuItem>
              <MenuItem onClick={closeAllTabs}>
                Construction Progression
              </MenuItem>
              <MenuItem onClick={closeAllTabs}>Land/ Property</MenuItem>
              <MenuItem onClick={closeAllTabs}>
                (Future) Overhead Inspections
              </MenuItem>
            </NestedMenuItem>
          </Menu>
        </div>

        <Typography variant="h6" className={classes.title}>
          Texas Drone Imaging
        </Typography>
        <div className="icon-row">
          <div className="icon-row">
            <a href="tel:4699102078">
              <div class="icon" id="icon-1">
                <PhoneIcon color="secondary" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/texasdroneimaging/"
              target="_blank"
            >
              <div class="icon" id="icon-2">
                <InstagramIcon color="secondary" />
              </div>
            </a>

            <a href="mailto: saul@texasdroneimaging.net">
              <div class="flex icon" id="icon-3">
                <EmailIcon color="secondary" />
              </div>
            </a>
          </div>
        </div>
        {/* <div class="flex icon" id="icon-3">
          <Button href="mailto: saul@texasdroneimaging.net" color="inherit">
            Contact
          </Button>
        </div> */}
      </Toolbar>
    </AppBar>
  );
}
