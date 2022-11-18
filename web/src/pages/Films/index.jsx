import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DynamicHeader } from "../../components/DynamicHeader";
import { DynamicList } from "../../components/DynamicList";

import { filmsRequest } from "../../redux/actions/filmsActions";
import { searchFilms, addFilm } from "../../services/api";
import { Collapse } from "@mui/material";
import { Notification } from "../../common/Notification";
import { Container, NotificationContainer } from "./StyledComponents";

export const Films = () => {
  const dispatch = useDispatch();

  const [openNotification, setOpenNotification] = useState(false);
  const [notification, setNotification] = useState("");

  const [atualizar, setAtualizar] = useState(false);

  const films = useSelector((state) => state.filmsReducer.films);
  useEffect(() => {
    dispatch(filmsRequest());
  }, [dispatch, atualizar]);
  console.log(atualizar);

  async function atualizationFilms() {
    await searchFilms()
      .then(function (data) {
        const films = data;
        films.map((film) => {
          addFilm(film);
        });
      })
      .then(async ({ data }) => {
        setOpenNotification(true);
        setNotification("Lista Atualizada!");
        setTimeout(() => {
          setOpenNotification(false);
        }, 4000);
      })
      .catch((error) => {
        setOpenNotification(true);
        setNotification("Erro ao atualizar lista de filmes!");
        setTimeout(() => {
          setOpenNotification(false);
        }, 4000);
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
            <Notification type={"error"} message={notification} />
          </NotificationContainer>
        </Collapse>
      </Container>
    </>
  );
};

/*      .then(async ({ data }) => {
        setOpenNotification(true);
        setNotification("Lista Atualizada!");
        setTimeout(() => {
          setOpenNotification(false);
        }, 4000);
      })
      .catch((error) => {
        setOpenNotification(true);
        //setNotification("Erro ao atualizar lista de filmes!");

        setNotification("Lista Atualizada!");
        setTimeout(() => {
          setOpenNotification(false);
          setAtualizar(true);
        }, 4000);
      });*/
