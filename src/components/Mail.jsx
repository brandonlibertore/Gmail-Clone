import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mail.css";

// ICONS
import IconButton from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PrintIcon from "@mui/icons-material/Print";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function Mail() {
  const navigate = useNavigate();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__tools--left">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <ErrorIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <DeleteIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <EmailIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <WatchLaterIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <CheckCircleIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <LabelImportantIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="icon__color--size" />
          </IconButton>
        </div>
        <div className="mail__tools--right">
          <IconButton>
            <UnfoldMoreIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <PrintIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <ExitToAppIcon className="icon__color--size" />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__body--header">
          <h2>Subject</h2>
          <LabelImportantIcon className="mail__important" />
          <p>Title</p>
          <p className="mail__time">Time</p>
        </div>

        <div className="mail__message">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut tempora
            ad reiciendis, temporibus quae et exercitationem a fugit autem quod!
            Dicta beatae aperiam autem quos est laudantium dolores, tempore
            ullam!
          </p>
        </div>
      </div>
    </div>
  );
}
