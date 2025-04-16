import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { Provider } from "react-redux";
import { store } from "./store/store.ts";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.ts";
import { GlobalStyle } from "./styles/globalStyles.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
