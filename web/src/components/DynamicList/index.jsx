import React, { useState } from "react";
import { Grid, Pagination } from "@mui/material";
import { ListContainer } from "./StyledComponents";

import { DynamicCard } from "../DynamicCard";
import usePagination from "../../functions/Pagination";

export const DynamicList = ({ items }) => {
  let [page, setPage] = useState(1);
  const perPage = 10;

  const count = Math.ceil(items.length / perPage);
  const data = usePagination(items, perPage);

  const handleChange = (e, p) => {
    setPage(p);
    data.jump(p);
  };

  return (
    <ListContainer>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 10 }}
        sx={{ minHeight: "78vmin", display: "flex", justifyContent: "center" }}
      >
        {data.currentData().map((item, index) => {
          return (
            <Grid key={index}>
              <DynamicCard item={item} />
            </Grid>
          );
        })}
      </Grid>

      <Pagination
        count={count}
        size="large"
        page={page}
        onChange={handleChange}
        color="error"
        sx={{ display: "flex", justifyContent: "center", p: "10px" }}
      />
    </ListContainer>
  );
};
