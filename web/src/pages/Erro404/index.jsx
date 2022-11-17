import React from "react";
import imagem404 from "../../assets/404.png";

import { Container, Imagem } from "./StyledComponents";

export const Erro404 = () => {
  return (
    <Container>
      <Imagem>
        <img src={imagem404} alt="Página não encontrada." />
      </Imagem>
    </Container>
  );
};
