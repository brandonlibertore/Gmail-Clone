import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import "./SendMail.css";

// ICON
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function SendMail() {
  const dispatch = useDispatch();

  // GOOD HOOK TO USE
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    dispatch(closeSendMessage());
  };

  return (
    <div className="send__mail">
      <div className="send__mail--header">
        <h3>New Message</h3>
        <CloseIcon
          className="send__mail--close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To:"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="send__mail--error">To is Required!</p>}
        <input
          type="text"
          placeholder="Subject:"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="send__mail--error">Subject is Required!</p>
        )}

        <input
          type="text"
          placeholder="Message:"
          className="send__mail--message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="send__mail--error">Message is Required!</p>
        )}

        <div className="send__mail--options">
          <Button
            className="send__mail--send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
