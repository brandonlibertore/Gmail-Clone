import React from "react";
import "./Header.css";

// ICONS
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon className="icon__color--size" />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
          className="logo__img"
        />
      </div>
      <div className="header__middle">
        <SearchIcon className="icon__color--size" />
        <input
          type="text"
          placeholder="Search mail"
          className="header__input"
        />
        <ArrowDropDownIcon className="header__input--caret icon__color--size" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon className="icon__color--size" />
        </IconButton>
        <IconButton>
          <NotificationsIcon className="icon__color--size" />
        </IconButton>
        <AccountCircleIcon
          fontSize="large"
          className="avatar__logo icon__color--size"
        />
      </div>
    </div>
  );
}
