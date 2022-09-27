import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmailRow.css";

// ICONS
import IconButton from "@mui/material/Button";
import { Checkbox } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

export default function EmailRow({ title, subject, description, time, id }) {
  const navigate = useNavigate();
  return (
    <div className="email__row" onClick={() => navigate("/mail")}>
      <div className="email__row--options">
        <Checkbox className="icon__color--size" />
        <IconButton>
          <StarBorderIcon className="icon__color--size" />
        </IconButton>
        <IconButton>
          <LabelImportantIcon className="icon__color--size" />
        </IconButton>
      </div>

      <h3 className="email__row--title">{title}</h3>
      <div className="email__row--message">
        <h4>
          {subject}
          <span className="email__row--description">-{description}</span>
        </h4>
      </div>
      <p className="email__row--time">{time}</p>
    </div>
  );
}
