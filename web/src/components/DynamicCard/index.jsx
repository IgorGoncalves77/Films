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

import { DynamicView } from "../DynamicView";

export const DynamicCard = ({ item }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      {isModalVisible ? (
        <DynamicView item={item} onClose={() => setIsModalVisible(false)} />
      ) : null}
      <Card>
        <CardActionArea onClick={() => setIsModalVisible(true)}>
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
    </>
  );
};
