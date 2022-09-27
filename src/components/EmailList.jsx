import React, { useState, useEffect } from "react";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./FireStoreCloud";
import { collection, orderBy, getDocs, onSnapshot } from "firebase/firestore";
import "./EmailList.css";

// ICONS
import IconButton from "@mui/material/Button";
import { Checkbox } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export default function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    getAllPost();
  }, []);

  async function getAllPost() {
    const todoEmails = collection(db, "emails");
    const unsub = onSnapshot(todoEmails, (snapshot) => {
      const post = snapshot.docs.map((elem) => ({
        ...elem.data(),
        id: elem.id,
      }));
      const sortedPost = post.sort((a, b) => b.timestamp - a.timestamp);
      setEmails(sortedPost);
    });
    return () => unsub;
  }

  return (
    <div className="email__list">
      <div className="email__list--settings">
        <div className="email__list--settings-left">
          <Checkbox className="checkbox" />
          <IconButton>
            <ArrowDropDownIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <RedoIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="icon__color--size" />
          </IconButton>
        </div>
        <div className="email__list--settings-right">
          <IconButton>
            <KeyboardArrowLeftIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon className="icon__color--size" />
          </IconButton>
          <IconButton>
            <SettingsIcon className="icon__color--size" />
          </IconButton>
        </div>
      </div>
      <div className="email__list--sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
        <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="email__list--rows">
        {emails.map((email) => (
          <EmailRow
            key={email.id}
            id={email.id}
            title={email.to}
            subject={email.subject}
            description={email.message}
            time={new Date(email.timestamp?.seconds * 1000).toLocaleString(
              "en-US",
              { timeZone: "America/Los_Angeles" }
            )}
          />
        ))}
      </div>
    </div>
  );
}
