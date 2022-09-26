import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

// ICONS
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={1}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={1} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={1} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={1} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={1} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={1} />
      <div className="sidebar__footer">
        <div className="sidebar__footer--icons">
          <IconButton>
            <PersonIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <DuoIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <PhoneIcon className="icon__color--size" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
