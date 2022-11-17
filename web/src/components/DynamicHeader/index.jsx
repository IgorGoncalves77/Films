import React from "react";
import { HeaderContainer, Title } from "./StyledComponents";
import { Button } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";

export const DynamicHeader = ({ onClickHandler, buttonText, title }) => {
  return (
    <>
      <HeaderContainer>
        <Title>{title}</Title>
        <Button
          variant="contained"
          size="small"
          color="error"
          startIcon={<AutorenewIcon />}
          onClick={onClickHandler}
        >
          {buttonText}
        </Button>
      </HeaderContainer>
    </>
  );
};
