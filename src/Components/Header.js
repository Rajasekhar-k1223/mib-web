import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { RiSettings2Line } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (url) => {
    //setAnchorEl(null);
    navigation("/" + url);
  };
  const navigation = useNavigate();
  const LogOut = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("userId", "");
    navigation("/");
  };
  const checkinguri = (url) => {
    console.log(url);
    navigation("/" + url);
  };
  return (
    <header>
      <div className="headerTitle">MIBook</div>
      <div className="headerNavBar">
        <div className="menu">
          <RiSearchLine size={20} />
          <RiSettings2Line size={20} />
          <RiMailLine
            size={20}
            onClick={() => {
              handleClose("email");
            }}
          />
          <BsFillChatDotsFill
            size={20}
            style={{ padding: "0.5rem 0rem" }}
            onClick={() => {
              handleClose("chatboxView");
            }}
          />
          <BsFillGrid3X3GapFill
            size={20}
            onClick={() => {
              handleClose("newgrid");
            }}
          />
          <MdGroups
            size={20}
            onClick={() => {
              handleClose("friendsView");
            }}
          />
        </div>
        <div className="usermenu">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <HiUserCircle size={35} color="black" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              //   onClick={handleClose}
              onClick={() => {
                handleClose("profile");
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose("settings");
              }}
            >
              Setting
            </MenuItem>
            <MenuItem onClick={LogOut}>
              <AiOutlineLogout size={15} />
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="clear"></div>
    </header>
  );
}
