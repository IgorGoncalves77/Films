import React, { useState } from "react";
import { Grid } from "@mui/material";
import { ListContainer } from "./StyledComponents";
import { DynamicCard } from "../DynamicCard";
import Pagination from "@mui/material/Pagination";

import usePagination from "./Pagination";

export const DynamicList = ({ items }) => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(items.length / PER_PAGE);
  const _DATA = usePagination(items, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <ListContainer>
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
      <Grid container columns={{ xs: 4, sm: 8, md: 10 }}>
        {_DATA.currentData().map((item, index) => {
          return (
            <Grid key={index}>
              <DynamicCard item={item} />
            </Grid>
          );
        })}
      </Grid>
    </ListContainer>
  );
};
