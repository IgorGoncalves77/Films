import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filmsRequest } from "../../redux/actions/filmsActions";

import { Container, NotificationContainer } from "./StyledComponents";
import { Collapse } from "@mui/material";

import { DynamicHeader } from "../../components/DynamicHeader";
import { DynamicList } from "../../components/DynamicList";
import { Notification } from "../../common/Notification";

import { searchFilms, addFilm } from "../../services/api";

export const Films = () => {
  const dispatch = useDispatch();

  const [openNotification, setOpenNotification] = useState(false);
  const [notification, setNotification] = useState("");

  const [atualizar, setAtualizar] = useState(false);

  const films = useSelector((state) => state.filmsReducer.films);
  useEffect(() => {
    dispatch(filmsRequest());
  }, [dispatch, atualizar]);

  function atualizationFilms() {
    searchFilms().then(function (data) {
      const newFilms = data;
      if (films.length === newFilms.length) {
        setOpenNotification(true);
        setNotification("Lista atualizada!");
        setTimeout(() => {
          setOpenNotification(false);
          setAtualizar(true);
        }, 4000);
      } else {
        newFilms.map((film) => {
          addFilm(film);
        });
        setOpenNotification(true);
        setNotification("Atualizando lista...");
        setTimeout(() => {
          setOpenNotification(false);
          setAtualizar(true);
        }, 4000);
      }
    });
  }

  return (
    <>
      <Container>
        <DynamicHeader
          onClickHandler={atualizationFilms}
          buttonText={"Atualizar"}
          title={"FILMS"}
        />
        <DynamicList items={films} />
        <Collapse in={openNotification}>
          <NotificationContainer>
            <Notification type={"success"} message={notification} />
          </NotificationContainer>
        </Collapse>
      </Container>
    </>
  );
};
