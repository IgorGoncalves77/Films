import React, { useState } from "react";
import { CardMedia, CardActionArea } from "@mui/material";

import {
  Card,
  CardContent,
  Title,
  GridInformations,
  TextScore,
  TextData,
  TextDescription,
} from "./StyledComponents";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const DynamicCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <CardActionArea onClick={handleClickOpen}>
        <Dialog open={open} onClose={handleClose}>
          <GridInformations>
            <Typography>{item.title}</Typography>
            <IconButton
              aria-label="close"
              onClose={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </GridInformations>
          <DialogContent dividers>
            <GridInformations>
              <CardMedia component="img" height="300" image={item.image} />
              <Typography>{item.description}</Typography>
            </GridInformations>
          </DialogContent>
        </Dialog>

        <CardMedia component="img" height="160" image={item.movie_banner} />
        <CardContent>
          <Title>{item.title}</Title>
          <GridInformations>
            <TextScore>{item.rt_score}</TextScore>
            <TextData>{item.release_date}</TextData>
          </GridInformations>
          <TextDescription>{item.description}</TextDescription>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
