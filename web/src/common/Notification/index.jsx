import React from "react";

import { Alert } from "@mui/material";

export const Notification = (props) => {
  return <Alert severity={props.type}>{props.message}</Alert>;
};
