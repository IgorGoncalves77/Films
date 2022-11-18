import React, { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "./redux";

import { CssBaseline } from "@mui/material";

import { Films } from "./pages/Films";
import { Erro404 } from "./pages/Erro404";

export const Context = createContext({});

const App = () => {
  const { store } = createStore();

  return (
    <>
      <CssBaseline />
      <ReduxProvider store={store}>
        <Routes>
          <Route path="/" element={<Films />} />
          <Route path="*" element={<Erro404 />} />
        </Routes>
      </ReduxProvider>
    </>
  );
};

export default App;
