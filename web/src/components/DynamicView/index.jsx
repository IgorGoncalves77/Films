import React, { useState } from "react";
import PropTypes from "prop-types";

import CloseIcon from "@mui/icons-material/Close";

import { CardMedia, IconButton, DialogTitle } from "@mui/material";
import {
  ViewContainer,
  ViewCard,
  CardContent,
  Title,
  GridInformations,
  TextDescription,
} from "./StyledComponents";

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export const DynamicView = ({ item, onClose }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <ViewContainer>
      <ViewCard
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {item.title}
        </BootstrapDialogTitle>
        <GridInformations>
          <CardMedia
            component="img"
            height="250"
            image={item.image}
            sx={{ p: "8px" }}
          />
          <TextDescription>{item.description}</TextDescription>
        </GridInformations>
      </ViewCard>
    </ViewContainer>
  );
};
