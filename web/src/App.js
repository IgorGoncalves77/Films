import React, { createContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "./redux";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import { ptBR } from "@mui/x-data-grid";

import { Films } from "./pages/Films";
import { Erro404 } from "./pages/Erro404";

export const Context = createContext({});

const App = () => {
  const { store } = createStore();

  const theme = createTheme(
    {
      palette: {
        primary: { main: "#064A79" },
      },
    },
    ptBR
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReduxProvider store={store}>
          <Routes>
            <Route path="/" element={<Films />} />
            <Route path="*" element={<Erro404 />} />
          </Routes>
        </ReduxProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
