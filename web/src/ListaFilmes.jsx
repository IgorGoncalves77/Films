import React, { useState } from "react";

import { searchFilms, addFilm } from "./services/api";
import { IconButton } from "@mui/material";

export const ListaFilmes = () => {
  const goToActions = () => {
    searchFilms().then(function (data) {
      const films = data;
      films.map((film, index) => {
        console.log(film);
        addFilm(film);
      });
    });
  };

  return (
    <>
      <IconButton
        onClick={(event) => {
          goToActions();
        }}
      >
        atualizar
      </IconButton>
      ;
    </>
  );
};
